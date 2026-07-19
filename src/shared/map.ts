// The map IS a text grid (Part 2 §B.2). One char per TILE. Road piece + rotation are
// inferred from the 4-neighborhood, so the loop can be redrawn freely.
// Chars: '.' grass · road tiles carry their zone: v=village, e=hedge lanes, p=fields,
// w=forest, g=the all-night gas station strip.
// Everything (visuals, lamps, props, collision, surfaces) derives from this one grid,
// so the server never loads a model.
//
// One main loop (the patrol ring / elevation walk find it themselves) plus three
// dead-end spurs off T junctions: the village cul-de-sac, the gas station pull-in,
// and the field track down to the wreck.
import { TILE } from './constants'
import { AABB, SurfaceSampler } from './physics'

export const MAP_TEXT = `
.................................
...vvvvvvvvv.........g...........
...v...v...v.........g...........
...v...v...v.....ggggggggg.......
...v...v...v.....g.......g.......
...v.......vvvvvvg.......g.......
...w.....................g.......
...w.....................e.......
...w.....................e.......
...w...............eeeeeee.......
...w...............e.............
...w...............e.............
...wwww............e.............
......w............eeeeeeeeep....
......w.....................p....
......w.....................p....
......w.....................p....
......w.....................p....
......w.....................p....
......w.....................p....
......w.....................p....
......w.......wpppppppppppppp....
......w.......w.....p............
......w.......w.....p............
......wwwwwwwww..................
.................................
`.trim()

export type Zone = 'v' | 'e' | 'p' | 'w' | 'g'
export type Piece = 'straight' | 'corner' | 't' | 'cross' | 'end'

export interface RoadTile {
  gx: number
  gz: number
  x: number // world center
  z: number
  zone: Zone
  piece: Piece
  rot: number // radians, multiples of PI/2
  dirs: { n: boolean; e: boolean; s: boolean; w: boolean }
  // elevation at each connected arm's tile edge + center (filled by the elevation pass)
  elev: { n: number; e: number; s: number; w: number; c: number }
  dirt: boolean // elevated/sloped section renders as a terrain-draped dirt road
}

export interface Lamp {
  x: number; z: number
  color: [number, number, number]
  radius: number
  intensity: number
  height: number
}

export interface Prop {
  kind: 'house' | 'hedge' | 'tree_big' | 'tree_small' | 'bush' | 'fence' | 'cone' | 'sign' | 'parked' | 'tower' | 'rock' | 'wreck' | 'lampProp' | 'gas' | 'gazebo' | 'bench'
  x: number; z: number
  rot: number
  variant: number
}

export interface ParsedMap {
  tiles: RoadTile[]
  lamps: Lamp[]
  props: Prop[]
  colliders: AABB[]
  spawn: { x: number; z: number; yaw: number }
  surfaceAt: SurfaceSampler
  heightAt: (x: number, z: number) => number
  loopOrder: RoadTile[]
  mistAt: (x: number, z: number) => number
  bounds: { minX: number; minZ: number; maxX: number; maxZ: number }
  grid: string[]
}

// deterministic hash → [0,1)
export function hash2(a: number, b: number, salt = 0): number {
  let h = (a * 374761393 + b * 668265263 + salt * 2246822519) | 0
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  h ^= h >>> 16
  return (h >>> 0) / 4294967296
}

const ROAD_HALF = 5.0 // asphalt half-width (measured from Road_Straight GLB)
const S_AMP = 0 // dirt-road S amplitude — user preferred straight segments (corners still arc)

// Centerline of the dirt road through a tile, u in [0,1] from one arm edge to the other.
// Straights wiggle in a gentle S; corners sweep a quarter arc about the tile corner.
export function dirtCenterlinePoint(t: RoadTile, u: number): [number, number] {
  const arms: Array<[number, number]> = []
  if (t.dirs.n) arms.push([0, -1])
  if (t.dirs.w) arms.push([-1, 0])
  if (t.dirs.s) arms.push([0, 1])
  if (t.dirs.e) arms.push([1, 0])
  if (t.piece === 'straight') {
    const [ax, az] = arms[0]
    const px = -az, pz = ax
    const along = (u - 0.5) * TILE
    const off = S_AMP * Math.sin(2 * Math.PI * u)
    return [t.x + ax * along + px * off, t.z + az * along + pz * off]
  }
  // corner: arc centered on the shared tile corner between the two arms
  const [aX, aZ] = arms[0]
  const [bX, bZ] = arms[1]
  const cx = t.x + (aX + bX) * (TILE / 2)
  const cz = t.z + (aZ + bZ) * (TILE / 2)
  // start at arm A's edge midpoint, sweep 90° to arm B's edge midpoint
  const sx = t.x + aX * (TILE / 2) - cx
  const sz = t.z + aZ * (TILE / 2) - cz
  const ex = t.x + bX * (TILE / 2) - cx
  const ez = t.z + bZ * (TILE / 2) - cz
  // signed sweep from (sx,sz) to (ex,ez)
  const a0 = Math.atan2(sz, sx)
  const a1 = Math.atan2(ez, ex)
  let da = a1 - a0
  while (da > Math.PI) da -= Math.PI * 2
  while (da < -Math.PI) da += Math.PI * 2
  const ang = a0 + da * u
  const r = TILE / 2
  return [cx + Math.cos(ang) * r, cz + Math.sin(ang) * r]
}
const CURB_HALF = 7.4 // walkway outer edge (GLB walkway spans to 7.79)

