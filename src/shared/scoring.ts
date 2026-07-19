// Drift scoring: angle × speed × duration, chained, broken by wall contact,
// paused offroad, ended if all four wheels leave the road >1.5 s (Part 4 §1.3).
// Near misses — drifting past a wall, a civilian, or the cop without touching —
// feed the chain and bump the multiplier (stepNearMiss below).
import { AABB, CarState } from './physics'

export type NearMissKind = 'wall' | 'car' | 'cop'

export interface DriftScore {
  total: number
  chain: number // points accumulating in the current chain (unbanked)
  multiplier: number
  drifting: boolean
  offroadTime: number
  graceTime: number // time since drift conditions lapsed (bank after grace)
  banked: number // amount banked on the most recent 'banked' event
  event: 'none' | 'banked' | 'crashed'
  nearMiss: { kind: NearMissKind; pts: number } | null // this step's award (client: popup hook)
  nmCd: Map<string, number> // per-object cooldowns so one hedge can't be farmed
}

export function makeScore(): DriftScore {
  return { total: 0, chain: 0, multiplier: 1, drifting: false, offroadTime: 0, graceTime: 0, banked: 0, event: 'none', nearMiss: null, nmCd: new Map() }
}

const DRIFT_MIN_ANGLE = 0.22 // rad
const DRIFT_MIN_SPEED = 7 // m/s
const GRACE = 1.2 // s to link corners
const WALL_BREAK = 3.0 // wallHit impulse that kills the chain

export function stepScore(sc: DriftScore, car: CarState, dt: number): void {
  sc.event = 'none'
  const angle = Math.abs(car.slipAngle)
  const speed = Math.abs(car.speed)
  const active = angle > DRIFT_MIN_ANGLE && speed > DRIFT_MIN_SPEED

  const offroadWheels = [car.surfFL, car.surfFR, car.surfRL, car.surfRR].filter((s) => s === 'offroad').length
  const anyOffroad = offroadWheels > 0
  const allOffroad = offroadWheels === 4

  if (allOffroad) sc.offroadTime += dt
  else sc.offroadTime = 0

  // hard wall contact breaks the chain
  if (car.wallHit > WALL_BREAK && sc.chain > 0) {
    sc.chain = 0
    sc.multiplier = 1
    sc.drifting = false
    sc.event = 'crashed'
    return
  }

  if (active) {
    sc.drifting = true
    sc.graceTime = 0
    if (!anyOffroad) {
      // scoring accumulates on asphalt/curb only; grass pauses, doesn't reset
      sc.chain += angle * speed * dt * 14 * sc.multiplier
      sc.multiplier = Math.min(sc.multiplier + dt * 0.12, 4)
    }
    if (sc.offroadTime > 1.5) {
      // wandered fully off: bank what you had at reduced value
      sc.banked = Math.floor(sc.chain * 0.5)
      sc.total += sc.banked
      sc.chain = 0
      sc.multiplier = 1
      sc.drifting = false
      sc.event = 'banked'
    }
  } else if (sc.drifting || sc.chain > 0) {
    sc.graceTime += dt
    if (sc.graceTime > GRACE) {
      if (sc.chain > 1) {
        sc.banked = Math.floor(sc.chain)
        sc.total += sc.banked
        sc.event = 'banked'
      }
      sc.chain = 0
      sc.multiplier = 1
      sc.drifting = false
    }
  }
}

// ---------------- near misses ----------------
// Same body geometry as stepCar's collision pass: two circles r=1.0 at ±1.1 m.
const NM_R = 1.0
const NM_AX = 1.1
const NM_BAND_LO = 0.08 // closer than this is a scrape, not a pass
const NM_BAND_HI = 0.95
const NM_CAR_LO = 2.42 // CAR_R*2 = 2.3 is contact — just outside it
const NM_CAR_HI = 3.9
const NM_COOLDOWN = 4 // s per object
const NM_PTS: Record<NearMissKind, number> = { wall: 150, car: 250, cop: 400 }

export interface NearMissOther { id: string; x: number; z: number; bot: number }

// Runs on server (authority) and client (instant popup) with identical inputs.
// Awards at most one near miss per step: cop > car > wall.
export function stepNearMiss(
  sc: DriftScore,
  car: CarState,
  dt: number,
  colliders: AABB[],
  others: NearMissOther[],
): void {
  sc.nearMiss = null
  if (sc.nmCd.size) {
    for (const [k, t] of sc.nmCd) {
      const left = t - dt
      if (left <= 0) sc.nmCd.delete(k)
      else sc.nmCd.set(k, left)
    }
  }
  // only a committed slide counts — a lane change past a hedge is just driving
  if (!sc.drifting || Math.abs(car.speed) < 10) return

  let kind: NearMissKind | null = null
  let key = ''

  // cars first (cop beats civilian beats wall)
  let carBest = Infinity
  for (const o of others) {
    const d = Math.hypot(o.x - car.x, o.z - car.z)
    if (d < NM_CAR_LO || d > NM_CAR_HI) continue
    if (sc.nmCd.has('c' + o.id)) continue
    const k2: NearMissKind = o.bot === 1 ? 'cop' : 'car'
    // cop outranks anything closer
    if (k2 === 'cop' || (kind !== 'cop' && d < carBest)) {
      kind = k2
      key = 'c' + o.id
      carBest = d
      if (k2 === 'cop') break
    }
  }

  // walls only when nothing on wheels qualified and we aren't touching one
  if (!kind && car.wallHit === 0) {
    const fwdX = Math.sin(car.yaw), fwdZ = Math.cos(car.yaw)
    const pts = [
      { px: car.x + fwdX * NM_AX, pz: car.z + fwdZ * NM_AX },
      { px: car.x - fwdX * NM_AX, pz: car.z - fwdZ * NM_AX },
    ]
    for (let i = 0; i < colliders.length; i++) {
      const box = colliders[i]
      if (car.x < box.minX - 6 || car.x > box.maxX + 6 || car.z < box.minZ - 6 || car.z > box.maxZ + 6) continue
      if (sc.nmCd.has('w' + i)) continue
      for (const pt of pts) {
        const cx = pt.px < box.minX ? box.minX : pt.px > box.maxX ? box.maxX : pt.px
        const cz = pt.pz < box.minZ ? box.minZ : pt.pz > box.maxZ ? box.maxZ : pt.pz
        const clearance = Math.hypot(pt.px - cx, pt.pz - cz) - NM_R
        if (clearance > NM_BAND_LO && clearance < NM_BAND_HI) {
          kind = 'wall'
          key = 'w' + i
          break
        }
      }
      if (kind) break
    }
  }

  if (!kind) return
  const pts2 = Math.floor(NM_PTS[kind] * sc.multiplier)
  sc.chain += pts2
  sc.multiplier = Math.min(sc.multiplier + 0.2, 4)
  sc.nmCd.set(key, NM_COOLDOWN)
  sc.nearMiss = { kind, pts: pts2 }
}
