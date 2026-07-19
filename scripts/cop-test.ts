// Headless police harness: patrol → aggro → pursuit → pin → interrogation,
// stepped exactly like the room does. Ground truth for cop tuning.
// Runs the scripted Bram unless ANTHROPIC_API_KEY is set.
import { makeCarState, stepCar, collideCarPair, CarState } from '../src/shared/physics'
import { makeCopBrain, stepCopBrain, onCopHit, copSpawn, PIN_TIME } from '../src/shared/police'
import { TUNING, PHYS_DT } from '../src/shared/constants'
import { parseMap } from '../src/shared/map'
import { Interrogation } from '../src/server/interrogation'

const map = parseMap()
const brain = makeCopBrain(map)
const s0 = copSpawn(brain)
const cop = makeCarState(s0.x, s0.z, s0.yaw)
const players = new Map<string, CarState>()

console.log(`patrol ring: ${brain.path.length} waypoints`)

// --- 1) patrol: drives the loop without wedging ---
let minS = 99, maxS = 0
const start = { x: cop.x, z: cop.z }
let stuckEvents = 0
for (let i = 0; i < 60 * 30; i++) {
  const res = stepCopBrain(brain, cop, players, PHYS_DT)
  stepCar(cop, res.input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
  if (i > 120) { minS = Math.min(minS, cop.speed); maxS = Math.max(maxS, cop.speed) }
  if (brain.reverseT > 0) stuckEvents++
}
console.log(`patrol 30s: ${(minS * 3.6).toFixed(0)}..${(maxS * 3.6).toFixed(0)} km/h · moved ${Math.hypot(cop.x - start.x, cop.z - start.z).toFixed(0)}m · wp ${brain.wpIndex}/${brain.path.length} · reverse-recovery frames ${stuckEvents} · mode=${brain.mode}`)

// --- 2) aggro: player rams the patrol car (drive in until contact, like the room does) ---
const fwd = { x: Math.sin(cop.yaw), z: Math.cos(cop.yaw) }
// he's patrolling at ~13 m/s, so come up behind him at 30 (≈108 km/h) to actually connect
const RAM = 30
const p = makeCarState(cop.x - fwd.x * 12, cop.z - fwd.z * 12, cop.yaw)
p.vx = fwd.x * RAM
p.vz = fwd.z * RAM
players.set('p1', p)
let impact = 0, aggro = false
for (let i = 0; i < 60 * 3 && !aggro; i++) {
  p.x += p.vx * PHYS_DT; p.z += p.vz * PHYS_DT // player coasts into him
  const res = stepCopBrain(brain, cop, players, PHYS_DT)
  stepCar(cop, res.input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
  impact = collideCarPair(cop, p)
  if (impact > 0) aggro = onCopHit(brain, 'p1', impact, cop.speed)
}
console.log(`ram @${RAM} m/s: impact ${impact.toFixed(1)} m/s → aggro=${aggro} mode=${brain.mode} target=${brain.targetId} offenses=${brain.offenses.get('p1') ?? 0}`)

// --- 3) pursuit → pin (player gives up and stops) ---
let pinnedAt = -1
for (let i = 0; i < 60 * 25; i++) {
  const res = stepCopBrain(brain, cop, players, PHYS_DT)
  stepCar(cop, res.input, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
  collideCarPair(cop, p)
  p.vx *= 0.9; p.vz *= 0.9 // player sits still, absorbing the nudge
  if (res.pinnedNow && brain.pinT >= PIN_TIME && pinnedAt < 0) pinnedAt = i / 60
}
console.log(`pursuit 25s: dist ${Math.hypot(cop.x - p.x, cop.z - p.z).toFixed(1)}m · pinT ${brain.pinT.toFixed(2)}/${PIN_TIME} · PINNED ${pinnedAt < 0 ? 'never' : 'at ' + pinnedAt.toFixed(1) + 's'} · chaseT ${brain.chaseT.toFixed(1)}s`)

// --- 4) the stop ---
;(async () => {
  const it = new Interrogation({
    impactSpeedKmh: 43, hitWhileParked: true, chaseDurationS: 6, playerTopSpeedKmh: 120,
    priorOffenses: 1, priorArrests: 0, sessionScore: 4200, playerCarColor: 'red', playerCarKind: 'estate',
    playerName: 'reece', locationNow: 'the village lane, past the houses', escapeAttempted: true,
    headlightsOff: false, teasedCop: true,
  })
  console.log(`\n--- interrogation (${process.env.ANTHROPIC_API_KEY ? 'live API' : 'scripted fallback — no ANTHROPIC_API_KEY'}) ---`)
  console.log(`opening disposition ${it.disposition}/100`)
  const open = await it.open()
  console.log(`bram: ${open.reply}  «${open.mood}»`)
  for (const line of ['who cares, pig', 'sorry mate, that was my fault entirely', 'i will go straight home, promise']) {
    const t = await it.playerSays(line)
    console.log(`you : ${line}\nbram: ${t.reply}  «${t.mood}»  [${t.disposition}/100 → ${t.verdict}]`)
    if (t.verdict !== 'pending') break
  }
})()
