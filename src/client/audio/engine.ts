// Vehicle + world audio (Part 6): RPM-crossfaded loop bank + synth sub-layer +
// throttle load split, synthesized tire screech (no sample exists in the packs),
// offroad rumble, impacts, horn, and the gapless music loop.
import { CarState } from '../../shared/physics'
import { TUNING } from '../../shared/constants'

async function fetchBuffer(ctx: AudioContext, url: string): Promise<AudioBuffer> {
  const res = await fetch(url)
  const arr = await res.arrayBuffer()
  return ctx.decodeAudioData(arr)
}

interface LoopVoice {
  src: AudioBufferSourceNode
  gain: GainNode
  nativeRpm: number
}

export class GameAudio {
  ctx: AudioContext
  master: GainNode
  vehicleBus: GainNode
  musicBus: GainNode
  private loops: LoopVoice[] = []
  private sub!: OscillatorNode
  private subGain!: GainNode
  private onGain!: GainNode // on-throttle path (waveshaped)
  private offGain!: GainNode // off-throttle path (lowpassed)
  private screech!: GainNode
  private screechFilter!: BiquadFilterNode
  private rumble!: GainNode
  private hornBuf: AudioBuffer | null = null
  private brakeBuf: AudioBuffer | null = null
  private throttleSmooth = 0
  // police siren: no sample exists in the packs, so it's synthesized like the screech
  private siren!: OscillatorNode
  private sirenLfo!: OscillatorNode
  private sirenGain!: GainNode
  // the traffic stop: everything else drops out and one loop plays under Bram
  private stopBuf: AudioBuffer | null = null
  private stopSrc: AudioBufferSourceNode | null = null
  private stopGain: GainNode | null = null
  private copSfx: Record<'open' | 'happy' | 'annoyed', AudioBuffer | null> = { open: null, happy: null, annoyed: null }
  interrogating = false
  // car radio: static burst → radio.mp3 (replaces the old always-on music loop)
  private radioBuf: AudioBuffer | null = null
  private staticBuf: AudioBuffer | null = null
  private radioSrc: AudioBufferSourceNode | null = null
  private radioGain: GainNode | null = null
  private radioStartedAt = 0 // ctx time the station "began broadcasting" (for resume-in-progress)
  radioOn = true
  ready = false

  constructor() {
    this.ctx = new AudioContext()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.8
    const comp = this.ctx.createDynamicsCompressor()
    comp.threshold.value = -12
    comp.ratio.value = 6
    this.master.connect(comp)
    comp.connect(this.ctx.destination)
    this.vehicleBus = this.ctx.createGain()
    this.vehicleBus.gain.value = 0.9
    this.vehicleBus.connect(this.master)
    this.musicBus = this.ctx.createGain()
    this.musicBus.gain.value = 0.16 // ~-18 dB under the vehicle bus
    this.musicBus.connect(this.master)
  }

  async init(): Promise<void> {
    const ctx = this.ctx
    await ctx.resume()

    // --- car radio: static burst, then the station fades in (M toggles) ---
    Promise.all([
      fetchBuffer(ctx, '/assets/audio/radio.mp3'),
      fetchBuffer(ctx, '/assets/audio/radio-static.mp3'),
    ]).then(([radio, stat]) => {
      this.radioBuf = radio
      this.staticBuf = stat
      this.radioStartedAt = ctx.currentTime
      if (this.radioOn) this.tuneIn()
    })

    // --- engine loop bank: 3 bands, pitch-tracked, equal-power crossfade ---
    const [idle, low, high] = await Promise.all([
      fetchBuffer(ctx, '/assets/audio/car/Car_Engine_Loop.ogg'),
      fetchBuffer(ctx, '/assets/audio/car/Car_Engine_Loop_2.ogg'),
      fetchBuffer(ctx, '/assets/audio/car/Car2_Engine_Loop.ogg'),
    ])

    // load split: on-throttle → soft saturation, off-throttle → lowpass
    const shaper = ctx.createWaveShaper()
    const curve = new Float32Array(256)
    for (let i = 0; i < 256; i++) {
      const x = (i / 255) * 2 - 1
      curve[i] = Math.tanh(x * 1.8)
    }
    shaper.curve = curve
    this.onGain = ctx.createGain()
    this.onGain.gain.value = 0
    this.onGain.connect(shaper)
    shaper.connect(this.vehicleBus)

    const offLp = ctx.createBiquadFilter()
    offLp.type = 'lowpass'
    offLp.frequency.value = 900
    this.offGain = ctx.createGain()
    this.offGain.gain.value = 1
    this.offGain.connect(offLp)
    offLp.connect(this.vehicleBus)

    const bands: Array<[AudioBuffer, number]> = [
      [idle, 1700],
      [low, 3300],
      [high, 5600],
    ]
    for (const [buf, nativeRpm] of bands) {
      const src = ctx.createBufferSource()
      src.buffer = buf
      src.loop = true
      const gain = ctx.createGain()
      gain.gain.value = 0
      src.connect(gain)
      gain.connect(this.onGain)
      gain.connect(this.offGain)
      src.start()
      this.loops.push({ src, gain, nativeRpm })
    }

    // synth sub-layer: the chest of the sound. f = RPM/60 × cyl/2
    this.sub = ctx.createOscillator()
    this.sub.type = 'triangle'
    const subLp = ctx.createBiquadFilter()
    subLp.type = 'lowpass'
    subLp.frequency.value = 220
    this.subGain = ctx.createGain()
    this.subGain.gain.value = 0.12
    this.sub.connect(subLp)
    subLp.connect(this.subGain)
    this.subGain.connect(this.vehicleBus)
    this.sub.start()

    // synthesized screech: looped noise → resonant bandpass
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate)
    const data = noiseBuf.getChannelData(0)
    let lp = 0
    for (let i = 0; i < data.length; i++) {
      const w = Math.random() * 2 - 1
      lp += (w - lp) * 0.25
      data[i] = lp * 2.2
    }
    const noise = ctx.createBufferSource()
    noise.buffer = noiseBuf
    noise.loop = true
    this.screechFilter = ctx.createBiquadFilter()
    this.screechFilter.type = 'bandpass'
    this.screechFilter.frequency.value = 2300
    this.screechFilter.Q.value = 5
    this.screech = ctx.createGain()
    this.screech.gain.value = 0
    noise.connect(this.screechFilter)
    this.screechFilter.connect(this.screech)
    this.screech.connect(this.vehicleBus)
    noise.start()

