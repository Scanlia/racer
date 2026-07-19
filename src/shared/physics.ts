// Deterministic planar drift physics. Shared verbatim by client (prediction)
// and Colyseus server (authority). No Math.random, fixed dt only.
import { SURFACES, SurfaceName, Tuning } from './constants'

export interface InputFrame {
  seq: number
  steer: number // -1..1 shaped (post assist/ramp) — see input.ts
  throttle: number // 0..1
  brake: number // 0..1
  handbrake: boolean
  headlights: boolean
}

export interface CarState {
  x: number
  z: number
  yaw: number // rad, 0 = +Z, increases counter-clockwise viewed from above (three.js rotation.y)
  vx: number
  vz: number
  yawRate: number
  // derived / bookkeeping carried across steps
  gear: number
  rpm: number
  shiftCut: number // s remaining of upshift throttle cut
  slipAngle: number // body slip angle (rad) — drift detection
  slipFront: number
  slipRear: number
  wheelspin: number // 0..1 — how far drive torque exceeds rear traction (fx/audio hook)
  speed: number // signed forward speed m/s
  aLongSmooth: number // smoothed longitudinal accel (weight transfer)
  surfFL: SurfaceName
  surfFR: SurfaceName
  surfRL: SurfaceName
  surfRR: SurfaceName
  wallHit: number // impulse magnitude of most recent wall contact this step (0 if none)
}

export function makeCarState(x = 0, z = 0, yaw = 0): CarState {
  return {
    x, z, yaw,
    vx: 0, vz: 0, yawRate: 0,
    gear: 0, rpm: 900, shiftCut: 0,
    slipAngle: 0, slipFront: 0, slipRear: 0, wheelspin: 0, speed: 0, aLongSmooth: 0,
    surfFL: 'asphalt', surfFR: 'asphalt', surfRL: 'asphalt', surfRR: 'asphalt',
    wallHit: 0,
  }
}

export interface AABB { minX: number; minZ: number; maxX: number; maxZ: number; soft?: boolean }

export type SurfaceSampler = (x: number, z: number) => SurfaceName
export type HeightSampler = (x: number, z: number) => number

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

// tanh-shaped grip curve with post-peak falloff. slip in rad, peak in rad, returns -1..1 force factor.
function gripCurve(slip: number, peak: number, falloff: number): number {
  const s = slip / peak
  const a = Math.abs(s)
  if (a <= 1) {
    // smooth rise to 1.0 at the peak
    return s * (1.5 - 0.5 * a * a)
  }
  // full falloff reached by ~2.6× peak slip — the tires genuinely let go past the peak
  const decay = 1 - falloff * clamp((a - 1) / 1.6, 0, 1)
  return Math.sign(s) * decay
}

function surfaceBlend(a: SurfaceName, b: SurfaceName) {
  const sa = SURFACES[a], sb = SURFACES[b]
  return {
    lateral: (sa.lateral + sb.lateral) / 2,
    longitudinal: (sa.longitudinal + sb.longitudinal) / 2,
    drag: (sa.drag + sb.drag) / 2,
    peakScale: (sa.peakScale + sb.peakScale) / 2,
  }
}

// per-axle lateral force where EACH wheel contributes its own surface grip —
// two wheels on dirt and two on asphalt gives real asymmetric grip.
// Post-peak falloff is per-surface: asphalt breaks away hard, dirt slides progressively.
function axleLateral(slip: number, peak: number, falloff: number, grip: number, load: number, left: SurfaceName, right: SurfaceName): number {
  const sl = SURFACES[left], sr = SURFACES[right]
  const fl = gripCurve(slip, peak * sl.peakScale, clamp(falloff * sl.falloffScale, 0, 0.92)) * grip * (load / 2) * sl.lateral
  const fr = gripCurve(slip, peak * sr.peakScale, clamp(falloff * sr.falloffScale, 0, 0.92)) * grip * (load / 2) * sr.lateral
  return -(fl + fr)
}

