import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageMetadataViewerJsonLdSEO: JsonLdSEO = {
  slug: "image-metadata-viewer",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-18",

  searchSnippet: {
    en: "View image metadata such as EXIF data, camera details, resolution, and GPS information directly in your browser without uploading files.",
    id: "Lihat metadata gambar seperti data EXIF, detail kamera, resolusi, dan informasi GPS langsung di browser tanpa mengunggah file.",
  },
};

export default imageMetadataViewerJsonLdSEO;
