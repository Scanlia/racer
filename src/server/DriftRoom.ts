// Server-authoritative drift room (Part 7): 8 players, 60 Hz shared physics,
// 20 Hz patches. The server never loads a model — the text grid is the world.
import { Room, Client } from '@colyseus/core'
import { Schema, MapSchema, type } from '@colyseus/schema'
import { makeCarState, stepCar, collideCarPair, CarState, InputFrame } from '../shared/physics'
import { TUNING, PHYS_DT } from '../shared/constants'
import { parseMap, ParsedMap, Zone } from '../shared/map'
import { makeScore, stepScore, DriftScore } from '../shared/scoring'
import { CARS, carDef } from '../shared/cars'
import { makeCopBrain, stepCopBrain, onCopHit, copSpawn, CopBrain, PIN_TIME, ARREST_IMMUNITY } from '../shared/police'
import { Interrogation, InterrogationFacts, CHAT_TIME_LIMIT_S } from './interrogation'

const COP_ID = 'npc:cop'

const ZONE_NAMES: Record<Zone, string> = {
  v: 'the village lane, past the houses',
  e: 'the narrow lane between the hedges',
  p: 'the open road by the fields',
  w: 'the forest road',
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
  score: DriftScore
  queue: InputFrame[]
  lastInput: InputFrame
  lastSeen: number // ms — last input packet; drives the stale-client sweep
}

// A cleanly closed tab fires onLeave via the socket close. A killed browser, a slept
// laptop, or a dropped network can leave a half-open socket whose close never arrives,
// stranding a ghost car on the road (and the cop will happily pull one over). Sweep
// anyone who has stopped talking to us.
const STALE_MS = 20000

const COP_MODE_CODE: Record<CopBrain['mode'], number> = { patrol: 0, pursuit: 1, interrogate: 2, cooldown: 3 }

export class DriftRoom extends Room<DriftState> {
  maxClients = 8
  private sims = new Map<string, Sim>()
  private map!: ParsedMap
  private copBrain!: CopBrain
  private copCar!: CarState
  private interrogation: Interrogation | null = null
  private frozenId = '' // player frozen mid-interrogation

  onCreate(): void {
    this.setState(new DriftState())
    // 30 Hz. The client interpolates 120ms behind, so at 20 Hz that buffer was only
    // 2.4 patches deep and ordinary jitter emptied it, leaving remotes to freeze and
    // then snap. At 30 Hz it is 3.6 deep for a few hundred bytes/s more per client,
    // which matters most for the cop: he is the one remote everybody is watching.
    this.setPatchRate(33) // 30 Hz
    this.map = parseMap()

    // --- the cop: a PlayerState like any other, so clients render him via the
    // existing remote-interpolation path; the bot/copMode flags do the rest ---
    this.copBrain = makeCopBrain(this.map)
    const w0 = copSpawn(this.copBrain)
    this.copCar = makeCarState(w0.x, w0.z, w0.yaw)
    const cop = new PlayerState()
    cop.bot = 1
    cop.name = 'MILLBROOK POLICE'
    cop.x = w0.x
    cop.z = w0.z
    this.state.players.set(COP_ID, cop)

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

    this.setSimulationInterval(() => this.tick(), 1000 / 60)
  }

