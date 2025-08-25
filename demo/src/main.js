import {tags, PI} from "ziko"
import {
  SceneGl, texture, plane3, cube3, directional_light, 
  // useLightHelper
} from "ziko-tgl"

import {text2} from 'ziko-tgl/core/object-3d/primitives/text/index.js'

import { TGLMapControl } from "ziko-tgl/extra/camera-controls/map.js"

globalThis.SCENE = SceneGl("100vw", "100vh").useShadow();
globalThis.im1 = tags.img({src : "/im.png"});
// im1.st.hide();
const t1 = texture(im1);

const Floor = plane3(10, 10)
  .rot(-PI / 3, 0, 0)
  .style({
    map: t1,
  })
  .useMeshStandardMaterial()
  .receiveShadow();

const C1 = cube3(1).pos(-1, 2, 0).useMeshStandardMaterial().useShadow();
const C2 = cube3(1).pos(0, 1, 0).useMeshStandardMaterial().useShadow();
const L = directional_light(0xffffff, 5).pos(0, 3, 0).castShadow();
SCENE.add(
  Floor, C1, C2, L, text2("Hello world").style({
    color : 'red'
  })
  // useLightHelper(L)
);

SCENE.useControl(TGLMapControl)
// SCENE.useMapControls()