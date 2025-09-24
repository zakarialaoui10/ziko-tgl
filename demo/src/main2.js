import { SceneCss, ui3 } from "ziko-tgl/core";
import {tags, Flex} from 'ziko'
import { Object3D, Vector3 } from "three";
const {span} = tags

globalThis.s3d = SceneCss('80vw','80vh').style({
    border : '2px darkblue solid',
    margin : '2em auto'
})
const uis = []
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        uis.push(ui3(
            span(`Text (${i},${j})`)
        )
        .pos(500-i*100, 500-j*100, 0))
        // .pos()
    }
}

s3d.add(
    tags.section(Flex(
        span("L1 ..."),
        span("L2 ..."),
        span("L3 ..."),
        span("L4 ..."),
        span("L5 ..."),
        span("L6 ..."),
        span("L7 ..."),
        span("L8 ..."),
    )
    .horizontal('space-around', 'space-around')
    .wrap("200px"))
    .style({
        background : 'red',
        width : '100%',
        // height : '30%'
    })
)
// s3d.add(...uis)

// const vector = new Vector3()
// for(let i=0, l = s3d.items.length; i<s3d.items.length; i++){
//     const phi = Math.acos( - 1 + ( 2 * i ) / l );
//     const theta = Math.sqrt( l * Math.PI ) * phi;
//     const object = new Object3D();
//     object.position.setFromSphericalCoords( 200, phi, theta );
//     vector.copy( object.position ).multiplyScalar( 2 );
//     object.lookAt( vector );
//     s3d.items[i].pos(vector.x, vector.y, vector.z)
// }

s3d.camera.posZ(1000)