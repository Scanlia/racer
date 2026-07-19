// Provider-agnostic LLM adapter for the interrogation.
//
// Anthropic stays the default so upstream deployments are unchanged by this file;
// setting LLM_PROVIDER=gemini swaps the backend without the interrogation logic
// knowing which model it is talking to. Both providers return schema-valid JSON
// text, so parse()/verdict enforcement in interrogation.ts is untouched.
//
// env:
//   LLM_PROVIDER            'anthropic' (default) | 'gemini'
//   ANTHROPIC_API_KEY       required when provider is anthropic
//   GEMINI_API_KEY          required when provider is gemini
//   INTERROGATION_MODEL     overrides the provider's default model
//   GEMINI_THINKING_BUDGET  thinking tokens, default 0 (see GeminiProvider)
import Anthropic from '@anthropic-ai/sdk'

export interface LlmMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface LlmRequest {
  system: string
  messages: LlmMessage[]
  schema: Record<string, unknown>
  maxTokens: number
}

export interface LlmProvider {
  readonly name: string
  readonly model: string
  /** Returns JSON text conforming to req.schema. Throws LlmError on any failure. */
  complete(req: LlmRequest): Promise<string>
}

export class LlmError extends Error {
  readonly status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'LlmError'
    this.status = status
  }

  get rateLimited(): boolean {
    return this.status === 429
  }
}

const REQUEST_TIMEOUT_MS = 20_000

// Haiku: a traffic stop is a fast back-and-forth — latency matters more than depth.
const ANTHROPIC_DEFAULT_MODEL = 'claude-haiku-4-5'
// Gemini 3.5 Flash, for the same reason.
const GEMINI_DEFAULT_MODEL = 'gemini-3.5-flash'

class AnthropicProvider implements LlmProvider {
  readonly name = 'anthropic'
  readonly model = process.env.INTERROGATION_MODEL || ANTHROPIC_DEFAULT_MODEL
  private client = new Anthropic()

  async complete(req: LlmRequest): Promise<string> {
    try {
      const res = await this.client.messages.create(
        {
          model: this.model,
          max_tokens: req.maxTokens,
          system: req.system,
          output_config: { format: { type: 'json_schema', schema: req.schema } },
          messages: req.messages,
        },
        { timeout: REQUEST_TIMEOUT_MS },
      )
      return res.content
        .filter((c) => c.type === 'text')
        .map((c) => c.text)
        .join('')
    } catch (e) {
      if (e instanceof Anthropic.APIError) throw new LlmError(e.message, e.status)
      throw new LlmError(e instanceof Error ? e.message : String(e))
    }
  }
}

// Gemini's structured-output schema is an OpenAPI subset: it rejects the JSON
// Schema keywords Anthropic accepts, so strip anything it does not understand
// rather than maintaining two copies of TURN_SCHEMA.
const GEMINI_SCHEMA_KEYS = new Set(['type', 'description', 'enum', 'properties', 'required', 'items', 'nullable'])

function toGeminiSchema(schema: unknown): unknown {
  if (Array.isArray(schema)) return schema.map(toGeminiSchema)
  if (schema === null || typeof schema !== 'object') return schema
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(schema as Record<string, unknown>)) {
    if (!GEMINI_SCHEMA_KEYS.has(k)) continue // drops additionalProperties, $schema, ...
    if (k === 'properties') {
      // a name→schema map: recurse into the values, never filter the names
      const props: Record<string, unknown> = {}
      for (const [name, sub] of Object.entries(v as Record<string, unknown>)) props[name] = toGeminiSchema(sub)
      out[k] = props
    } else if (k === 'items') {
      out[k] = toGeminiSchema(v)
    } else {
      out[k] = v
    }
  }
  return out
}

interface GeminiPart {
  text?: string
  thought?: boolean
}

class GeminiProvider implements LlmProvider {
  readonly name = 'gemini'
  readonly model = process.env.INTERROGATION_MODEL || GEMINI_DEFAULT_MODEL
  // Gemini 3.x Flash is a thinking model and thinking tokens come out of the SAME
  // budget as the reply — with thinking on, a 400-token cap is spent reasoning and
  // the JSON truncates to nothing. Bram needs a fast one-liner, not deliberation,
  // so thinking is off by default. Note only 0 disables it: small positive budgets
  // are treated as a hint and overrun.
  private readonly thinkingBudget = Number(process.env.GEMINI_THINKING_BUDGET ?? 0)

  constructor(private readonly apiKey: string) {}

  async complete(req: LlmRequest): Promise<string> {
    const body = {
      systemInstruction: { parts: [{ text: req.system }] },
      contents: req.messages.map((m) => ({
        // Gemini names the assistant turn 'model'
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      })),
      generationConfig: {
        maxOutputTokens: req.maxTokens,
        responseMimeType: 'application/json',
        responseSchema: toGeminiSchema(req.schema),
        thinkingConfig: { thinkingBudget: this.thinkingBudget },
      },
    }

    let res: Response
    try {
      res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': this.apiKey },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        },
      )
    } catch (e) {
      throw new LlmError(e instanceof Error ? e.message : String(e))
    }

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      throw new LlmError(detail.slice(0, 300) || res.statusText, res.status)
    }

    const json = (await res.json()) as {
      candidates?: Array<{ finishReason?: string; content?: { parts?: GeminiPart[] } }>
    }
    const candidate = json.candidates?.[0]
    if (!candidate) throw new LlmError('no candidate returned')
    // A truncated reply is unparseable JSON — surface it as a failure so the caller
    // falls back to scripted Bram instead of throwing inside JSON.parse.
    if (candidate.finishReason && candidate.finishReason !== 'STOP') {
      throw new LlmError(`finishReason ${candidate.finishReason}`)
    }
    const text = (candidate.content?.parts ?? [])
      .filter((p) => !p.thought && typeof p.text === 'string')
      .map((p) => p.text)
      .join('')
    if (!text) throw new LlmError('empty response')
    return text
  }
}

/** Builds the configured provider, or null (→ scripted Bram) if no key is present. */
export function createProvider(): LlmProvider | null {
  const which = (process.env.LLM_PROVIDER || 'anthropic').toLowerCase()
  if (which === 'gemini') {
    const key = process.env.GEMINI_API_KEY
    if (!key) {
      console.warn('[llm] LLM_PROVIDER=gemini but GEMINI_API_KEY is unset — scripted fallback')
      return null
    }
    return new GeminiProvider(key)
  }
  if (which === 'anthropic') {
    if (!process.env.ANTHROPIC_API_KEY) return null // scripted Bram, so dev works offline
    return new AnthropicProvider()
  }
  console.warn(`[llm] unknown LLM_PROVIDER "${which}" — scripted fallback`)
  return null
}
