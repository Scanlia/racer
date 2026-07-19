// Server-authoritative drift room (Part 7): 8 players, 60 Hz shared physics,
// 20 Hz patches. The server never loads a model — the text grid is the world.
import { Room, Client } from '@colyseus/core'
import { Schema, MapSchema, type } from '@colyseus/schema'
import { makeCarState, stepCar, collideCarPair, CarState, InputFrame } from '../shared/physics'
import { TUNING, PHYS_DT, Tuning } from '../shared/constants'
import { parseMap, ParsedMap, Zone } from '../shared/map'
import { makeScore, stepScore, DriftScore } from '../shared/scoring'
import { CARS, DEFAULT_CAR, carDef, carTuning, isPlayable } from '../shared/cars'
import { makeCopBrain, stepCopBrain, onCopHit, joinPursuit, copSpawn, CopBrain, PIN_TIME, ARREST_IMMUNITY, COP_COUNT } from '../shared/police'
import { makeTrafficBrains, stepTrafficBrain, trafficSpawn, TrafficBrain, TRAFFIC_COUNT } from '../shared/traffic'
import { buildRoadGraph, RoadGraph } from '../shared/roadgraph'
import { Interrogation, InterrogationFacts, CHAT_TIME_LIMIT_S } from './interrogation'
import { officerAt } from './officers'
// Civilian cars, in menu order — deliberately not the red estate most players drive,
// so a pair of headlights in the distance reads as "someone else" at a glance.
const TRAFFIC_CARS = [3, 1, 6, 7, 2, 4] // no 5 — the coupe is a wreck, it doesn't drive

const ZONE_NAMES: Record<Zone, string> = {
  v: 'the village lane, past the houses',
  e: 'the narrow lane between the hedges',
  p: 'the open road by the fields',
  w: 'the forest road',
  h: 'the highway at the edge of the village',
}

export class PlayerState extends Schema {
  @type('float32') x = 0
  @type('float32') z = 0
  @type('float32') yaw = 0
  @type('float32') vx = 0
  @type('float32') vz = 0
  @type('float32') yawRate = 0
  @type('float32') speed = 0
  @type('float32') slip = 0
  @type('float32') rpm = 900
  @type('uint8') gear = 0
  @type('boolean') brake = false
  @type('boolean') handbrake = false
  @type('boolean') headlights = true
  @type('boolean') drifting = false
  @type('uint8') car = 0 // index into shared/cars.ts CARS
  @type('uint32') score = 0
  @type('uint32') lastSeq = 0
  @type('string') name = ''
  // --- police (only meaningful on the npc:cop entry) ---
  @type('uint8') bot = 0 // 1 = the cop
  @type('uint8') copMode = 0 // 0 patrol · 1 pursuit · 2 interrogate · 3 cooldown
  @type('float32') pinT = 0 // 0..PIN_TIME — drives the pin ring on every client
  @type('string') copTarget = ''
}

export class DriftState extends Schema {
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>()
}

interface Sim {
  car: CarState
  tuning: Tuning // merged per-car physics — must match what the client predicts with
  score: DriftScore
  queue: InputFrame[]
  lastInput: InputFrame
  lastSeen: number // ms — last input packet; drives the stale-client sweep
  lastReset: number // ms — rate-limits the R key so it can't be used as a free teleport
}

// A cleanly closed tab fires onLeave via the socket close. A killed browser, a slept
// laptop, or a dropped network can leave a half-open socket whose close never arrives,
// stranding a ghost car on the road (and the cop will happily pull one over). Sweep
// anyone who has stopped talking to us.
const STALE_MS = 20000
const RESET_COOLDOWN_MS = 3000 // matches the client's own guard

const COP_MODE_CODE: Record<CopBrain['mode'], number> = { patrol: 0, pursuit: 1, interrogate: 2, cooldown: 3 }

interface Unit {
  brain: CopBrain
  car: CarState
}

export class DriftRoom extends Room<DriftState> {
  maxClients = 8
  private sims = new Map<string, Sim>()
  private map!: ParsedMap
  private graph!: RoadGraph
  private cops: Unit[] = []
  private traffic: { brain: TrafficBrain; car: CarState; tuning: Tuning }[] = []
  private interrogation: Interrogation | null = null
  private frozenId = '' // player frozen mid-interrogation
  private interrogatorId = '' // which unit is holding the stop

