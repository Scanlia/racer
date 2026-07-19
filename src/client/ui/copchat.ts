// The traffic stop overlay: Bram's lines, his mood, your reply box, and the clock.
// The disposition number is deliberately never shown — reading him is the game.
import { CopTurnMsg } from '../net/net'

export class CopChat {
  private el: HTMLElement
  private log: HTMLElement
  private input: HTMLInputElement
  private clock: HTMLElement
  private banner: HTMLElement
  open = false
  private deadline = 0
  private onSend: (text: string) => void = () => {}

  constructor() {
    this.el = document.createElement('div')
    this.el.id = 'cop-chat'
    this.el.style.display = 'none'
    this.el.innerHTML = `
      <div id="cop-frame">
        <div id="cop-head"><span id="cop-who">SGT. BRAM HOLLIS · MILLBROOK POLICE</span><span id="cop-clock">90</span></div>
        <div id="cop-log"></div>
        <input id="cop-input" maxlength="200" placeholder="say something…" autocomplete="off" />
      </div>
      <div id="cop-banner"></div>
    `
    document.body.appendChild(this.el)
    this.log = this.el.querySelector('#cop-log')!
    this.input = this.el.querySelector('#cop-input') as HTMLInputElement
    this.clock = this.el.querySelector('#cop-clock')!
    this.banner = this.el.querySelector('#cop-banner')!

    this.input.addEventListener('keydown', (e) => {
      e.stopPropagation() // never let WASD in the reply box drive the car
      if (e.code !== 'Enter') return
      const text = this.input.value.trim()
      if (!text) return
      this.push('you', text)
      this.input.value = ''
      this.input.disabled = true
      this.onSend(text)
    })
  }

  isTyping(): boolean {
    return document.activeElement === this.input
  }

  start(turn: CopTurnMsg, onSend: (text: string) => void): void {
    this.onSend = onSend
    this.open = true
    this.log.innerHTML = ''
    this.banner.className = ''
    this.banner.textContent = ''
    this.el.style.display = 'block'
    this.deadline = performance.now() / 1000 + (turn.timeLimit ?? 90)
    this.say(turn)
    this.input.disabled = false
    this.input.focus()
  }

  say(turn: CopTurnMsg): void {
    this.push('bram', turn.reply, turn.mood)
    this.input.disabled = false
    if (this.open) this.input.focus()
  }

  private push(who: 'bram' | 'you', text: string, mood?: string): void {
    const line = document.createElement('div')
    line.className = 'cop-line ' + who
    line.textContent = text
    this.log.appendChild(line)
    if (mood) {
      const m = document.createElement('div')
      m.className = 'cop-mood'
      m.textContent = '«' + mood + '»'
      this.log.appendChild(m)
    }
    this.log.scrollTop = this.log.scrollHeight
  }

  verdict(v: 'release' | 'fine' | 'arrest', seized: number, charm = false): void {
    this.input.disabled = true
    this.input.blur()
    this.banner.className = 'show ' + v
    this.banner.textContent =
      v === 'arrest' ? `BOOKED — ${seized} POINTS SEIZED`
      : v === 'fine' ? `ON-THE-SPOT FINE — ${seized} POINTS`
      : charm ? 'HE ALMOST SMILES — OFF YOU GO'
      : 'LET OFF WITH A WARNING'
    setTimeout(() => {
      this.el.style.display = 'none'
      this.banner.className = ''
      this.open = false
    }, 2600)
  }

  // returns seconds left; closes nothing (the server owns the verdict)
  tick(): void {
    if (!this.open) return
    const left = Math.max(0, this.deadline - performance.now() / 1000)
    const secs = Math.ceil(left)
    this.clock.textContent = secs >= 60 ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` : String(secs)
    this.clock.style.color = left < 15 ? '#ff7a6b' : '#7c86ad'
  }
}