export function stepCar(
  s: CarState,
  input: InputFrame,
  T: Tuning,
  dt: number,
  surfaceAt: SurfaceSampler,
  colliders: AABB[],
  heightAt?: HeightSampler,
): void {
  const sinY = Math.sin(s.yaw), cosY = Math.cos(s.yaw)
  // body-frame velocity: forward = (sinY, cosY) in XZ
  let vLong = s.vx * sinY + s.vz * cosY
  let vLat = s.vx * cosY - s.vz * sinY
  const absVLong = Math.max(Math.abs(vLong), 0.5)
  const bodySlip = Math.atan2(vLat, absVLong)

  // --- sample surfaces per wheel ---
  const a = T.cgToFront, b = T.cgToRear
  const halfW = 0.8
  const fwdX = sinY, fwdZ = cosY
  const rightX = cosY, rightZ = -sinY
  s.surfFL = surfaceAt(s.x + fwdX * a - rightX * halfW, s.z + fwdZ * a - rightZ * halfW)
  s.surfFR = surfaceAt(s.x + fwdX * a + rightX * halfW, s.z + fwdZ * a + rightZ * halfW)
  s.surfRL = surfaceAt(s.x - fwdX * b - rightX * halfW, s.z - fwdZ * b - rightZ * halfW)
  s.surfRR = surfaceAt(s.x - fwdX * b + rightX * halfW, s.z - fwdZ * b + rightZ * halfW)
  const front = surfaceBlend(s.surfFL, s.surfFR)
  const rear = surfaceBlend(s.surfRL, s.surfRR)

  // --- steering (input.steer is already shaped to a physical angle fraction) ---
  const speedT = clamp(Math.abs(vLong) / T.maxSpeed, 0, 1)
  // Cubic falloff, not linear. Linear still handed you near-parking lock at speed —
  // 29 deg of road wheel at 90 km/h where ~2 deg is the fastest angle — so ~94% of the
  // stick was pure understeer: the front washed out the instant you asked for a
  // corner. That reads as "no grip" and makes the car impossible to place. Full lock
  // now lands a few times past the grip peak (still provokable) with the racing band
  // spread across the travel you actually use.
  const k = 1 - speedT
  // Sideways, you need REAL lock to catch it — a drifting car is counter-steered near
  // full lock, and the speed falloff above would deny exactly that, which is what makes
  // a slide feel impossible to gather up. So restore lock in proportion to how sideways
  // the car already is: full authority when drifting, precise mapping when racing
  // straight (where slip is small and the falloff is what stops the understeer).
  const catchBoost = 1 + clamp(Math.abs(bodySlip) / 0.35, 0, 1) * T.counterSteerBoost
  const steerMax = (T.steerMaxHigh + (T.steerMaxLow - T.steerMaxHigh) * k * k * k) * catchBoost
  const delta = input.steer * steerMax

  // --- loads with pseudo longitudinal weight transfer ---
  const L = a + b
  const g = 9.81
  const transfer = (T.mass * s.aLongSmooth * T.cgHeight) / L
  const loadF = Math.max((T.mass * g * b) / L - transfer, T.mass * g * 0.08)
  const loadR = Math.max((T.mass * g * a) / L + transfer, T.mass * g * 0.08)

  // --- slip angles ---
  // Direction of travel SCALES the steering term rather than flipping with sign().
  // Parked on full lock, vLong dithers either side of zero on idle creep, and a hard
  // sign flip inverted the front lateral force on almost every frame: measured 508
  // flips in 600 steps with yawRate peaking at 94 rad/s, i.e. the car shaking itself
  // apart while stationary. Fading out is also the physical answer, since a wheel
  // that is not rolling generates no slip force. The fade matches the absVLong floor,
  // so at 0.5 m/s and above dir is exactly +/-1 and the handling is bit-for-bit
  // unchanged -- this only touches the degenerate near-standstill region.
  const dir = clamp(vLong / 0.5, -1, 1)
  const slipF = Math.atan2(vLat + s.yawRate * a, absVLong) - delta * dir
  const slipR = Math.atan2(vLat - s.yawRate * b, absVLong)
  s.slipFront = slipF
  s.slipRear = slipR
  s.slipAngle = Math.atan2(vLat, absVLong)

  // --- longitudinal drive/brake ---
  const ratio = T.gearRatios[s.gear] * T.finalDrive
  const topRatio = T.gearRatios[T.gearRatios.length - 1] * T.finalDrive
  const gearScale = clamp(ratio / topRatio, 1, 2.2) * 0.62
  const throttleEff = s.shiftCut > 0 ? 0 : input.throttle
  let driveForce = throttleEff * T.engineForce * gearScale * rear.longitudinal
  if (input.handbrake) driveForce *= 1 - T.handbrakeDriveCut
  // soft top speed: cubic governor — near-full torque through the drift speed range,
  // only tapering toward maxSpeed (the linear version starved power-over oversteer)
  const vN = vLong / T.maxSpeed
  driveForce *= clamp(1 - vN * vN * vN, 0, 1) * 1.05

  let brakeForce = 0
  if (input.brake > 0) {
    if (vLong > 0.5) brakeForce = -input.brake * T.brakeForce
    else brakeForce = -input.brake * T.reverseForce * clamp(1 + vLong / 14, 0, 1) // reverse, tapering to a ~50 km/h gear cap
  }

  // --- rear traction budget (friction circle): drive torque beyond what the loaded
  // rear tires can transmit becomes wheelspin — force clamps AND lateral grip collapses.
  const rearCap = Math.max(loadR * T.driveTraction * rear.longitudinal, 1)
  const driveDemand = Math.abs(driveForce)
  s.wheelspin = clamp(driveDemand / rearCap - 1, 0, 1)
  if (driveDemand > rearCap) driveForce = Math.sign(driveForce) * rearCap

  // sliding tires scrub speed: extra drag scaling with how sideways the car is
  const driftDrag = -vLong * T.driftScrub * clamp(Math.abs(s.slipAngle) / 0.4, 0, 1)
  const drag = -T.dragCoeff * vLong * Math.abs(vLong) - T.rollingResist * vLong * ((front.drag + rear.drag) / 2) + driftDrag
  // slope: gravity component along the heading (uphill slows, downhill accelerates)
  let slopeForce = 0
  if (heightAt) {
    const hF = heightAt(s.x + fwdX * a, s.z + fwdZ * a)
    const hR = heightAt(s.x - fwdX * b, s.z - fwdZ * b)
    slopeForce = (-(hF - hR) / (a + b)) * T.mass * g
  }
  const fLong = driveForce + brakeForce * ((front.longitudinal + rear.longitudinal) / 2) + drag + slopeForce

  // --- lateral tire forces ---
  const hb = input.handbrake ? T.handbrakeGrip : 1
  // friction ellipse per axle: longitudinal force spends the same grip lateral needs.
  // Rear under power (or rear brake share), front under its brake share — hard braking
  // into a corner plows (understeer), flooring it swings the rear (power oversteer).
  const rearLongUse = clamp((driveDemand + Math.abs(brakeForce) * (1 - T.brakeBias)) / rearCap, 0, 1)
  const rearEllipse = Math.max(Math.sqrt(1 - rearLongUse * rearLongUse), 0.22)
  const frontCap = Math.max(loadF * T.driveTraction * front.longitudinal, 1)
  const frontLongUse = clamp((Math.abs(brakeForce) * T.brakeBias) / frontCap, 0, 1)
  const frontEllipse = Math.max(Math.sqrt(1 - frontLongUse * frontLongUse), 0.35)
  const fLatFront = axleLateral(slipF, T.peakSlipFront, T.gripFalloff, T.gripFront, loadF, s.surfFL, s.surfFR) * frontEllipse
  const fLatRear = axleLateral(slipR, T.peakSlipRear, T.gripFalloff, T.gripRear, loadR, s.surfRL, s.surfRR) * hb * rearEllipse

  // --- integrate body frame ---
  const aLong = (fLong - fLatFront * Math.sin(delta)) / T.mass + vLat * s.yawRate
  const aLat = (fLatFront * Math.cos(delta) + fLatRear) / T.mass - vLong * s.yawRate
  s.aLongSmooth += ((fLong / T.mass) - s.aLongSmooth) * clamp(dt * 9, 0, 1)

  vLong += aLong * dt
  vLat += aLat * dt

  const torque = fLatFront * Math.cos(delta) * a - fLatRear * b
  s.yawRate += (torque / T.inertia) * dt

  // --- low-speed kinematic blend (kills the parking-lot jitter) ---
  const kin = clamp(1 - Math.abs(vLong) / T.kinematicBlendSpeed, 0, 1)
  if (kin > 0) {
    const kinYawRate = (vLong / L) * Math.tan(delta)
    s.yawRate = s.yawRate * (1 - kin) + kinYawRate * kin
    vLat *= 1 - kin * clamp(dt * 20, 0, 1)
  }
  // handbrake at speed kicks the tail toward the steered direction — space reliably starts the drift
  if (input.handbrake && Math.abs(vLong) > 6) {
    s.yawRate += input.steer * T.handbrakeKick * Math.min(1, Math.abs(vLong) / 15) * dt * Math.sign(vLong)
  }

  // yaw damping — kept low so a pendulum flick's yaw momentum carries into the drift
  s.yawRate *= 1 - clamp(dt * T.yawDamping, 0, 1)
  // extra damping while straightening: the drift releases cleanly instead of
  // pendulum-snapping into an opposite slide
  const newSlip = Math.atan2(vLat, Math.max(Math.abs(vLong), 0.5))
  if (Math.abs(newSlip) < Math.abs(s.slipAngle) && Math.abs(s.slipAngle) > 0.08) {
    s.yawRate *= 1 - clamp(dt * T.driftRecoverDamping, 0, 1)
  }

  // --- back to world ---
  s.yaw += s.yawRate * dt
  const sinY2 = Math.sin(s.yaw), cosY2 = Math.cos(s.yaw)
  s.vx = vLong * sinY2 + vLat * cosY2
  s.vz = vLong * cosY2 - vLat * sinY2
  s.x += s.vx * dt
  s.z += s.vz * dt
  s.speed = vLong

  // --- gearbox / rpm (audio + flare) ---
  if (s.shiftCut > 0) s.shiftCut -= dt
  const wheelRpm = (Math.abs(vLong) / (2 * Math.PI * 0.31)) * 60 // 0.31 m wheel radius
  const roadRpm = Math.max(T.idleRpm, wheelRpm * ratio) // rpm the road speed dictates — shifting uses this
  let rpm = roadRpm
  // wheelspin flare: handbrake+throttle, torque past the traction budget, or rear sliding under power
  const spinning = input.throttle > 0.4 && (input.handbrake || s.wheelspin > 0.05 || Math.abs(slipR) > T.peakSlipRear * 2.2)
  if (spinning) rpm = Math.max(rpm, T.maxRpm * (0.65 + 0.3 * input.throttle))
  s.rpm += (Math.min(rpm, T.maxRpm) - s.rpm) * clamp(dt * 8, 0, 1)
  // shift on road speed, not the audio flare — a spinning car still upshifts once it's moving fast enough
  if (s.gear < T.gearRatios.length - 1 && roadRpm > T.shiftUpRpm && input.throttle > 0.2 && !input.handbrake) {
    s.gear++
    s.shiftCut = T.shiftCutTime
  } else if (s.gear > 0 && roadRpm < T.shiftDownRpm) {
    s.gear--
  }

  // --- collisions (car as two circles vs AABBs) ---
  s.wallHit = 0
  const r = 1.0
  for (const pt of [
    { px: s.x + fwdX * (a * 0.8), pz: s.z + fwdZ * (a * 0.8) },
    { px: s.x - fwdX * (b * 0.8), pz: s.z - fwdZ * (b * 0.8) },
  ]) {
    for (const box of colliders) {
      const cx = clamp(pt.px, box.minX, box.maxX)
      const cz = clamp(pt.pz, box.minZ, box.maxZ)
      const dx = pt.px - cx, dz = pt.pz - cz
      const d2 = dx * dx + dz * dz
      if (d2 >= r * r) continue
      const d = Math.sqrt(Math.max(d2, 1e-6))
      let nx = dx / d, nz = dz / d
      if (d2 < 1e-6) { nx = -fwdX; nz = -fwdZ }
      const pen = r - d
      s.x += nx * pen
      s.z += nz * pen
      const vn = s.vx * nx + s.vz * nz
      if (vn < 0) {
        const soft = box.soft ? 0.45 : 1
        const j = -(1 + (box.soft ? 0.05 : Math.min(0.6, 0.25 + Math.abs(vn) * 0.01))) * vn * soft
        s.vx += nx * j
        s.vz += nz * j
        // tangential scrub
        const tx = -nz, tz = nx
        const vt = s.vx * tx + s.vz * tz
        s.vx -= tx * vt * (box.soft ? 0.12 : 0.25)
        s.vz -= tz * vt * (box.soft ? 0.12 : 0.25)
        s.yawRate *= box.soft ? 0.9 : 0.7
        s.wallHit = Math.max(s.wallHit, Math.abs(vn) * (box.soft ? 0.3 : 1))
      }
    }
  }
}

