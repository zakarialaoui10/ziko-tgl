export * from "./scene/index.js"
export * from "./camera/index.js"
export * from "./controls/index.js"
export * from "./light/index.js"
export * from "./loaders/index.js"
export * from "./object-3d/index.js"
export * from "./use/index.js"

// // import * as THREE from "three"
// import { SceneGl } from "./scene/gl.js";
// import { SceneCss } from "./scene/css.js";
// import { loadSVG } from "./loaders/svg.js";
// import { 
//     ambient_light,
//     directional_light,
//     hemisphere_light,
//     point_light,
//     rect_area_light,
//     spot_light,
// } from "./light/index.js";
// import{
//     useAxesHelper,
//     useGridHelper,
//     usePolarHelper,
//     usePlaneHelper,
//     useBoxHelper,
//     useBoxVectorHelper,
//     useArrowHelper,
//     useLightHelper
// } from "./object-3d/ZikoThreeHelper/index.js"
// import { 
//     useCoordinates,
//     useTexture,
//     useEdges,
//     useWireframe,
//     usePoints,
//     useSprite
//  } from "./use/index.js";
// import{
//     cube3,
//     plane3,
//     line3,
//     points3,
//     cuboid3,
//     cylindre3,
//     sphere3,
//     cone3,
//     torus3,
//     ring,
//     torusKnot3,
//     tetradron3,
//     dodecahedron3,
//     icosahedron3,
//     octahedron3,
//     groupe3,
//     svg3,
//     extrude3,
//     ui3,
//     htmlMesh,
//     // text3,
//     // text2
// } from "./object-3d/index.js";
// import { 
//     useDragControls,
//     usePointerControls,
//     useTransformControls
//  } from "./controls/index.js";
// const ZikoGl={
//     // THREE,
//     ui3,
//     htmlMesh,
//     // text3,
//     // text2,
//     loadSVG,
//     SceneGl,
//     SceneCss,
//     cube3,
//     plane3,
//     line3,
//     points3,
//     cuboid3,
//     cylindre3,
//     sphere3,
//     cone3,
//     torus3,
//     ring,
//     torusKnot3,
//     tetradron3,
//     dodecahedron3,
//     icosahedron3,
//     octahedron3,
//     groupe3,
//     svg3,
//     extrude3,
//     useAxesHelper,
//     useGridHelper,
//     usePolarHelper,
//     usePlaneHelper,
//     useBoxHelper,
//     useBoxVectorHelper,
//     useArrowHelper,
//     useLightHelper,
//     useTexture,
//     ambient_light,
//     directional_light,
//     hemisphere_light,
//     point_light,
//     rect_area_light,
//     spot_light,
//     useTransformControls,
//     useDragControls,
//     usePointerControls,
//     useCoordinates,
//     useEdges,
//     useWireframe,
//     usePoints,
//     useSprite
// }
// if ( globalThis.__ZikoGl__ ) {
//     console.warn( 'WARNING: Multiple instances of Zikogl.js being imported.' );
// 	} else {
// 		globalThis.__ZikoGl__={
//             ...ZikoGl,
//             ExtractAll: function () {
//                 const keys = Object.keys(this);
//                 for (let i = 0; i < keys.length; i++) {
//                     const key = keys[i];
//                     if (key !== 'ExtractAll' && key !== 'RemoveAll') {
//                         globalThis[key] = this[key];
//                     }
//                 }
//                 return this;
//             },
//             RemoveAll: function () {
//                 const keys = Object.keys(this);
//                 for (let i = 0; i < keys.length; i++) {
//                     const key = keys[i];
//                     if (key !== 'RemoveAll') {
//                         delete globalThis[key];
//                     }
//                 }
//                 return this;
//             }
//         };
// 	}
// export default ZikoGl