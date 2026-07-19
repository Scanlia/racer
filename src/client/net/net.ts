// Multiplayer client: Colyseus connection, client-side prediction with replay
// reconciliation for the local car, snapshot-buffer interpolation for remotes.
import { Client, Room } from 'colyseus.js'
import { CarState, InputFrame, makeCarState, copyCarState, stepCar } from '../../shared/physics'
import { TUNING, PHYS_DT, Tuning } from '../../shared/constants'
import { ParsedMap } from '../../shared/map'

export interface RemoteSnapshot {
  t: number
  x: number
  z: number
  yaw: number
  vx: number
  vz: number
  speed: number
  slip: number
}

export interface RemotePlayer {
  id: string
  name: string
  car: number
  snapshots: RemoteSnapshot[]
  brake: boolean
  handbrake: boolean
  headlights: boolean
  drifting: boolean
  score: number
  rpm: number
  // police (only meaningful when bot === 1)
  bot: number
  copMode: number // 0 patrol · 1 pursuit · 2 interrogate · 3 cooldown
  pinT: number
  copTarget: string
  // interpolated pose (written by interpolate())
  x: number
  z: number
  yaw: number
  speed: number
  slip: number
}

export interface CopTurnMsg {
  reply: string
  disposition: number // drives the happy/annoyed sting — never rendered as a number
  verdict: 'pending' | 'release' | 'arrest'
  officer?: string // sent on cop:open only — which of the three pulled you over
  timeLimit?: number
  score?: number
}

const INTERP_DELAY = 0.12 // s behind server time (~3.6 snapshots at the 30 Hz patch rate)
// How far a remote is carried on dead reckoning when the next patch is late. Long
// enough to ride out ordinary jitter, short enough that a real stall parks the car
// instead of sailing it through a wall on stale velocity.
const MAX_EXTRAPOLATION = 0.25 // s

export class NetClient {
  room: Room | null = null
  tuning: Tuning = TUNING // set to carTuning(chosenCar) by main — replay must match the server sim
  remotes = new Map<string, RemotePlayer>()
  connected = false
  myId = ''
  serverScore = 0
  onHorn: (id: string) => void = () => {}
  onCopAggro: (id: string) => void = () => {}
  onCopOpen: (turn: CopTurnMsg) => void = () => {}
  onCopReply: (turn: CopTurnMsg) => void = () => {}
  onCopVerdict: (id: string, verdict: 'release' | 'arrest') => void = () => {}
  getSpawn: (() => { x: number; z: number }) | null = null // current car pos, used to rejoin in place

  private pending: InputFrame[] = []
  private unacked: InputFrame[] = []
  private map: ParsedMap
  private scratch = makeCarState()
  private lastName = ''
  private lastCar = 0
  private reconnectTimer = 0

  constructor(map: ParsedMap) {
    this.map = map
  }

  async connect(name: string, car: number, sx?: number, sz?: number, syaw?: number): Promise<boolean> {
    this.lastName = name
    this.lastCar = car
    try {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws'
      // dev (vite on 5173/5174): standalone colyseus on :2567.
      // production: the server serves the client itself, so same origin.
      const isViteDev = location.port === '5173' || location.port === '5174'
      const endpoint = isViteDev ? `${proto}://${location.hostname || 'localhost'}:2567` : `${proto}://${location.host}`
      const client = new Client(endpoint)
      this.room = await client.joinOrCreate('drift', { name, car, sx, sz, syaw })
      this.myId = this.room.sessionId
      this.connected = true

      this.room.onMessage('horn', (msg: { id: string }) => this.onHorn(msg.id))
      this.room.onMessage('cop:aggro', (msg: { id: string }) => this.onCopAggro(msg.id))
      this.room.onMessage('cop:open', (msg: CopTurnMsg) => this.onCopOpen(msg))
      this.room.onMessage('cop:reply', (msg: CopTurnMsg) => this.onCopReply(msg))
      this.room.onMessage('cop:verdict', (msg: { id: string; verdict: 'release' | 'arrest' }) => this.onCopVerdict(msg.id, msg.verdict))
      this.room.onLeave(() => {
        // dead room: stop reconciling against its frozen state (it would pin the car
        // in place) and quietly rejoin — the dev server restarts whenever shared physics change
        this.connected = false
        this.room = null
        this.remotes.clear()
        this.unacked = []
        this.pending = []
        this.scheduleReconnect()
      })
      return true
    } catch (e) {
      console.warn('[net] offline mode:', e)
      return false
    }
  }