// light colors per zone
const SODIUM: [number, number, number] = [1.0, 0.64, 0.28]
const COOLWHITE: [number, number, number] = [0.75, 0.85, 1.0]

export function parseMap(): ParsedMap {
  const grid = MAP_TEXT.split('\n')
  const H = grid.length
  const W = Math.max(...grid.map((r) => r.length))
  const at = (gx: number, gz: number): string =>
    gz >= 0 && gz < H && gx >= 0 && gx < (grid[gz]?.length ?? 0) ? grid[gz][gx] : '.'
  const isRoad = (c: string) => c === 'v' || c === 'e' || c === 'p' || c === 'w' || c === 'g'

  const tiles: RoadTile[] = []
  const tileMap = new Map<string, RoadTile>()

  for (let gz = 0; gz < H; gz++) {
    for (let gx = 0; gx < W; gx++) {
      const c = at(gx, gz)
      if (!isRoad(c)) continue
      const n = isRoad(at(gx, gz - 1))
      const s = isRoad(at(gx, gz + 1))
      const e = isRoad(at(gx + 1, gz))
      const w = isRoad(at(gx - 1, gz))
      const count = +n + +s + +e + +w
      let piece: Piece
      let rot = 0
      if (count === 4) piece = 'cross'
      else if (count === 3) {
        piece = 't'
        // rot chosen for the missing arm; fixed up in client ROT_FIX after visual check
        if (!n) rot = 0
        else if (!e) rot = Math.PI / 2
        else if (!s) rot = Math.PI
        else rot = -Math.PI / 2
      } else if (count === 2 && ((n && s) || (e && w))) {
        piece = 'straight'
        rot = n && s ? 0 : Math.PI / 2
      } else if (count === 2) {
        piece = 'corner'
        if (n && e) rot = 0
        else if (e && s) rot = -Math.PI / 2
        else if (s && w) rot = Math.PI
        else rot = Math.PI / 2 // w && n
      } else {
        piece = 'end'
        rot = n ? 0 : e ? Math.PI / 2 : s ? Math.PI : -Math.PI / 2
      }
      const tile: RoadTile = {
        gx, gz,
        x: gx * TILE, z: gz * TILE,
        zone: c as Zone,
        piece, rot,
        dirs: { n, e, s, w },
        elev: { n: 0, e: 0, s: 0, w: 0, c: 0 },
        dirt: false,
      }
      tiles.push(tile)
      tileMap.set(gx + ',' + gz, tile)
    }
  }

  // 'end' tiles are legal now (spur tips get Road_End caps); a MALFORMED map shows
  // up as a short loop below, not as a dangling end here.

  // --- surface sampling: distance to the tile's road-arm segments ---
  const surfaceAt: SurfaceSampler = (x, z) => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const tile = tileMap.get(gx + ',' + gz)
    if (!tile) return 'offroad'
    // local coords within tile
    const lx = x - tile.x
    const lz = z - tile.z
    // distance to each connected arm's centerline segment (center → edge midpoint)
    let d = Infinity
    const arms: Array<[number, number]> = []
    if (tile.dirs.n) arms.push([0, -1])
    if (tile.dirs.s) arms.push([0, 1])
    if (tile.dirs.e) arms.push([1, 0])
    if (tile.dirs.w) arms.push([-1, 0])
    for (const [ax, az] of arms) {
      // segment from (0,0) to (ax,az)*TILE/2 — distance from point
      const t2 = Math.max(0, Math.min(1, (lx * ax + lz * az) / (TILE / 2)))
      const px = ax * (TILE / 2) * t2
      const pz = az * (TILE / 2) * t2
      d = Math.min(d, Math.hypot(lx - px, lz - pz))
    }
    if (tile.dirt) {
      // curved centerline: distance via analytic forms (straight S / corner arc)
      if (tile.piece === 'straight') {
        const [ax, az] = tile.dirs.n || tile.dirs.s ? [0, 1] : [1, 0]
        const u = Math.max(0, Math.min(1, (ax ? (x - tile.x) : (z - tile.z)) / TILE + 0.5))
        const off = 0
        const lat = ax ? (z - tile.z) : (x - tile.x)
        return Math.abs(lat - off) < ROAD_HALF ? 'dirt' : 'offroad'
      }
      if (tile.piece === 'corner') {
        const dirsArr: Array<[number, number]> = []
        if (tile.dirs.n) dirsArr.push([0, -1])
        if (tile.dirs.w) dirsArr.push([-1, 0])
        if (tile.dirs.s) dirsArr.push([0, 1])
        if (tile.dirs.e) dirsArr.push([1, 0])
        const cx = tile.x + (dirsArr[0][0] + dirsArr[1][0]) * (TILE / 2)
        const cz = tile.z + (dirsArr[0][1] + dirsArr[1][1]) * (TILE / 2)
        const dr = Math.abs(Math.hypot(x - cx, z - cz) - TILE / 2)
        return dr < ROAD_HALF ? 'dirt' : 'offroad'
      }
      return d < ROAD_HALF ? 'dirt' : 'offroad'
    }
    if (d < ROAD_HALF) return 'asphalt'
    if (d < CURB_HALF) return 'curb'
    return 'offroad'
  }

  // --- elevation: a rise-and-fall profile along the country half of the loop ---
  // Find the MAIN loop by DFS (spurs dead-end and backtrack out), assign heights to
  // the shared tile edges from a raised-cosine profile, then flatten corners so the
  // rigid corner pieces never have to twist. Straights carry all the slope.
  const neighborsOf = (t: RoadTile): RoadTile[] => {
    const nb: RoadTile[] = []
    if (t.dirs.n) nb.push(tileMap.get(t.gx + ',' + (t.gz - 1))!)
    if (t.dirs.s) nb.push(tileMap.get(t.gx + ',' + (t.gz + 1))!)
    if (t.dirs.e) nb.push(tileMap.get(t.gx + 1 + ',' + t.gz)!)
    if (t.dirs.w) nb.push(tileMap.get(t.gx - 1 + ',' + t.gz)!)
    return nb.filter(Boolean)
  }
  const order: RoadTile[] = []
  {
    const start = tiles.find((t) => t.zone === 'v' && t.piece === 'straight') ?? tiles[0]
    // DFS for a cycle back to start. Junction tiles have 3+ arms; branches that
    // dead-end (the spurs) simply backtrack, so `order` ends up as the closed ring.
    const path: RoadTile[] = [start]
    const visited = new Set<RoadTile>([start])
    const dfs = (cur: RoadTile, prev: RoadTile | null): boolean => {
      for (const n of neighborsOf(cur)) {
        if (n === prev) continue
        if (n === start && path.length >= 8) return true
        if (visited.has(n)) continue
        visited.add(n)
        path.push(n)
        if (dfs(n, cur)) return true
        path.pop()
        visited.delete(n)
      }
      return false
    }
    if (!dfs(start, null)) console.warn('map: no closed loop found — check MAP_TEXT')
    order.push(...path)
    const N = order.length
    const HMAX = 5.5

    // The hill lives on the longest run of forest/field tiles that stays clear of
    // junctions (spurs sit at elevation 0 — a sloped T would step visibly).
    const nearJunction: boolean[] = order.map((t, i) => {
      for (let k = -3; k <= 3; k++) {
        const o = order[(i + k + N) % N]
        if (o.piece === 't' || o.piece === 'cross') return true
      }
      return false
    })
    const candidate = order.map((t, i) => (t.zone === 'w' || t.zone === 'p') && !nearJunction[i])
    // longest circular run of candidates
    let runStart = 0, runLen = 0
    {
      let bestS = 0, bestL = 0, s = -1, l = 0
      for (let i = 0; i < N * 2; i++) {
        if (candidate[i % N]) {
          if (s < 0) s = i
          l++
          if (l > bestL && l <= N) { bestL = l; bestS = s }
        } else { s = -1; l = 0 }
      }
      runStart = bestS % N
      runLen = Math.min(bestL, N)
    }
    // edge i sits between order[i] and order[(i+1)%N]; raised cosine over the run
    const edgeH: number[] = new Array(N).fill(0)
    for (let k = 0; k < runLen - 1; k++) {
      const s2 = (k + 0.5) / (runLen - 1)
      const t2 = (s2 - 0.1) / 0.8
      if (t2 > 0 && t2 < 1) edgeH[(runStart + k) % N] = HMAX * 0.5 * (1 - Math.cos(2 * Math.PI * t2))
    }
    // flatten corner tiles: both of a corner's edges take their average
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < N; i++) {
        if (order[i].piece === 'straight') continue
        const a = (i - 1 + N) % N
        const avg = (edgeH[a] + edgeH[i]) / 2
        edgeH[a] = avg
        edgeH[i] = avg
      }
    }
    // write per-arm heights into the tiles
    const dirTo = (from: RoadTile, to: RoadTile): 'n' | 'e' | 's' | 'w' =>
      to.gz < from.gz ? 'n' : to.gz > from.gz ? 's' : to.gx > from.gx ? 'e' : 'w'
    for (let i = 0; i < N; i++) {
      const t2 = order[i]
      const nxt = order[(i + 1) % N]
      const prv = order[(i - 1 + N) % N]
      const hIn = edgeH[(i - 1 + N) % N]
      const hOut = edgeH[i]
      t2.elev.c = (hIn + hOut) / 2
      t2.elev.n = t2.elev.e = t2.elev.s = t2.elev.w = t2.elev.c
      t2.elev[dirTo(t2, prv)] = hIn
      t2.elev[dirTo(t2, nxt)] = hOut
    }
    // the whole elevated run becomes a dirt road (rigid road tiles can't drape terrain)
    for (const t2 of order) {
      const arms = [t2.elev.n, t2.elev.e, t2.elev.s, t2.elev.w]
      const spread = Math.max(...arms) - Math.min(...arms)
      t2.dirt = t2.elev.c > 0.25 || spread > 0.05
    }
  }

  const heightAt = (x: number, z: number): number => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const t = tileMap.get(gx + ',' + gz)
    if (t) {
      if (t.piece === 'straight') {
        if (t.dirs.n || t.dirs.s) {
          const u = Math.max(0, Math.min(1, (z - t.z) / TILE + 0.5))
          return t.elev.n + (t.elev.s - t.elev.n) * u
        }
        const u = Math.max(0, Math.min(1, (x - t.x) / TILE + 0.5))
        return t.elev.w + (t.elev.e - t.elev.w) * u
      }
      return t.elev.c
    }
    // offroad: inverse-distance blend toward nearby road tile PLANES (not just their
    // centers) so shoulders continue the road slope and the tiles sit flush
    let num = 0
    let den = 1 / 2400 // base weight pulls toward sea level away from the road
    for (const rt of tiles) {
      const dx = x - rt.x, dz = z - rt.z
      const d2 = dx * dx + dz * dz
      if (d2 > 3600) continue
      let hTile = rt.elev.c
      if (rt.piece === 'straight') {
        if (rt.dirs.n || rt.dirs.s) {
          const u = Math.max(-0.15, Math.min(1.15, (z - rt.z) / TILE + 0.5))
          hTile = rt.elev.n + (rt.elev.s - rt.elev.n) * u
        } else {
          const u = Math.max(-0.15, Math.min(1.15, (x - rt.x) / TILE + 0.5))
          hTile = rt.elev.w + (rt.elev.e - rt.elev.w) * u
        }
      }
      const w2 = 1 / (d2 + 30)
      num += w2 * hTile
      den += w2
    }
    return num / den
  }

  // --- dressing pass: lamps, props, colliders — all deterministic ---
  const lamps: Lamp[] = []
  const props: Prop[] = []
  const colliders: AABB[] = []

  const box = (x: number, z: number, hw: number, hd: number, soft = false): AABB => ({
    minX: x - hw, maxX: x + hw, minZ: z - hd, maxZ: z + hd, soft,
  })

  const clearOfRoad = (x: number, z: number): boolean => {
    for (const [ox, oz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]] as const) {
      if (surfaceAt(x + ox, z + oz) !== 'offroad') return false
    }
    return true
  }
  // every lamp faces its arm (local +Z) at the road centerline — consistent and always onto the road
  const lampRotToward = (lx: number, lz: number, tx: number, tz: number): number => Math.atan2(tx - lx, tz - lz)
  // the visual head hangs ~1.15 m out along the arm — the LIGHT lives there, not at the pole tip
  const LAMP_ARM = 1.15
  const lampHead = (lx: number, lz: number, tx: number, tz: number): { hx: number; hz: number; rot: number } => {
    const rot = lampRotToward(lx, lz, tx, tz)
    return { hx: lx + Math.sin(rot) * LAMP_ARM, hz: lz + Math.cos(rot) * LAMP_ARM, rot }
  }

  let lampAlt = 0
  for (const t of tiles) {
    const along = t.dirs.n || t.dirs.s ? 'ns' : 'ew' // dominant axis for straights
    const sideOff = CURB_HALF + 0.6

    if (t.zone === 'v') {
      // warm sodium lamp every 2nd tile, alternating sides
      if ((t.gx + t.gz) % 2 === 0) {
        const side = lampAlt++ % 2 === 0 ? 1 : -1
        const lx = along === 'ns' ? t.x + side * (CURB_HALF - 0.8) : t.x
        const lz = along === 'ns' ? t.z : t.z + side * (CURB_HALF - 0.8)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 13, intensity: 1.0, height: 5.2 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 0 })
      }
      // houses on open sides of straights
      if (t.piece === 'straight') {
        for (const side of [-1, 1]) {
          if (hash2(t.gx, t.gz, side + 10) > 0.75) continue // some gaps
          const hx = along === 'ns' ? t.x + side * (sideOff + 8.5) : t.x + (hash2(t.gx, t.gz, 3) - 0.5) * 4
          const hz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 4) - 0.5) * 4 : t.z + side * (sideOff + 8.5)
          const rot = along === 'ns' ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : side > 0 ? Math.PI : 0
          props.push({ kind: 'house', x: hx, z: hz, rot, variant: Math.floor(hash2(t.gx, t.gz, 5) * 15) })
          colliders.push(box(hx, hz, along === 'ns' ? 5.0 : 4.5, along === 'ns' ? 4.5 : 5.0))
          // garden trees around each house
          for (let gt = 0; gt < 2; gt++) {
            if (hash2(t.gx * 3 + gt, t.gz, side + 60) > 0.8) continue
            const ang = hash2(t.gx + gt, t.gz, side + 61) * Math.PI * 2
            const rad = 7 + hash2(t.gx, t.gz + gt, side + 62) * 5
            const tx2 = hx + Math.cos(ang) * rad
            const tz2 = hz + Math.sin(ang) * rad + (side > 0 ? 4 : -4)
            let clear = true
            for (const [ox, oz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]] as const) {
              if (surfaceAt(tx2 + ox, tz2 + oz) !== 'offroad') { clear = false; break }
            }
            if (!clear) continue
            props.push({ kind: hash2(t.gx, t.gz + gt, 63) < 0.6 ? 'tree_small' : 'bush', x: tx2, z: tz2, rot: hash2(t.gx, t.gz, 64 + gt) * Math.PI * 2, variant: Math.floor(hash2(t.gx + gt, t.gz, 65) * 8) })
          }
          // occasional parked car in front
          if (hash2(t.gx, t.gz, side + 20) < 0.3) {
            const px = along === 'ns' ? t.x + side * (CURB_HALF + 1.6) : hx + 3
            const pz = along === 'ns' ? hz + 3 : t.z + side * (CURB_HALF + 1.6)
            props.push({ kind: 'parked', x: px, z: pz, rot: along === 'ns' ? 0 : Math.PI / 2, variant: Math.floor(hash2(t.gx, t.gz, 6) * 4) })
            colliders.push(box(px, pz, along === 'ns' ? 1.0 : 2.3, along === 'ns' ? 2.3 : 1.0))
          }
        }
      }
    }

    if (t.zone === 'e') {
      // the hedge corridor: walls both sides of straights (soft colliders — brushing
      // a hedge scrubs speed, it doesn't total the car). Prime near-miss territory.
      if (t.piece === 'straight') {
        for (const side of [-1, 1]) {
          if (hash2(t.gx, t.gz, side + 80) > 0.85) continue // the odd gate gap
          const hx = along === 'ns' ? t.x + side * (CURB_HALF + 1.0) : t.x
          const hz = along === 'ns' ? t.z : t.z + side * (CURB_HALF + 1.0)
          props.push({ kind: 'hedge', x: hx, z: hz, rot: along === 'ns' ? 0 : Math.PI / 2, variant: 0 })
          colliders.push(box(hx, hz, along === 'ns' ? 1.0 : TILE / 2, along === 'ns' ? TILE / 2 : 1.0, true))
        }
      }
      // open country lanes: sparse trees set well back (visual only)
      for (const side of [-1, 1]) {
        if (hash2(t.gx, t.gz, side + 50) > 0.55) continue
        const dist = CURB_HALF + 4 + hash2(t.gx, t.gz, side + 51) * 7
        const tx = along === 'ns' ? t.x + side * dist : t.x + (hash2(t.gx, t.gz, 52) - 0.5) * TILE * 0.8
        const tz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 53) - 0.5) * TILE * 0.8 : t.z + side * dist
        if (!clearOfRoad(tx, tz)) continue
        props.push({ kind: 'bush', x: tx, z: tz, rot: hash2(t.gx, t.gz, 55) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz, 56) * 8) })
      }
      // cones marking corner clipping points
      if (t.piece === 'corner') {
        props.push({ kind: 'cone', x: t.x + (hash2(t.gx, t.gz, 7) - 0.5) * 3, z: t.z + (hash2(t.gx, t.gz, 8) - 0.5) * 3, rot: hash2(t.gx, t.gz, 9) * Math.PI, variant: 0 })
      }
    }

    if (t.zone === 'p') {
      // cool-white lamps, sparse; low fences along the fields
      if ((t.gx + t.gz) % 3 === 0) {
        const lx = t.x + (along === 'ns' ? 8.6 : 0)
        const lz = t.z + (along === 'ns' ? 0 : 8.6)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: COOLWHITE, radius: 15, intensity: 0.9, height: 6.0 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 1 })
      }
      // wooden field fences along straights (visual dressing, no collider —
      // running wide into a field should cost speed, not the car)
      if (t.piece === 'straight') {
        for (const side of [-1, 1]) {
          if (hash2(t.gx, t.gz, side + 70) > 0.6) continue
          const fx = along === 'ns' ? t.x + side * (CURB_HALF + 1.6) : t.x
          const fz = along === 'ns' ? t.z : t.z + side * (CURB_HALF + 1.6)
          props.push({ kind: 'fence', x: fx, z: fz, rot: along === 'ns' ? 0 : Math.PI / 2, variant: Math.floor(hash2(t.gx, t.gz, 71) * 8) })
        }
      }
    }

    if (t.zone === 'g') {
      // the all-night strip: bright cool light, twice the lamp density of the fields
      if ((t.gx + t.gz) % 2 === 0) {
        const side = lampAlt++ % 2 === 0 ? 1 : -1
        const lx = along === 'ns' ? t.x + side * (CURB_HALF - 0.6) : t.x
        const lz = along === 'ns' ? t.z : t.z + side * (CURB_HALF - 0.6)
        const head = lampHead(lx, lz, t.x, t.z)
        lamps.push({ x: head.hx, z: head.hz, color: COOLWHITE, radius: 16, intensity: 1.15, height: 6.0 })
        props.push({ kind: 'lampProp', x: lx, z: lz, rot: head.rot, variant: 1 })
      }
      // cones guarding the corners of the strip
      if (t.piece === 'corner') {
        props.push({ kind: 'cone', x: t.x + (hash2(t.gx, t.gz, 7) - 0.5) * 4, z: t.z + (hash2(t.gx, t.gz, 8) - 0.5) * 4, rot: hash2(t.gx, t.gz, 9) * Math.PI, variant: t.gx % 2 })
      }
    }

    if (t.zone === 'w') {
      // forest walls: big trees (hard colliders) both sides, small trees/bushes scattered
      for (const side of [-1, 1]) {
        const n = 5
        for (let i = 0; i < n; i++) {
          const u = (i + 0.5) / n - 0.5
          const jitter = (hash2(t.gx * 7 + i, t.gz, side + 30) - 0.5) * 3
          const dist = sideOff + 4.5 + hash2(t.gx + i, t.gz, side + 31) * 9
          const tx = along === 'ns' ? t.x + side * dist : t.x + u * TILE + jitter
          const tz = along === 'ns' ? t.z + u * TILE + jitter : t.z + side * dist
          const big = hash2(t.gx + i * 3, t.gz, side + 32) < 0.6
          let treeClear = true
          for (const [ox, oz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]] as const) {
            if (surfaceAt(tx + ox, tz + oz) !== 'offroad') { treeClear = false; break }
          }
          if (!treeClear) continue
          props.push({ kind: big ? 'tree_big' : 'tree_small', x: tx, z: tz, rot: hash2(t.gx, t.gz + i, 33) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz + i, 34) * 8) })
          if (big) colliders.push(box(tx, tz, 0.7, 0.7))
        }
        // bushes closer to the road — dressing only in v1
        if (hash2(t.gx, t.gz, side + 40) < 0.5) {
          const bx = along === 'ns' ? t.x + side * (CURB_HALF + 3.2) : t.x + (hash2(t.gx, t.gz, 41) - 0.5) * TILE * 0.8
          const bz = along === 'ns' ? t.z + (hash2(t.gx, t.gz, 42) - 0.5) * TILE * 0.8 : t.z + side * (CURB_HALF + 3.2)
          props.push({ kind: 'bush', x: bx, z: bz, rot: hash2(t.gx, t.gz, 43) * Math.PI * 2, variant: Math.floor(hash2(t.gx, t.gz, 44) * 5) })
        }
      }
    }
  }

  // one lonely sodium lamp mid-forest (the halfway beacon)
  const forestTiles = tiles.filter((t) => t.zone === 'w' && t.piece === 'straight')
  if (forestTiles.length) {
    const mid = forestTiles[Math.floor(forestTiles.length / 2)]
    {
      const lx = mid.x + CURB_HALF - 0.8
      const head = lampHead(lx, mid.z, mid.x, mid.z)
      lamps.push({ x: head.hx, z: head.hz, color: SODIUM, radius: 12, intensity: 1.1, height: 5.2 })
      props.push({ kind: 'lampProp', x: lx, z: mid.z, rot: head.rot, variant: 0 })
    }
  }

  // landmark: the tower (church/water tower stand-in) just outside the village's NE corner
  const cornerTiles = tiles.filter((t) => t.zone === 'v' && t.piece === 'corner')
  if (cornerTiles.length) {
    const c = cornerTiles[cornerTiles.length - 1]
    props.push({ kind: 'tower', x: c.x + TILE * 0.9, z: c.z - TILE * 0.9, rot: 0, variant: 0 })
    colliders.push(box(c.x + TILE * 0.9, c.z - TILE * 0.9, 2.5, 2.5))
  }

  // --- spur set pieces (each spur tip is an 'end' tile of its zone) ---
  const spurTip = (zone: Zone): RoadTile | undefined => tiles.find((t) => t.zone === zone && t.piece === 'end')

  // the all-night gas station: west of the pull-in spur, canopy facing the pumps
  const gasTip = spurTip('g')
  if (gasTip) {
    const gx2 = gasTip.x - TILE * 1.45
    const gz2 = gasTip.z + TILE * 0.4
    props.push({ kind: 'gas', x: gx2, z: gz2, rot: Math.PI / 2, variant: 0 })
    colliders.push(box(gx2 - 2.0, gz2, 4.2, 5.2)) // the shop building; the forecourt stays drivable
    // forecourt spot lamp — the strip's beacon, visible from the fields
    lamps.push({ x: gasTip.x - 3, z: gasTip.z + 2, color: COOLWHITE, radius: 20, intensity: 1.35, height: 6.5 })
    for (let i = 0; i < 3; i++) {
      props.push({ kind: 'cone', x: gasTip.x + 6 + hash2(i, 1) * 3, z: gasTip.z + i * 4 - 3, rot: hash2(i, 2) * Math.PI, variant: i % 2 })
    }
    // a car parked at the pumps, nose out
    props.push({ kind: 'parked', x: gx2 + 6.5, z: gz2 - 2, rot: Math.PI / 2 + 0.15, variant: 2 })
    colliders.push(box(gx2 + 6.5, gz2 - 2, 2.3, 1.0))
  }

  // village green at the cul-de-sac: gazebo, benches — somewhere to be pulled over WITH dignity
  const greenTip = spurTip('v')
  if (greenTip) {
    const gzX = greenTip.x
    const gzZ = greenTip.z + TILE * 0.8
    props.push({ kind: 'gazebo', x: gzX, z: gzZ, rot: 0, variant: 0 })
    colliders.push(box(gzX, gzZ, 2.2, 2.2, true))
    for (const side of [-1, 1]) {
      props.push({ kind: 'bench', x: gzX + side * 5.5, z: gzZ - 1.5, rot: side > 0 ? -Math.PI / 2 : Math.PI / 2, variant: side > 0 ? 0 : 1 })
    }
    lamps.push({ x: gzX + 3.5, z: gzZ - 4, color: SODIUM, radius: 12, intensity: 1.0, height: 5.2 })
    props.push({ kind: 'lampProp', x: gzX + 3.5, z: gzZ - 4, rot: Math.PI, variant: 0 })
  }

  // the wreck at the end of the field track: two abandoned cars, cones nobody moved
  const wreckTip = spurTip('p')
  if (wreckTip) {
    const wx = wreckTip.x
    const wz = wreckTip.z + TILE * 0.6
    props.push({ kind: 'parked', x: wx - 2, z: wz, rot: 0.6, variant: 1 })
    colliders.push(box(wx - 2, wz, 1.8, 1.8))
    props.push({ kind: 'parked', x: wx + 3, z: wz + 2, rot: -1.9, variant: 3 })
    colliders.push(box(wx + 3, wz + 2, 1.8, 1.8))
    for (let i = 0; i < 4; i++) {
      props.push({ kind: 'cone', x: wx - 5 + i * 3, z: wz - 5 + hash2(i, 3) * 3, rot: hash2(i, 4) * Math.PI, variant: i % 2 })
    }
    props.push({ kind: 'rock', x: wx + 7, z: wz + 5, rot: 0.8, variant: 0 })
  }

  // --- road signs: stop signs at T junctions, speed/zone signs where zones change ---
  {
    const N = order.length
    const signAt = (t: RoadTile, heading: number, variant: number): void => {
      // roadside, right-hand side of travel, facing oncoming traffic
      const sx = t.x + Math.cos(heading) * (CURB_HALF + 0.7)
      const sz = t.z - Math.sin(heading) * (CURB_HALF + 0.7)
      props.push({ kind: 'sign', x: sx, z: sz, rot: heading + Math.PI, variant })
    }
    for (let i = 0; i < N; i++) {
      const t = order[i]
      const nxt = order[(i + 1) % N]
      const heading = Math.atan2(nxt.x - t.x, nxt.z - t.z)
      if (t.piece === 't' || t.piece === 'cross') {
        signAt(t, heading, 0) // STOP at every junction — nobody stops, that's the point
        continue
      }
      if (nxt.zone !== t.zone) {
        // entering the next zone: village 25 · gas strip crossing · fields 55 · elsewhere 35
        const variant = nxt.zone === 'v' ? 1 : nxt.zone === 'g' ? 3 : nxt.zone === 'p' ? 2 : 4
        signAt(nxt, Math.atan2(order[(i + 2) % N].x - nxt.x, order[(i + 2) % N].z - nxt.z), variant)
      }
    }
  }

  // --- vegetation scatter: density-field driven so some areas are thick woods and
  // others open meadow; bushes-only near the dirt road (offroad play space);
  // NOTHING is allowed to overhang the road (5-point clearance around each trunk)

  const dirtTiles = tiles.filter((t) => t.dirt)
  const nearDirt = (x: number, z: number): boolean => {
    for (const t of dirtTiles) {
      if ((x - t.x) ** 2 + (z - t.z) ** 2 < 32 * 32) return true
    }
    return false
  }
  // Big trees carry colliders; keep them out of a band around EVERY road so the
  // cop's (and traffic's) straight-line cross-country cuts stay survivable. Small
  // trees and bushes are collider-free and keep the band from looking mown.
  // 48 m: a pursuit overshoot at speed carries the cop ~2 tiles off the road
  // before he gathers it up — the whole excursion has to be tree-trunk-free.
  const nearAnyRoad = (x: number, z: number): boolean => {
    const cgx = Math.round(x / TILE)
    const cgz = Math.round(z / TILE)
    for (let dz = -3; dz <= 3; dz++) {
      for (let dx = -3; dx <= 3; dx++) {
        const t = tileMap.get(cgx + dx + ',' + (cgz + dz))
        if (t && (t.x - x) ** 2 + (t.z - z) ** 2 < 48 * 48) return true
      }
    }
    return false
  }
  for (let i = 0; i < 16000; i++) { // count scales with map area — density held at the v1 level
    const x = hash2(i, 91) * W * TILE
    const z = hash2(i, 92) * H * TILE
    // regional density: 40 m cells, squared for contrast (dense woods vs open meadow)
    const cd = hash2(Math.floor(x / 40), Math.floor(z / 40), 96)
    if (hash2(i, 97) > cd * cd * 1.9) continue
    if (!clearOfRoad(x, z)) continue
    const bushOnly = nearDirt(x, z)
    const noBigTrees = nearAnyRoad(x, z)
    const r = hash2(i, 93)
    const kind = bushOnly ? 'bush' : r < 0.2 ? (noBigTrees ? 'tree_small' : 'tree_big') : r < 0.38 ? 'tree_small' : 'bush'
    props.push({ kind, x, z, rot: hash2(i, 94) * Math.PI * 2, variant: Math.floor(hash2(i, 95) * 12) })
    if (kind === 'tree_big') colliders.push(box(x, z, 0.7, 0.7))
  }

  // perimeter forest: rings of trees just outside the playable grid — fills the
  // horizon and fences the world (inner ring carries colliders)
  {
    const minX = -TILE, maxX = W * TILE
    const minZ = -TILE, maxZ = H * TILE
    const perim = 2 * (maxX - minX + maxZ - minZ)
    for (let i = 0; i < 2200; i++) {
      const along = hash2(i, 201) * perim
      const out = 3 + hash2(i, 202) * 52 // meters beyond the edge
      let x: number, z: number
      const wSide = maxX - minX
      const hSide = maxZ - minZ
      if (along < wSide) { x = minX + along; z = minZ - out }
      else if (along < wSide + hSide) { x = maxX + out; z = minZ + (along - wSide) }
      else if (along < wSide * 2 + hSide) { x = maxX - (along - wSide - hSide); z = maxZ + out }
      else { x = minX - out; z = maxZ - (along - wSide * 2 - hSide) }
      x += (hash2(i, 203) - 0.5) * 8
      z += (hash2(i, 204) - 0.5) * 8
      const big = hash2(i, 205) < 0.7
      props.push({ kind: big ? 'tree_big' : 'tree_small', x, z, rot: hash2(i, 206) * Math.PI * 2, variant: Math.floor(hash2(i, 207) * 12) })
      if (big && out < 14) colliders.push(box(x, z, 0.8, 0.8))
    }
  }

  // scattered rocks in the fields
  for (let i = 0; i < 320; i++) {
    const x = hash2(i, 77) * W * TILE
    const z = hash2(i, 78) * H * TILE
    if (!clearOfRoad(x, z)) continue
    props.push({ kind: 'rock', x, z, rot: hash2(i, 81) * Math.PI * 2, variant: i % 2 })
  }

  // spawn: middle of the village main street (the top EW run), facing east
  const villageStraights = tiles.filter((t) => t.zone === 'v' && t.piece === 'straight' && (t.dirs.e || t.dirs.w))
  const spawnTile = villageStraights[Math.floor(villageStraights.length / 2)] ?? tiles[0]
  const spawn = { x: spawnTile.x, z: spawnTile.z, yaw: Math.PI / 2 } // yaw PI/2 → +X (east)

  // mist density: heavy in fields ('p') and forest ('w'), light in village
  const mistAt = (x: number, z: number): number => {
    const gx = Math.round(x / TILE)
    const gz = Math.round(z / TILE)
    const t = tileMap.get(gx + ',' + gz)
    if (!t) return 0.6
    return t.zone === 'p' ? 1.0 : t.zone === 'w' ? 0.8 : t.zone === 'e' ? 0.4 : t.zone === 'g' ? 0.3 : 0.25
  }

  return {
    tiles, lamps, props, colliders, spawn, surfaceAt, heightAt, mistAt, loopOrder: order,
    bounds: { minX: -5 * TILE, minZ: -5 * TILE, maxX: (W + 4) * TILE, maxZ: (H + 4) * TILE },
    grid,
  }
}
