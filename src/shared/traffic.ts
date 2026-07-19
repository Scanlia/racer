// Civilian traffic: dumb, law-abiding cars trundling the same lane-offset ring the
// cop patrols. Same physics, same netcode path as everyone else (bot=2 on the wire).
// They yield to anything slow ahead of them, honk when buzzed, and get quietly
// lifted back onto the ring if the night wedges them somewhere embarrassing.
import { CarState, InputFrame } from './physics'
import { Waypoint } from './police'
import { TILE } from './constants'

export interface TrafficBrain {
  path: Waypoint[]
  wpIndex: number
  baseSpeed: number // m/s — each car has its own idea of a sensible pace
  tick: number
  stuckT: number
  stuckTries: number
  reverseT: number
  wedgeT: number
  lastX: number
  lastZ: number
  honkT: number // s remaining of honk cooldown (the room reads/writes this)
}

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)
const wrapAngle = (a: number) => {
  while (a > Math.PI) a -= Math.PI * 2
  while (a < -Math.PI) a += Math.PI * 2
  return a
}
const dist = (ax: number, az: number, bx: number, bz: number) => Math.hypot(ax - bx, az - bz)

const WEDGE_PROGRESS = 6 // m of real travel that counts as "moving again"
const UNWEDGE_SEEN = 14 // s wedged with a player nearby before the lift
const UNWEDGE_UNSEEN = 5 // nobody watching — don't leave a cork in the road
const UNSEEN_DIST = 70

export function makeTrafficBrain(path: Waypoint[], startIndex: number, baseSpeed: number): TrafficBrain {
  const i = ((startIndex % path.length) + path.length) % path.length
  return {
    path,
    wpIndex: i,
    baseSpeed,
    tick: 0,
    stuckT: 0,
    stuckTries: 0,
    reverseT: 0,
    wedgeT: 0,
    lastX: path[i].x,
    lastZ: path[i].z,
    honkT: 0,
  }
}

export function trafficSpawn(brain: TrafficBrain): { x: number; z: number; yaw: number } {
  const a = brain.path[brain.wpIndex]
  const b = brain.path[(brain.wpIndex + 1) % brain.path.length]
  return { x: a.x, z: a.z, yaw: Math.atan2(b.x - a.x, b.z - a.z) }
}

function steerToward(car: CarState, px: number, pz: number, gain = 2.2): number {
  const heading = Math.atan2(px - car.x, pz - car.z)
  const err = wrapAngle(heading - car.yaw)
  const dir = car.speed < -0.5 ? -1 : 1
  return clamp(err * gain * dir, -1, 1)
}

