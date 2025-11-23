import { 
    Mesh,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    SphereGeometry,
    ConeGeometry,
    TorusGeometry,
    RingGeometry,
    TorusKnotGeometry,
    TetrahedronGeometry,
    DodecahedronGeometry,
    IcosahedronGeometry,
    OctahedronGeometry,
    MeshBasicMaterial,
    MeshPhongMaterial,
    MeshDepthMaterial,
    MeshLambertMaterial,
    MeshPhysicalMaterial,
    MeshNormalMaterial,
    MeshStandardMaterial,
    MeshDistanceMaterial,
    MeshMatcapMaterial,
    MeshToonMaterial
 } from "three";
import { TGLPrimitives } from "../tgl-primitives.js";
class TGLMesh extends TGLPrimitives {
    constructor(Geometry, Material) {
        super();
        this.element = new Mesh(Geometry, Material);
    }
    isTGLMEsh(){
        return true;
    }
    get type() {
        return "mesh";
    }
    static {
        const materialMap = {
            MeshBasicMaterial,
            MeshPhongMaterial,
            MeshDepthMaterial,
            MeshLambertMaterial,
            MeshPhysicalMaterial,
            MeshNormalMaterial,
            MeshStandardMaterial,
            MeshDistanceMaterial,
            MeshMatcapMaterial,
            MeshToonMaterial
        };
        for (const [name, MaterialClass] of Object.entries(materialMap)) {
            const methodName = `use${name}`;
            this.prototype[methodName] = function () {
                this.element.material = new MaterialClass(this.cache.materialAttributes);
                this?.parent?.renderGl()
                return this;
            };
        }
    }
}
const cube3=(l)=>new TGLMesh(new BoxGeometry(l,l,l));
const plane3=(w,h)=>new TGLMesh(new PlaneGeometry(w,h,100,100));
const cuboid3=(l,L,h)=>new TGLMesh(new BoxGeometry(l,L,h));
const cylindre3=(rT,rB,h)=>new TGLMesh(new CylinderGeometry(rT,rB,h,100)); 
const sphere3 = (r, { width = 50, height = 50, phi = [0, 2 * Math.PI], theta = [0, 2 * Math.PI] } = {}) => {
    return new TGLMesh(
        new SphereGeometry(r, width, height, phi[0], phi[1], theta[0], theta[1])
    );
};
const cone3=(r,h)=>new TGLMesh(new ConeGeometry(r,h,100));
const torus3=(r,tubeRadius)=>new TGLMesh(new TorusGeometry(r,tubeRadius,100,100,2*PI));  
const ring=(innerRadius=1, outerRadius=2, thetaSegments=20)=>new TGLMesh(new RingGeometry(innerRadius, outerRadius, thetaSegments));
const torusKnot3=(r,tube,tubularSegments,radialSegments,p,q)=>new TGLMesh(new TorusKnotGeometry(r,tube,tubularSegments,radialSegments,p,q));
const tetradron3=(r)=>new TGLMesh(new TetrahedronGeometry(r));
const dodecahedron3=(r)=>new TGLMesh(new DodecahedronGeometry(r));
const icosahedron3=(r)=>new TGLMesh(new IcosahedronGeometry(r));
const octahedron3=(r)=>new TGLMesh(new OctahedronGeometry(r));
export{
    TGLMesh,
    cube3,
    plane3,
    cuboid3,
    cylindre3,
    sphere3,
    cone3,
    torus3,
    ring,
    torusKnot3,
    tetradron3,
    dodecahedron3,
    icosahedron3,
    octahedron3
}