import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { __ZikoThreeCameraControls__ } from './__ZikoThreeCameraControls__';

class TGLPointerLockControl extends __ZikoThreeCameraControls__{
    constructor(target) {
        super(target, "pointerlock");
        this.init()
        this.onChange();
    }
    static get name(){
        return "pointerlock"
    }
    init() {
        this.control = new PointerLockControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.__TARGET__.onPtrMove(()=>{
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                // this.control.update(0.1);
                if (handler) handler();
            }

        })
        return this;
    }
}

const ptr_lock_ctrl = target => new TGLPointerLockControl(target);
export { 
    ptr_lock_ctrl,
    TGLPointerLockControl
 }