// One brain step. `others` = every other car on the road (players, cop, traffic) —
// used for the yield check. `nearestPlayer` gates the unwedge teleport. Mutates
// `car` only in the teleport branch, exactly like the cop's watchdog.
export function stepTraffic(
  brain: TrafficBrain,
  car: CarState,
  others: CarState[],
  nearestPlayer: number,
  dt: number,
): InputFrame {
  brain.tick++
  if (brain.honkT > 0) brain.honkT -= dt
  const input: InputFrame = {
    seq: brain.tick,
    steer: 0,
    throttle: 0,
    brake: 0,
    handbrake: false,
    headlights: true,
  }

  // --- wedge watchdog on real displacement (see police.ts for the rationale) ---
  if (dist(car.x, car.z, brain.lastX, brain.lastZ) > WEDGE_PROGRESS) {
    brain.lastX = car.x
    brain.lastZ = car.z
    brain.wedgeT = 0
  } else {
    brain.wedgeT += dt
  }
  if (brain.wedgeT > (nearestPlayer > UNSEEN_DIST ? UNWEDGE_UNSEEN : UNWEDGE_SEEN)) {
    const n = brain.path.length
    let best = 0
    let bestD = Infinity
    for (let k = 0; k < n; k++) {
      const d = dist(car.x, car.z, brain.path[k].x, brain.path[k].z)
      if (d < bestD) { bestD = d; best = k }
    }
    const a = brain.path[best]
    const b = brain.path[(best + 1) % n]
    car.x = a.x
    car.z = a.z
    car.yaw = Math.atan2(b.x - a.x, b.z - a.z)
    car.vx = 0
    car.vz = 0
    car.yawRate = 0
    brain.wpIndex = (best + 1) % n
    brain.lastX = car.x
    brain.lastZ = car.z
    brain.wedgeT = 0
    brain.stuckT = 0
    brain.reverseT = 0
    return input
  }

  // --- reverse recovery ---
  if (brain.reverseT > 0) {
    brain.reverseT -= dt
    input.brake = 1
    const wp0 = brain.path[brain.wpIndex]
    input.steer = (brain.stuckTries % 2 === 0 ? -1 : 1) * Math.abs(steerToward(car, wp0.x, wp0.z)) || 0.6
    return input
  }

  // --- the yield check: something slow ahead in my lane → match it, or stop ---
  // (this is what keeps traffic from shunting a pulled-over driver mid-interrogation)
  const fwdX = Math.sin(car.yaw), fwdZ = Math.cos(car.yaw)
  let yieldTo = Infinity // speed of the nearest obstruction ahead
  let yieldDist = Infinity
  for (const o of others) {
    const dx = o.x - car.x, dz = o.z - car.z
    const ahead = dx * fwdX + dz * fwdZ
    if (ahead < 2 || ahead > 14) continue
    const side = Math.abs(dx * fwdZ - dz * fwdX)
    if (side > 3.2) continue
    if (ahead < yieldDist) { yieldDist = ahead; yieldTo = Math.abs(o.speed) }
  }

  // stuck detection — only when the road ahead is actually clear; idling in a queue
  // behind a stopped car is patience, not a wedge
  if (Math.abs(car.speed) < 0.7 && yieldDist > 13) {
    brain.stuckT += dt
    if (brain.stuckT > 2.0) {
      brain.reverseT = 1.6
      brain.stuckTries++
      brain.stuckT = 0
    }
  } else {
    brain.stuckT = 0
  }

  // --- follow the ring (patrol logic, gentler) ---
  let wp = brain.path[brain.wpIndex]
  const reached = (w: Waypoint): boolean => {
    const d = dist(car.x, car.z, w.x, w.z)
    if (d < 2.6) return true
    const behind = (w.x - car.x) * fwdX + (w.z - car.z) * fwdZ < 0
    return behind && d < TILE * 0.5
  }
  for (let guard = 0; guard < 4 && reached(wp); guard++) {
    brain.wpIndex = (brain.wpIndex + 1) % brain.path.length
    wp = brain.path[brain.wpIndex]
  }
  const n = brain.path.length
  const look = clamp(Math.ceil((Math.abs(car.speed) * 1.8) / 3), 2, 10)
  let curve = 0
  let prevH = Math.atan2(wp.x - car.x, wp.z - car.z)
  for (let k = 1; k <= look; k++) {
    const a = brain.path[(brain.wpIndex + k - 1) % n]
    const b = brain.path[(brain.wpIndex + k) % n]
    const h = Math.atan2(b.x - a.x, b.z - a.z)
    curve += Math.abs(wrapAngle(h - prevH))
    prevH = h
  }
  let want = brain.baseSpeed * clamp(1 - curve * 0.32, 0.4, 1)
  if (yieldDist < 14) want = Math.min(want, yieldDist < 6 ? 0 : yieldTo * 0.9 + (yieldDist - 6) * 0.4)

  // aim a speed-scaled distance down the path (see pointAhead in police.ts)
  let acc = 0
  let px = car.x, pz = car.z
  let aim = wp
  const ahead = clamp(5 + Math.abs(car.speed) * 0.85, 6, 18)
  for (let k = 0; k < 30; k++) {
    const w = brain.path[(brain.wpIndex + k) % n]
    acc += dist(px, pz, w.x, w.z)
    aim = w
    if (acc >= ahead) break
    px = w.x
    pz = w.z
  }
  input.steer = steerToward(car, aim.x, aim.z)

  const err = want - car.speed
  if (err > 0.5) input.throttle = clamp(err / 6, 0.2, 0.85)
  else if (err < -1 && car.speed > 1) input.brake = clamp(-err / 4, 0.3, 1)
  else if (err > 0) input.throttle = 0.12
  return input
}
