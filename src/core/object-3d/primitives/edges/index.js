import { 
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial
 } from "three";
import { TGLMesh } from "../mesh/index.js";
import { TGLPrimitives } from "../tgl-primitives.js";
class TGLEdges extends TGLPrimitives{
    constructor(ZikoMesh){
        super()
        if(ZikoMesh instanceof TGLMesh){
            const Geometry = new EdgesGeometry(ZikoMesh.element.geometry);
            const Material = new LineBasicMaterial(ZikoMesh.cache.materialAttributes);
            this.element = new LineSegments(Geometry, Material);
        }
    }
    isEdge(){
        return true
    }
    get type(){
        return "edges";
    }
}
const edges=ZikoMesh=>new TGLEdges(ZikoMesh);
export{
    edges
}