  onJoin(client: Client, options: { name?: string; car?: number; sx?: number; sz?: number }): void {
    const p = new PlayerState()
    const idx = this.sims.size // players only — the cop occupies a players slot but no sim
    p.x = typeof options?.sx === 'number' && isFinite(options.sx) ? options.sx : this.map.spawn.x + (idx % 4) * 5 - 7.5
    p.z = typeof options?.sz === 'number' && isFinite(options.sz) ? options.sz : this.map.spawn.z + Math.floor(idx / 4) * 5
    p.yaw = this.map.spawn.yaw
    p.car = Math.max(0, Math.min(CARS.length - 1, Math.floor(options?.car ?? 0)))
    p.name = String(options?.name ?? 'driver').slice(0, 16)
    this.state.players.set(client.sessionId, p)

    const car = makeCarState(p.x, p.z, p.yaw)
    this.sims.set(client.sessionId, {
      car,
      score: makeScore(),
      queue: [],
      lastInput: { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true },
      lastSeen: Date.now(),
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
      // input the moment the chat opens, so input silence here means "talking to
      // Bram", not "dead socket". Sweeping them booked every stop 20s into a 540s
      // conversation. The chat clock still bounds this (timeLeft() <= 0 forces a
      // verdict in tick()), and onLeave still books anyone who really disconnects.
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
    if (this.copBrain.targetId === id) {
      this.copBrain.targetId = ''
      this.copBrain.mode = 'cooldown'
      this.copBrain.cooldownT = 3
      this.copBrain.pinT = 0
    }
    this.state.players.delete(id)
    this.sims.delete(id)
  }

  private tick(): void {
    if (this.copBrain.tick % 60 === 0) this.sweepStale()
    for (const [, sim] of this.sims) {
      let input = sim.queue.length ? sim.queue.shift()! : sim.lastInput
      // Catch up if the client got ahead (packets are batched). Every backlog frame
      // has to be STEPPED. This used to re-step the same `input` each pass and shift
      // the queued frames straight into lastInput without simulating them, then
      // publish a discarded frame's seq as lastSeq. The client prunes its replay
      // buffer against that seq, so it dropped inputs the server never applied and
      // its prediction diverged with no way to recover. Measured 12.16m apart after
      // 500 bursted inputs, which is far past reconcile()'s 4m snap threshold, so the
      // car teleports. Only bites when packets arrive in bursts, which is why it
      // looked like the car got glitchier the longer you drove.
      let extra = 0
      while (sim.queue.length > 6 && extra < 3) {
        stepCar(sim.car, input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
        stepScore(sim.score, sim.car, PHYS_DT)
        input = sim.queue.shift()!
        extra++
      }
      sim.lastInput = input
      stepCar(sim.car, input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
      stepScore(sim.score, sim.car, PHYS_DT)
    }

    // car-vs-car collisions (authoritative, symmetric)
    const cars = [...this.sims.values()]
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        collideCarPair(cars[i].car, cars[j].car)
      }
    }

    // --- cop ---
    const playerCars = new Map<string, CarState>()
    for (const [id, sim] of this.sims) playerCars.set(id, sim.car)
    const res = stepCopBrain(this.copBrain, this.copCar, playerCars, PHYS_DT)
    if (this.copBrain.mode !== 'interrogate') {
      stepCar(this.copCar, res.input, TUNING, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
    }

    // cop-vs-player collisions + aggro (skip the frozen pair)
    for (const [id, sim] of this.sims) {
      if (id === this.frozenId && this.copBrain.mode === 'interrogate') continue
      const impact = collideCarPair(this.copCar, sim.car)
      if (impact > 0 && onCopHit(this.copBrain, id, impact, this.copCar.speed)) {
        this.broadcast('cop:aggro', { id }) // clients: siren chirp → loop, lights on
      }
    }

    // pin → interrogation
    if (res.pinnedNow && this.copBrain.pinT >= PIN_TIME && !this.interrogation) {
      this.startInterrogation(this.copBrain.targetId)
    }

    // freeze the interrogated pair every tick (authority — prediction obeys via reconcile)
    if (this.copBrain.mode === 'interrogate') {
      const sim = this.sims.get(this.frozenId)
      if (sim) {
        sim.car.vx = 0
        sim.car.vz = 0
        sim.car.yawRate = 0
        sim.queue.length = 0
      }
      this.copCar.vx = 0
      this.copCar.vz = 0
      this.copCar.yawRate = 0
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

    const c = this.state.players.get(COP_ID)
    if (c) {
      c.x = this.copCar.x
      c.z = this.copCar.z
      c.yaw = this.copCar.yaw
      c.vx = this.copCar.vx
      c.vz = this.copCar.vz
      c.speed = this.copCar.speed
      c.slip = this.copCar.slipAngle
      c.rpm = this.copCar.rpm
      c.copMode = COP_MODE_CODE[this.copBrain.mode]
      c.pinT = this.copBrain.pinT
      c.copTarget = this.copBrain.targetId
      c.headlights = true
    }
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

  private startInterrogation(targetId: string): void {
    const sim = this.sims.get(targetId)
    const p = this.state.players.get(targetId)
    const client = this.clients.find((cl) => cl.sessionId === targetId)
    if (!sim || !p || !client) {
      this.copBrain.mode = 'cooldown'
      this.copBrain.cooldownT = 5
      return
    }
    this.copBrain.mode = 'interrogate'
    this.frozenId = targetId
    const facts: InterrogationFacts = {
      impactSpeedKmh: this.copBrain.hitSpeed * 3.6,
      hitWhileParked: this.copBrain.hitWhileParked,
      chaseDurationS: this.copBrain.chaseT,
      playerTopSpeedKmh: this.copBrain.targetTopSpeed * 3.6,
      priorOffenses: this.copBrain.offenses.get(targetId) ?? 1,
      sessionScore: p.score,
      playerCarColor: carDef(p.car).colour,
      playerCarKind: carDef(p.car).label.toLowerCase(),
      playerName: p.name,
      locationNow: this.zoneNameAt(sim.car.x, sim.car.z),
      escapeAttempted: this.copBrain.chaseT > 3,
    }
    const active = new Interrogation(facts)
    this.interrogation = active
    active
      .open()
      .then((turn) => {
        if (this.interrogation !== active) return // resolved while Bram was thinking
        client.send('cop:open', { ...turn, timeLimit: CHAT_TIME_LIMIT_S, score: p.score })
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
      this.copBrain.immunity.set(this.frozenId, ARREST_IMMUNITY)
    }
    // The stop just spent up to 9 minutes with no input packets. Without this the
    // player is already 9 minutes "stale" the instant the sweep exemption lifts and
    // the next sweep drops them a second after being released.
    if (sim) sim.lastSeen = Date.now()
    this.broadcast('cop:verdict', { id: this.frozenId, verdict })
    this.interrogation = null
    this.frozenId = ''
    this.copBrain.mode = 'cooldown'
    this.copBrain.cooldownT = 6
    this.copBrain.targetId = ''
    this.copBrain.pinT = 0
  }
}
