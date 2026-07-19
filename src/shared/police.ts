// Police AI (Part 7): the cop is just another CarState driven by a controller
// that emits ordinary InputFrames — same physics, same netcode path as a player.
// Server-only stepping; clients render him as a remote player with extra flags.
import { CarState, InputFrame } from './physics'
import { ParsedMap, RoadTile, dirtCenterlinePoint } from './map'
import { TILE } from './constants'

export type CopMode = 'patrol' | 'pursuit' | 'interrogate' | 'cooldown'

export interface Waypoint { x: number; z: number }

export interface CopBrain {
  mode: CopMode
  path: Waypoint[] // lane-offset patrol ring built from map.loopOrder
  wpIndex: number
  targetId: string // pursuit / interrogation target
  pinT: number // 0..PIN_TIME accumulated pin seconds
  disengageT: number // s target has been out of range
  cooldownT: number // s remaining before patrol resumes aggro checks
  stuckT: number // s of no progress
  stuckTries: number // reverse attempts — alternates the steer lock
  reverseT: number // s remaining of reverse-recovery
  wedgeT: number // s since he last actually moved — arms the unwedge
  lastX: number // last position that counted as progress
  lastZ: number
  tick: number
  // per-player memory: session offense counts (feeds interrogation facts + opening disposition)
  offenses: Map<string, number>
  immunity: Map<string, number> // player id → seconds of post-arrest immunity remaining
  // pursuit telemetry for the interrogation facts block
  chaseT: number
  targetTopSpeed: number
  hitSpeed: number
  hitWhileParked: boolean
}

export const PIN_TIME = 3 // s pinned before interrogation
export const PIN_DIST = 12.0 // m — he's got you boxed in, not touching bumpers
export const COP_STOP_V = 3 // m/s — allowance ON TOP of the target's speed (see the pin gate)
export const TARGET_STOP_V = 3.5 // 12.6 km/h — a slow roll still counts as pulled over
export const PIN_DECAY = 0.6 // pinT bleed-off per second when the hold breaks (was 2/s,
// which wiped several seconds of progress on any wobble and demanded a dead stop)
export const AGGRO_IMPULSE = 3.5 // m/s impact speed from collideCarPair to trigger pursuit
export const DISENGAGE_DIST = 150
export const DISENGAGE_TIME = 10
export const ARREST_IMMUNITY = 120 // s
export const UNWEDGE_TIME = 12 // s wedged with someone nearby before he's lifted back onto the ring
export const UNWEDGE_UNSEEN = 4 // ...but if nobody's near enough to see it, don't make them wait
export const UNSEEN_DIST = 70 // m — beyond this the teleport is nobody's business
export const WEDGE_PROGRESS = 6 // m of real travel that counts as "he's moving again"

const PATROL_SPEED = 13 // m/s ≈ 47 km/h
const PURSUIT_SPEED = 46 // just under player maxSpeed; rubber band does the rest
const LANE_OFFSET = 2.1 // m right of centerline

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)
const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2
  while (a < -Math.PI) a += Math.PI * 2
  return a
}

const TILE_SAMPLES = 5 // per tile — corners are quarter arcs, so straight-lining cuts them

