// Copies the assets the game actually uses from the pack folders into public/assets.
// public/assets is git-ignored: PSX_Roads and some packs are not CC0-redistributable.
import { cpSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const repo = join(dirname(fileURLToPath(import.meta.url)), '..')
const root = join(repo, 'assets-src') // in-repo archive of the source packs
const out = join(repo, 'public', 'assets')

const copies = [
  // roads (updated pack: includes signs + embedded textures)
  ['3d models/PSX_Roads (update)/glb', 'roads'],
  // cars
  ['3d models/cars_PSX/Car 01', 'cars/car01'],
  ['3d models/cars_PSX/Car 02', 'cars/car02'],
  ['3d models/cars_PSX/Car 06', 'cars/car06'],
  ['3d models/cars_PSX/Car 03', 'cars/car03'],
  ['3d models/cars_PSX/Car 04', 'cars/car04'],
  ['3d models/cars_PSX/Car 05', 'cars/car05'], // civilian Car5 + police (Car5_Police.obj)
  ['3d models/cars_PSX/Car 07', 'cars/car07'],
  ['3d models/cars_PSX/Car 08', 'cars/car08'],
  ['3d models/cars_PSX/Wheel', 'cars/wheel'],
  ['3d models/cars_PSX/Shadow (3D)', 'cars/shadow'],
  ['3d models/cars_PSX/Sound effects', 'audio/car'],
  // houses
  ['3d models/retro_house_pack/models/glb', 'houses'],
  ['3d models/retro_house_pack/textures/256x256', 'houses/tex'],
  // hedges (FBX) + textures
  ['3d models/modular_hedge/basic', 'hedges'],
  ['3d models/All bushes/textures', 'hedges/tex'],
  // nature (GLB with embedded textures)
  ['3d models/nature/trees', 'nature/trees'],
  ['3d models/nature/rocks', 'nature/rocks'],
  // tree pack (FBX + png)
  ['3d models/tree_pack_1.1/models', 'trees'],
  ['3d models/tree_pack_1.1/textures', 'trees/tex'],
  // fences (FBX)
  ['3d models/misc_models/fences', 'fences'],
  ['3d models/all_fences/textures', 'fences/tex'],
  // gas station (user-added)
  ['3d models/Gas_station/Models/Gas_station.fbx', 'gasstation/Gas_station.fbx'],
  // the FBX references textures by bare filename — copy them flat next to it
  ['3d models/Gas_station/Textures', 'gasstation'],
  // retro nature pack (glTF trees + bushes for variety)
  ['3d models/retro_nature_pack/models/glTF/trees', 'nature2/trees'],
  ['3d models/retro_nature_pack/models/glTF/bushes', 'nature2/bushes'],
  ['3d models/retro_nature_pack/textures/trees', 'nature2/tex/trees'],
  ['3d models/retro_nature_pack/textures/bushes', 'nature2/tex/bushes'],
  // landmarks
  ['3d models/misc_models/tower.fbx', 'landmarks/tower.fbx'],
  ['3d models/misc_models/gazebo.fbx', 'landmarks/gazebo.fbx'],
  ['3d models/misc_models/stone', 'landmarks/stone'], // benches for the village green
  ['3d models/hedge_maze_pack/textures', 'landmarks/tex'],
  // music
  ['background sounds/background-loop.mp3', 'audio/background-loop.mp3'],
  ['background sounds/radio/radio.mp3', 'audio/radio.mp3'],
  ['background sounds/radio/radio-static.mp3', 'audio/radio-static.mp3'],
  // Sgt Hollis: stinger on his opening line, then one per swing in his mood
  ['background sounds/cop/cop-first-message.mp3', 'audio/cop-first-message.mp3'],
  ['background sounds/cop/cop-annoyed.mp3', 'audio/cop-annoyed.mp3'],
  ['background sounds/cop/cop-happy.mp3', 'audio/cop-happy.mp3'],
]

mkdirSync(out, { recursive: true })
for (const [src, dst] of copies) {
  const from = join(root, src)
  if (!existsSync(from)) {
    console.warn('MISSING:', src)
    continue
  }
  cpSync(from, join(out, dst), { recursive: true })
  console.log('copied', src, '->', 'public/assets/' + dst)
}
console.log('done')
