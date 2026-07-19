// Builds the visible world from the parsed map: instanced road tiles, baked-vertex
// ground, props, lamp posts. Also owns the light list used to tint everything.
import * as THREE from 'three'
import { TILE } from '../../shared/constants'
import { ParsedMap, Lamp, Prop, RoadTile, hash2, dirtCenterlinePoint, TACOS_TOWN } from '../../shared/map'
import { TACOS_BOUNDS } from '../../shared/tacosTown.generated'
import { loadGLB, loadFBX, loadTexture, LoadedModel } from './assets'
import { patchMaterial, psxTexture } from '../renderer/patch'
import { buildTacosTown } from './tacos'

// Night ambient: never pure black — everything silhouettes against the sky.
const AMBIENT = new THREE.Color(0.64, 0.68, 0.86)

// terrain dips under the Tacos town footprint: its road mesh sits only a few cm
// above the height field, and the PSX vertex snap makes coplanar surfaces
// flicker-fight — feather the grass 40 cm down so the town always wins. Props
// planted on town grass subtract this too, so they sit on the visible ground.
function townDip(x: number, z: number): number {
  const inside = Math.min(
    x - (TACOS_TOWN.x + TACOS_BOUNDS.minX), TACOS_TOWN.x + TACOS_BOUNDS.maxX - x,
    z - (TACOS_TOWN.z + TACOS_BOUNDS.minZ), TACOS_TOWN.z + TACOS_BOUNDS.maxZ - z,
  )
  return inside <= 0 ? 0 : 0.4 * Math.min(1, inside / 10)
}

// one instanced prop (e.g. a bush) with handles to every InstancedMesh slice of it —
// fx code hides/regrows it by rescaling `orig` and rewriting the instance matrix
export interface InstancedProp {
  x: number
  z: number
  parts: { inst: THREE.InstancedMesh; index: number; orig: THREE.Matrix4 }[]
}

export class World {
  group = new THREE.Group()
  map: ParsedMap
  // individually-placed cone wrappers + measured model dims, consumed by the
  // fx/cones.ts knockdown physics (h/r keep the cone out of the road at every tilt)
  cones: { wrapper: THREE.Group; x: number; z: number; rot: number; h: number; r: number }[] = []
  // every bush instance, consumed by fx/bushes.ts (explode on hit, regrow later)
  bushes: InstancedProp[] = []

  constructor(map: ParsedMap) {
    this.map = map
  }

  // baked light sample: ambient + sum of lamp contributions (used for ground bake,
  // per-tile road tint, per-prop tint, and per-frame car tint)
  lampTintAt(x: number, z: number, out: THREE.Color, ambientScale = 1): THREE.Color {
    out.copy(AMBIENT).multiplyScalar(ambientScale)
    for (const l of this.map.lamps) {
      const dx = x - l.x, dz = z - l.z
      const d2 = dx * dx + dz * dz
      if (d2 > l.radius * l.radius) continue
      const f = 1 - Math.sqrt(d2) / l.radius
      const k = f * f * l.intensity * 2.6
      out.r += l.color[0] * k
      out.g += l.color[1] * k
      out.b += l.color[2] * k
    }
    return out
  }

  async build(): Promise<void> {
    await Promise.all([
      this.buildGround(),
      this.buildRoads(),
      this.buildLampPosts(),
      this.buildProps(),
      buildTacosTown(this),
    ])
  }