// --- car-vs-car collision: each car is two circles (front/rear) ---
export interface CarPose { x: number; z: number; yaw: number; vx: number; vz: number }

const CAR_R = 1.15 // circle radius (car ~1.9 wide)
const CAR_AX = 1.1 // circle centers at ±this along the heading

function carPoints(c: { x: number; z: number; yaw: number }): Array<{ x: number; z: number }> {
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw)
  return [
    { x: c.x + fx * CAR_AX, z: c.z + fz * CAR_AX },
    { x: c.x - fx * CAR_AX, z: c.z - fz * CAR_AX },
  ]
}

// symmetric resolution, both cars movable (server authority). Returns impact speed.
export function collideCarPair(a: CarState, b: CarState): number {
  let hit = 0
  const rr = CAR_R * 2
  for (const pa of carPoints(a)) {
    for (const pb of carPoints(b)) {
      const dx = pa.x - pb.x, dz = pa.z - pb.z
      const d2 = dx * dx + dz * dz
      if (d2 >= rr * rr || d2 < 1e-9) continue
      const d = Math.sqrt(d2)
      const nx = dx / d, nz = dz / d
      const pen = rr - d
      a.x += nx * pen * 0.5; a.z += nz * pen * 0.5
      b.x -= nx * pen * 0.5; b.z -= nz * pen * 0.5
      const vn = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz
      if (vn < 0) {
        const j = -(1 + 0.35) * vn * 0.5 // equal masses: each takes half the impulse
        a.vx += nx * j; a.vz += nz * j
        b.vx -= nx * j; b.vz -= nz * j
        a.yawRate *= 0.85
        b.yawRate *= 0.85
        hit = Math.max(hit, -vn)
        a.wallHit = Math.max(a.wallHit, -vn * 0.6)
        b.wallHit = Math.max(b.wallHit, -vn * 0.6)
      }
    }
  }
  return hit
}