  private scheduleReconnect(): void {
    if (this.reconnectTimer) return
    this.reconnectTimer = window.setTimeout(async () => {
      this.reconnectTimer = 0
      const at = this.getSpawn?.()
      const ok = await this.connect(this.lastName, this.lastCar, at?.x, at?.z)
      if (!ok) this.scheduleReconnect()
    }, 2000)
  }

  // called every physics step with the input just applied locally
  sendInput(input: InputFrame): void {
    if (!this.room || !this.connected) return
    this.unacked.push({ ...input })
    if (this.unacked.length > 240) this.unacked.splice(0, this.unacked.length - 240)
    this.pending.push(input)
    if (this.pending.length >= 2) {
      this.room.send('input', this.pending)
      this.pending = []
    }
  }

  // The interrogation stops input entirely (prediction must not fight the server's
  // freeze), which to the room looks exactly like a dead socket. An empty batch
  // refreshes lastSeen without queueing a frame, so a player sitting quietly reading
  // Bram stays distinguishable from one who has gone away.
  keepalive(): void {
    if (!this.room || !this.connected) return
    this.room.send('input', [])
  }

  horn(): void {
    this.room?.send('horn')
  }

  copChat(text: string): void {
    this.room?.send('cop:chat', text)
  }

  copGiveIn(): void {
    this.room?.send('cop:give-in')
  }

  // R — the server owns the teleport; the local snap is only for instant feedback
  reset(): void {
    this.room?.send('reset')
  }

  // reconcile local prediction against the latest server state; returns true if corrected
  reconcile(car: CarState): void {
    if (!this.room || !this.connected) return
    const me = this.room.state?.players?.get?.(this.myId)
    if (!me) return
    const lastSeq: number = me.lastSeq

    // drop acknowledged inputs
    while (this.unacked.length && this.unacked[0].seq <= lastSeq) this.unacked.shift()

    // rebase: adopt server state, replay unacked inputs
    const s = this.scratch
    s.x = me.x; s.z = me.z; s.yaw = me.yaw
    s.vx = me.vx; s.vz = me.vz; s.yawRate = me.yawRate
    s.gear = me.gear; s.rpm = me.rpm
    s.shiftCut = 0; s.aLongSmooth = car.aLongSmooth
    s.slipAngle = me.slip; s.speed = me.speed
    s.slipFront = car.slipFront; s.slipRear = car.slipRear
    s.surfFL = car.surfFL; s.surfFR = car.surfFR; s.surfRL = car.surfRL; s.surfRR = car.surfRR
    s.wallHit = 0
    // hitSlide isn't in the schema; keep the locally-predicted value (collideCarKinematic
    // sets it at almost the same moment the server's pass does) rather than a stale scratch one
    s.hitSlide = car.hitSlide
    for (const input of this.unacked) {
      stepCar(s, input, this.tuning, PHYS_DT, this.map.surfaceAt, this.map.colliders, this.map.heightAt)
    }
    // smooth correction: snap only when badly wrong, else blend
    const err = Math.hypot(s.x - car.x, s.z - car.z)
    if (err > 4) {
      copyCarState(s, car)
    } else if (err > 0.05) {
      const k = 0.15
      car.x += (s.x - car.x) * k
      car.z += (s.z - car.z) * k
      let dy = s.yaw - car.yaw
      while (dy > Math.PI) dy -= Math.PI * 2
      while (dy < -Math.PI) dy += Math.PI * 2
      car.yaw += dy * k
      car.vx += (s.vx - car.vx) * k
      car.vz += (s.vz - car.vz) * k
      car.yawRate += (s.yawRate - car.yawRate) * k
    }
    this.serverScore = me.score
  }

