import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageCropperJsonLdSEO: JsonLdSEO = {
  slug: "image-cropper",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Crop images with flexible aspect ratios directly in your browser without uploading files.",
    id: "Potong gambar dengan rasio aspek fleksibel langsung di browser tanpa mengunggah file.",
  },
};

export default imageCropperJsonLdSEO;
