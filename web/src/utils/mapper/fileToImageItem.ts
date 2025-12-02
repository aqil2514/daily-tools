import { ImageItem } from "@/@types/Images";
import { nanoid } from "nanoid";

export function mapFileToImageItem(raw: File): ImageItem {
  return {
    id: nanoid(),
    format: raw.type.split("/")[1],
    url: URL.createObjectURL(raw),
    fileName: raw.name,
  };
}
