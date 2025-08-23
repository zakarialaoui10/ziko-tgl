import { 
    Sprite,
    SpriteMaterial
 } from "three";
import { __ZikoThreeGeoMatBased__ } from "./__ZikoThreeGeoMatBased__.js";
import { isValidTexture } from "../../loaders/texture.js";
import { useTexture } from "../../loaders/texture.js";
class ZikoThreeSprite extends __ZikoThreeGeoMatBased__{
    constructor(texture){
        super()
        const material = new SpriteMaterial({ map: isValidTexture(texture)?useTexture(texture):null });
        this.element = new Sprite(material); 
    }
    isSprite(){
        return true;
    }
    get type(){
        return "sprite";
    }
}
const useSprite=texture=>new ZikoThreeSprite(texture);
export{
    useSprite
}