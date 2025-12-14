import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const semicircleJsonLdSEO: JsonLdSEO = {
  slug: "semicircle-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a semicircle easily using its radius. Includes formulas, visual illustration, and practice questions.",
    id: "Hitung luas dan keliling setengah lingkaran dengan mudah menggunakan jari-jari. Dilengkapi rumus, ilustrasi visual, dan simulasi soal.",
  },
};

export default semicircleJsonLdSEO;
