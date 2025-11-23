import { TglObject3D } from "../../../src/core/object-3d/tgl-object3d";
// import type { TglObject3D } from "../object-3d/tgl-object3d.js"; Not Available Yet
import type {
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
    PointLight,
    RectAreaLight,
    SpotLight
} from "three/src/Three.js";

export declare class TglLight extends TglObject3D {
    element: any;
    cache: {
        args?: any[];
        [k: string]: any;
    };

    constructor();

    get type(): "light";

    isTGLLight(): true;

    clone(): this;

    disableShadow(): this;

    useShadow(
        width?: number,
        height?: number,
        bias?: number,
        blur?: number
    ): this;
}

export declare class TglAmbientLight extends TglLight {
    element: AmbientLight;

    constructor(color?: number | string, intensity?: number);
}

export declare class TglDirectionalLight extends TglLight {
    element: DirectionalLight;

    constructor(color?: number | string, intensity?: number);
}

export declare class TglHemisphereLight extends TglLight {
    element: HemisphereLight;

    constructor(
        skyColor?: number | string,
        groundColor?: number | string,
        intensity?: number
    );
}

export declare class TglPointLight extends TglLight {
    element: PointLight;

    constructor(
        color?: number | string,
        intensity?: number,
        distance?: number,
        decay?: number
    );
}

export declare class TglRectAreaLight extends TglLight {
    element: RectAreaLight;

    constructor(
        color?: number | string,
        intensity?: number,
        width?: number,
        height?: number
    );
}

export declare class TglSpotLight extends TglLight {
    element: SpotLight;

    constructor(
        color?: number | string,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number
    );
}

export declare const ambient_light: (
    color?: number | string,
    intensity?: number
) => TglAmbientLight;

export declare const directional_light: (
    color?: number | string,
    intensity?: number
) => TglDirectionalLight;

export declare const hemisphere_light: (
    skyColor?: number | string,
    groundColor?: number | string,
    intensity?: number
) => TglHemisphereLight;

export declare const point_light: (
    color?: number | string,
    intensity?: number,
    distance?: number,
    decay?: number
) => TglPointLight;

export declare const rect_area_light: (
    color?: number | string,
    intensity?: number,
    width?: number,
    height?: number
) => TglRectAreaLight;

export declare const spot_light: (
    color?: number | string,
    intensity?: number,
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number
) => TglSpotLight;