  // pull remote snapshots from state; call once per render frame
  sample(now: number): void {
    if (!this.room) return
    const players = this.room.state?.players
    if (!players?.forEach) return
    const seen = new Set<string>()
    players.forEach((p: Record<string, never> & { x: number; z: number; yaw: number; vx: number; vz: number; speed: number; slip: number; brake: boolean; handbrake: boolean; headlights: boolean; drifting: boolean; score: number; rpm: number; car: number; name: string; bot: number; copMode: number; pinT: number; copTarget: string }, id: string) => {
      seen.add(id)
      if (id === this.myId) return
      let r = this.remotes.get(id)
      if (!r) {
        r = {
          id, name: p.name, car: p.car ?? 0, snapshots: [],
          brake: false, handbrake: false, headlights: true, drifting: false, score: 0, rpm: 900,
          bot: p.bot ?? 0, copMode: 0, pinT: 0, copTarget: '',
          x: p.x, z: p.z, yaw: p.yaw, speed: 0, slip: 0,
        }
        this.remotes.set(id, r)
      }
      const last = r.snapshots[r.snapshots.length - 1]
      if (!last || last.x !== p.x || last.z !== p.z || last.yaw !== p.yaw) {
        // vx/vz ride along so a late patch can be dead-reckoned rather than frozen
        r.snapshots.push({ t: now, x: p.x, z: p.z, yaw: p.yaw, vx: p.vx ?? 0, vz: p.vz ?? 0, speed: p.speed, slip: p.slip })
        if (r.snapshots.length > 20) r.snapshots.shift()
      }
      r.brake = p.brake
      r.handbrake = p.handbrake
      r.headlights = p.headlights
      r.drifting = p.drifting
      r.score = p.score
      r.rpm = p.rpm
      r.bot = p.bot ?? 0
      r.copMode = p.copMode ?? 0
      r.pinT = p.pinT ?? 0
      r.copTarget = p.copTarget ?? ''
    })
    for (const id of [...this.remotes.keys()]) {
      if (!seen.has(id)) this.remotes.delete(id)
    }
  }

  // write interpolated poses into each RemotePlayer
  interpolate(now: number): void {
    const target = now - INTERP_DELAY
    for (const r of this.remotes.values()) {
      const snaps = r.snapshots
      if (!snaps.length) continue
      const newest = snaps[snaps.length - 1]
      let a = snaps[0], b = newest
      for (let i = 0; i < snaps.length - 1; i++) {
        if (snaps[i].t <= target && snaps[i + 1].t >= target) {
          a = snaps[i]
          b = snaps[i + 1]
          break
        }
      }
      if (newest.t <= target) {
        // Buffer underrun: the next patch is late. Holding position and snapping
        // when it lands is exactly what reads as remotes stuttering, so carry them
        // forward on last known velocity instead.
        const ahead = Math.min(target - newest.t, MAX_EXTRAPOLATION)
        r.x = newest.x + newest.vx * ahead
        r.z = newest.z + newest.vz * ahead
        r.yaw = newest.yaw
      } else {
        // Clamped: a buffer spanning less than INTERP_DELAY (fresh join, reconnect,
        // or a remote that just started moving) leaves target before snaps[0], and an
        // unclamped k is negative there — it extrapolated BACKWARDS along the path,
        // which is the jump visible for a moment after every reconnect.
        const k = Math.max(0, Math.min(1, (target - a.t) / Math.max(b.t - a.t, 1e-4)))
        r.x = a.x + (b.x - a.x) * k
        r.z = a.z + (b.z - a.z) * k
        let dy = b.yaw - a.yaw
        while (dy > Math.PI) dy -= Math.PI * 2
        while (dy < -Math.PI) dy += Math.PI * 2
        r.yaw = a.yaw + dy * k
      }
      r.speed = newest.speed
      r.slip = newest.slip
    }
  }
}