  onCreate(): void {
    this.setState(new DriftState())
    // 30 Hz. The client interpolates INTERP_DELAY behind, so at 20 Hz that buffer
    // was only ~2.4 patches deep and ordinary jitter emptied it, leaving remotes to
    // freeze and then snap. At 30 Hz it is ~3.6 deep for a few hundred bytes/s more
    // per client, which matters most for the police everyone is watching.
    this.setPatchRate(33) // 30 Hz
    this.map = parseMap()
    // One network for the whole room. Every AI driver routes over the same graph, so
    // it is built once and handed to each brain rather than rebuilt per car.
    this.graph = buildRoadGraph(this.map)

    // --- the shift: three units, one officer each, spread over the network.
    // Each is a PlayerState like any other, so clients render them via the existing
    // remote-interpolation path; the bot/copMode flags do the rest ---
    for (let i = 0; i < COP_COUNT; i++) {
      const brain = makeCopBrain(this.map, `npc:cop${i}`, i, i, COP_COUNT, this.graph)
      const w = copSpawn(brain)
      const car = makeCarState(w.x, w.z, w.yaw)
      const p = new PlayerState()
      p.bot = 1
      p.name = officerAt(i).name
      p.x = w.x
      p.z = w.z
      p.yaw = w.yaw
      this.state.players.set(brain.id, p)
      this.cops.push({ brain, car })
    }

    // --- civilian traffic: same deal, minus the light bar. bot = 2 so the client
    // renders them as ordinary cars and the leaderboard leaves them out ---
    for (const [i, brain] of makeTrafficBrains(this.map, TRAFFIC_COUNT, this.graph).entries()) {
      const w = trafficSpawn(brain)
      const car = makeCarState(w.x, w.z, w.yaw)
      const p = new PlayerState()
      p.bot = 2
      p.name = '' // no name tag floating over a car nobody's driving
      p.car = TRAFFIC_CARS[i % TRAFFIC_CARS.length]
      p.x = w.x
      p.z = w.z
      p.yaw = w.yaw
      this.state.players.set(brain.id, p)
      this.traffic.push({ brain, car, tuning: carTuning(p.car) })
    }

    this.onMessage('input', (client, frames: InputFrame[]) => {
      const sim = this.sims.get(client.sessionId)
      if (!sim || !Array.isArray(frames)) return
      for (const f of frames) {
        if (typeof f?.seq !== 'number') continue
        // clamp everything client-supplied
        sim.queue.push({
          seq: f.seq >>> 0,
          steer: Math.max(-1, Math.min(1, +f.steer || 0)),
          throttle: Math.max(0, Math.min(1, +f.throttle || 0)),
          brake: Math.max(0, Math.min(1, +f.brake || 0)),
          handbrake: !!f.handbrake,
          headlights: !!f.headlights,
        })
      }
      if (sim.queue.length > 120) sim.queue.splice(0, sim.queue.length - 120)
      sim.lastSeen = Date.now()
    })

    this.onMessage('horn', (client) => {
      this.broadcast('horn', { id: client.sessionId }, { except: client })
    })

    // R — put a stranded driver back on the road. This HAS to be authoritative: the
    // client teleporting its own car does nothing, because reconcile() rebases onto
    // server state every frame and drags it straight back into the field it came from.
    this.onMessage('reset', (client) => {
      const sim = this.sims.get(client.sessionId)
      if (!sim) return
      if (client.sessionId === this.frozenId) return // not a way out of a traffic stop
      const now = Date.now()
      if (now - sim.lastReset < RESET_COOLDOWN_MS) return
      sim.lastReset = now
      this.snapToRoad(sim)
    })

    this.onMessage('cop:chat', async (client, text: string) => {
      if (!this.interrogation || client.sessionId !== this.frozenId) return
      const typing = this.sims.get(client.sessionId)
      if (typing) typing.lastSeen = Date.now() // answering Bram is proof of life
      const active = this.interrogation
      const turn = await active.playerSays(String(text ?? ''))
      // the stop may have ended while the model was thinking (clock, disconnect)
      if (this.interrogation !== active) return
      client.send('cop:reply', turn)
      if (turn.verdict !== 'pending') this.resolveInterrogation(turn.verdict)
    })

    // the driver stops arguing and holds out their wrists — books immediately
    this.onMessage('cop:give-in', (client) => {
      if (!this.interrogation || client.sessionId !== this.frozenId) return
      client.send('cop:reply', {
        reply: 'Sensible. Out of the car, please.',
        disposition: 0,
        verdict: 'arrest',
      })
      this.resolveInterrogation('arrest')
    })

    this.setSimulationInterval(() => this.tick(), 1000 / 60)
  }

