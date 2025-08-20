import { HTMLMesh } from 'three/examples/jsm/Addons.js';
import { TglObject3D } from '../tgl-object3d';
class ZikoThreHTMLMesh extends TglObject3D{
    constructor(UIElement){
        super()
        this.cache={
            type:"html"
        }
        this.element=new HTMLMesh(UIElement.element)
    }
    get type(){
		return "html";
	}
}
const htmlMesh=UIElement=>new ZikoThreHTMLMesh(UIElement)
export {htmlMesh}