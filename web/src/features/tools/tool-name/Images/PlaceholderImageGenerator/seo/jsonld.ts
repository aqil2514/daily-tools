import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const placeholderImageGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "placeholder-image-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-19",

  searchSnippet: {
    en: "Generate placeholder images instantly with custom sizes, colors, and text directly in your browser without uploading files.",
    id: "Buat gambar placeholder secara instan dengan ukuran, warna, dan teks khusus langsung di browser tanpa mengunggah file.",
  },
};

export default placeholderImageGeneratorJsonLdSEO;
