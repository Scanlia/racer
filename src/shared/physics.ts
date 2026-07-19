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
  // 0..1 post-impact destabilization: set by car-vs-car hits in proportion to closing
  // speed, decays over ~1.5 s. While it's up the tires shed grip and the grip assist
  // stops pulling the car back onto its nose — so a hard hit sends the victim SLIDING
  // instead of instantly regripping and driving off. See stepCar's decay + usage.
  hitSlide: number
}

export function makeCarState(x = 0, z = 0, yaw = 0): CarState {
  return {
    x, z, yaw,
    vx: 0, vz: 0, yawRate: 0,
    gear: 0, rpm: 900, shiftCut: 0,
    slipAngle: 0, slipFront: 0, slipRear: 0, wheelspin: 0, speed: 0, aLongSmooth: 0,
    surfFL: 'asphalt', surfFR: 'asphalt', surfRL: 'asphalt', surfRR: 'asphalt',
    wallHit: 0, hitSlide: 0,
  }
}

export interface AABB { minX: number; minZ: number; maxX: number; maxZ: number; soft?: boolean }

export type SurfaceSampler = (x: number, z: number) => SurfaceName
export type HeightSampler = (x: number, z: number) => number

// Below this speed the steering direction fades out instead of flipping sign.
const STEER_DIR_FADE = 0.15 // m/s

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
  // snapshot the last known-good pose so a non-finite step can be rolled back
  // instead of poisoning the car (and, via car-vs-car collisions, the whole room)
  // with NaN forever. See the finite guard at the end of this function.
  const gx = s.x, gz = s.z, gyaw = s.yaw
  // impact destabilization decays back to planted over ~1.5 s
  s.hitSlide -= s.hitSlide * clamp(dt * 1.6, 0, 1)
  if (s.hitSlide < 1e-3) s.hitSlide = 0
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
  // Quadratic falloff: linear hands you parking lock at speed (pure understeer), but the
  // old cubic starved mid-speed steering — at half of maxSpeed only 12% of the extra lock
  // remained, which with real-μ grip read as "the car won't turn" (boat). Quadratic keeps
  // a usable racing band through the map's actual corner speeds; full lock still lands
  // past the grip peak so the front stays provokable.
  const k = 1 - speedT
  // Sideways, you need REAL lock to catch it — a drifting car is counter-steered near
  // full lock, and the speed falloff above would deny exactly that, which is what makes
  // a slide feel impossible to gather up. So restore lock in proportion to how sideways
  // the car already is: full authority when drifting, precise mapping when racing
  // straight (where slip is small and the falloff is what stops the understeer).
  const catchBoost = 1 + clamp(Math.abs(bodySlip) / 0.35, 0, 1) * T.counterSteerBoost
  // cap at 0.85 rad (~49°, drift-kit lock): past that cos/tan(delta) leave the model's
  // valid range — uncapped, catchBoost could push delta beyond 70° and blow up yaw
  const steerMax = Math.min((T.steerMaxHigh + (T.steerMaxLow - T.steerMaxHigh) * k * k) * catchBoost, 0.85)
  const delta = input.steer * steerMax

  // --- loads with pseudo longitudinal weight transfer ---
  const L = a + b
  const g = 9.81
  const transfer = (T.mass * s.aLongSmooth * T.cgHeight) / L
  const loadF = Math.max((T.mass * g * b) / L - transfer, T.mass * g * 0.08)
  const loadR = Math.max((T.mass * g * a) / L + transfer, T.mass * g * 0.08)

  // --- slip angles ---
  // Direction of travel SCALES the steering term rather than flipping with sign().
  // Parked on full lock, vLong dithers either side of zero on idle creep, so a hard
  // sign flip inverts the front lateral force almost every frame: 555 flips over 600
  // stationary steps, leaving the car jittering ~0.06 rad while stopped. Fading out is
  // also the physical answer, since a wheel that is not rolling generates no slip
  // force. STEER_DIR_FADE is deliberately tiny so this only touches the degenerate
  // near-standstill region: measured against this branch, a handbrake drift entry
  // lands 8 mm from where it did before and a fast sweeping corner 1 mm, while the
  // parked jitter goes to zero. (At 0.5 the same fix moved the drift entry 238 mm,
  // which is why it is not that.)
  const dir = clamp(vLong / STEER_DIR_FADE, -1, 1)
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
    else {
      // reverse mirrors forward drive: same gear scaling and same cubic governor
      // against maxSpeed, so backing up pulls away as hard as accelerating
      const vRevN = -vLong / T.maxSpeed
      brakeForce = -input.brake * T.reverseForce * gearScale * clamp(1 - vRevN * vRevN * vRevN, 0, 1) * 1.05
    }
  }

  // --- rear traction budget (friction circle): drive torque beyond what the loaded
  // rear tires can transmit becomes wheelspin — force clamps AND lateral grip collapses.
  const rearCap = Math.max(loadR * T.driveTraction * rear.longitudinal, 1)
  const driveDemand = Math.abs(driveForce)
  s.wheelspin = clamp(driveDemand / rearCap - 1, 0, 1)
  if (driveDemand > rearCap) driveForce = Math.sign(driveForce) * rearCap

  // sliding tires scrub speed: extra drag scaling with how sideways the car is
  const driftDrag = -vLong * T.driftScrub * clamp(Math.abs(s.slipAngle) / 0.4, 0, 1)
  // induced cornering drag: turning hard costs speed. Proportional to the centripetal
  // force actually being generated (m·v·yawRate) — the real-tire effect (lateral force
  // tilted back by the slip angle), keyed to yaw so it works in the assist regime too.
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
  // floor 0.45: power reduces rear grip (power-over is still a move) but never fully
  // kills it — at 0.22 any saturated-throttle corner snapped into a spin
  const rearEllipse = Math.max(Math.sqrt(1 - rearLongUse * rearLongUse), 0.45)
  const frontCap = Math.max(loadF * T.driveTraction * front.longitudinal, 1)
  const frontLongUse = clamp((Math.abs(brakeForce) * T.brakeBias) / frontCap, 0, 1)
  const frontEllipse = Math.max(Math.sqrt(1 - frontLongUse * frontLongUse), 0.35)
  // committed slides FLOAT a little: both axles shed some grip as the body goes
  // sideways — the drift glides rather than biting, and the exit re-bite is softer.
  // A fresh impact also unloads the tires (weight thrown across the car, wheels skittering)
  // — this is most of what makes a hard hit LOOK like a hit rather than a nudge.
  const floaty = (1 - T.driftGripLoss * clamp((Math.abs(bodySlip) - 0.12) / 0.35, 0, 1)) * (1 - 0.5 * s.hitSlide)
  // the handbrake also relaxes the FRONT: with the rear let go, full front grip does
  // nothing but yank the car around — this is what whipped a handbrake pull straight
  // through 40° to near-perpendicular. A handbrake slide should drift, not pirouette.
  const hbF = input.handbrake ? 0.72 : 1
  const fLatFront = axleLateral(slipF, T.peakSlipFront, T.gripFalloff, T.gripFront, loadF, s.surfFL, s.surfFR) * frontEllipse * floaty * hbF
  const fLatRear = axleLateral(slipR, T.peakSlipRear, T.gripFalloff, T.gripRear, loadR, s.surfRL, s.surfRR) * hb * rearEllipse * floaty

  // induced tire drag: a tire making lateral force at slip angle α drags backward by
  // F·sin(α). This is what bites the moment you turn IN — the front's slip jumps to the
  // full steering angle before any yaw has built — and keeps scrubbing through the corner.
  // Gated out below ~30 km/h (full-lock parking slips would stall a hairpin) and faded
  // out with body slip: sideways, driftScrub owns the bleed — draining vLong mid-slide
  // makes the slip angle explode instead of the car simply slowing.
  const induced = (Math.abs(fLatFront) * Math.min(Math.abs(Math.sin(slipF)), 0.5)
    + Math.abs(fLatRear) * Math.min(Math.abs(Math.sin(slipR)), 0.5)) * T.cornerDrag
    * clamp(Math.abs(vLong) / 8, 0, 1) * clamp(1 - Math.abs(s.slipAngle) / 0.35, 0, 1)

  // --- integrate body frame ---
  const aLong = (fLong - fLatFront * Math.sin(delta) - induced * Math.sign(vLong)) / T.mass + vLat * s.yawRate
  const aLat = (fLatFront * Math.cos(delta) + fLatRear) / T.mass - vLong * s.yawRate
  s.aLongSmooth += ((fLong / T.mass) - s.aLongSmooth) * clamp(dt * 9, 0, 1)

  vLong += aLong * dt
  vLat += aLat * dt

  const torque = fLatFront * Math.cos(delta) * a - fLatRear * b
  s.yawRate += (torque / T.inertia) * dt
  // sanity clamp: no real slide exceeds ~230°/s — anything past this is the integrator
  // blowing up (big slip + big lock at 60 Hz), and it reads as a teleport-spin
  s.yawRate = clamp(s.yawRate, -4, 4)

  // --- low-speed kinematic blend (kills the parking-lot jitter) ---
  const kin = clamp(1 - Math.abs(vLong) / T.kinematicBlendSpeed, 0, 1)
  if (kin > 0) {
    const kinYawRate = (vLong / L) * Math.tan(delta)
    s.yawRate = s.yawRate * (1 - kin) + kinYawRate * kin
    vLat *= 1 - kin * clamp(dt * 20, 0, 1)
  }
  // --- grip assist: bleed lateral velocity so the car tracks where the nose points
  // instead of sailing on its old vector (the "boat" feel). Slip-gated — full effect in
  // normal driving, fades to zero by gripAssistFadeSlip so a committed slide keeps its
  // momentum — and off under handbrake. Surface grip² scaling keeps dirt/grass slidey.
  if (!input.handbrake && kin < 1) {
    const surfLat = (front.lateral + rear.lateral) / 2
    const slipNow = Math.atan2(vLat, Math.max(Math.abs(vLong), 0.5))
    // ...and cut entirely right after an impact: the assist is what makes the car track
    // its nose, so leaving it on would suck a T-boned car straight back onto its heading.
    const fade = clamp(1 - Math.abs(slipNow) / T.gripAssistFadeSlip, 0, 1) * (1 - s.hitSlide)
    vLat *= 1 - clamp(T.gripAssist * surfLat * surfLat * fade * dt, 0, 1)
  }
  // handbrake at speed kicks the tail toward the steered direction — space reliably starts the drift
  if (input.handbrake && Math.abs(vLong) > 6) {
    s.yawRate += input.steer * T.handbrakeKick * Math.min(1, Math.abs(vLong) / 15) * dt * Math.sign(vLong)
  }

  // yaw damping — kept low so a pendulum flick's yaw momentum carries into the drift
  s.yawRate *= 1 - clamp(dt * T.yawDamping, 0, 1)
  // drift-angle governor: past ~30° body slip, strongly damp only the yaw that would
  // DEEPEN the slide (deepening yaw has the opposite sign to the slip; recovery yaw is
  // never touched). Slides settle at a stylish, holdable angle instead of running away
  // to perpendicular — which is the angle no exit can look nice from.
  {
    const slipNow2 = Math.atan2(vLat, Math.max(Math.abs(vLong), 0.5))
    const excess = clamp((Math.abs(slipNow2) - 0.52) / 0.4, 0, 1)
    // relaxed right after an impact — a hit that spins you past the governor's angle
    // should actually spin you, not be caught by the same aid that shapes a drift.
    if (excess > 0 && Math.sign(s.yawRate) === -Math.sign(slipNow2)) {
      s.yawRate *= 1 - clamp(dt * 11 * excess * (1 - 0.85 * s.hitSlide), 0, 1)
    }
  }
  // extra damping while straightening: the drift releases cleanly instead of
  // pendulum-snapping into an opposite slide
  const newSlip = Math.atan2(vLat, Math.max(Math.abs(vLong), 0.5))
  if (Math.abs(newSlip) < Math.abs(s.slipAngle) && Math.abs(s.slipAngle) > 0.08) {
    s.yawRate *= 1 - clamp(dt * T.driftRecoverDamping * (1 - 0.85 * s.hitSlide), 0, 1)
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

  // --- finite guard (deterministic; runs identically on client prediction and
  // server authority so they never diverge). A numeric blow-up anywhere above
  // (e.g. a car wedged among colliders accumulating Infinity impulses, then
  // Infinity - Infinity) would otherwise make x/z/yaw NaN permanently: every
  // patch logs "trying to encode NaN", and collideCarPair spreads it to every
  // nearby car. If any integrated output is non-finite, roll back to the last
  // good pose and kill the velocity — the car freezes for one frame and recovers.
  if (!(Number.isFinite(s.x) && Number.isFinite(s.z) && Number.isFinite(s.yaw) &&
        Number.isFinite(s.vx) && Number.isFinite(s.vz) && Number.isFinite(s.yawRate))) {
    s.x = Number.isFinite(gx) ? gx : 0
    s.z = Number.isFinite(gz) ? gz : 0
    s.yaw = Number.isFinite(gyaw) ? gyaw : 0
    s.vx = 0; s.vz = 0; s.yawRate = 0
    s.speed = 0; s.slipAngle = 0; s.slipFront = 0; s.slipRear = 0
    s.aLongSmooth = 0; s.wheelspin = 0; s.wallHit = 0; s.hitSlide = 0
    if (!Number.isFinite(s.rpm)) s.rpm = T.idleRpm
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

// How a hit reads is mostly about three things, none of which a plain equal-and-opposite
// push gives you: hard hits must bounce harder than soft ones (restitution rises with
// closing speed), an off-centre hit must SPIN the car it lands on (yaw impulse from the
// lever arm between the contact point and the car's centre), and the car that got hit
// must lose the plot for a moment afterwards rather than instantly regripping (hitSlide,
// consumed by stepCar). Everything below is deterministic — client prediction and server
// authority run the identical resolution.
const HIT_MASS = 1200 // kg, base car — collisions ignore per-car mass so the pair stays symmetric
const HIT_INERTIA = 1450 // kg m^2, matches TUNING.inertia
// A fully rigid solve would couple linear and angular response; this splits a fraction of
// the impulse off into spin instead, so the number is picked by feel rather than derived.
const HIT_SPIN = 0.12

// Closing speed → restitution. A parking-speed nudge barely separates the cars (0.25);
// a 20 m/s T-bone throws them apart (0.75). Linear between.
function hitRestitution(closing: number): number {
  return 0.25 + clamp(closing / 20, 0, 1) * 0.5
}

// Impact → 0..1 destabilization. Dead below ~3 m/s so traffic jostling stays planted;
// saturated by ~16 m/s, where the victim should be fully unloaded and sliding.
function hitSlideFor(closing: number): number {
  return clamp((closing - 3) / 13, 0, 1)
}

// symmetric resolution, both cars movable (server authority). Returns impact speed.
export function collideCarPair(a: CarState, b: CarState): number {
  let hit = 0
  // never let a non-finite car spread NaN into a healthy one through the push-out
  if (!(Number.isFinite(a.x) && Number.isFinite(a.z) && Number.isFinite(b.x) && Number.isFinite(b.z))) return 0
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
      // contact point sits between the two overlapping circles
      const cx = (pa.x + pb.x) * 0.5, cz = (pa.z + pb.z) * 0.5
      const vn = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz
      if (vn < 0) {
        const closing = -vn
        const j = -(1 + hitRestitution(closing)) * vn * 0.5 // equal masses: each takes half
        a.vx += nx * j; a.vz += nz * j
        b.vx -= nx * j; b.vz -= nz * j
        // yaw from the lever arm: the impulse acts at the contact point, not at the centre
        // of mass, so a corner-to-corner hit rotates both cars and a square rear-ender
        // (zero lever arm) doesn't. cross(r, impulse) in the XZ plane.
        const p = j * HIT_MASS * HIT_SPIN
        const spinA = ((cz - a.z) * (nx * p) - (cx - a.x) * (nz * p)) / HIT_INERTIA
        const spinB = ((cz - b.z) * (-nx * p) - (cx - b.x) * (-nz * p)) / HIT_INERTIA
        a.yawRate = clamp(a.yawRate + spinA, -4, 4)
        b.yawRate = clamp(b.yawRate + spinB, -4, 4)
        const slide = hitSlideFor(closing)
        a.hitSlide = Math.max(a.hitSlide, slide)
        b.hitSlide = Math.max(b.hitSlide, slide)
        hit = Math.max(hit, closing)
        a.wallHit = Math.max(a.wallHit, closing * 0.6)
        b.wallHit = Math.max(b.wallHit, closing * 0.6)
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
      const cx = (pa.x + pb.x) * 0.5, cz = (pa.z + pb.z) * 0.5
      const vn = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz
      if (vn < 0) {
        const closing = -vn
        // `a` absorbs the whole impulse here (b is an immovable interpolated ghost), so
        // the same restitution/spin/slide rules apply at full strength rather than halved
        const j = -(1 + hitRestitution(closing)) * vn
        a.vx += nx * j; a.vz += nz * j
        const p = j * HIT_MASS * HIT_SPIN * 0.5
        a.yawRate = clamp(a.yawRate + ((cz - a.z) * (nx * p) - (cx - a.x) * (nz * p)) / HIT_INERTIA, -4, 4)
        a.hitSlide = Math.max(a.hitSlide, hitSlideFor(closing))
        hit = Math.max(hit, closing)
        a.wallHit = Math.max(a.wallHit, closing * 0.6)
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
  to.hitSlide = from.hitSlide
}
