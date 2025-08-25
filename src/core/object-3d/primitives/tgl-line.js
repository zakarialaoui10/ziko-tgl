import { 
    Line,
    BufferGeometry,
    LineBasicMaterial,
    LineDashedMaterial
 } from "three";
import { TGLPrimitives } from "./__tgl-primitives__";
class ZikoThreeLine extends TGLPrimitives{
    constructor(X,Y,Z){
        super();
        let points = [X,Y,Z].map(pts=>new THREE.Vector3(...pts));
        let geometry = BufferGeometry().setFromPoints(points);
        this.element = Line(geometry);
    }
    isLine(){
        return true;
    }
    get type(){
        return "line"
    }
    useLineBasicMaterial(){
        this.element.material=new LineBasicMaterial(this.cache.materialAttributes);
        this?.parent?.renderGl()
        return this;
    }
    useLineDashedMaterial(){
        this.element.material=new LineDashedMaterial(this.cache.materialAttributes);
        this?.parent?.renderGl()
        return this;
    }
}
const line3=(X,Y,Z=new Array(X.length).fill(0))=>new ZikoThreeLine(X,Y,Z)
export{
    ZikoThreeLine,
    line3
}