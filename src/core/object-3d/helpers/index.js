import { 
    Vector3,
    AxesHelper,
    GridHelper,
    PolarGridHelper,
    Plane,
    PlaneHelper,
    BoxHelper,
    Box3Helper,
    Box3,
    ArrowHelper,
    DirectionalLightHelper,
    HemisphereLightHelper,
    SpotLightHelper,
    PointLightHelper,
 } from "three";
import { TglObject3D } from "../tgl-object3d";
class TGLHelper extends TglObject3D{
    constructor(){
        super()
    }
    isTGLHelper(){
        return true;
    }
    get type(){
        return "helper";
    }
    clone(){
        const OBJECT = new this.constructor();
        OBJECT.__proto__=this.__proto__;
        OBJECT.element=new this.element.constructor(...this.cache.args);
        return OBJECT
    }
}
class TGLAxesHelper extends TGLHelper{
    constructor(size){
        super()
        Object.assign(this.cache,{
            args:[size]
        })
        this.element=new AxesHelper(size);
    }
}
class TGLGridHelper extends TGLHelper{
    constructor(n,m,color1,color2){
        super()
        Object.assign(this.cache,{
            args:[n,m,color1,color2]
        })
        this.element=new GridHelper(n,m,color1,color2);
    }
}
class TGLPolarHelper extends TGLHelper{
    constructor(radius,radials,circles,divisions){
        super()
        Object.assign(this.cache,{
            args:[radius,radials,circles,divisions]
        })
        this.element=new PolarGridHelper(radius,radials,circles,divisions);

    }
}
class TGLPlaneHelper extends TGLHelper{
    constructor(V,size,color){
        super()
        Object.assign(this.cache,{
            args:[V,size,color]
        })
        this.plane= new Plane( new Vector3( ...V ), size );
        this.element=new PlaneHelper(this.plane,size,color);
    }
}
class TGLBoxHelper extends TGLHelper{
    constructor(ZikoGlObject,color){
        super()
        Object.assign(this.cache,{
            args:[ZikoGlObject,color]
        })
        this.element=new BoxHelper(ZikoGlObject.element,color);
    }
    clone(){
        return this
    }
}
class TGLBox3Helper extends TGLHelper{
    constructor(V0,V1,color){
        super()
        Object.assign(this.cache,{
            args:[V0,V1,color]
        })
        this.box=new Box3(Vector3(...V0),Vector3(...V1),color)
        this.element=new Box3Helper(this.box,color);
    }
}
class TGLArrowHelper extends TGLHelper{
    constructor(originVector,directionVector,length,color){
        super()
        Object.assign(this.cache,{
            args:[originVector,directionVector,length,color]
        })
        this.element=new ArrowHelper(new Vector3(...directionVector),new Vector3(...originVector),length,color)
    }
}
class TGLLightHelper extends TGLHelper{
    constructor(ZikoLight,color,size){
        super()
        Object.assign(this.cache,{
            args:[ZikoLight,color,size]
        })
        if(ZikoLight.type!=="light"){
            // Err
        }
        this.attached_light=ZikoLight;
        switch(ZikoLight.element.type){
            case "DirectionalLight":this.element=new DirectionalLightHelper(ZikoLight.element,size,color);break;
            case "HemisphereLight":this.element=new HemisphereLightHelper(ZikoLight.element,size,color);break;
            case "SpotLight":this.element=new SpotLightHelper(ZikoLight.element,color);break;
            case "PointLight":this.element=new PointLightHelper(ZikoLight.element,size,color);break;
        }
    }
    clone(){
        return this
    }
}
const useAxesHelper=(size)=>new TGLAxesHelper(size);
const useGridHelper=(N,M,color1,color2)=>new TGLGridHelper(N,M,color1,color2);
const usePolarHelper=(radius,radials,circles,divisions)=>new TGLPolarHelper(radius,radials,circles,divisions);
const usePlaneHelper=(V,size,color)=>new TGLPlaneHelper(V,size,color);
const useBoxHelper=(ZikoGlObject,color)=>new TGLBoxHelper(ZikoGlObject,color);
const useBoxVectorHelper=(V0=[0,0,0],V1=[1,1,1],color=0x222222)=>new TGLBox3Helper(V0,V1,color);
const useArrowHelper=(originVector,directionVector,length,color)=>new TGLArrowHelper(originVector,directionVector,length,color);
const useLightHelper=(ZikoLight,color,size)=>new TGLLightHelper(ZikoLight,color,size);
export{
    useAxesHelper,
    useGridHelper,
    usePolarHelper,
    usePlaneHelper,
    useBoxHelper,
    useBoxVectorHelper,
    useArrowHelper,
    useLightHelper,
    TGLLightHelper,
}