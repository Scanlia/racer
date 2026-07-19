// NIGHT DRIFT — client entry. Single-player core loop; multiplayer layers on in net/.
import * as THREE from 'three'
import { PSXPipeline } from './renderer/psx'
import { PSX_UNIFORMS } from './renderer/patch'
import { makeSky, FOG_COLOR } from './world/sky'
import { World } from './world/world'
import { loadCar, loadPoliceCar, CarModel } from './world/assets'
import { HeadlightRig, LightBar, buildLampGlows } from './fx/lights'
import { SmokePool } from './fx/particles'
import { Skidmarks } from './fx/skidmarks'
import { HUD } from './ui/hud'
import { CopChat } from './ui/copchat'
import { DebugPanel } from './ui/debug'
import { GameAudio } from './audio/engine'
import { parseMap } from '../shared/map'
import { makeCarState, stepCar, copyCarState, collideCarKinematic, CarState, InputFrame } from '../shared/physics'
import { InputShaper, RawInput } from '../shared/input'
import { TUNING, PHYS_DT, CAR_WIDTH, CAR_LENGTH } from '../shared/constants'
import { makeScore, stepScore, stepNearMiss } from '../shared/scoring'
import { NetClient, RemotePlayer } from './net/net'
import { CARS, DEFAULT_CAR } from '../shared/cars'
import { PIN_TIME } from '../shared/police'

// ---------- join screen ----------
let chosenCar = DEFAULT_CAR
let playerName = 'driver'

function showJoin(): Promise<void> {
  if (new URLSearchParams(location.search).has('auto')) return Promise.resolve()
  return new Promise((resolve) => {
    const el = document.createElement('div')
    el.id = 'join'
    el.innerHTML = `
      <div class="spacer"></div>
      <div class="row"><span>NAME</span><input id="name" maxlength="16" placeholder="driver" /></div>
      <div class="cars">${CARS.map((c, i) => `<button data-i="${i}" class="${i === DEFAULT_CAR ? 'sel' : ''}"><i style="background:${c.swatch}"></i>${c.label}</button>`).join('')}</div>
      <button id="start">DRIVE</button>
      <div class="status" id="join-status"></div>
      <div id="join-board" style="display:none"><u>MILLBROOK — MOST WANTED</u><div id="join-board-rows"></div></div>
    `
    document.body.appendChild(el)

    // tonight's wanted list, straight off the server's village record
    ;(async () => {
      try {
        const isViteDev = location.port === '5173' || location.port === '5174'
        const base = isViteDev ? `${location.protocol}//${location.hostname || 'localhost'}:2567` : ''
        const res = await fetch(base + '/leaderboard')
        const data = (await res.json()) as { top: Array<{ name: string; bestTotal: number; bestChain: number; arrests: number }> }
        if (!data.top?.length) return
        const rows = document.getElementById('join-board-rows')
        const board = document.getElementById('join-board')
        if (!rows || !board) return // already past the join screen
        rows.innerHTML = data.top
          .map((e, i) =>
            `<div><b>${i + 1}.</b><span class="n">${escapeJoin(e.name)}</span><span class="s">${e.bestTotal}</span>` +
            `<span class="x">${e.arrests > 0 ? '⛓' + e.arrests : ''}</span></div>`)
          .join('')
        board.style.display = 'block'
      } catch { /* server asleep — the board just stays hidden */ }
    })()
    el.querySelectorAll('.cars button').forEach((b) => {
      b.addEventListener('click', () => {
        el.querySelectorAll('.cars button').forEach((x) => x.classList.remove('sel'))
        b.classList.add('sel')
        chosenCar = parseInt((b as HTMLElement).dataset.i!)
      })
    })
    const start = () => {
      playerName = (document.getElementById('name') as HTMLInputElement).value.trim() || 'driver'
      el.remove()
      window.removeEventListener('keydown', onKey)
      resolve()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Enter') start()
    }
    document.getElementById('start')!.addEventListener('click', start)
    window.addEventListener('keydown', onKey)
  })
}

