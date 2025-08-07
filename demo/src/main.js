import {image, PI} from "ziko"
import {
  SceneGl, useTexture, plane3, cube3, useDirectionalLight, 
  // useLightHelper
} from "../../"

globalThis.SCENE = SceneGl("100vw", "100vh").useShadow();

globalThis.im1 = image("/im.png");
im1.st.hide();
const t1 = useTexture(im1);

const Floor = plane3(10, 10)
  .rot(-PI / 3, 0, 0)
  .style({
    map: t1,
  })
  .useMeshStandardMaterial()
  .receiveShadow();

const C1 = cube3(1).pos(-1, 2, 0).useMeshStandardMaterial().useShadow();
const C2 = cube3(1).pos(0, 1, 0).useMeshStandardMaterial().useShadow();
const L = useDirectionalLight(0xffffff, 5).pos(0, 3, 0).castShadow();
SCENE.add(
  Floor, C1, C2, L, 
  // useLightHelper(L)
);