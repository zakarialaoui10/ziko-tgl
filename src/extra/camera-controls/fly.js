import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { TGLCameraControl } from './TGLCameraControl';

class TGLFlyControl extends TGLCameraControl{
    constructor(target) {
        super(target, "fly");
        this.init()
        this.onChange();
    }
    static get name(){
        return "fly"
    }
    init() {
        this.control = new FlyControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
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

const fly_ctrl = target => new TGLFlyControl(target);
export { 
    fly_ctrl,
    TGLFlyControl
 }