    // --- police siren: sawtooth wail, LFO-swept between two tones, speaker-banded ---
    this.siren = ctx.createOscillator()
    this.siren.type = 'sawtooth'
    this.siren.frequency.value = 620
    this.sirenLfo = ctx.createOscillator()
    this.sirenLfo.type = 'sine'
    this.sirenLfo.frequency.value = 0.45 // wail period ≈ 2.2 s
    const lfoDepth = ctx.createGain()
    lfoDepth.gain.value = 175 // ±175 Hz around 620
    this.sirenLfo.connect(lfoDepth)
    lfoDepth.connect(this.siren.frequency)
    const sirenBand = ctx.createBiquadFilter()
    sirenBand.type = 'bandpass'
    sirenBand.frequency.value = 800
    sirenBand.Q.value = 1.4
    this.sirenGain = ctx.createGain()
    this.sirenGain.gain.value = 0
    this.siren.connect(sirenBand)
    sirenBand.connect(this.sirenGain)
    this.sirenGain.connect(this.vehicleBus)
    this.siren.start()
    this.sirenLfo.start()

    // offroad rumble: same noise, low band
    const rumbleFilter = ctx.createBiquadFilter()
    rumbleFilter.type = 'lowpass'
    rumbleFilter.frequency.value = 260
    this.rumble = ctx.createGain()
    this.rumble.gain.value = 0
    noise.connect(rumbleFilter)
    rumbleFilter.connect(this.rumble)
    this.rumble.connect(this.vehicleBus)

    // the stop: loop + Bram's stingers
    fetchBuffer(ctx, '/assets/audio/background-loop.mp3').then((b) => (this.stopBuf = b))
    fetchBuffer(ctx, '/assets/audio/cop-first-message.mp3').then((b) => (this.copSfx.open = b))
    fetchBuffer(ctx, '/assets/audio/cop-happy.mp3').then((b) => (this.copSfx.happy = b))
    fetchBuffer(ctx, '/assets/audio/cop-annoyed.mp3').then((b) => (this.copSfx.annoyed = b))

    fetchBuffer(ctx, '/assets/audio/car/Car_Horn.ogg').then((b) => (this.hornBuf = b))
    fetchBuffer(ctx, '/assets/audio/car/Car_Parking_Brake.ogg').then((b) => (this.brakeBuf = b))

