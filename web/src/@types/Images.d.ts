export type ImageSource = "file" | "url";
export type ImageOutputFormat = "jpg" | "png" | "webp";

export interface ImageItem {
  id: string;
  url: string;
  fileName: string;
  format: string;
  height: number;
  width: number;
}

export interface ImageUrl{
  preview:string;
  result:string;
}

export interface ImageResizerSettings {
  width: number;
  height: number;
  keepRatio: boolean;
  ratio: number;
}
