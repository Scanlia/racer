// DOM HUD: analog speedo gauge (canvas), drift score/chain + player list top-right,
// toast events. Styled in index.html.
import { CarState } from '../../shared/physics'
import { DriftScore } from '../../shared/scoring'

export interface PlayerRow {
  name: string
  score: number
  me: boolean
}

const GAUGE_MAX = 220 // km/h at the end of the dial
const A0 = Math.PI * 0.75 // needle angle at 0 (pointing down-left)
const A1 = Math.PI * 2.25 // needle angle at max (down-right)

export class HUD {
  private scoreEl: HTMLElement
  private chainEl: HTMLElement
  private multEl: HTMLElement
  private toastEl: HTMLElement
  private popsEl: HTMLElement
  private playersEl: HTMLElement
  private gauge: HTMLCanvasElement
  private g: CanvasRenderingContext2D
  private pixFont: string
  private toastTimer = 0
  private lastKmh = -1
  private lastGear = ''

  constructor() {
    const root = document.createElement('div')
    root.id = 'hud'
    root.innerHTML = `
      <div id="hud-score">
        <div id="hud-total">0</div>
        <div id="hud-chain-row"><span id="hud-chain"></span><span id="hud-mult"></span></div>
        <div id="hud-players"></div>
      </div>
      <div id="hud-toast"></div>
      <div id="hud-pops"></div>
      <canvas id="hud-gauge" width="200" height="200"></canvas>
      <div id="hud-help">WASD/arrows drive · SPACE handbrake · L lights · C camera · M radio · R reset · H horn · \` tuning</div>
    `
    document.body.appendChild(root)
    this.scoreEl = document.getElementById('hud-total')!
    this.chainEl = document.getElementById('hud-chain')!
    this.multEl = document.getElementById('hud-mult')!
    this.toastEl = document.getElementById('hud-toast')!
    this.popsEl = document.getElementById('hud-pops')!
    this.playersEl = document.getElementById('hud-players')!
    this.gauge = document.getElementById('hud-gauge') as HTMLCanvasElement
    this.g = this.gauge.getContext('2d')!
    this.pixFont = getComputedStyle(root).fontFamily || 'monospace'
    this.drawGauge(0, '1')
  }

  toast(msg: string, cls = ''): void {
    this.toastEl.textContent = msg
    this.toastEl.className = 'show ' + cls
    this.toastTimer = 1.6
  }

  // floating one-shot (near misses): stacks, drifts up, self-destructs
  popup(msg: string, cls = ''): void {
    const el = document.createElement('div')
    el.className = 'hud-pop ' + cls
    el.textContent = msg
    this.popsEl.appendChild(el)
    while (this.popsEl.children.length > 4) this.popsEl.firstChild?.remove()
    setTimeout(() => el.remove(), 1300)
  }

  setPlayers(rows: PlayerRow[]): void {
    const sorted = [...rows].sort((a, b) => b.score - a.score)
    this.playersEl.innerHTML = sorted
      .map((r) => `<div class="${r.me ? 'me' : ''}">${escapeHtml(r.name)}<span>${r.score}</span></div>`)
      .join('')
  }

  update(car: CarState, sc: DriftScore, dt: number): void {
    const kmh = Math.round(Math.abs(car.speed) * 3.6)
    const gear = car.speed < -0.5 ? 'R' : String(car.gear + 1)
    if (kmh !== this.lastKmh || gear !== this.lastGear) {
      this.drawGauge(kmh, gear)
      this.lastKmh = kmh
      this.lastGear = gear
    }
    this.scoreEl.textContent = String(Math.floor(sc.total))
    if (sc.chain > 1) {
      this.chainEl.textContent = '+' + Math.floor(sc.chain)
      this.multEl.textContent = ' ×' + sc.multiplier.toFixed(1)
      this.chainEl.parentElement!.style.opacity = '1'
    } else {
      this.chainEl.parentElement!.style.opacity = '0'
    }
    if (sc.event === 'banked') this.toast('+' + sc.banked + ' BANKED', 'good')
    if (sc.event === 'crashed') this.toast('CRASH — CHAIN LOST', 'bad')
    if (this.toastTimer > 0) {
      this.toastTimer -= dt
      if (this.toastTimer <= 0) this.toastEl.className = ''
    }
  }

  // 90s arcade dial: dark face, chunky ticks, red zone, red needle, gear in the hub
  private drawGauge(kmh: number, gear: string): void {
    const g = this.g
    const cx = 100, cy = 100, R = 92
    g.clearRect(0, 0, 200, 200)

    // face + bezel
    g.beginPath()
    g.arc(cx, cy, R, 0, Math.PI * 2)
    g.fillStyle = 'rgba(7, 9, 16, 0.85)'
    g.fill()
    g.lineWidth = 5
    g.strokeStyle = '#3a4160'
    g.stroke()
    g.beginPath()
    g.arc(cx, cy, R - 4, 0, Math.PI * 2)
    g.lineWidth = 2
    g.strokeStyle = '#12162a'
    g.stroke()

    // red zone arc (last 40 km/h)
    const redFrom = A0 + (A1 - A0) * ((GAUGE_MAX - 40) / GAUGE_MAX)
    g.beginPath()
    g.arc(cx, cy, R - 12, redFrom, A1)
    g.lineWidth = 7
    g.strokeStyle = '#8e2b22'
    g.stroke()

    // ticks + labels
    for (let v = 0; v <= GAUGE_MAX; v += 10) {
      const t = A0 + (A1 - A0) * (v / GAUGE_MAX)
      const major = v % 20 === 0
      const r1 = R - 8
      const r0 = r1 - (major ? 12 : 6)
      g.beginPath()
      g.moveTo(cx + Math.cos(t) * r0, cy + Math.sin(t) * r0)
      g.lineTo(cx + Math.cos(t) * r1, cy + Math.sin(t) * r1)
      g.lineWidth = major ? 3 : 2
      g.strokeStyle = major ? '#cfd6e6' : '#5d6484'
      g.stroke()
      if (v % 40 === 0) {
        const rl = r0 - 12
        g.font = `9px ${this.pixFont}`
        g.fillStyle = '#9aa1c4'
        g.textAlign = 'center'
        g.textBaseline = 'middle'
        g.fillText(String(v), cx + Math.cos(t) * rl, cy + Math.sin(t) * rl)
      }
    }

    // needle
    const t = A0 + (A1 - A0) * Math.min(kmh, GAUGE_MAX) / GAUGE_MAX
    g.beginPath()
    g.moveTo(cx - Math.cos(t) * 14, cy - Math.sin(t) * 14)
    g.lineTo(cx + Math.cos(t) * (R - 24), cy + Math.sin(t) * (R - 24))
    g.lineWidth = 4
    g.strokeStyle = '#e34234'
    g.stroke()

    // hub + gear
    g.beginPath()
    g.arc(cx, cy, 15, 0, Math.PI * 2)
    g.fillStyle = '#12162a'
    g.fill()
    g.lineWidth = 2
    g.strokeStyle = '#3a4160'
    g.stroke()
    g.font = `12px ${this.pixFont}`
    g.fillStyle = '#ffd28a'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillText(gear, cx, cy + 1)

    // unit label
    g.font = `8px ${this.pixFont}`
    g.fillStyle = '#5d6484'
    g.fillText('km/h', cx, cy + 42)
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}