    this.ready = true
  }

  private playOneShot(buf: AudioBuffer | null, gain = 1, rate = 1): void {
    if (!buf) return
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    src.playbackRate.value = rate
    const g = this.ctx.createGain()
    g.gain.value = gain
    src.connect(g)
    g.connect(this.vehicleBus)
    src.start()
  }

  // `near` 0..1 — remote honks fall off with distance instead of blaring from
  // across the village at full volume
  horn(near = 1): void {
    this.playOneShot(this.hornBuf, 0.42 * near)
  }

  // --- car radio ---
  toggleRadio(): void {
    this.radioOn = !this.radioOn
    if (!this.radioBuf) return // still loading; state applies when buffers land
    if (this.radioOn) this.tuneIn()
    else this.tuneOut()
  }

  // burst of static through the music bus (radio tuning noise)
  private playStatic(dur: number): void {
    if (!this.staticBuf) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.staticBuf
    src.loop = true // safety if the sample is shorter than dur
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(1.1, t + 0.06)
    g.gain.setValueAtTime(1.1, t + Math.max(0.07, dur - 0.15))
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(g)
    g.connect(this.musicBus)
    src.start(t)
    src.stop(t + dur + 0.05)
  }

  private tuneIn(): void {
    if (!this.radioBuf) return
    const t = this.ctx.currentTime
    this.playStatic(0.85)
    const src = this.ctx.createBufferSource()
    src.buffer = this.radioBuf
    src.loop = true
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t + 0.55)
    g.gain.exponentialRampToValueAtTime(1, t + 1.0)
    src.connect(g)
    g.connect(this.musicBus)
    // the station kept broadcasting while the radio was off — resume mid-song
    const offset = Math.max(0, (t - this.radioStartedAt) % this.radioBuf.duration)
    src.start(t + 0.55, offset)
    this.radioSrc = src
    this.radioGain = g
  }

  private tuneOut(): void {
    const t = this.ctx.currentTime
    this.playStatic(0.7)
    if (this.radioSrc && this.radioGain) {
      this.radioGain.gain.setTargetAtTime(0.0001, t, 0.05)
      this.radioSrc.stop(t + 0.35)
      this.radioSrc = null
      this.radioGain = null
    }
  }

  handbrakePull(): void {
    this.playOneShot(this.brakeBuf, 0.5)
  }

  // short static blip announcing a police-band transmission (routes to master —
  // the scanner is not part of the car and must cut through a pursuit)
  radioCrackle(): void {
    if (!this.staticBuf) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.staticBuf
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.3, t + 0.04)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4)
    src.connect(g)
    g.connect(this.master)
    src.start(t)
    src.stop(t + 0.45)
  }

  // --- police ---
  // `dist` in metres from the local car; the siren fades out past ~90 m.
  updateSiren(active: boolean, dist: number): void {
    if (!this.ready) return
    const near = Math.max(0, 1 - dist / 90)
    const target = active ? 0.035 + near * near * 0.16 : 0
    this.sirenGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.25)
  }

  // Pulled over: the world goes quiet — engine, tyres, siren and the radio all drop
  // out and a single loop plays under the conversation.
  setInterrogation(on: boolean): void {
    if (!this.ready || this.interrogating === on) return
    this.interrogating = on
    const t = this.ctx.currentTime
    this.vehicleBus.gain.setTargetAtTime(on ? 0 : 0.9, t, 0.25)
    this.musicBus.gain.setTargetAtTime(on ? 0 : 0.16, t, 0.25)
    if (on) {
      if (this.radioSrc && this.radioGain) {
        // leave radioOn alone — his radio resumes where it left off afterwards
        this.radioGain.gain.setTargetAtTime(0.0001, t, 0.2)
        this.radioSrc.stop(t + 0.6)
        this.radioSrc = null
        this.radioGain = null
      }
      if (this.stopBuf && !this.stopSrc) {
        const src = this.ctx.createBufferSource()
        src.buffer = this.stopBuf
        src.loop = true
        const g = this.ctx.createGain()
        g.gain.setValueAtTime(0.0001, t)
        g.gain.exponentialRampToValueAtTime(1.7, t + 1.2)
        src.connect(g)
        g.connect(this.master)
        src.start(t)
        this.stopSrc = src
        this.stopGain = g
      }
    } else {
      if (this.stopSrc && this.stopGain) {
        this.stopGain.gain.setTargetAtTime(0.0001, t, 0.3)
        this.stopSrc.stop(t + 1.2)
        this.stopSrc = null
        this.stopGain = null
      }
      if (this.radioOn) this.tuneIn() // back to the station, mid-song
    }
  }

  // one stinger per beat of the stop: his opener, then each swing in his mood
  copSting(kind: 'open' | 'happy' | 'annoyed'): void {
    if (!this.ready) return
    const buf = this.copSfx[kind]
    if (!buf) return
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    const g = this.ctx.createGain()
    g.gain.value = 3.4 // he's leaning in your window — these carry the scene
    src.connect(g)
    g.connect(this.master) // master, not vehicleBus — that's muted during the stop
    src.start()
  }

  // short rising whoop the moment he decides you're worth chasing
  sirenChirp(): void {
    if (!this.ready) return
    const t = this.ctx.currentTime
    const o = this.ctx.createOscillator()
    o.type = 'sawtooth'
    o.frequency.setValueAtTime(380, t)
    o.frequency.exponentialRampToValueAtTime(1050, t + 0.35)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.05)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45)
    o.connect(g)
    g.connect(this.vehicleBus)
    o.start(t)
    o.stop(t + 0.5)
  }

  // the near-miss whoosh: a fast air swell right past the window
  nearMiss(gain = 1): void {
    if (!this.ready) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const dur = 0.28
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
    const src = ctx.createBufferSource()
    src.buffer = buf
    const f = ctx.createBiquadFilter()
    f.type = 'bandpass'
    f.Q.value = 1.2
    f.frequency.setValueAtTime(420, t)
    f.frequency.exponentialRampToValueAtTime(1600, t + dur * 0.6)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.16 * gain, t + 0.07)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(f)
    f.connect(g)
    g.connect(this.vehicleBus)
    src.start(t)
  }

  crash(intensity: number): void {
    // filtered noise burst — no crash sample in the packs
    const ctx = this.ctx
    const dur = 0.25
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2)
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    const f = ctx.createBiquadFilter()
    f.type = 'lowpass'
    f.frequency.value = 700 + intensity * 300
    const g = ctx.createGain()
    g.gain.value = Math.min(0.9, 0.25 + intensity * 0.1)
    src.connect(f)
    f.connect(g)
    g.connect(this.vehicleBus)
    src.start()
  }

  update(car: CarState, throttle: number, drifting: boolean, dt: number): void {
    if (!this.ready) return
    const t = this.ctx.currentTime
    const rpm = car.rpm

    // crossfade the loop bank around current RPM (pitched down ~4 semitones for a deeper voice)
    for (const v of this.loops) {
      v.src.playbackRate.setTargetAtTime((rpm / v.nativeRpm) * 0.8, t, 0.03)
    }
    if (this.loops.length === 3) {
      const [a, b, c] = this.loops
      const x = Math.max(0, Math.min(1, (rpm - a.nativeRpm) / (b.nativeRpm - a.nativeRpm)))
      const y = Math.max(0, Math.min(1, (rpm - b.nativeRpm) / (c.nativeRpm - b.nativeRpm)))
      a.gain.gain.setTargetAtTime(Math.cos(x * Math.PI * 0.5) * 0.28, t, 0.05)
      b.gain.gain.setTargetAtTime((Math.sin(x * Math.PI * 0.5) * Math.cos(y * Math.PI * 0.5)) * 0.31, t, 0.05)
      c.gain.gain.setTargetAtTime(Math.sin(y * Math.PI * 0.5) * 0.31, t, 0.05)
    }

    // load split crossfade (~120 ms smoothing)
    this.throttleSmooth += (throttle - this.throttleSmooth) * Math.min(1, dt / 0.12)
    this.onGain.gain.setTargetAtTime(this.throttleSmooth, t, 0.05)
    this.offGain.gain.setTargetAtTime(1 - this.throttleSmooth * 0.8, t, 0.05)

    // sub oscillator: 4 cylinders → firing freq = rpm/60 * 2 (× the same 0.88 pitch-down as the loops)
    this.sub.frequency.setTargetAtTime((rpm / 60) * 2 * 0.8, t, 0.03)
    this.subGain.gain.setTargetAtTime(0.12 + this.throttleSmooth * 0.09, t, 0.05)

    // screech from lateral slip past the grip peak (asphalt only)
    const surf = [car.surfFL, car.surfFR, car.surfRL, car.surfRR]
    const onAsphalt = surf.filter((s) => s === 'asphalt' || s === 'curb').length >= 2
    const slip = Math.max(Math.abs(car.slipRear) - TUNING.peakSlipRear, 0)
    const speed = Math.abs(car.speed)
    const screechAmt = onAsphalt && speed > 4 ? Math.min(0.5, slip * 2.2) * Math.min(1, speed / 12) : 0
    this.screech.gain.setTargetAtTime(screechAmt * (drifting ? 1 : 0.7), t, 0.04)
    this.screechFilter.frequency.setTargetAtTime(2100 + Math.abs(car.slipAngle) * 900, t, 0.05)

    // offroad rumble keyed to speed
    const offWheels = surf.filter((s) => s === 'offroad').length + surf.filter((s) => s === 'dirt').length * 0.6
    this.rumble.gain.setTargetAtTime(offWheels > 0 ? Math.min(0.4, (speed / 25) * (offWheels / 4)) : 0, t, 0.06)

    // music ducks ~3 dB while mid-drift-chain, swells back between runs
    this.musicBus.gain.setTargetAtTime(drifting ? 0.11 : 0.16, t, 0.6)
  }
}
