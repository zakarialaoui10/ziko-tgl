import { 
    Sprite,
    SpriteMaterial
 } from "three";
import { __ZikoThreeGeoMatBased__ } from "./__ZikoThreeGeoMatBased__";
import { isValidTexture } from "../../loaders/texture";
import { useTexture } from "../../loaders/texture";
class ZikoThreeSprite extends __ZikoThreeGeoMatBased__{
    constructor(texture){
        super()
        const material = new SpriteMaterial({ map: isValidTexture(texture)?useTexture(texture):null });
        this.element = new Sprite(material); 
    }
    get type(){
        return "sprite";
    }
}
const useSprite=texture=>new ZikoThreeSprite(texture);
export{
    useSprite
}