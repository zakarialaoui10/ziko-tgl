import { HTMLMesh } from 'three/examples/jsm/Addons.js';
import { TglObject3D } from '../tgl-object3d';
class TGLHTMLMesh extends TglObject3D{
    constructor(UIElement){
        super()
        this.cache={
            type:"html"
        }
        this.element=new HTMLMesh(UIElement.element)
    }
    isTGLHTMLMesh(){
        return true;
    }
    get type(){
		return "html";
	}
}
const html_mesh=UIElement=>new TGLHTMLMesh(UIElement)
export {html_mesh}