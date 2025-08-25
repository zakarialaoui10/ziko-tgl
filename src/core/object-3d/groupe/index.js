
import * as THREE from "three"
import { 
	TglObject3D,
 } from "../tgl-object3d.js";
import { TGLMesh } from "../primitives/mesh/index.js";
class TGLGroupe extends TglObject3D{
	constructor(){
		super();
		this.element=new THREE.Group();
		this.items=[];
		Object.assign(this.cache,{
			type:"groupe"
		})
	}
	get type(){
		return "groupe";
	}
	add(...obj){
		for(let i=0;i<obj.length;i++){
			if(obj[i] instanceof THREE.Mesh){
				obj[i]=new TGLMesh(obj);
			}
			this.element.add(obj[i].element);
			this.items.push(obj[i]);
			obj[i].parent=this;
		}
       return this;
	}
	remove(...obj){
        if(obj.length===0){
            //remove groupe
        }
		else for(let i=0;i<obj.length;i++){
			this.element.remove(obj[i].element);
		}
       return this;
	}
}
export const groupe3=(...obj)=>new TGLGroupe().add(...obj);
export {TGLGroupe}

