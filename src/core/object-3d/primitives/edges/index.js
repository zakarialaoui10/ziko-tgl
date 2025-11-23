import { 
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial
 } from "three";
import { TGLMesh } from "../mesh/index.js";
import { TGLPrimitives } from "../tgl-primitives.js";
class TGLEdges extends TGLPrimitives{
    constructor(tgl_mesh){
        super()
        if(tgl_mesh instanceof TGLMesh){
            const Geometry = new EdgesGeometry(tgl_mesh.element.geometry);
            const Material = new LineBasicMaterial(tgl_mesh.cache.materialAttributes);
            this.element = new LineSegments(Geometry, Material);
        }
    }
    isTGLEdge(){
        return true
    }
    get type(){
        return "edges";
    }
}
const edges=tgl_mesh=>new TGLEdges(tgl_mesh);
export{
    edges
}