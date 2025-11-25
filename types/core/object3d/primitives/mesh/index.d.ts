import {
    Mesh,
    Material,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    SphereGeometry,
    ConeGeometry,
    TorusGeometry,
    RingGeometry,
    TorusKnotGeometry,
    TetrahedronGeometry,
    DodecahedronGeometry,
    IcosahedronGeometry,
    OctahedronGeometry,
} from "three";

import { TGLPrimitives } from "../tgl-primitives.js";

export declare class TGLMesh<
    G extends THREE.BufferGeometry = THREE.BufferGeometry,
    M extends Material = Material
> extends TGLPrimitives {

    element: Mesh<G, M>;
    cache: {
        materialAttributes?: Record<string, any>;
        [key: string]: any;
    };

    constructor(geometry: G, material?: M);

    isTGLMEsh(): true;

    readonly type: "mesh";

    // Auto-generated material switchers
    useMeshBasicMaterial(): this;
    useMeshPhongMaterial(): this;
    useMeshDepthMaterial(): this;
    useMeshLambertMaterial(): this;
    useMeshPhysicalMaterial(): this;
    useMeshNormalMaterial(): this;
    useMeshStandardMaterial(): this;
    useMeshDistanceMaterial(): this;
    useMeshMatcapMaterial(): this;
    useMeshToonMaterial(): this;
}

/* -----------------------------
   Factory functions
------------------------------ */

export declare function cube3(l: number): TGLMesh<BoxGeometry>;
export declare function plane3(
    w: number,
    h: number
): TGLMesh<PlaneGeometry>;

export declare function cuboid3(
    l: number,
    L: number,
    h: number
): TGLMesh<BoxGeometry>;

export declare function cylindre3(
    rTop: number,
    rBottom: number,
    height: number
): TGLMesh<CylinderGeometry>;

export interface SphereOptions {
    width?: number;
    height?: number;
    phi?: [number, number];
    theta?: [number, number];
}

export declare function sphere3(
    r: number,
    options?: SphereOptions
): TGLMesh<SphereGeometry>;

export declare function cone3(
    r: number,
    h: number
): TGLMesh<ConeGeometry>;

export declare function torus3(
    r: number,
    tubeRadius: number
): TGLMesh<TorusGeometry>;

export declare function ring(
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number
): TGLMesh<RingGeometry>;

export declare function torusKnot3(
    r: number,
    tube: number,
    tubularSegments: number,
    radialSegments: number,
    p: number,
    q: number
): TGLMesh<TorusKnotGeometry>;

export declare function tetradron3(r: number): TGLMesh<TetrahedronGeometry>;
export declare function dodecahedron3(r: number): TGLMesh<DodecahedronGeometry>;
export declare function icosahedron3(r: number): TGLMesh<IcosahedronGeometry>;
export declare function octahedron3(r: number): TGLMesh<OctahedronGeometry>;
