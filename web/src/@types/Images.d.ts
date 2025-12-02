export type ImageSource = "file" | "url";
export type ImageOutputFormat = "jpg" | "png" | "webp";

export interface ImageItem {
  id: string;
  url: string;
  fileName: string;
  format: string;
}
