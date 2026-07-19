// Bram on the police band during a pursuit: short dry lines pushed to the target's
// radio. Canned pool with telemetry templating always works; with an API key each
// line is generated live (haiku, hard 3 s timeout) and the pool is the fallback.
import Anthropic from '@anthropic-ai/sdk'

export interface TauntCtx {
  zone: string // 'the forest road', ...
  speedKmh: number
  distM: number // cop → target
  chaseT: number
  offenses: number // tonight, this driver
  colour: string
  kind: string // 'estate', 'van', ...
}

const MODEL = process.env.INTERROGATION_MODEL || 'claude-haiku-4-5'

// ${} placeholders are filled from ctx. Grouped by when they land best.
const OPENERS = [
  'All units, in pursuit of a ${colour} ${kind}. All units meaning me. As usual.',
  'Dispatch, that ${colour} ${kind} again. No hurry on the kettle.',
  'Control, one vehicle failing to stop on ${zone}. I know. I saw my lights too.',
]
const MID = [
  '${speed} through ${zone}. Your engine sounds more tired than I am.',
  'I have done this road twenty-six years, son. You have done it twice tonight.',
  'The mist does not hide a ${colour} ${kind}. Nothing hides a ${colour} ${kind}.',
  'You do know this road is a circle. I will just wait, then.',
  'Fuel is not free, you know. Mine comes out of a budget. Yours comes out of pride.',
  'Dispatch, cancel the helicopter. We do not have a helicopter. Carry on.',
]
const CLOSE = [
  'I can read your number plate from here. I have already read it, in fact.',
  'Right behind you. This ends with paperwork either way — yours or mine.',
  'Mind the hedge. The hedge has done nothing to you.',
]
const FAST = [
  '${speed} km/h. In the mist. At two in the morning. Bold.',
  'Clocked you at ${speed}. The speedo is not a suggestion box.',
]
const REPEAT = [
  'You again. I am starting to know the back of that ${kind} better than my own drive.',
  'Second time tonight. The paperwork writes itself now. It has a template.',
]

function fill(line: string, ctx: TauntCtx): string {
  return line
    .replaceAll('${colour}', ctx.colour)
    .replaceAll('${kind}', ctx.kind)
    .replaceAll('${zone}', ctx.zone)
    .replaceAll('${speed}', String(Math.round(ctx.speedKmh)))
}

export class RadioTaunter {
  private used = new Set<string>()
  private client: Anthropic | null

  constructor() {
    this.client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null
  }

  async taunt(ctx: TauntCtx): Promise<string> {
    if (this.client) {
      try {
        const timeout = new Promise<never>((_, rej) => setTimeout(() => rej(new Error('taunt timeout')), 3000))
        return await Promise.race([this.llm(ctx), timeout])
      } catch {
        /* the pool never times out */
      }
    }
    return this.canned(ctx)
  }

  private canned(ctx: TauntCtx): string {
    const pools: string[][] = []
    if (ctx.offenses > 1) pools.push(REPEAT)
    if (ctx.chaseT < 8) pools.push(OPENERS)
    if (ctx.distM < 18) pools.push(CLOSE)
    if (ctx.speedKmh > 120) pools.push(FAST)
    pools.push(MID)
    const candidates = pools.flat().filter((l) => !this.used.has(l))
    if (!candidates.length) {
      this.used.clear()
      return this.canned(ctx)
    }
    const line = candidates[Math.floor(Math.random() * candidates.length)]
    this.used.add(line)
    return fill(line, ctx)
  }

  private async llm(ctx: TauntCtx): Promise<string> {
    const res = await this.client!.messages.create({
      model: MODEL,
      max_tokens: 60,
      system:
        'You are Sergeant Bram Hollis, 54, the lone night-shift officer of a small country village, mid-pursuit, speaking over the police radio so the fleeing driver hears it on the scanner. One line only, under 20 words. Dry, tired, understated, never cruel, no exclamation marks. No quotes, no stage directions.',
      messages: [{
        role: 'user',
        content: `Pursuit telemetry: chasing a ${ctx.colour} ${ctx.kind} on ${ctx.zone}; their speed ${Math.round(ctx.speedKmh)} km/h; you are ${Math.round(ctx.distM)} m behind; chase running ${Math.round(ctx.chaseT)}s; their offenses tonight: ${ctx.offenses}. Say your one radio line now.`,
      }],
    })
    const text = res.content.filter((c) => c.type === 'text').map((c) => c.text).join('').trim()
    if (!text) throw new Error('empty taunt')
    return text.slice(0, 160)
  }
}
