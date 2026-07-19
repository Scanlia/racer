// Persistent village record, keyed by driver name (lowercased): best session
// total, best single chain, and the rap sheet (arrests / fines) that follows a
// name across nights — Bram reads it at every stop. JSON file store, debounced
// atomic writes; one process owns it (single Colyseus app), so no locking.
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import path from 'node:path'

export interface WantedEntry {
  name: string // display capitalisation of the most recent session
  bestTotal: number
  bestChain: number
  arrests: number
  fines: number
  lastSeen: number // ms epoch
}

const FILE = path.resolve(process.cwd(), 'data', 'leaderboard.json')

class Leaderboard {
  private entries = new Map<string, WantedEntry>()
  private dirty = false
  private loaded = false

  private load(): void {
    if (this.loaded) return
    this.loaded = true
    try {
      if (existsSync(FILE)) {
        const raw = JSON.parse(readFileSync(FILE, 'utf8')) as WantedEntry[]
        for (const e of raw) this.entries.set(e.name.toLowerCase(), e)
        console.log(`[leaderboard] ${this.entries.size} drivers on record`)
      }
    } catch (e) {
      console.warn('[leaderboard] load failed (starting fresh):', e)
    }
  }

  private touch(name: string): WantedEntry {
    this.load()
    const key = name.trim().toLowerCase() || 'driver'
    let e = this.entries.get(key)
    if (!e) {
      e = { name: name.trim() || 'driver', bestTotal: 0, bestChain: 0, arrests: 0, fines: 0, lastSeen: Date.now() }
      this.entries.set(key, e)
    }
    e.name = name.trim() || e.name
    e.lastSeen = Date.now()
    this.dirty = true
    return e
  }

  get(name: string): WantedEntry | undefined {
    this.load()
    return this.entries.get(name.trim().toLowerCase())
  }

  reportScore(name: string, total: number): void {
    const e = this.touch(name)
    e.bestTotal = Math.max(e.bestTotal, Math.floor(total))
  }

  reportChain(name: string, chain: number): void {
    const e = this.touch(name)
    e.bestChain = Math.max(e.bestChain, Math.floor(chain))
  }

  reportArrest(name: string): void {
    this.touch(name).arrests++
  }

  reportFine(name: string): void {
    this.touch(name).fines++
  }

  top(n: number): WantedEntry[] {
    this.load()
    return [...this.entries.values()]
      .filter((e) => e.bestTotal > 0 || e.arrests > 0)
      .sort((a, b) => b.bestTotal - a.bestTotal)
      .slice(0, n)
  }

  flush(): void {
    if (!this.dirty) return
    this.dirty = false
    try {
      mkdirSync(path.dirname(FILE), { recursive: true })
      const tmp = FILE + '.tmp'
      writeFileSync(tmp, JSON.stringify([...this.entries.values()], null, 1))
      renameSync(tmp, FILE)
    } catch (e) {
      console.warn('[leaderboard] flush failed:', e)
    }
  }
}

export const leaderboard = new Leaderboard()

const timer = setInterval(() => leaderboard.flush(), 30_000)
timer.unref?.()
process.on('beforeExit', () => leaderboard.flush())