  private async buildGround(): Promise<void> {
    // procedural dark grass texture (docs: favor darker/bluer variants at night)
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const ctx = c.getContext('2d')!
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
        const r = n - Math.floor(n)
        const g = 80 + r * 34
        ctx.fillStyle = `rgb(${(g * 0.55) | 0},${g | 0},${(g * 0.62) | 0})`
        ctx.fillRect(x, y, 1, 1)
      }
    }
    const grassTex = psxTexture(new THREE.CanvasTexture(c))
    grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping
    grassTex.colorSpace = THREE.SRGBColorSpace

    const b = this.map.bounds
    const w = b.maxX - b.minX
    const d = b.maxZ - b.minZ
    const segX = Math.round(w / 4) // ~4 m tessellation: affine control + vertex-light pools
    const segZ = Math.round(d / 4)
    const geo = new THREE.PlaneGeometry(w, d, segX, segZ)
    geo.rotateX(-Math.PI / 2)
    geo.translate(b.minX + w / 2, -0.06, b.minZ + d / 2)

    // scale UVs so the grass tiles at ~4 m
    const uvs = geo.attributes.uv as THREE.BufferAttribute
    for (let i = 0; i < uvs.count; i++) uvs.setXY(i, uvs.getX(i) * (w / 4), uvs.getY(i) * (d / 4))

    // THE vertex-color bake (Part 1 §5.1) on our freely-tessellated ground
    // + elevation: ground vertices follow the terrain height field
    const pos = geo.attributes.position as THREE.BufferAttribute
    const colors = new Float32Array(pos.count * 3)
    const tint = new THREE.Color()
    const mx = 0.42, my = 0.78, mz = -0.46 // moon direction for baked slope shading
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i)
      const h = this.map.heightAt(x, z)
      pos.setY(i, h - 0.06 - townDip(x, z))
      this.lampTintAt(x, z, tint)
      // fake Gouraud moonlight on the terrain: slopes facing the moon lighten,
      // far sides darken — without this, hills read as black voids at night
      const gx = (this.map.heightAt(x + 2, z) - this.map.heightAt(x - 2, z)) / 4
      const gz = (this.map.heightAt(x, z + 2) - this.map.heightAt(x, z - 2)) / 4
      const inv = 1 / Math.sqrt(gx * gx + 1 + gz * gz)
      const dot = (-gx * mx + my - gz * mz) * inv
      const shade = (0.62 + 0.55 * Math.max(0, dot)) * (1 + h * 0.035)
      colors[i * 3] = tint.r * shade
      colors[i * 3 + 1] = tint.g * shade
      colors[i * 3 + 2] = tint.b * shade
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.MeshBasicMaterial({ map: grassTex, vertexColors: true })
    patchMaterial(mat)
    const ground = new THREE.Mesh(geo, mat)
    this.group.add(ground)
  }

  private pieceFile(piece: RoadTile['piece'], highway = false): string {
    const name = { straight: 'Straight', corner: 'Corner', t: 'T', cross: 'Cross', end: 'End' }[piece]
    return (highway ? 'Highway_' : 'Road_') + name + '.glb'
  }

  // Rotation offset between our neighbor-inference convention and how each GLB is
  // authored. Filled in after visual verification.
  static ROT_FIX: Record<string, number> = {
    straight: Math.PI / 2, // GLB road runs along model X; our rot 0 = road along Z
    corner: -Math.PI / 2, // GLB corner connects N+W at rot 0; our rot 0 = N+E
    t: 0,
    cross: 0,
    end: 0,
  }

  // Road_Straight is 13.0 long against the 15.57 corner pitch — stretch along the
  // road axis (model X) so consecutive tiles join without gaps.
  static PIECE_SCALE: Record<string, [number, number, number]> = {
    straight: [TILE / 13.0, 1, 1],
  }

  // Highway_* pieces use a 24.29 m pitch — scaled down to the road grid they still
  // read clearly wider than the village road (asphalt ~15.5 m vs ~10 m).
  static HWY_SCALE = TILE / 24.29

  private async buildRoads(): Promise<void> {
    this.buildDirtRoad()
    const byPiece = new Map<string, RoadTile[]>()
    for (const t of this.map.tiles) {
      if (t.dirt) continue // elevated section is the draped dirt ribbon instead
      const key = (t.zone === 'h' ? 'h:' : '') + t.piece
      const arr = byPiece.get(key) ?? []
      arr.push(t)
      byPiece.set(key, arr)
    }
    const tint = new THREE.Color()
    for (const [key, tiles] of byPiece) {
      const highway = key.startsWith('h:')
      const piece = (highway ? key.slice(2) : key) as RoadTile['piece']
      const model = await loadGLB('/assets/roads/' + this.pieceFile(piece, highway))
      // The pack's GLB nodes carry a scene-layout translation (e.g. x≈163, y≈-0.31);
      // recenter the whole piece so its footprint center sits on the tile center at y≈0.
      const bbox = new THREE.Box3().setFromObject(model.object)
      const center = bbox.getCenter(new THREE.Vector3())
      const pre = new THREE.Matrix4().makeTranslation(-center.x, -bbox.min.y - 0.04, -center.z)
      for (const part of model.meshes) {
        const inst = new THREE.InstancedMesh(part.geometry, part.material, tiles.length)
        const m = new THREE.Matrix4()
        const q = new THREE.Quaternion()
        const up = new THREE.Vector3(0, 1, 0)
        const hs = World.HWY_SCALE
        const ps = highway
          ? piece === 'straight' ? [TILE / 13.0, 1, hs] : [hs, 1, hs]
          : World.PIECE_SCALE[piece] ?? [1, 1, 1]
        const qSlope = new THREE.Quaternion()
        tiles.forEach((t, i) => {
          q.setFromAxisAngle(up, t.rot + World.ROT_FIX[piece])
          // elevation: lift to center height; straights additionally pitch so
          // consecutive tiles meet at the shared edge heights
          if (t.piece === 'straight') {
            if (t.dirs.n || t.dirs.s) {
              qSlope.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.atan2(t.elev.s - t.elev.n, TILE))
            } else {
              qSlope.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.atan2(t.elev.e - t.elev.w, TILE))
            }
            q.premultiply(qSlope)
          }
          m.compose(new THREE.Vector3(t.x, t.elev.c, t.z), q, new THREE.Vector3(ps[0], ps[1], ps[2]))
          m.multiply(pre)
          m.multiply(part.matrix)
          inst.setMatrixAt(i, m)
          // coarse per-tile lamp tint (PS1-coarse is period-correct; pools come from sprites)
          this.lampTintAt(t.x, t.z, tint)
          inst.setColorAt(i, tint)
        })
        inst.instanceMatrix.needsUpdate = true
        if (inst.instanceColor) inst.instanceColor.needsUpdate = true
        inst.frustumCulled = false // instance bounds are origin-centered; culling eats the whole batch
        this.group.add(inst)
      }
    }
  }

  private async buildLampPosts(): Promise<void> {
    // procedural 30-tri lamppost: pole + arm + head. The glow sprite does the real work.
    const poleGeo = new THREE.CylinderGeometry(0.09, 0.13, 5.2, 5)
    poleGeo.translate(0, 2.6, 0)
    const armGeo = new THREE.BoxGeometry(0.14, 0.12, 1.4)
    armGeo.translate(0, 5.15, 0.6)
    const headGeo = new THREE.BoxGeometry(0.3, 0.16, 0.55)
    headGeo.translate(0, 5.05, 1.15)

    const lampProps = this.map.props.filter((p) => p.kind === 'lampProp')
    const dark = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.05, 0.055, 0.075) })
    patchMaterial(dark)
    const head = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.75, 0.42) }) // emissive head, fullbright
    patchMaterial(head)

    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    const m = new THREE.Matrix4()
    for (const [geo, mat] of [
      [poleGeo, dark],
      [armGeo, dark],
      [headGeo, head],
    ] as const) {
      const inst = new THREE.InstancedMesh(geo, mat, lampProps.length)
      lampProps.forEach((p, i) => {
        q.setFromAxisAngle(up, p.rot)
        m.compose(new THREE.Vector3(p.x, this.map.heightAt(p.x, p.z), p.z), q, new THREE.Vector3(1, 1, 1))
        inst.setMatrixAt(i, m)
      })
      inst.instanceMatrix.needsUpdate = true
      inst.frustumCulled = false
      this.group.add(inst)
    }
  }

  private placeClones(
    model: LoadedModel,
    props: Prop[],
    opts: { targetHeight?: number; targetWidth?: number; targetSize?: { x?: number; y?: number; z?: number }; tintAmbient?: number; tint?: boolean } = {},
  ): THREE.Group[] {
    const out: THREE.Group[] = []
    if (!props.length) return out
    const bbox = new THREE.Box3().setFromObject(model.object)
    const size = bbox.getSize(new THREE.Vector3())
    const center = bbox.getCenter(new THREE.Vector3())
    let sx = 1, sy = 1, sz = 1
    if (opts.targetSize) {
      sy = opts.targetSize.y ? opts.targetSize.y / size.y : 1
      sx = opts.targetSize.x ? opts.targetSize.x / size.x : sy
      sz = opts.targetSize.z ? opts.targetSize.z / size.z : sy
    } else if (opts.targetHeight) {
      sx = sy = sz = opts.targetHeight / size.y
    } else if (opts.targetWidth) {
      sx = sy = sz = opts.targetWidth / Math.max(size.x, size.z)
    }
    const tint = new THREE.Color()
    for (const p of props) {
      // wrapper carries placement; inner clone is recentered so authored scene
      // offsets (some packs export pieces far from origin) don't displace props
      const wrapper = new THREE.Group()
      wrapper.position.set(p.x, this.map.heightAt(p.x, p.z), p.z)
      wrapper.rotation.y = p.rot
      const clone = model.object.clone()
      clone.scale.set(sx, sy, sz)
      clone.position.set(-center.x * sx, -bbox.min.y * sy, -center.z * sz)
      wrapper.add(clone)
      if (opts.tint !== false) {
        this.lampTintAt(p.x, p.z, tint, opts.tintAmbient ?? 1)
        clone.traverse((o) => {
          const mesh = o as THREE.Mesh
          if (!mesh.isMesh) return
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
          mesh.material = mats.length === 1 ? mats[0].clone() : mats.map((mm) => mm.clone())
          const outMats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
          for (const mm of outMats) {
            ;(mm as THREE.MeshBasicMaterial).color?.copy(tint)
          }
        })
      }
      this.group.add(wrapper)
      out.push(wrapper)
    }
    return out
  }

  // Instanced variant of placeClones for high-count vegetation: one InstancedMesh
  // per mesh part, per-instance lamp tint via instanceColor.
  // A hedge run is one segment REPEATED along the tile, never one segment stretched to
  // the full length. The old call scaled a 1x1 m piece to TILE+0.5 on one axis, so its
  // texture smeared ~16x down the run, which is what made the hedges look bad. Instanced
  // because the honest fix multiplies segment count and as individual clones that would
  // be one draw call each; as one InstancedMesh it is fewer draw calls than the clones
  // it replaces. Deliberately NOT placeInstanced: that applies a random 0.75-1.3x scale
  // jitter, which is right for scattered bushes and wrong for a continuous wall that
  // must not gap or step.
  private placeHedgeRun(model: LoadedModel, props: Prop[], seg: { x: number; y: number; z: number }, runLength: number): void {
    if (!props.length) return
    const bbox = new THREE.Box3().setFromObject(model.object)
    const size = bbox.getSize(new THREE.Vector3())
    const center = bbox.getCenter(new THREE.Vector3())
    const n = Math.max(1, Math.round(runLength / seg.z))
    const step = runLength / n // exact division, so segments meet without a seam
    const sx = seg.x / size.x, sy = seg.y / size.y, sz = step / size.z
    const tint = new THREE.Color()
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    const off = new THREE.Matrix4()
    const sc = new THREE.Matrix4()
    const pos = new THREE.Vector3()
    const one = new THREE.Vector3(1, 1, 1)
    for (const part of model.meshes) {
      const inst = new THREE.InstancedMesh(part.geometry, part.material, props.length * n)
      let i = 0
      for (const p of props) {
        // the run extends along the prop's local +Z, the axis targetSize used to stretch
        const dx = Math.sin(p.rot), dz = Math.cos(p.rot)
        for (let k = 0; k < n; k++) {
          const d = -runLength / 2 + (k + 0.5) * step
          const wx = p.x + dx * d, wz = p.z + dz * d
          q.setFromAxisAngle(up, p.rot)
          pos.set(wx, this.map.heightAt(wx, wz), wz)
          m.compose(pos, q, one)
          off.makeTranslation(-center.x * sx, -bbox.min.y * sy, -center.z * sz)
          sc.makeScale(sx, sy, sz)
          m.multiply(off)
          m.multiply(sc)
          m.multiply(part.matrix)
          inst.setMatrixAt(i, m)
          // tint per segment, so a hedge passing a lamp lights along its length
          this.lampTintAt(wx, wz, tint)
          inst.setColorAt(i, tint)
          i++
        }
      }
      inst.instanceMatrix.needsUpdate = true
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true
      inst.frustumCulled = false
      this.group.add(inst)
    }
  }

  private placeInstanced(
    model: LoadedModel,
    props: Prop[],
    opts: { targetHeight?: number; targetWidth?: number; tintAmbient?: number; collectInto?: InstancedProp[] } = {},
  ): void {
    if (!props.length) return
    // registry entries so fx code can hide/regrow individual instances later
    const collected: InstancedProp[] | null = opts.collectInto ?? null
    const entries: InstancedProp[] = props.map((p) => ({ x: p.x, z: p.z, parts: [] }))
    if (collected) collected.push(...entries)
    const bbox = new THREE.Box3().setFromObject(model.object)
    const size = bbox.getSize(new THREE.Vector3())
    const center = bbox.getCenter(new THREE.Vector3())
    let scale = 1
    if (opts.targetHeight) scale = opts.targetHeight / size.y
    else if (opts.targetWidth) scale = opts.targetWidth / Math.max(size.x, size.z)
    const tint = new THREE.Color()
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    const off = new THREE.Matrix4()
    const sc = new THREE.Matrix4()
    for (const part of model.meshes) {
      const inst = new THREE.InstancedMesh(part.geometry, part.material, props.length)
      props.forEach((p, i) => {
        const s2 = scale * (0.75 + hash2(Math.round(p.x * 7), Math.round(p.z * 7), 5) * 0.55)
        q.setFromAxisAngle(up, p.rot)
        m.compose(new THREE.Vector3(p.x, this.map.heightAt(p.x, p.z) - townDip(p.x, p.z), p.z), q, new THREE.Vector3(1, 1, 1))
        off.makeTranslation(-center.x * s2, -bbox.min.y * s2, -center.z * s2)
        sc.makeScale(s2, s2, s2)
        m.multiply(off)
        m.multiply(sc)
        m.multiply(part.matrix)
        inst.setMatrixAt(i, m)
        this.lampTintAt(p.x, p.z, tint, opts.tintAmbient ?? 1)
        inst.setColorAt(i, tint)
        if (collected) entries[i].parts.push({ inst, index: i, orig: m.clone() })
      })
      inst.instanceMatrix.needsUpdate = true
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true
      inst.frustumCulled = false
      this.group.add(inst)
    }
  }

  // terrain-draped dirt road for the elevated section: rigid GLB tiles can't bend,
  // so slopes get a generated ribbon that follows heightAt exactly.
  private buildDirtRoad(): void {
    const dirtTiles = this.map.tiles.filter((t) => t.dirt)
    if (!dirtTiles.length) return
    // procedural dirt texture with faint wheel tracks
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const ctx = c.getContext('2d')!
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const n = Math.sin(x * 91.7 + y * 47.3) * 43758.5453
        const r = n - Math.floor(n)
        let v = 105 + r * 32
        const u = x / 64
        if (Math.abs(u - 0.28) < 0.09 || Math.abs(u - 0.72) < 0.09) v -= 14 // wheel ruts
        ctx.fillStyle = `rgb(${(v * 1.0) | 0},${(v * 0.82) | 0},${(v * 0.6) | 0})`
        ctx.fillRect(x, y, 1, 1)
      }
    }
    const dirtTex = psxTexture(new THREE.CanvasTexture(c))
    dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping
    dirtTex.colorSpace = THREE.SRGBColorSpace

    const positions: number[] = []
    const uvs: number[] = []
    const colors: number[] = []
    const indices: number[] = []
    const tint = new THREE.Color()
    const halfW = 5.2
    const pushVert = (x: number, z: number, u: number, v: number): number => {
      const y = this.map.heightAt(x, z) + 0.06
      this.lampTintAt(x, z, tint)
      positions.push(x, y, z)
      uvs.push(u, v)
      colors.push(tint.r, tint.g, tint.b)
      return positions.length / 3 - 1
    }
    for (const t of this.map.tiles.filter((tt) => tt.dirt)) {
      // sweep a strip along the shared curved centerline (S on straights, arc on corners)
      const steps = t.piece === 'corner' ? 12 : 8
      let prevA = -1, prevB = -1
      for (let k = 0; k <= steps; k++) {
        const u = k / steps
        const [cx, cz] = dirtCenterlinePoint(t, u)
        const [nx2, nz2] = dirtCenterlinePoint(t, Math.min(1, u + 0.01))
        const [px2, pz2] = dirtCenterlinePoint(t, Math.max(0, u - 0.01))
        let tx = nx2 - px2, tz = nz2 - pz2
        const tl = Math.hypot(tx, tz) || 1
        tx /= tl
        tz /= tl
        const px = -tz, pz = tx // perpendicular
        const ia = pushVert(cx - px * halfW, cz - pz * halfW, 0, u * TILE / 4)
        const ib = pushVert(cx + px * halfW, cz + pz * halfW, 2.6, u * TILE / 4)
        if (prevA >= 0) indices.push(prevA, ia, prevB, prevB, ia, ib)
        prevA = ia
        prevB = ib
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    geo.setIndex(indices)
    const mat = new THREE.MeshBasicMaterial({ map: dirtTex, vertexColors: true, side: THREE.DoubleSide })
    patchMaterial(mat)
    const mesh = new THREE.Mesh(geo, mat)
    mesh.frustumCulled = false
    this.group.add(mesh)
  }

  private async buildProps(): Promise<void> {
    const P = this.map.props
    const jobs: Promise<void>[] = []

    // houses: 5 models × 3 texture variants
    jobs.push((async () => {
      const houses = P.filter((p) => p.kind === 'house')
      if (!houses.length) return
      const models: LoadedModel[] = []
      for (let h = 1; h <= 5; h++) {
        for (let t = 1; t <= 3; t++) {
          const tex = await loadTexture(`/assets/houses/tex/house${h}_tex${t}.png`)
          models.push(await loadGLB(`/assets/houses/house${h}.glb`, tex))
        }
      }
      for (const p of houses) this.placeClones(models[p.variant % models.length], [p])
    })())

    // hedges: one FBX segment stretched to a tile-long wall
    jobs.push((async () => {
      const hedges = P.filter((p) => p.kind === 'hedge')
      if (!hedges.length) return
      const tex = await loadTexture('/assets/hedges/tex/hedge_open_bottom_summer.png')
      const model = await loadFBX('/assets/hedges/basic_1x1.fbx', tex)
      // ~2 m per segment: near the piece's authored 1x1 proportions, so the texture
      // reads at roughly its intended density instead of smeared down the whole run
      this.placeHedgeRun(model, hedges, { x: 2.0, y: 2.2, z: 2.0 }, TILE + 0.5)
    })())

    // big trees: instanced pines (embedded texture GLB)
    jobs.push((async () => {
      const trees = P.filter((p) => p.kind === 'tree_big')
      if (!trees.length) return
      const model = await loadGLB('/assets/nature/trees/pine_tree.glb', undefined, true)
      const part = model.meshes[0]
      const bbox = new THREE.Box3().setFromObject(model.object)
      const size = bbox.getSize(new THREE.Vector3())
      const center = bbox.getCenter(new THREE.Vector3())
      const pre = new THREE.Matrix4().makeTranslation(-center.x, -bbox.min.y, -center.z)
      const s = 9.5 / size.y // big trees ~9.5 m
      const inst = new THREE.InstancedMesh(part.geometry, part.material, trees.length)
      const m = new THREE.Matrix4()
      const q = new THREE.Quaternion()
      const up = new THREE.Vector3(0, 1, 0)
      trees.forEach((p, i) => {
        const s2 = s * (0.85 + ((p.variant * 37) % 10) / 30)
        q.setFromAxisAngle(up, p.rot)
        m.compose(new THREE.Vector3(p.x, this.map.heightAt(p.x, p.z), p.z), q, new THREE.Vector3(s2, s2, s2))
        m.multiply(pre)
        m.multiply(part.matrix)
        inst.setMatrixAt(i, m)
      })
      inst.instanceMatrix.needsUpdate = true
      inst.frustumCulled = false
      this.group.add(inst)
    })())

    // small trees + bushes: tree_pack FBX + retro_nature_pack GLB variety
    jobs.push((async () => {
      const small = P.filter((p) => p.kind === 'tree_small')
      const bushes = P.filter((p) => p.kind === 'bush')
      const treeModels: LoadedModel[] = []
      for (const v of [1, 2, 3, 4, 5, 7, 9, 11]) {
        const num = String(v).padStart(2, '0')
        const tex = await loadTexture(`/assets/trees/tex/tree${num}.png`)
        treeModels.push(await loadFBX(`/assets/trees/tree${num}.fbx`, tex, true))
      }
      // retro_nature_pack GLBs ship geometry only — textures are separate per-season files
      for (const v of [1, 2, 3, 4, 5, 6, 7, 8]) {
        const num = String(v).padStart(2, '0')
        try {
          const tex = await loadTexture(`/assets/nature2/tex/trees/tree${num}_summer.png`)
          treeModels.push(await loadGLB(`/assets/nature2/trees/tree${num}.glb`, tex, true))
        } catch { /* variant may not exist */ }
      }
      for (let i = 0; i < treeModels.length; i++) {
        this.placeInstanced(treeModels[i], small.filter((p) => p.variant % treeModels.length === i), { targetHeight: 5.5 })
      }
      const bushModels: LoadedModel[] = []
      for (const v of [1, 2, 3, 4, 5, 6, 7, 8]) {
        const num = String(v).padStart(2, '0')
        try {
          const tex = await loadTexture(`/assets/trees/tex/bush${num}.png`)
          bushModels.push(await loadFBX(`/assets/trees/bush${num}.fbx`, tex, true))
        } catch { /* variant may not exist */ }
      }
      for (const v of [1, 2, 3, 4, 5]) {
        const num = String(v).padStart(2, '0')
        try {
          const tex = await loadTexture(`/assets/nature2/tex/bushes/bush${v}_summer.png`)
          bushModels.push(await loadGLB(`/assets/nature2/bushes/bush${num}.glb`, tex, true))
        } catch { /* variant may not exist */ }
      }
      for (let i = 0; i < bushModels.length; i++) {
        this.placeInstanced(bushModels[i], bushes.filter((p) => p.variant % bushModels.length === i), { targetHeight: 1.1, collectInto: this.bushes })
      }
    })())

    // rocks
    jobs.push((async () => {
      const rocks = P.filter((p) => p.kind === 'rock')
      if (!rocks.length) return
      const model = await loadGLB('/assets/nature/rocks/rock.glb')
      const model2 = await loadGLB('/assets/nature/rocks/rock_grassy.glb')
      this.placeInstanced(model, rocks.filter((r) => r.variant === 0), { targetWidth: 2.2 })
      this.placeInstanced(model2, rocks.filter((r) => r.variant === 1), { targetWidth: 2.2 })
    })())

    // traffic signs: variant → GLB (0=SL25, 1=SL55, 2=Stop, 3=Crossing); pack scale
    // is already real-world (~2.1 m), so no target sizing
    jobs.push((async () => {
      const signs = P.filter((p) => p.kind === 'sign')
      if (!signs.length) return
      const files = ['Sign_SL25', 'Sign_SL55', 'Sign_Stop', 'Sign_Crossing']
      for (let v = 0; v < files.length; v++) {
        const sel = signs.filter((p) => p.variant === v)
        if (!sel.length) continue
        try {
          const model = await loadGLB(`/assets/roads/Signs/${files[v]}.glb`)
          // pack authors the plate 90° off our facing convention (rot = yaw the plate faces)
          model.object.rotation.y = Math.PI / 2
          this.placeClones(model, sel, { tintAmbient: 1.15 })
        } catch (e) {
          console.warn('sign load failed', files[v], e)
        }
      }
    })())

    // traffic cones at corner apexes (two color variants in the pack) — wrappers are
    // kept in this.cones so the client-side knockdown physics (fx/cones.ts) can punt them
    jobs.push((async () => {
      const cones = P.filter((p) => p.kind === 'cone')
      if (!cones.length) return
      for (const v of [0, 1]) {
        const sel = cones.filter((p) => p.variant % 2 === v)
        if (!sel.length) continue
        const model = await loadGLB(`/assets/roads/Traffic_Cone_${v + 1}.glb`)
        const wrappers = this.placeClones(model, sel, { tintAmbient: 1.2 })
        // measure the actual model so the knockdown physics knows how far to hold the
        // cone off the road at each tilt (guessed dimensions = clipping)
        const size = new THREE.Box3().setFromObject(model.object).getSize(new THREE.Vector3())
        const h = size.y
        const r = Math.max(size.x, size.z) / 2
        sel.forEach((p, i) => this.cones.push({ wrapper: wrappers[i], x: p.x, z: p.z, rot: p.rot, h, r }))
      }
    })())

    // gazebo landmark (shares the landmarks texture atlas with the tower)
    jobs.push((async () => {
      const gazebos = P.filter((p) => p.kind === 'gazebo')
      if (!gazebos.length) return
      try {
        const tex = await loadTexture('/assets/landmarks/tex/textures.png')
        const model = await loadFBX('/assets/landmarks/gazebo.fbx', tex)
        this.placeClones(model, gazebos, { targetHeight: 5.0, tintAmbient: 0.9 })
      } catch (e) {
        console.warn('gazebo load failed', e)
      }
    })())

    // the tower landmark (church/water-tower silhouette, one lit window via sprite later)
    jobs.push((async () => {
      const towers = P.filter((p) => p.kind === 'tower')
      if (!towers.length) return
      try {
        const tex = await loadTexture('/assets/landmarks/tex/textures.png')
        const model = await loadFBX('/assets/landmarks/tower.fbx', tex)
        this.placeClones(model, towers, { targetHeight: 16, tintAmbient: 0.8 })
      } catch (e) {
        console.warn('tower load failed', e)
      }
    })())

    await Promise.all(jobs)
  }
}
