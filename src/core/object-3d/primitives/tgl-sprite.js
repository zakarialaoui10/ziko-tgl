import { 
    Sprite,
    SpriteMaterial
 } from "three";
import { TGLPrimitives } from "./__tgl-primitives__.js";
import { isValidTexture } from "../../loaders/texture.js";
import { texture } from "../../loaders/texture.js";
class TGLSprite extends TGLPrimitives{
    constructor(texture){
        super()
        const material = new SpriteMaterial({ map: isValidTexture(texture)?texture(texture):null });
        this.element = new Sprite(material); 
    }
    isSprite(){
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