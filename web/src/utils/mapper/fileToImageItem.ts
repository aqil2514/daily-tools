import { ImageItem } from "@/@types/Images";
import { nanoid } from "nanoid";
import { getImageMetadata } from "../image/getImageMetadata";

export async function mapFileToImageItem(raw: File): Promise<ImageItem> {
  const image = await getImageMetadata(raw);
  return {
    id: nanoid(),
    format: raw.type.split("/")[1],
    url: URL.createObjectURL(raw),
    fileName: raw.name,
    height: image.height,
    width: image.width,
  };
}
