import { ImageItem } from "@/@types/Images";
import { nanoid } from "nanoid";
import { getImageMetadata } from "../image/getImageMetadata";

export async function mapUrlToImageItem(rawUrl: string): Promise<ImageItem> {
  const getFileNameFromUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const path = urlObj.pathname;
      const segments = path.split("/");
      let fileName = segments.pop() || "";

      if (fileName.includes("?")) {
        fileName = fileName.split("?")[0];
      }
      return fileName || "untitled";
    } catch {
      return "untitled";
    }
  };

  const image = await getImageMetadata(rawUrl);

  const fileName = getFileNameFromUrl(rawUrl);

  // Asumsi format (misalnya: png, jpeg) diambil dari ekstensi file
  const fileExtensionMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
  const format = fileExtensionMatch ? fileExtensionMatch[1] : "unknown";

  return {
    id: nanoid(),
    format: format,
    url: rawUrl, // Langsung gunakan URL string
    fileName: fileName,
    height: image.height,
    width: image.width,
  };
}
