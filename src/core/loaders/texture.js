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
const texture = mapper =>{
    if(mapper instanceof Texture) return mapper;
    if(mapper instanceof UIElement){
        const element = mapper.element;
        switch(element.tagName.toLowerCase()){
            case 'img' : return new TextureLoader().load(element.src);
            case 'canvas' : return new CanvasTexture(element);
            case 'video' : return new VideoTexture(element);
            case 'svg' : return texture( tags.img({src :mapper.toImg()}))
        }
    }
    if(mapper instanceof HTMLElement || mapper instanceof SVGAElement){
        switch(mapper.tagName.toLowerCase()){
            case 'img' : return new TextureLoader().load(mapper.src);
            case 'canvas' : return new CanvasTexture(mapper);
            case 'video' : return new VideoTexture(mapper);
            // case 'svg' : return texture( tags.img({src :mapper.toImg()}))
        }
    }
    // throw new Error("Unsupported mapper type");
}
const isValidTexture=mapper=>[
    Texture,
    // ZikoUIImage,
    // ZikoUICanvas,
    // ZikoUIVideo,
    // ZikoUISvg,
    HTMLImageElement,
    HTMLVideoElement,
    HTMLCanvasElement
].some(n=>mapper instanceof n)
export {
    isValidTexture,
    texture
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
