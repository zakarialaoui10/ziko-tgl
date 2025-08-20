import { 
    Texture,
    TextureLoader,
    CanvasTexture,
    VideoTexture
} from "three";
// import {
//     LottieLoader
// } from "three/examples/jsm/Addons.js";
import { UIElement, tags } from "ziko";
const useTexture = texture =>{
    if(texture instanceof Texture) return texture;
    if(texture instanceof UIElement){
        const element = texture.element;
        switch(element.tagName.toLowerCase()){
            case 'img' : return new TextureLoader().load(element.src);
            case 'canvas' : return new CanvasTexture(element);
            case 'video' : return new VideoTexture(element);
            case 'svg' : return useTexture( tags.img({src :texture.toImg()}))
        }
    }
    if(texture instanceof HTMLElement || texture instanceof SVGAElement){
        switch(texture.tagName.toLowerCase()){
            case 'img' : return new TextureLoader().load(texture.src);
            case 'canvas' : return new CanvasTexture(texture);
            case 'video' : return new VideoTexture(texture);
            // case 'svg' : return useTexture( tags.img({src :texture.toImg()}))
        }
    }
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