// Build the patrol ring from the road's real centerline, offset to the driving lane.
// Right-of-travel = (cos h, -sin h) for heading h in our (sin, cos) forward frame.
//
// `dirtCenterlinePoint` is named for the dirt section but is generic tile geometry:
// with S_AMP at 0 it returns a dead-straight line through straights and a quarter
// arc through corners — i.e. the actual road, on every surface. Sampling it beats
// tile-center + midpoint, which cuts every corner diagonally and throws the cop
// into the hedge at patrol speed. T/cross tiles have >2 arms and no single arc, so
// they keep the center+midpoint treatment.
export function buildPatrolPath(map: ParsedMap): Waypoint[] {
  const tiles: RoadTile[] = map.loopOrder
  const out: Waypoint[] = []
  const n = tiles.length
  const offset = (x: number, z: number, h: number): Waypoint => ({
    x: x + Math.cos(h) * LANE_OFFSET,
    z: z - Math.sin(h) * LANE_OFFSET,
  })
  for (let i = 0; i < n; i++) {
    const t = tiles[i]
    const next = tiles[(i + 1) % n]
    const h = Math.atan2(next.x - t.x, next.z - t.z)

    if (t.piece === 'straight' || t.piece === 'corner') {
      // the centerline's own u direction is arbitrary — walk it whichever way
      // actually heads toward the next tile
      const [x0, z0] = dirtCenterlinePoint(t, 0)
      const [x1, z1] = dirtCenterlinePoint(t, 1)
      const forward = dist(x1, z1, next.x, next.z) <= dist(x0, z0, next.x, next.z)
      for (let k = 0; k < TILE_SAMPLES; k++) {
        const s = (k + 0.5) / TILE_SAMPLES
        const u = forward ? s : 1 - s
        const [px, pz] = dirtCenterlinePoint(t, u)
        // local tangent, so the lane offset stays perpendicular through the curve
        const [qx, qz] = dirtCenterlinePoint(t, clamp(forward ? u + 0.06 : u - 0.06, 0, 1))
        const th = Math.atan2(qx - px, qz - pz)
        out.push(offset(px, pz, th))
      }
      continue
    }

    out.push(offset(t.x, t.z, h))
    // midpoint waypoint keeps pure pursuit honest across 15.5 m tiles
    out.push(offset((t.x + next.x) / 2, (t.z + next.z) / 2, h))
  }
  return out
}

// Where the cop starts his shift — on the ring, ALREADY FACING along it. Spawning
// him at yaw 0 points him at whatever the map's +z happens to be, which is usually
// a hedge, and he opens the session by reversing out of a garden.
export function copSpawn(brain: CopBrain): { x: number; z: number; yaw: number } {
  const a = brain.path[0]
  const b = brain.path[1 % brain.path.length]
  return { x: a.x, z: a.z, yaw: Math.atan2(b.x - a.x, b.z - a.z) }
}

export function makeCopBrain(map: ParsedMap): CopBrain {
  return {
    mode: 'patrol',
    path: buildPatrolPath(map),
    wpIndex: 0,
    targetId: '',
    pinT: 0,
    disengageT: 0,
    cooldownT: 0,
    stuckT: 0,
    stuckTries: 0,
    reverseT: 0,
    wedgeT: 0,
    lastX: 0,
    lastZ: 0,
    tick: 0,
    offenses: new Map(),
    immunity: new Map(),
    chaseT: 0,
    targetTopSpeed: 0,
    hitSpeed: 0,
    hitWhileParked: false,
  }
}

// steer toward a world point; returns shaped steer input in -1..1
function steerToward(cop: CarState, px: number, pz: number, gain = 2.2): number {
  const heading = Math.atan2(px - cop.x, pz - cop.z)
  const err = wrapAngle(heading - cop.yaw)
  // reversing flips steering geometry
  const dir = cop.speed < -0.5 ? -1 : 1
  return clamp(err * gain * dir, -1, 1)
}

function dist(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz)
}

// Pure pursuit aims at a point a speed-scaled distance DOWN the path, never at the
// next waypoint: the samples are ~3 m apart, so aiming at the nearest one is a 0.2 s
// lookahead at patrol speed — the cop saws at the wheel and washes wide out of every
// corner. Roughly a second of travel makes him track the ring cleanly at 47 km/h.
function pointAhead(brain: CopBrain, cop: CarState, ahead: number): Waypoint {
  const n = brain.path.length
  let acc = 0
  let px = cop.x, pz = cop.z
  for (let k = 0; k < 30; k++) {
    const w = brain.path[(brain.wpIndex + k) % n]
    acc += dist(px, pz, w.x, w.z)
    if (acc >= ahead) return w
    px = w.x
    pz = w.z
  }
  return brain.path[(brain.wpIndex + 29) % n]
}

// throttle/brake toward a target speed. Braking below walking pace is suppressed:
// brake past standstill means REVERSE in this physics, so a hard stop would otherwise
// trundle him backwards down the lane.
function speedControl(cop: CarState, target: number): { throttle: number; brake: number } {
  const err = target - cop.speed
  if (err > 0.5) return { throttle: clamp(err / 6, 0.25, 1), brake: 0 }
  // /4 not /10: a 2.6 m/s overspeed used to ask for 26% brake, which is a coast —
  // he'd arrive at corners 10 km/h hot and understeer straight into the verge
  if (err < -1 && cop.speed > 1) return { throttle: 0, brake: clamp(-err / 4, 0.3, 1) }
  return { throttle: err > 0 ? 0.15 : 0, brake: 0 } // coast rather than creep over target
}

