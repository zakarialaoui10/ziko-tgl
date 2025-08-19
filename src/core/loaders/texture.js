import { 
    Texture,
    TextureLoader,
    CanvasTexture,
    VideoTexture
} from "three";
// import {
//     LottieLoader
// } from "three/examples/jsm/Addons.js";
import { UIElement } from "ziko";
const useTexture=texture=>{
    console.log(texture)
    if(texture instanceof Texture) return texture;
    if(texture instanceof UIElement){
        if(texture.element.tagName.toLowerCase() === 'img'){
        console.log(texture.element.src)
            return new TextureLoader().load(texture.element.src);
        }
        if(texture.element.tagName.toLowerCase() === 'canvas') return new CanvasTexture(texture.element);
        if(texture.element.tagName.toLowerCase() === 'video') return new VideoTexture(texture.element);
        if(texture.element.tagName.toLowerCase() === 'svg') return useTexture(new ZikoUIImage(texture.toImg()));
    }
    
    if(texture instanceof HTMLImageElement) return new TextureLoader().load(texture.src);
    if(texture instanceof HTMLCanvasElement) return new CanvasTexture(texture);
    if(texture instanceof HTMLVideoElement) return new VideoTexture(texture);
    // throw new Error("Unsupported texture type");
}
const isValidTexture=texture=>[
    Texture,
    // ZikoUIImage,
    // ZikoUICanvas,
    // ZikoUIVideo,
    // ZikoUISvg,
    HTMLImageElement,
    HTMLVideoElement,
    HTMLCanvasElement
].some(n=>texture instanceof n)
export {
    isValidTexture,
    useTexture
}

// if(value instanceof UIElement){
//     if(value instanceof ZikoUIImage){}
//     if(value instanceof ZikoUISvg){}
//     if(value instanceof ZikoUICanvas){}
//     if(value instanceof ZikoUIVideo){}
// }
// if(value instanceof HTMLElement){
//     if(value instanceof HTMLImageElement){}
//     if(value instanceof HTMLCanvasElement){}
//     if(value instanceof HTMLVideoElement){}
// }
// if(value instanceof SVGSVGElement){}
