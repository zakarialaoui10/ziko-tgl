import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { TGLCameraControl } from './TGLCameraControl';

class TGLFirstPersonControl extends TGLCameraControl{
    constructor(target) {
        super(target, "firstperson");
        this.init()
        this.onChange();
    }
    static get name(){
        return "firstperson"
    }
    init() {
        this.control = new FirstPersonControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.__TARGET__.onPtrMove(()=>{
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                this.control.update(0.1);
                if (handler) handler();
            }

        })
        return this;
    }
}

const fp_ctrl = target => new TGLFirstPersonControl(target);
export { 
    fp_ctrl,
    TGLFirstPersonControl
 }
