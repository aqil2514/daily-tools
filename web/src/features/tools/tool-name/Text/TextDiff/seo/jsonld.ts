import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const textDiffJsonLdSEO: JsonLdSEO = {
  slug: "text-diff",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Compare two texts and highlight what has changed, added, or removed — all processed locally in your browser.",
    id: "Bandingkan dua teks dan sorot perubahan, penambahan, atau penghapusan — semua diproses lokal di browser.",
  },
};

export default textDiffJsonLdSEO;