  onJoin(client: Client, options: { name?: string; car?: number; sx?: number; sz?: number; syaw?: number }): void {
    const p = new PlayerState()
    const idx = this.sims.size // players only — the cop occupies a players slot but no sim
    p.x = typeof options?.sx === 'number' && isFinite(options.sx) ? options.sx : this.map.spawn.x + (idx % 4) * 5 - 7.5
    p.z = typeof options?.sz === 'number' && isFinite(options.sz) ? options.sz : this.map.spawn.z + Math.floor(idx / 4) * 5
    p.yaw = typeof options?.syaw === 'number' && isFinite(options.syaw) ? options.syaw : this.map.spawn.yaw
    const wanted = Math.max(0, Math.min(CARS.length - 1, Math.floor(options?.car ?? 0)))
    p.car = isPlayable(wanted) ? wanted : DEFAULT_CAR // a stale saved pick can't put you in the wreck
    p.name = String(options?.name ?? 'driver').slice(0, 16)
    this.state.players.set(client.sessionId, p)

    const car = makeCarState(p.x, p.z, p.yaw)
    this.sims.set(client.sessionId, {
      car,
      tuning: carTuning(p.car),
      score: makeScore(),
      queue: [],
      lastInput: { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true },
      lastSeen: Date.now(),
      lastReset: 0,
    })
  }

  // closing the tab is not a legal defense — dropPlayer books an in-progress stop
  onLeave(client: Client): void {
    this.dropPlayer(client.sessionId)
  }

  // drop ghosts left by half-open sockets (killed browser, slept laptop, dead wifi)
  private sweepStale(): void {
    const now = Date.now()
    for (const [id, sim] of this.sims) {
      // The interrogated player is SUPPOSED to be silent: the client stops sending
      // input the moment the chat opens (main.ts gates on `!frozen`), so input
      // silence here means "talking to Bram", not "dead socket". Sweeping them
      // booked every stop STALE_MS into a CHAT_TIME_LIMIT_S conversation, whatever
      // they said. The chat clock still bounds it (timeLeft() <= 0 forces a verdict
      // in tick()), and onLeave still books anyone who genuinely disconnects.
      if (id === this.frozenId && this.interrogation) continue
      if (now - sim.lastSeen < STALE_MS) continue
      console.log(`[room] dropping stale client ${id} (${((now - sim.lastSeen) / 1000).toFixed(0)}s silent)`)
      const client = this.clients.find((cl) => cl.sessionId === id)
      this.dropPlayer(id)
      client?.leave(1001) // going away
    }
  }

  // single teardown path for both onLeave and the stale sweep
  private dropPlayer(id: string): void {
    if (id === this.frozenId && this.interrogation) this.resolveInterrogation('arrest')
    // every unit that was after them stands down, not just the one holding the stop
    for (const u of this.cops) {
      if (u.brain.targetId !== id) continue
      u.brain.targetId = ''
      u.brain.assistId = ''
      u.brain.mode = 'cooldown'
      u.brain.cooldownT = 3
      u.brain.pinT = 0
    }
    this.state.players.delete(id)
    this.sims.delete(id)
  }

