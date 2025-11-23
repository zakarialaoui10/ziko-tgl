import { TglObject3D } from "../../tgl-object3d.js";
import { 
    WireframeGeometry,
    LineSegments,
    LineBasicMaterial
 } from "three";
import { TGLMesh } from "../mesh/index.js";
class TGLWireframe extends TglObject3D{
    constructor(ZikoMesh){
        super()
        if(ZikoMesh instanceof TGLMesh){
            const Geometry = new WireframeGeometry(ZikoMesh.element.geometry);
            const Material = new LineBasicMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new LineSegments(Geometry, Material);
        }   
    }
    isTGLWireframe(){
        return true
    }
    get type(){
        return "wireframe"
    }
}
const wireframe=ZikoMesh=>new TGLWireframe(ZikoMesh);
export{
    wireframe
}