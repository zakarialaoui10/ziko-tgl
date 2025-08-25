import { 
    Points,
    PointsMaterial,
    BufferGeometry
 } from "three";
import { TGLMesh } from "../mesh/index.js";
import { TGLPrimitives } from "../__tgl-primitives__.js";
class TGLPoints extends TGLPrimitives{
    constructor(){
        super();
    }
    isPoints(){
        return true;
    }
    get type(){
        return "points"
    }
}
class TGLMeshBasedPoints extends TGLPoints{
    constructor(ZikoMesh){
        super();
        if(ZikoMesh instanceof TGLMesh){
            const Material = new PointsMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new Points(ZikoMesh.element.geometry, Material);
        }
    }
}
class TGLVectorBasedPoints extends TGLPoints{
    constructor(X,Y,Z,size,color){
        super();
        const geometry = new BufferGeometry();
        const vertices = [];
        for(let i=0;i<X.length;i++){
            vertices.push(X[i],Y[i],Z[i]);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new PointsMaterial({ color: 0x888888, size: 0.5 });
        this.element = new Points(geometry,material);
    }
}
const usePoints=ZikoMesh=>new TGLMeshBasedPoints(ZikoMesh);
const points3=(X,Y,Z,size = 0.1,color = 0x111111)=>new TGLVectorBasedPoints(X,Y,Z,size,color);
export{
    usePoints,
    points3
}