export interface CopStepResult {
  input: InputFrame
  pinnedNow: boolean // pin condition held this step
}

// One brain step. `players` = live sims (id → CarState). `civilians` = traffic cars
// he must not rear-end on patrol. Mutates brain. Pure of Math.random.
export function stepCopBrain(
  brain: CopBrain,
  cop: CarState,
  players: Map<string, CarState>,
  dt: number,
  civilians?: CarState[],
): CopStepResult {
  brain.tick++
  for (const [id, t] of brain.immunity) {
    const left = t - dt
    if (left <= 0) brain.immunity.delete(id)
    else brain.immunity.set(id, left)
  }

  const input: InputFrame = {
    seq: brain.tick,
    steer: 0,
    throttle: 0,
    brake: 0,
    handbrake: false,
    headlights: true,
  }
  let pinnedNow = false

  if (brain.mode === 'interrogate') {
    // frozen: the room zeroes velocities; brain just idles
    return { input, pinnedNow: false }
  }

  if (brain.mode === 'cooldown') {
    brain.cooldownT -= dt
    if (brain.cooldownT <= 0) brain.mode = 'patrol'
  }

  // --- wedge watchdog ---
  // Measured on REAL DISPLACEMENT, not the waypoint index. The index is worthless
  // here: `reached()` also accepts a waypoint that's merely *behind* him, so a cop
  // spun around against a wall chews through waypoints without moving an inch and
  // resets the timer forever — which is exactly how he stayed stuck. This block sits
  // ahead of the reverse-recovery return so it keeps ticking during recovery too.
  // Nearest player: gates both the "is anyone watching" teleport and the hold check.
  let nearest = Infinity
  for (const t of players.values()) nearest = Math.min(nearest, dist(cop.x, cop.z, t.x, t.z))
  // Skipped whenever he's SUPPOSED to be stationary — mid-pin, or crawling the last
  // few metres onto a stopped target. Standing still there is the job, not a wedge;
  // without this he teleports away in the middle of pulling you over.
  // Narrow on purpose: only a genuine pin approach counts — close to a target that is
  // ALREADY slow. Keying it off distance alone (PIN_DIST*3 = 27m) would exempt a cop
  // wedged anywhere near a fleeing driver and hand back the stuck-forever bug.
  const tgt = brain.mode === 'pursuit' ? players.get(brain.targetId) : undefined
  const holding = brain.pinT > 0 || (!!tgt && nearest < PIN_DIST + 4 && Math.abs(tgt.speed) < TARGET_STOP_V)
  if (holding) {
    brain.wedgeT = 0
    brain.lastX = cop.x
    brain.lastZ = cop.z
  } else {
    if (dist(cop.x, cop.z, brain.lastX, brain.lastZ) > WEDGE_PROGRESS) {
      brain.lastX = cop.x
      brain.lastZ = cop.z
      brain.wedgeT = 0
    } else {
      brain.wedgeT += dt
    }
    // a teleport nobody witnesses is free; one in front of a player is jarring, so
    // give the reverse-recovery longer to work it out while someone is watching
    if (brain.wedgeT > (nearest > UNSEEN_DIST ? UNWEDGE_UNSEEN : UNWEDGE_TIME)) {
      const n0 = brain.path.length
      let best = 0
      let bestD = Infinity
      for (let k = 0; k < n0; k++) {
        const d = dist(cop.x, cop.z, brain.path[k].x, brain.path[k].z)
        if (d < bestD) { bestD = d; best = k }
      }
      const a = brain.path[best]
      const b = brain.path[(best + 1) % n0]
      cop.x = a.x
      cop.z = a.z
      cop.yaw = Math.atan2(b.x - a.x, b.z - a.z)
      cop.vx = 0
      cop.vz = 0
      cop.yawRate = 0
      brain.wpIndex = (best + 1) % n0
      brain.lastX = cop.x
      brain.lastZ = cop.z
      brain.wedgeT = 0
      brain.stuckT = 0
      brain.reverseT = 0
    }
  }

  // --- reverse recovery ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 1 // full: brake past standstill = reverse in this physics
    // alternate the steer each attempt — repeating the same lock just re-wedges him
    const wp0 = brain.path[brain.wpIndex]
    input.steer = (brain.stuckTries % 2 === 0 ? -1 : 1) * Math.abs(steerToward(cop, wp0.x, wp0.z)) || 0.6
    return { input, pinnedNow: false }
  }
  // `holding` again: creeping onto a stopped target is under 0.7 m/s by design, and
  // without this the recovery reads it as a wedge and reverses him away from the
  // driver he's trying to pull over — he'd stall ~8 m short and never pin.
  const wantsMotion = !holding && (brain.mode === 'pursuit' || brain.mode === 'patrol' || brain.mode === 'cooldown')
  if (wantsMotion && Math.abs(cop.speed) < 0.7) {
    brain.stuckT += dt
    if (brain.stuckT > 1.6) {
      brain.reverseT = 1.8 // longer + full lock: 0.7 brake barely backed him off
      brain.stuckTries++
      brain.stuckT = 0
    }
  } else {
    brain.stuckT = 0
  }

  if (brain.mode === 'pursuit') {
    const target = players.get(brain.targetId)
    if (!target) {
      brain.mode = 'cooldown'
      brain.cooldownT = 3
      return { input, pinnedNow: false }
    }
    brain.chaseT += dt
    brain.targetTopSpeed = Math.max(brain.targetTopSpeed, Math.abs(target.speed))

    const d = dist(cop.x, cop.z, target.x, target.z)

    // disengage
    if (d > DISENGAGE_DIST) {
      brain.disengageT += dt
      if (brain.disengageT > DISENGAGE_TIME) {
        brain.mode = 'cooldown'
        brain.cooldownT = 5
        brain.targetId = ''
        return { input, pinnedNow: false }
      }
    } else brain.disengageT = 0

    // intercept point: lead the target; at close range aim the rear quarter (PIT)
    const lead = d < 10 ? 0.15 : 0.6
    let px = target.x + target.vx * lead
    let pz = target.z + target.vz * lead
    if (d < 10) {
      const tSin = Math.sin(target.yaw), tCos = Math.cos(target.yaw)
      px -= tSin * 1.4 // rear quarter, biased to the cop's side
      pz -= tCos * 1.4
      const side = Math.sign((cop.x - target.x) * tCos - (cop.z - target.z) * tSin) || 1
      px += tCos * 0.7 * side
      pz += -tSin * 0.7 * side
    }
    input.steer = steerToward(cop, px, pz, 2.6)
    const headingErr = Math.abs(wrapAngle(Math.atan2(px - cop.x, pz - cop.z) - cop.yaw))

    // rubber band: hungrier when far, politer when breathing down the neck
    const band = d > 80 ? 1.08 : d < 15 ? 0.95 : 1
    // Closing in, match the target's pace rather than the chase speed — the margin
    // tapers with distance so he settles to a crawl behind a stopped car. Without
    // this he charges a parked target at 160 km/h forever and can never pin.
    let want = PURSUIT_SPEED * band
    if (d < 25) want = Math.min(want, Math.abs(target.speed) + d * 0.35)
    // Authority over pace. Full throttle on grass with the wheel at the stop is a
    // power-slide orbit AWAY from the target (wheelspin kills rear grip, the front
    // plows, and he circles at 25 km/h forever — measured). Grass caps his speed;
    // a target far off-heading means slow down and actually come around.
    const onGrass = cop.surfRL === 'offroad' || cop.surfRR === 'offroad'
    if (onGrass) want = Math.min(want, 10)
    if (headingErr > 1.2) want = Math.min(want, 7)
    else if (headingErr > 0.6) want = Math.min(want, 16)
    const sc = speedControl(cop, want)
    input.throttle = sc.throttle
    input.brake = sc.brake
    // corner like a cop who's done this before: handbrake when the turn error is big at speed
    if (Math.abs(input.steer) > 0.85 && Math.abs(cop.speed) > 16) input.handbrake = true

    // --- pin condition ---
    // The cop's gate is RELATIVE to the target, not absolute. Pacing a rolling car he
    // drives at target.speed + a closing margin, so an absolute cap meant a driver
    // trundling at 8 km/h put the COP over the limit and the pin never armed — it
    // looked like your speed was the problem when it was his.
    if (d < PIN_DIST && Math.abs(cop.speed) < COP_STOP_V + Math.abs(target.speed) && Math.abs(target.speed) < TARGET_STOP_V) {
      brain.pinT += dt
      pinnedNow = true
      // creep against the target to hold the pin
      input.throttle = 0.12
      input.steer = steerToward(cop, target.x, target.z, 1.5)
    } else {
      brain.pinT = Math.max(0, brain.pinT - PIN_DECAY * dt)
    }
    return { input, pinnedNow }
  }

  // --- patrol / cooldown driving ---
  let wp = brain.path[brain.wpIndex]
  // Advance when reached, or when it's slipped behind him (overshot on a corner) —
  // the dirt samples sit ~3 m apart, so the radius must stay under that or he skips
  // waypoints and straight-lines off the curve he's meant to be following.
  const reached = (w: Waypoint): boolean => {
    const d = dist(cop.x, cop.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - cop.x) * Math.sin(cop.yaw) + (w.z - cop.z) * Math.cos(cop.yaw) < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp); guard++) {
    brain.wpIndex = (brain.wpIndex + 1) % brain.path.length
    wp = brain.path[brain.wpIndex]
  }
  // Curvature over a speed-scaled lookahead window, not just the next waypoint:
  // the samples sit ~3 m apart, so one-ahead is ~0.2 s of warning at patrol speed
  // and he arrives at a 7.8 m corner arc still doing 54 km/h. Roughly 1.8 s of
  // travel gives him room to brake down to a speed the corner's grip allows.
  const np = brain.path.length
  const look = clamp(Math.ceil((Math.abs(cop.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - cop.x, wp.z - cop.z)
  for (let k = 1; k <= look; k++) {
    const a = brain.path[(brain.wpIndex + k - 1) % np]
    const b = brain.path[(brain.wpIndex + k) % np]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }
  let targetSpeed = PATROL_SPEED * clamp(1 - curve * 0.3, 0.42, 1)
  // queue behind slow civilian traffic instead of shunting it down the lane
  // (pursuit doesn't take this branch — sirens mean barging is in character)
  if (civilians?.length) {
    const cFwdX = Math.sin(cop.yaw), cFwdZ = Math.cos(cop.yaw)
    for (const o of civilians) {
      const dx = o.x - cop.x, dz = o.z - cop.z
      const ahead = dx * cFwdX + dz * cFwdZ
      if (ahead < 2 || ahead > 16) continue
      if (Math.abs(dx * cFwdZ - dz * cFwdX) > 3.2) continue
      targetSpeed = Math.min(targetSpeed, ahead < 6 ? 0 : Math.abs(o.speed) * 0.9 + (ahead - 6) * 0.5)
    }
  }

  const aim = pointAhead(brain, cop, clamp(5 + Math.abs(cop.speed) * 0.85, 6, 20))
  input.steer = steerToward(cop, aim.x, aim.z)
  const sc = speedControl(cop, targetSpeed)
  input.throttle = sc.throttle
  input.brake = sc.brake
  return { input, pinnedNow: false }
}

// Called by the room when collideCarPair(cop, player) reports an impact.
export function onCopHit(brain: CopBrain, playerId: string, impactSpeed: number, copSpeed: number): boolean {
  if (brain.mode === 'interrogate') return false
  if (brain.immunity.has(playerId)) return false
  if (impactSpeed < AGGRO_IMPULSE) return false
  // Already chasing this driver: every bump of the PIT is not a fresh offence.
  // Without this the cop re-aggros on his own contact several times a chase —
  // re-firing the siren + toast, and inflating `offenses`, which feeds
  // priorOffenses into the stop and drops Bram's opening disposition to the
  // arrest floor before you've said a word.
  if (brain.mode === 'pursuit' && brain.targetId === playerId) return false // traffic nudge: horn, no lights
  brain.offenses.set(playerId, (brain.offenses.get(playerId) ?? 0) + 1)
  brain.hitSpeed = impactSpeed
  brain.hitWhileParked = Math.abs(copSpeed) < 1.5
  brain.targetId = playerId
  brain.mode = 'pursuit'
  brain.pinT = 0
  brain.disengageT = 0
  brain.chaseT = 0
  brain.targetTopSpeed = 0
  return true
}
