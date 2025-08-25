import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TGLCameraControl } from './camera-control.js';
class TGLOrbitControl extends TGLCameraControl{
    constructor(target){
        super(target, "orbit")
        this.init(false)
        this.onChange();
    }
    static get name(){
        return "orbit"
    }
    init(){
        this.control=new OrbitControls(this.__TARGET__.camera.currentCamera,this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler,renderGl=true,renderCss=true){
        this.control.addEventListener("change",()=>{
            if(!this.isPaused){
                this.__TARGET__.renderGl();
                if(renderGl)this.__TARGET__.renderGl();
                if(this.__TARGET__.cache.type==="css" && renderCss)this.__TARGET__.renderCss();
                if(handler)handler();
            }
        });
        return this;
    }
}
const orbit_ctrl = target => new TGLOrbitControl(target);
export {
    orbit_ctrl,
    TGLOrbitControl
}