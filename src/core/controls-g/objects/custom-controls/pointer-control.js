import {
    EventDispatcher,
    Plane,
    Raycaster,
    Vector2,
    Vector3
} from 'three';
class PointerControls extends EventDispatcher {
    #cache
    constructor(objects, camera, domElement) {
        super();
        this.#cache={
            plane : new Plane(),
            raycaster : new Raycaster(),
            pointer : new Vector2(),
            previousPointer : new Vector2(),
            worldPosition : new Vector3(),
            hovered : null,
            selected : null,
            intersections : []
        }
        this.objects = objects;
        this.camera = camera;
        this.domElement = domElement;
        this.domElement.style.touchAction = 'none'; 
        this.enabled = true;
        this.recursive = true;
        this.transformGroup = false;
        this.activate();
    }
    activate() {
        this.domElement.addEventListener('pointermove', this.#onPointerMove.bind(this));
        this.domElement.addEventListener('pointerdown', this.#onPointerDown.bind(this));
        this.domElement.addEventListener('pointerup', this.#onPointerCancel.bind(this));
        this.domElement.addEventListener('pointerleave', this.#onPointerCancel.bind(this));
    }
    deactivate() {
        this.domElement.removeEventListener('pointermove', this.#onPointerMove.bind(this));
        this.domElement.removeEventListener('pointerdown', this.#onPointerDown.bind(this));
        this.domElement.removeEventListener('pointerup', this.#onPointerCancel.bind(this));
        this.domElement.removeEventListener('pointerleave', this.#onPointerCancel.bind(this));
        this.domElement.style.cursor = '';
    }
    dispose() {
        this.deactivate();
    }
    getObjects() {
        return this.objects;
    }
    setObjects(objects) {
        this.objects = objects;
    }
    #onPointerMove(event) {
        if (this.enabled === false) return;
        this.#updatePointer(event);
        this.#cache.raycaster.setFromCamera(this.#cache.pointer, this.camera);
        if(!this.#cache.selected) {
            if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                this.#cache.intersections.length = 0;
                this.#cache.raycaster.setFromCamera(this.#cache.pointer, this.camera);
                this.#cache.raycaster.intersectObjects(this.objects, this.recursive, this.#cache.intersections);
                if (this.#cache.intersections.length > 0) {
                    const object = this.#cache.intersections[0].object;
                    this.#cache.plane.setFromNormalAndCoplanarPoint(
                        this.camera.getWorldDirection(this.#cache.plane.normal),
                        this.#cache.worldPosition.setFromMatrixPosition(object.matrixWorld)
                    );
                    if (this.#cache.hovered !== object && this.#cache.hovered !== null) {
                        this.dispatchEvent({ type: 'hoveroff', object: this.#cache.hovered });
                        this.domElement.style.cursor = 'auto';
                        this.#cache.hovered = null;
                    }
                    if (this.#cache.hovered !== object) {
                        this.dispatchEvent({ type: 'hoveron', object: object });
                        this.domElement.style.cursor = 'pointer';
                        this.#cache.hovered = object;
                    }
                } else {
                    if (this.#cache.hovered !== null) {
                        this.dispatchEvent({ type: 'hoveroff', object: this.#cache.hovered });
                        this.domElement.style.cursor = 'auto';
                        this.#cache.hovered = null;
                    }
                }
            }
        }
        this.#cache.previousPointer.copy(this.#cache.pointer);
    }
    #onPointerDown(event) {
        if (this.enabled === false) return;
        this.#updatePointer(event);
        this.#cache.intersections.length = 0;
        this.#cache.raycaster.setFromCamera(this.#cache.pointer, this.camera);
        this.#cache.raycaster.intersectObjects(this.objects, this.recursive, this.#cache.intersections);
        if (this.#cache.intersections.length > 0) {
            if (this.transformGroup === true) {
                this.#cache.selected = this.#findGroup(this.#cache.intersections[0].object);
            } else {
                this.#cache.selected = this.#cache.intersections[0].object;
            }
            this.domElement.style.cursor = 'move';
            this.dispatchEvent({ type: 'click', object: this.#cache.selected });
        }
        this.#cache.previousPointer.copy(this.#cache.pointer);
    }
    #onPointerCancel() {
        if (this.enabled === false) return;
        if (this.#cache.selected) {
            this.dispatchEvent({ type: 'pointerup', object: this.#cache.selected });
            this.#cache.selected = null;
        }
        this.domElement.style.cursor = this.#cache.hovered ? 'pointer' : 'auto';
    }
    #updatePointer(event) {
        const rect = this.domElement.getBoundingClientRect();
        this.#cache.pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
        this.#cache.pointer.y = - (event.clientY - rect.top) / rect.height * 2 + 1;
    }
    #findGroup(obj, group = null) {
        if (obj.isGroup) group = obj;
        if (obj.parent === null) return group;
        return this.#findGroup(obj.parent, group);
    }
}

export { PointerControls };
