// Balance harness for the interrogation: runs scripted player archetypes against
// Bram and reports where each one lands. The stop has to be winnable by saying
// the right things and still losable by being a prat, and that is a property of
// the prompt + constants that can only be checked by actually playing it.
//
// usage: LLM_PROVIDER=gemini GEMINI_API_KEY=... npx tsx scripts/bram-balance.ts [reps]
import { Interrogation, InterrogationFacts, RELEASE_AT } from '../src/server/interrogation'

const REPS = Number(process.argv[2] || 1)
const CONCURRENCY = 4

const scenarios: Record<string, InterrogationFacts> = {
  // a clumsy bump: the common case, should be very winnable
  // colour/kind pairs must be real ones from cars.ts — the saloon IS navy, the van IS orange
  mild: {
    impactSpeedKmh: 22, hitWhileParked: true, chaseDurationS: 0, playerTopSpeedKmh: 70,
    priorOffenses: 1, sessionScore: 1200, playerCarColor: 'navy', playerCarKind: 'saloon',
    playerName: 'player', locationNow: 'the lane by the gas station', escapeAttempted: false,
  },
  // hit hard and ran: hard mode, should be winnable only with a very good run
  harsh: {
    impactSpeedKmh: 43, hitWhileParked: true, chaseDurationS: 6, playerTopSpeedKmh: 120,
    priorOffenses: 1, sessionScore: 4200, playerCarColor: 'orange', playerCarKind: 'van',
    playerName: 'reece', locationNow: 'the village lane, past the houses', escapeAttempted: true,
  },
}

// Scripted players. `car` lines are written per-scenario via {color}/{kind}.
const archetypes: Record<string, string[]> = {
  // says everything right, and knows their own car
  ideal: [
    'I am so sorry. That was completely my fault, I misjudged it in the mist and I hit you.',
    'No drink at all, nothing tonight. Just tired and driving too fast for the conditions.',
    'The {color} {kind}, yeah, that is mine. Been mine four years.',
    'You are right to stop me. I will take whatever you think is fair.',
    'I am going straight home, walking pace, I promise. Sorry about your coffee.',
    'Long night for you too by the look of it. I appreciate you hearing me out.',
    'Understood. Genuinely, thank you.',
    'I will let you get back to your night.',
  ],
  // says the right things but never demonstrates any knowledge of the car
  polite_no_car: [
    'I am so sorry. That was completely my fault, I misjudged it in the mist.',
    'No drink at all, nothing tonight. Just tired.',
    'I take full responsibility for it.',
    'You are right to stop me. I will take whatever you think is fair.',
    'I am going straight home, walking pace, I promise.',
    'I appreciate you hearing me out.',
    'Understood. Thank you.',
    'I will let you get back to your night.',
  ],
  // knows the car cold but never actually apologises: car knowledge alone
  // should help without being a skeleton key past owning up
  car_no_sorry: [
    'What of it. Cars touch sometimes.',
    'Not been drinking. I know exactly where I am.',
    'It is the {color} {kind}. Mine, four years now.',
    'Yes, {color}. I could tell you the plate too if you like.',
    'So can I go now?',
    'I am not admitting anything, but I know my own car.',
    'Right.',
    'Are we done?',
  ],
  // apologetic but gets their own car wrong: reads as drunk or not their car
  wrong_car: [
    'I am so sorry, that was my fault entirely.',
    'No drink, nothing tonight.',
    'The green hatchback? That is mine, had it for years.',
    'I am sure it is green. Anyway, I will go straight home.',
    'I said I was sorry. Can I go?',
    'Come on, it was an honest mistake.',
    'Fine. Whatever you think.',
    'Are we done?',
  ],
  hostile: [
    'who cares, pig',
    'you lot have nothing better to do',
    'this is harassment, I know my rights',
    'shut up and write the ticket then',
  ],
  briber: [
    'Look, I have got two hundred in cash here, we can sort this out between us.',
    'Come on, nobody needs to know. Three hundred.',
    'Everyone does it. Take the money.',
    'Your loss.',
  ],
}

interface Result {
  scenario: string
  archetype: string
  opening: number
  final: number
  verdict: string
  turns: number
  peak: number
}

async function play(scenario: string, archetype: string): Promise<Result> {
  const facts = scenarios[scenario]
  const it = new Interrogation(facts)
  const opening = it.disposition
  let peak = opening
  await it.open()
  const lines = archetypes[archetype].map((l) =>
    l.replace('{color}', facts.playerCarColor).replace('{kind}', facts.playerCarKind),
  )
  let verdict = 'pending'
  let turns = 0
  for (const line of lines) {
    const t = await it.playerSays(line)
    turns++
    peak = Math.max(peak, t.disposition)
    if (t.verdict !== 'pending') {
      verdict = t.verdict
      break
    }
  }
  // ran out of things to say: the room forces a verdict on the clock
  if (verdict === 'pending') verdict = `${it.forceVerdict()}*`
  return { scenario, archetype, opening, final: it.disposition, verdict, turns, peak }
}

async function main() {
  const jobs: Array<[string, string]> = []
  for (let r = 0; r < REPS; r++)
    for (const s of Object.keys(scenarios)) for (const a of Object.keys(archetypes)) jobs.push([s, a])

  const results: Result[] = []
  let next = 0
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < jobs.length) {
        const [s, a] = jobs[next++]
        results.push(await play(s, a))
      }
    }),
  )

  console.log(`\nrelease at ${RELEASE_AT}+   (* = forced on the clock, not said out loud)\n`)
  for (const s of Object.keys(scenarios)) {
    console.log(`— ${s} —`)
    for (const a of Object.keys(archetypes)) {
      const rs = results.filter((r) => r.scenario === s && r.archetype === a)
      const won = rs.filter((r) => r.verdict.startsWith('release'))
      const finals = rs.map((r) => r.final)
      const avg = (finals.reduce((x, y) => x + y, 0) / rs.length).toFixed(0)
      const peak = Math.max(...rs.map((r) => r.peak))
      // turns-to-release is the real measure of the fast road vs the slow one
      const pace = won.length ? `in ${(won.reduce((x, r) => x + r.turns, 0) / won.length).toFixed(1)} turns` : '—'
      console.log(
        `  ${a.padEnd(15)} open ${String(rs[0].opening).padStart(2)} → avg ${String(avg).padStart(3)} ` +
          `(peak ${String(peak).padStart(3)})  release ${won.length}/${rs.length} ${pace.padEnd(14)} [${rs.map((r) => r.verdict).join(' ')}]`,
      )
    }
    console.log()
  }
}

main()
