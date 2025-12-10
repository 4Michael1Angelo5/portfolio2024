
export interface PersonalAsset {
    title: string;
    coverImage: string;
    technologies: Technology[];
    description:string;
    shortDescription: string;
    assetDetails: AssetDetail[];
    mobileAssets: MobileAsset[] | null;
    link: string | null;
}

export type AssetDetail = {
    title: string;
    media: MediaAsset;
    description:string;
}

export type Technology = {
    title: string;
    src: string;
}

export type MobileAsset = {
    title: string;
    media: MediaAsset;
}

export type MediaAsset = VideoAsset | ImageAsset;

export type VideoAsset = {
    type:"video";
    src: string;
}
export type ImageAsset = {
    type:"image";
    src: string;
}