function escapeJoin(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

// ---------- boot ----------
async function boot(): Promise<void> {
  await showJoin()

  const canvas = document.getElementById('game') as HTMLCanvasElement
  const pipeline = new PSXPipeline(canvas, 560)
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(FOG_COLOR, 18, 85)

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.3, 950)
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  scene.add(makeSky())

  // Gouraud moonlight for the cars (world is unlit/baked)
  // physical lighting divides by PI — intensities compensate
  scene.add(new THREE.AmbientLight(new THREE.Color(0.66, 0.7, 0.9), 3.4))
  const moon = new THREE.DirectionalLight(new THREE.Color(0.6, 0.65, 0.95), 2.4)
  moon.position.set(30, 60, -40)
  scene.add(moon)

  // ---------- world ----------
  const map = parseMap()
  const world = new World(map)
  await world.build()
  scene.add(world.group)
  scene.add(buildLampGlows(map.lamps, map.mistAt, map.heightAt))

  // parked cars (dressing)
  const parked = map.props.filter((p) => p.kind === 'parked')
  for (const p of parked) {
    const model = await loadCar(0, p.variant)
    model.group.position.set(p.x, map.heightAt(p.x, p.z), p.z)
    model.group.rotation.y = p.rot
    const tint = new THREE.Color()
    world.lampTintAt(p.x, p.z, tint)
    for (const m of model.tintables) m.color.copy(tint)
    scene.add(model.group)
  }

  // ---------- player car ----------
  const carModel: CarModel = await loadCar(chosenCar)
  scene.add(carModel.group)
  const rig = new HeadlightRig(CAR_WIDTH, CAR_LENGTH)
  scene.add(rig.group)

  const smoke = new SmokePool()
  scene.add(smoke.group)
  const skids = new Skidmarks()
  scene.add(skids.mesh)

  const hud = new HUD()
  const debug = new DebugPanel()
  debug.onExtra = (key, v) => {
    const fog = scene.fog as THREE.Fog
    if (key === 'fogNear') fog.near = v
    if (key === 'fogFar') fog.far = v
    if (key === 'vignette') pipeline.blitMat.uniforms.uVignette.value = v
    if (key === 'crush') pipeline.blitMat.uniforms.uCrush.value = v
    if (key === 'dither') pipeline.blitMat.uniforms.uDither.value = v
  }

  const audio = new GameAudio()
  audio.init().catch((e) => console.warn('audio init failed', e))

  // ---------- multiplayer ----------
  const net = new NetClient(map)
  const spawnQ = new URLSearchParams(location.search).get('spawn')?.split(',').map(Number)
  const online = await net.connect(playerName, chosenCar, spawnQ?.[0], spawnQ?.[1])
  console.log('[net]', online ? 'connected to room' : 'offline single-player')
  net.onHorn = (id) => {
    const r = net.remotes.get(id)
    if (!r) return audio.horn()
    audio.horn(Math.max(0, 1 - Math.hypot(r.x - car.x, r.z - car.z) / 85))
  }

  // remote car visuals, created lazily as players appear (the cop is just a remote
  // with bot === 1 — same interpolation path, different model + a light bar)
  interface RemoteVis { model: CarModel; rig: HeadlightRig; tag: HTMLElement | null; bar?: LightBar }
  const remoteVis = new Map<string, RemoteVis>()
  const pending = new Set<string>()
  const tagLayer = document.createElement('div')
  tagLayer.style.cssText = 'position:fixed;inset:0;pointer-events:none;font-family:var(--pix);font-size:11px;color:#cfd2e8;text-shadow:1px 1px 0 #000'
  document.body.appendChild(tagLayer)

  async function ensureRemoteVis(r: RemotePlayer): Promise<void> {
    if (remoteVis.has(r.id) || pending.has(r.id)) return
    pending.add(r.id) // frames keep running while the OBJ loads — don't start it twice
    try {
      const isCop = r.bot === 1
      const model = isCop ? await loadPoliceCar() : await loadCar(r.car)
      const rig = new HeadlightRig(CAR_WIDTH, CAR_LENGTH)
      scene.add(model.group)
      scene.add(rig.group)
      // civilians drive anonymously — no floating tag over the night shift
      let tag: HTMLElement | null = null
      if (r.name) {
        tag = document.createElement('div')
        tag.style.position = 'absolute'
        tag.textContent = r.name
        if (isCop) tag.style.color = '#8fb4ff'
        tagLayer.appendChild(tag)
      }
      const v: RemoteVis = { model, rig, tag }
      if (isCop) {
        v.bar = new LightBar(CAR_LENGTH)
        scene.add(v.bar.group)
      }
      remoteVis.set(r.id, v)
    } catch (e) {
      console.warn('[net] remote model load failed', r.id, e)
    } finally {
      pending.delete(r.id)
    }
  }

  // ---------- the traffic stop ----------
  const copChat = new CopChat()
  const pinRing = document.createElement('div')
  pinRing.id = 'cop-pin'
  pinRing.innerHTML = '<u>PULLING YOU OVER</u><div><i></i></div>'
  const pinFill = pinRing.querySelector('i') as HTMLElement
  document.body.appendChild(pinRing)
  let frozen = false // local car is the interrogation target — server is zeroing it
  net.onCopAggro = (id) => {
    audio.sirenChirp()
    if (id === net.myId) hud.toast('POLICE — PULL OVER', 'bad')
  }
  // the police band: Bram's pursuit lines crackle in bottom-right
  const radioBand = document.createElement('div')
  radioBand.id = 'radio-band'
  radioBand.innerHTML = '<u>POLICE BAND</u><div></div>'
  const radioLine = radioBand.querySelector('div') as HTMLElement
  document.body.appendChild(radioBand)
  let radioTimer = 0
  net.onCopRadio = (text) => {
    audio.radioCrackle()
    radioLine.textContent = text
    radioBand.classList.add('show')
    window.clearTimeout(radioTimer)
    radioTimer = window.setTimeout(() => radioBand.classList.remove('show'), 6500)
  }

  let copMood = 0 // last disposition, to hear which way his mood swung
  net.onCopOpen = (turn) => {
    frozen = true
    for (const k of Object.keys(raw) as (keyof RawInput)[]) raw[k] = false // drop any held key
    audio.setInterrogation(true)
    audio.copSting('open')
    copMood = turn.disposition
    copChat.start(turn, (text) => net.copChat(text))
  }
  net.onCopReply = (turn) => {
    audio.copSting(turn.disposition >= copMood ? 'happy' : 'annoyed')
    copMood = turn.disposition
    copChat.say(turn)
  }
  net.onCopVerdict = (msg) => {
    if (msg.id !== net.myId) return
    copChat.verdict(msg.verdict, msg.seized, msg.charm)
    audio.setInterrogation(false)
    score.total = msg.total // server truth after any seizure
    if (msg.verdict === 'arrest') {
      score.chain = 0
      score.multiplier = 1
    }
    frozen = false
  }

  // ---------- input ----------
  const raw: RawInput = { left: false, right: false, throttle: false, brake: false, handbrake: false }
  let headlights = true
  let pilot = new URLSearchParams(location.search).has('pilot')
  let pilotIdx = -1
  let pilotStuck = 0
  let pilotReverse = 0
  let camMode = 0
  const shaper = new InputShaper()

  const keymap: Record<string, keyof RawInput> = {
    KeyW: 'throttle', ArrowUp: 'throttle',
    KeyS: 'brake', ArrowDown: 'brake',
    KeyA: 'left', ArrowLeft: 'left',
    KeyD: 'right', ArrowRight: 'right',
    Space: 'handbrake',
  }
  window.addEventListener('keydown', (e) => {
    const k = keymap[e.code]
    if (k) {
      if (k === 'handbrake' && !raw.handbrake) audio.handbrakePull()
      raw[k] = true
      e.preventDefault()
    }
    if (e.code === 'KeyL') headlights = !headlights
    if (e.code === 'KeyC') camMode = (camMode + 1) % 3
    if (e.code === 'KeyM') audio.toggleRadio() // car radio on/off (static burst between)
    if (e.code === 'KeyT') camMode = camMode === 3 ? 0 : 3 // debug top-down (was M)
    if (e.code === 'KeyP') pilot = !pilot // loop-following autopilot (demo/debug)
    if (e.code === 'KeyH') { audio.horn(); net.horn() }
    if (e.code === 'KeyR') resetCar()
  })
  window.addEventListener('keyup', (e) => {
    const k = keymap[e.code]
    if (k) raw[k] = false
  })

  // ---------- sim state ----------
  const spawnParam = new URLSearchParams(location.search).get('spawn')?.split(',').map(Number)
  const spawnX = spawnParam?.[0] ?? map.spawn.x
  const spawnZ = spawnParam?.[1] ?? map.spawn.z
  const car = makeCarState(spawnX, spawnZ, map.spawn.yaw)
  net.getSpawn = () => ({ x: car.x, z: car.z })
  // debug state readable from the extension's isolated world (DOM crosses, globals don't)
  setInterval(() => {
    document.body.dataset.dbg = JSON.stringify({
      speed: +car.speed.toFixed(2), rpm: Math.round(car.rpm), gear: car.gear,
      raw: { ...raw }, surf: [car.surfFL, car.surfRL], wallHit: +car.wallHit.toFixed(2),
      x: +car.x.toFixed(1), z: +car.z.toFixed(1), yaw: +car.yaw.toFixed(2),
      slip: +car.slipAngle.toFixed(3),
      draws: pipeline.renderer.info.render.calls, tris: pipeline.renderer.info.render.triangles,
      cop: (() => {
        const c = [...net.remotes.values()].find((r) => r.bot === 1)
        return c ? { x: +c.x.toFixed(1), z: +c.z.toFixed(1), mode: c.copMode, pinT: +c.pinT.toFixed(2), target: c.copTarget === net.myId ? 'me' : c.copTarget } : null
      })(),
      frozen,
    })
  }, 500)
  const prev = makeCarState()
  copyCarState(car, prev)
  const score = makeScore()
  let seq = 0
  let lastResetAt = -10

  function resetCar(): void {
    if (perfNow() - lastResetAt < 3) return
    lastResetAt = perfNow()
    // snap to nearest road tile center, aligned to one of its arms
    let best = map.tiles[0]
    let bestD = Infinity
    for (const t of map.tiles) {
      const d = (t.x - car.x) ** 2 + (t.z - car.z) ** 2
      if (d < bestD) { bestD = d; best = t }
    }
    car.x = best.x
    car.z = best.z
    car.yaw = best.dirs.n || best.dirs.s ? 0 : Math.PI / 2
    car.vx = car.vz = car.yawRate = 0
    score.chain = 0
    score.multiplier = 1
  }

  function perfNow(): number {
    return performance.now() / 1000
  }

  // ---------- camera ----------
  const camPos = new THREE.Vector3(car.x, 4, car.z - 10)
  let camYaw = car.yaw

  function updateCamera(cx: number, cz: number, yaw: number, slip: number, dt: number): void {
    // chase heading lags the car and lets it yaw out during drift
    const targetYaw = yaw + slip * 0.55
    let dy = targetYaw - camYaw
    while (dy > Math.PI) dy -= Math.PI * 2
    while (dy < -Math.PI) dy += Math.PI * 2
    camYaw += dy * Math.min(1, dt * 4.2)

    const fog = scene.fog as THREE.Fog
    if (camMode === 3) {
      // top-down debug view (fog pushed out so the map is visible)
      fog.near = 900
      fog.far = 2000
      camera.position.set(cx, 220, cz)
      camera.up.set(0, 0, -1)
      camera.lookAt(cx, 0, cz)
      camera.up.set(0, 1, 0)
      return
    }
    fog.near = debug.extras.fogNear
    fog.far = debug.extras.fogFar
    const dist = camMode === 1 ? 6.2 : 8.6
    const height = camMode === 1 ? 2.2 : 3.1
    if (camMode === 2) {
      // hood cam
      const hh = map.heightAt(cx, cz)
      camera.position.set(cx + Math.sin(yaw) * 0.8, hh + 1.25, cz + Math.cos(yaw) * 0.8)
      camera.lookAt(cx + Math.sin(yaw) * 20, map.heightAt(cx + Math.sin(yaw) * 20, cz + Math.cos(yaw) * 20) + 1.0, cz + Math.cos(yaw) * 20)
      return
    }
    const tx = cx - Math.sin(camYaw) * dist
    const tz = cz - Math.cos(camYaw) * dist
    const th = map.heightAt(cx, cz) + height
    camPos.x += (tx - camPos.x) * Math.min(1, dt * 7)
    camPos.z += (tz - camPos.z) * Math.min(1, dt * 7)
    camPos.y += (th - camPos.y) * Math.min(1, dt * 5)
    camera.position.copy(camPos)
    camera.lookAt(cx + Math.sin(yaw) * 3.5, map.heightAt(cx, cz) + 1.1, cz + Math.cos(yaw) * 3.5)
  }

  // ---------- fixed-step loop ----------
  const tint = new THREE.Color()
  let acc = 0
  let last = performance.now()
  let shapedInput: InputFrame = { seq: 0, steer: 0, throttle: 0, brake: 0, handbrake: false, headlights: true }

  function frame(): void {
    requestAnimationFrame(frame)
    const now = performance.now()
    let dt = (now - last) / 1000
    last = now
    if (dt > 0.25) dt = 0.25
    acc += dt

    while (acc >= PHYS_DT) {
      acc -= PHYS_DT
      copyCarState(car, prev)
      let steer = shaper.update(raw, car, TUNING, PHYS_DT)
      let throttle = shaper.shapeThrottle(raw.throttle, TUNING, PHYS_DT)
      let brake = raw.brake ? 1 : 0
      // autopilot yields the moment the player touches any control
      if (pilot && (raw.left || raw.right || raw.throttle || raw.brake || raw.handbrake)) pilot = false
      if (pilot) {
        // follow the loop: track progress index (windowed nearest), aim two tiles ahead
        const order = map.loopOrder
        if (pilotIdx < 0) {
          let bd = Infinity
          for (let i = 0; i < order.length; i++) {
            const d = (order[i].x - car.x) ** 2 + (order[i].z - car.z) ** 2
            if (d < bd) { bd = d; pilotIdx = i }
          }
        }
        let best = pilotIdx, bestD = Infinity
        for (let k = 0; k <= 3; k++) {
          const i = (pilotIdx + k) % order.length
          const d = (order[i].x - car.x) ** 2 + (order[i].z - car.z) ** 2
          if (d < bestD) { bestD = d; best = i }
        }
        pilotIdx = best
        // stuck recovery: reverse out for a moment (server-authoritative safe)
        if (Math.abs(car.speed) < 1 && pilotReverse <= 0) pilotStuck += PHYS_DT
        else pilotStuck = Math.max(0, pilotStuck - PHYS_DT)
        if (pilotStuck > 1.5) {
          pilotReverse = 1.4
          pilotStuck = 0
        }
        const target = order[(best + 2) % order.length]
        const desired = Math.atan2(target.x - car.x, target.z - car.z)
        let err = desired - car.yaw
        while (err > Math.PI) err -= Math.PI * 2
        while (err < -Math.PI) err += Math.PI * 2
        if (pilotReverse > 0) {
          pilotReverse -= PHYS_DT
          throttle = 0
          brake = 1
          steer = -Math.sign(err)
        } else {
          steer = Math.max(-1, Math.min(1, err * 1.6))
          // corner-aware speed: brake down before turns instead of sailing into gardens
          const upcoming = [1, 2, 3].some((k) => order[(best + k) % order.length].piece !== 'straight')
          const vTarget = upcoming ? 11 : 26
          throttle = Math.abs(car.speed) < vTarget ? 1 : 0
          brake = Math.abs(car.speed) > vTarget + 4 || (Math.abs(err) > 0.9 && Math.abs(car.speed) > 10) ? 0.8 : 0
        }
      }
      // pulled over: the server is zeroing the car, so stop driving and let
      // reconciliation hold it — otherwise prediction fights authority
      if (frozen) {
        steer = 0
        throttle = 0
        brake = 0
      }
      shapedInput = {
        seq: seq++,
        steer,
        throttle,
        brake,
        handbrake: frozen ? false : raw.handbrake,
        headlights,
      }
      stepCar(car, shapedInput, TUNING, PHYS_DT, map.surfaceAt, map.colliders, map.heightAt)
      // bump against other cars (instant local feedback; server pass is authority)
      for (const r of net.remotes.values()) {
        collideCarKinematic(car, {
          x: r.x, z: r.z, yaw: r.yaw,
          vx: Math.sin(r.yaw) * r.speed, vz: Math.cos(r.yaw) * r.speed,
        })
      }
      stepScore(score, car, PHYS_DT)
      // near misses: local mirror of the server pass, for the instant popup
      stepNearMiss(score, car, PHYS_DT, map.colliders,
        [...net.remotes.values()].map((r) => ({ id: r.id, x: r.x, z: r.z, bot: r.bot })))
      if (score.nearMiss) {
        const nm = score.nearMiss
        hud.popup((nm.kind === 'cop' ? 'COP TEASE' : nm.kind === 'car' ? 'TRAFFIC' : 'NEAR MISS') + ' +' + nm.pts, nm.kind)
        audio.nearMiss(nm.kind === 'wall' ? 0.7 : 1)
      }
      if (!frozen) net.sendInput(shapedInput)
      if (car.wallHit > 2.5) audio.crash(car.wallHit)
      // player list (self + remotes), refreshed twice a second
      if (seq % 30 === 0) {
        hud.setPlayers([
          { name: playerName, score: Math.floor(score.total), me: true },
          ...[...net.remotes.values()].filter((r) => r.bot === 0).map((r) => ({ name: r.name, score: r.score, me: false })), // bots aren't competing
        ])
      }

      // skidmarks + smoke: drifting, or lighting up the rears (burnout / power-over)
      const sliding = Math.abs(car.slipAngle) > 0.18 && Math.abs(car.speed) > 5
      const burnout = car.wheelspin > 0.12 && shapedInput.throttle > 0.3
      const rearLoose = car.surfRL !== 'asphalt' && car.surfRL !== 'curb'
      const rearOn = car.surfRL !== 'offroad' && car.surfRR !== 'offroad'
      const fwdX = Math.sin(car.yaw), fwdZ = Math.cos(car.yaw)
      const rightX = Math.cos(car.yaw), rightZ = -Math.sin(car.yaw)
      if ((sliding || burnout) && rearOn) {
        const b = TUNING.cgToRear * 0.9
        const hy = map.heightAt(car.x, car.z)
        skids.addSegment(
          new THREE.Vector3(car.x - fwdX * b - rightX * 0.8, hy, car.z - fwdZ * b - rightZ * 0.8),
          new THREE.Vector3(car.x - fwdX * b + rightX * 0.8, hy, car.z - fwdZ * b + rightZ * 0.8),
          Math.max(Math.abs(car.slipAngle), 0.25 + car.wheelspin * 0.4),
        )
      } else {
        skids.breakSegment()
      }
      if ((sliding || burnout) && seq % 2 === 0) {
        world.lampTintAt(car.x, car.z, tint, 0.8)
        const dust = rearLoose
        // a puff off each rear tire
        const rb = TUNING.cgToRear
        const rhy = map.heightAt(car.x, car.z)
        for (const side of [-1, 1]) {
          smoke.spawn(
            car.x - fwdX * rb + rightX * side * 0.8 + (Math.random() - 0.5) * 0.4,
            rhy + 0.25,
            car.z - fwdZ * rb + rightZ * side * 0.8 + (Math.random() - 0.5) * 0.4,
            tint, dust,
          )
        }
      } else if (car.surfRL === 'offroad' && Math.abs(car.speed) > 8 && seq % 4 === 0) {
        world.lampTintAt(car.x, car.z, tint, 0.8)
        smoke.spawn(car.x - fwdX * 1.6, map.heightAt(car.x, car.z) + 0.25, car.z - fwdZ * 1.6, tint, true)
      }
    }

    // ---------- render interpolation ----------
    const alpha = acc / PHYS_DT
    const ix = prev.x + (car.x - prev.x) * alpha
    const iz = prev.z + (car.z - prev.z) * alpha
    let dyaw = car.yaw - prev.yaw
    while (dyaw > Math.PI) dyaw -= Math.PI * 2
    while (dyaw < -Math.PI) dyaw += Math.PI * 2
    const iyaw = prev.yaw + dyaw * alpha

    const carH = map.heightAt(ix, iz)
    const hF = map.heightAt(ix + Math.sin(iyaw) * 1.6, iz + Math.cos(iyaw) * 1.6)
    const hR = map.heightAt(ix - Math.sin(iyaw) * 1.6, iz - Math.cos(iyaw) * 1.6)
    const pitch = Math.atan2(hF - hR, 3.2)
    const rightAxis = new THREE.Vector3(Math.cos(iyaw), 0, -Math.sin(iyaw))
    const qCar = new THREE.Quaternion().setFromAxisAngle(rightAxis, -pitch)
    qCar.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), iyaw))
    carModel.group.position.set(ix, carH, iz)
    carModel.group.quaternion.copy(qCar)
    rig.group.position.set(ix, carH, iz)
    rig.group.quaternion.copy(qCar)

    // car brightens as it passes under each streetlight (CPU tint, Part 1 §5.1)
    world.lampTintAt(ix, iz, tint, 0)
    for (const m of carModel.tintables) m.color.setRGB(1.8 + tint.r * 2.6, 1.8 + tint.g * 2.6, 1.8 + tint.b * 2.6)

    const mist = map.mistAt(ix, iz)
    rig.update(headlights, raw.brake && car.speed > 1, car.speed < -0.5, mist)
    PSX_UNIFORMS.uMist.value = debug.extras.mist * (0.4 + mist * 0.8)

    smoke.update(dt)
    updateCamera(ix, iz, iyaw, car.slipAngle, dt)
    hud.update(car, score, dt)
    audio.update(car, shapedInput.throttle, score.drifting, dt)

    // ---------- multiplayer: reconcile local car, interpolate remotes ----------
    let copDist = Infinity
    let copActive = false
    let ringVisible = false
    if (net.connected) {
      net.reconcile(car)
      const nowS = performance.now() / 1000
      net.sample(nowS)
      net.interpolate(nowS)
      const tint2 = new THREE.Color()
      for (const r of net.remotes.values()) {
        const v = remoteVis.get(r.id)
        if (!v) {
          ensureRemoteVis(r)
          continue
        }
        const rh = map.heightAt(r.x, r.z)
        v.model.group.position.set(r.x, rh, r.z)
        v.model.group.rotation.y = r.yaw
        v.rig.group.position.set(r.x, rh, r.z)
        v.rig.group.rotation.y = r.yaw
        world.lampTintAt(r.x, r.z, tint2, 0)
        for (const m of v.model.tintables) m.color.setRGB(1.8 + tint2.r * 2.6, 1.8 + tint2.g * 2.6, 1.8 + tint2.b * 2.6)
        v.rig.update(r.headlights, r.brake, false, map.mistAt(r.x, r.z))
        if (v.bar) {
          // lights while pursuing / interrogating; the bar rides the car
          v.bar.update(r.copMode >= 1, dt)
          v.bar.group.position.set(r.x, rh, r.z)
          v.bar.group.rotation.y = r.yaw
          copDist = Math.hypot(r.x - ix, r.z - iz)
          copActive = r.copMode === 1 // pursuit only — the siren goes off at the stop
          // pin bar — your HUD, so it only shows while HE has hold of YOU
          if (r.pinT > 0 && r.copTarget === net.myId) {
            pinRing.style.display = 'block'
            pinFill.style.width = Math.min(100, (r.pinT / PIN_TIME) * 100) + '%'
            pinFill.style.background = v.bar.phase() ? '#3355ff' : '#ff2b2b'
            ringVisible = true
          }
        }
        // name tag above the car
        if (v.tag) {
          const sp = new THREE.Vector3(r.x, map.heightAt(r.x, r.z) + 2.2, r.z).project(camera)
          if (sp.z < 1) {
            v.tag.style.display = 'block'
            v.tag.style.left = ((sp.x * 0.5 + 0.5) * window.innerWidth - 20) + 'px'
            v.tag.style.top = ((-sp.y * 0.5 + 0.5) * window.innerHeight) + 'px'
          } else {
            v.tag.style.display = 'none'
          }
        }
      }
      for (const [id, v] of remoteVis) {
        if (!net.remotes.has(id)) {
          scene.remove(v.model.group)
          scene.remove(v.rig.group)
          if (v.bar) scene.remove(v.bar.group)
          v.tag?.remove()
          remoteVis.delete(id)
        }
      }
    }
    if (!ringVisible) pinRing.style.display = 'none'
    audio.updateSiren(copActive, copDist)
    copChat.tick()

    pipeline.render(scene, camera)
  }

  requestAnimationFrame(frame)
}

boot().catch((e) => {
  console.error('BOOT FAILED:', e)
  document.body.insertAdjacentHTML('beforeend', `<div style="position:fixed;top:8px;left:8px;color:#ff7a6b;font-family:monospace;z-index:99">${String(e)}</div>`)
})
