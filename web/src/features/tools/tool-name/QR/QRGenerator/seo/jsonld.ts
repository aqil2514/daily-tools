import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const qrGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "qr-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate QR codes instantly for URLs or text without uploading data to any server.",
    id: "Buat kode QR secara instan untuk URL atau teks tanpa mengunggah data ke server.",
  },
};

export default qrGeneratorJsonLdSEO;