  private tick(): void {
    if (this.cops[0].brain.tick % 60 === 0) this.sweepStale()
    for (const [, sim] of this.sims) {
      let input = sim.queue.length ? sim.queue.shift()! : sim.lastInput
      // Catch up if the client got ahead (packets are batched). Every backlog frame
      // has to be STEPPED. This used to re-step the same `input` on each pass and
      // shift the queued frames straight into lastInput without ever simulating
      // them, then publish a discarded frame's seq as lastSeq. The client prunes its
      // replay buffer against lastSeq, so it dropped inputs the server never applied
      // and its prediction diverged with no way back. Only bites when packets arrive
      // in bursts, so it reads as the car getting glitchier the longer you drive.
      let extra = 0
      while (sim.queue.length > 6 && extra < 3) {
        stepCar(sim.car, input, sim.tuning, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
        stepScore(sim.score, sim.car, PHYS_DT)
        input = sim.queue.shift()!
        extra++
      }
      sim.lastInput = input
      stepCar(sim.car, input, sim.tuning, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
      stepScore(sim.score, sim.car, PHYS_DT)
    }

    // car-vs-car collisions (authoritative, symmetric)
    const cars = [...this.sims.values()]
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        collideCarPair(cars[i].car, cars[j].car)
      }
    }

    // --- the shift ---
    const playerCars = new Map<string, CarState>()
    for (const [id, sim] of this.sims) playerCars.set(id, sim.car)
    const trafficCars = new Map<string, CarState>()
    for (const t of this.traffic) trafficCars.set(t.brain.id, t.car)
    // Each unit sees the OTHER units as ordinary obstacles: `players` is what a cop
    // pursues, so passing his colleagues in there would have him chase the shift.
    // Handed in as traffic, they only feed the lane-yield check, which is exactly
    // what keeps three patrol cars from stacking up nose-to-tail on the ring.
    const pinnedNow = new Map<string, boolean>()
    for (const u of this.cops) {
      const obstacles = new Map(trafficCars)
      for (const o of this.cops) if (o !== u) obstacles.set(o.brain.id, o.car)
      const res = stepCopBrain(u.brain, u.car, playerCars, PHYS_DT, obstacles)
      pinnedNow.set(u.brain.id, res.pinnedNow)
      if (u.brain.mode !== 'interrogate') {
        stepCar(u.car, res.input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
      }
    }

    // --- civilian traffic ---
    // Every car on the road is an obstacle to them, including each other and the police.
    const road = new Map(playerCars)
    for (const u of this.cops) road.set(u.brain.id, u.car)
    for (const [id, c] of trafficCars) road.set(id, c)
    for (const t of this.traffic) {
      const r = stepTrafficBrain(t.brain, t.car, road, PHYS_DT)
      stepCar(t.car, r.input, t.tuning, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
      // same horn message a player sends — clients already play it positionally
      if (r.honk) this.broadcast('horn', { id: t.brain.id })
    }
    // Traffic collisions are physical only: no aggro, no offence, no score. Running one
    // off the road is your business, not the cop's.
    for (let i = 0; i < this.traffic.length; i++) {
      const t = this.traffic[i]
      for (let j = i + 1; j < this.traffic.length; j++) collideCarPair(t.car, this.traffic[j].car)
      for (const u of this.cops) {
        if (u.brain.mode !== 'interrogate') collideCarPair(t.car, u.car)
      }
      for (const [id, sim] of this.sims) {
        if (id === this.frozenId) continue // don't shove a stopped driver mid-caution
        collideCarPair(t.car, sim.car)
      }
    }

    // patrol car vs patrol car — physical only, and never an offence against anyone
    for (let i = 0; i < this.cops.length; i++) {
      for (let j = i + 1; j < this.cops.length; j++) {
        if (this.cops[i].brain.mode === 'interrogate' || this.cops[j].brain.mode === 'interrogate') continue
        collideCarPair(this.cops[i].car, this.cops[j].car)
      }
    }

    // cop-vs-player collisions + aggro (skip the frozen pair)
    for (const u of this.cops) {
      if (u.brain.mode === 'interrogate') continue
      for (const [id, sim] of this.sims) {
        if (id === this.frozenId) continue
        const impact = collideCarPair(u.car, sim.car)
        if (impact > 0 && onCopHit(u.brain, id, impact, u.car.speed)) {
          // all units respond: one car calls it in, the shift comes running
          for (const o of this.cops) if (o !== u) joinPursuit(o.brain, id)
          this.broadcast('cop:aggro', { id }) // clients: siren chirp → loop, lights on
        }
      }
    }

    // pin → interrogation. First unit to hold a full pin gets the stop; the rest keep
    // their lights on around it until resolveInterrogation stands them down.
    if (!this.interrogation) {
      const pinner = this.cops.find((u) => pinnedNow.get(u.brain.id) && u.brain.pinT >= PIN_TIME)
      if (pinner) this.startInterrogation(pinner, pinner.brain.targetId)
    }

    // freeze the interrogated pair every tick (authority — prediction obeys via reconcile)
    const holder = this.cops.find((u) => u.brain.id === this.interrogatorId)
    if (holder && holder.brain.mode === 'interrogate') {
      const sim = this.sims.get(this.frozenId)
      if (sim) {
        sim.car.vx = 0
        sim.car.vz = 0
        sim.car.yawRate = 0
        sim.queue.length = 0
      }
      holder.car.vx = 0
      holder.car.vz = 0
      holder.car.yawRate = 0
      if (this.interrogation && this.interrogation.timeLeft() <= 0) {
        this.resolveInterrogation(this.interrogation.forceVerdict()) // clock ran out
      }
    }

    for (const [id, sim] of this.sims) {
      const p = this.state.players.get(id)
      if (!p) continue
      const input = sim.lastInput
      p.x = sim.car.x
      p.z = sim.car.z
      p.yaw = sim.car.yaw
      p.vx = sim.car.vx
      p.vz = sim.car.vz
      p.yawRate = sim.car.yawRate
      p.speed = sim.car.speed
      p.slip = sim.car.slipAngle
      p.rpm = sim.car.rpm
      p.gear = sim.car.gear
      p.brake = input.brake > 0
      p.handbrake = input.handbrake
      p.headlights = input.headlights
      p.drifting = sim.score.drifting
      p.score = Math.floor(sim.score.total)
      p.lastSeq = input.seq
    }

    for (const u of this.cops) {
      const c = this.state.players.get(u.brain.id)
      if (!c) continue
      c.x = u.car.x
      c.z = u.car.z
      c.yaw = u.car.yaw
      c.vx = u.car.vx
      c.vz = u.car.vz
      c.speed = u.car.speed
      c.slip = u.car.slipAngle
      c.rpm = u.car.rpm
      // a unit on the way to a shout is running blues even though he is still following
      // the patrol ring — the client keys the light bar and siren off copMode >= 1
      c.copMode = u.brain.assistId ? 1 : COP_MODE_CODE[u.brain.mode]
      c.pinT = u.brain.pinT
      c.copTarget = u.brain.targetId
      c.headlights = true
    }

    for (const t of this.traffic) {
      const p = this.state.players.get(t.brain.id)
      if (!p) continue
      p.x = t.car.x
      p.z = t.car.z
      p.yaw = t.car.yaw
      p.vx = t.car.vx
      p.vz = t.car.vz
      p.speed = t.car.speed
      p.slip = t.car.slipAngle
      p.rpm = t.car.rpm
      p.gear = t.car.gear
      p.brake = t.car.speed < 1 || t.brain.reverseT > 0 // brake lights when they're stopping for you
      p.headlights = true
    }
  }

  // Nearest road tile centre, aligned to one of its arms — the same rule the client
  // applies locally for instant feedback, so the two agree and reconcile has nothing
  // to correct. Breaks the drift chain but keeps banked points: being stuck in a
  // hedge is not a reason to lose your session.
  private snapToRoad(sim: Sim): void {
    let best = this.map.tiles[0]
    let bestD = Infinity
    for (const t of this.map.tiles) {
      const d = (t.x - sim.car.x) ** 2 + (t.z - sim.car.z) ** 2
      if (d < bestD) {
        bestD = d
        best = t
      }
    }
    sim.car.x = best.x
    sim.car.z = best.z
    sim.car.yaw = best.dirs.n || best.dirs.s ? 0 : Math.PI / 2
    sim.car.vx = 0
    sim.car.vz = 0
    sim.car.yawRate = 0
    sim.queue.length = 0 // queued inputs were aimed at the old position
    sim.score.chain = 0
    sim.score.multiplier = 1
  }

  private zoneNameAt(x: number, z: number): string {
    let best = this.map.tiles[0]
    let bestD = Infinity
    for (const t of this.map.tiles) {
      const d = (t.x - x) ** 2 + (t.z - z) ** 2
      if (d < bestD) {
        bestD = d
        best = t
      }
    }
    return ZONE_NAMES[best.zone] ?? 'a country lane'
  }

  private startInterrogation(unit: Unit, targetId: string): void {
    const sim = this.sims.get(targetId)
    const p = this.state.players.get(targetId)
    const client = this.clients.find((cl) => cl.sessionId === targetId)
    if (!sim || !p || !client) {
      unit.brain.mode = 'cooldown'
      unit.brain.cooldownT = 5
      return
    }
    unit.brain.mode = 'interrogate'
    this.frozenId = targetId
    this.interrogatorId = unit.brain.id
    // The collision telemetry lives on whichever unit was actually hit, which is not
    // always the one that ends up pinning — a responder joins a pursuit with an empty
    // chase clock. Read the facts off the unit that has real numbers for this driver.
    const src = this.cops.reduce((a, b) => (b.brain.targetId === targetId && b.brain.hitSpeed > a.brain.hitSpeed ? b : a), unit)
    const chaseT = Math.max(...this.cops.filter((u) => u.brain.targetId === targetId).map((u) => u.brain.chaseT), 0)
    const facts: InterrogationFacts = {
      impactSpeedKmh: src.brain.hitSpeed * 3.6,
      hitWhileParked: src.brain.hitWhileParked,
      chaseDurationS: chaseT,
      playerTopSpeedKmh: Math.max(...this.cops.map((u) => u.brain.targetTopSpeed), 0) * 3.6,
      // offences are tracked per unit; the shift shares a driver's record for the night
      priorOffenses: this.cops.reduce((n, u) => n + (u.brain.offenses.get(targetId) ?? 0), 0) || 1,
      sessionScore: p.score,
      playerCarColor: carDef(p.car).colour,
      playerCarKind: carDef(p.car).label.toLowerCase(),
      playerName: p.name,
      locationNow: this.zoneNameAt(sim.car.x, sim.car.z),
      escapeAttempted: chaseT > 3,
    }
    const officer = officerAt(unit.brain.officer)
    const active = new Interrogation(facts, officer)
    this.interrogation = active
    active
      .open()
      .then((turn) => {
        if (this.interrogation !== active) return // resolved while he was thinking
        client.send('cop:open', { ...turn, officer: officer.name, timeLimit: CHAT_TIME_LIMIT_S, score: p.score })
      })
      .catch((e) => console.warn('[cop] interrogation open failed:', e))
  }

  private resolveInterrogation(verdict: 'release' | 'arrest'): void {
    const sim = this.sims.get(this.frozenId)
    const p = this.state.players.get(this.frozenId)
    if (verdict === 'arrest' && sim && p) {
      sim.car.x = this.map.spawn.x
      sim.car.z = this.map.spawn.z
      sim.car.yaw = this.map.spawn.yaw
      sim.car.vx = 0
      sim.car.vz = 0
      sim.car.yawRate = 0
      sim.score = makeScore() // points seized
    }
    // Immunity has to land on EVERY unit, not just the one who booked them: the other
    // two are still in pursuit at this moment, and without it the nearest one re-aggros
    // on the driver the instant they are released.
    if (verdict === 'arrest') {
      for (const u of this.cops) u.brain.immunity.set(this.frozenId, ARREST_IMMUNITY)
    }
    // The stop just spent up to CHAT_TIME_LIMIT_S with no input packets. Without
    // this the player is already that stale the instant the sweep exemption lifts,
    // and the next sweep drops them a second after being released.
    const freed = this.sims.get(this.frozenId)
    if (freed) freed.lastSeen = Date.now()
    this.broadcast('cop:verdict', { id: this.frozenId, verdict })
    this.interrogation = null
    this.frozenId = ''
    this.interrogatorId = ''
    // the whole shift stands down, not just the officer at the window
    for (const u of this.cops) {
      u.brain.mode = 'cooldown'
      u.brain.cooldownT = 6
      u.brain.targetId = ''
      u.brain.assistId = ''
      u.brain.pinT = 0
    }
  }
}
