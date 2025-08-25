import { MapControls } from 'three/addons/controls/MapControls.js';
import { TGLCameraControl } from '../../core/controls/camera/camera-control.js';
class TGLMapControl extends TGLCameraControl{
    constructor(target) {
        super(target, "map")
        this.init()
        this.onChange();
    }
    static get name(){
        return "map"
    }
    init() {
        this.control = new MapControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.control.addEventListener("change", () => {
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                if (handler) handler();
            }
        });
        return this;
    }
}

const map_ctrl = target => new TGLMapControl(target);
export { 
    map_ctrl,
    TGLMapControl
 };