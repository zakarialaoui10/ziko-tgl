import { TGLMesh } from "../primitives/mesh/index.js";
import { TGLGroupe } from "../groupe/index.js";
class TGLExtrude extends TGLMesh{
    constructor(shape,depth=5,bevelEnabled=false){
        super()
        this.element=new THREE.Mesh(
            new THREE.ExtrudeGeometry(shape, {
            depth,
            bevelEnabled
        }));
        Object.assign(this.cache,{
			type:"extrude"
		})
    }
    isTGLExtrude(){
        return true;
    }
    get type(){
        return 'extrude'
		// return "svg";
	}
}
class TGLExtrudeSvg extends TGLGroupe{
    constructor(svg,depth=5,bevelEnabled=false){
        super()
        this.add(...loadSVG(svg).map(n=>extrude3(n,depth,bevelEnabled)))
    }
    isTGLExtrudeSvg(){
        return true;
    }
    get type(){
		return "svg";
	}
}
const extrude3=(shape,depth=5,bevelEnabled=false)=>new TGLExtrude(shape,depth,bevelEnabled);
//const svg3=(svg,depth=5,bevelEnabled=false)=>groupe3(...loadSVG(svg).map(n=>extrude3(n,depth,bevelEnabled)))
const svg3=(svg,depth=5,bevelEnabled=false)=>new TGLExtrudeSvg(svg,depth,bevelEnabled)
export {
    extrude3,
    svg3
}