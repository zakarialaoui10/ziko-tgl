import { TglObject3D } from "../object-3d/tgl-object3d.js";
import { 
    AmbientLight, 
    DirectionalLight, 
    HemisphereLight, 
    PointLight, 
    RectAreaLight, 
    SpotLight 
} from "three/src/Three.js";

class TglLight extends TglObject3D {
    constructor() {
        super();
    }
    get type(){
        return "light";
    }
    clone(){
        const OBJECT = new this.constructor();
        OBJECT.__proto__=this.__proto__;
        OBJECT.element=new this.element.constructor(...this.cache.args);
        return OBJECT
    }
    disableShadow(){
        this.element.castShadow = true;
        return this;
    }
    useShadow(width=512,height=512,bias=0,blur=4){
        this.element.castShadow = true;
        this.element.shadow.mapSize.width = width;
        this.element.shadow.mapSize.height = height;
        this.element.shadow.bias = bias; 
        this.element.shadow.blur = blur; 
        return this;
    }
}

class TglAmbientLight extends TglLight {
    constructor(color = 0xffffff, intensity = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity]
        })
        this.element = new AmbientLight(color, intensity);
    }
}

class TglDirectionalLight extends TglLight {
    constructor(color = 0xffffff, intensity = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity]
        })
        this.element = new DirectionalLight(color, intensity);
    }
}

class TglHemisphereLight extends TglLight {
    constructor(skyColor = 0xffffbb, groundColor = 0x080820, intensity = 1) {
        super();
        this.element = new HemisphereLight(skyColor, groundColor, intensity);
    }
}

class TglPointLight extends TglLight {
    constructor(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensit,distance,decay]
        })
        this.element = new PointLight(color, intensity, distance, decay);
    }
}

class TglRectAreaLight extends TglLight {
    constructor(color = 0xffffff, intensity = 1, width = 10, height = 10) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity,width,height]
        })
        this.element = new RectAreaLight(color, intensity, width, height);
    }
}

class TglSpotLight extends TglLight {
    constructor(color = 0xffffff, intensity = 1, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity,distance,angle,penumbra,decay]
        })
        this.element = new SpotLight(color, intensity, distance, angle, penumbra, decay);
    }
}

const ambient_light = (color, intensity) => new TglAmbientLight(color, intensity);
const directional_light = (color, intensity) => new TglDirectionalLight(color, intensity);
const hemisphere_light = (skyColor, groundColor, intensity) => new TglHemisphereLight(skyColor, groundColor, intensity);
const point_light = (color, intensity, distance, decay) => new TglPointLight(color, intensity, distance, decay);
const rect_area_light = (color, intensity, width, height) => new TglRectAreaLight(color, intensity, width, height);
const spot_light = (color, intensity, distance, angle, penumbra, decay) => new TglSpotLight(color, intensity, distance, angle, penumbra, decay);

export {
    ambient_light,
    directional_light,
    hemisphere_light,
    point_light,
    rect_area_light,
    spot_light
};