// one-sided: push only `a` out of an (interpolated, immovable) remote car.
// Client-side feedback so bumps feel instant; the server's symmetric pass is authority.
export function collideCarKinematic(a: CarState, b: CarPose): number {
  let hit = 0
  const rr = CAR_R * 2
  for (const pa of carPoints(a)) {
    for (const pb of carPoints(b)) {
      const dx = pa.x - pb.x, dz = pa.z - pb.z
      const d2 = dx * dx + dz * dz
      if (d2 >= rr * rr || d2 < 1e-9) continue
      const d = Math.sqrt(d2)
      const nx = dx / d, nz = dz / d
      a.x += nx * (rr - d)
      a.z += nz * (rr - d)
      const vn = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz
      if (vn < 0) {
        const j = -(1 + 0.3) * vn
        a.vx += nx * j; a.vz += nz * j
        a.yawRate *= 0.85
        hit = Math.max(hit, -vn)
        a.wallHit = Math.max(a.wallHit, -vn * 0.6)
      }
    }
  }
  return hit
}

// Serialization helpers for prediction rollback
export function copyCarState(from: CarState, to: CarState): void {
  to.x = from.x; to.z = from.z; to.yaw = from.yaw
  to.vx = from.vx; to.vz = from.vz; to.yawRate = from.yawRate
  to.gear = from.gear; to.rpm = from.rpm; to.shiftCut = from.shiftCut
  to.slipAngle = from.slipAngle; to.slipFront = from.slipFront; to.slipRear = from.slipRear
  to.wheelspin = from.wheelspin
  to.speed = from.speed; to.aLongSmooth = from.aLongSmooth
  to.surfFL = from.surfFL; to.surfFR = from.surfFR; to.surfRL = from.surfRL; to.surfRR = from.surfRR
  to.wallHit = from.wallHit
}
