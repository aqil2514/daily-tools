import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const imageRotateJsonLdSEO: JsonLdSEO = {
  slug: "image-rotate",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Rotate images instantly to correct orientation or flip images directly in your browser.",
    id: "Putar gambar secara instan untuk memperbaiki orientasi atau membalik gambar langsung di browser.",
  },
};

export default imageRotateJsonLdSEO;
