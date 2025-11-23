import { 
    Sprite,
    SpriteMaterial
 } from "three";
import { TGLPrimitives } from "../tgl-primitives.js";
import { isValidTexture } from "../../../loaders/texture.js";
import { texture } from "../../../loaders/texture.js";
class TGLSprite extends TGLPrimitives{
    constructor(mapper){
        super()
        const material = new SpriteMaterial({ map: isValidTexture(mapper)?texture(mapper):null });
        this.element = new Sprite(material); 
    }
    isTGLSprite(){
        return true;
    }
    get type(){
        return "sprite";
    }
}
const sprite=texture=>new TGLSprite(texture);
export{
    sprite
}