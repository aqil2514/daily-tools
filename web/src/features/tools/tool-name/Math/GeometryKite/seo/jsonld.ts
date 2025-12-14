import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const kiteJsonLdSEO: JsonLdSEO = {
  slug: "kite-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a kite easily using diagonals and side lengths. Includes formulas, visual illustration, and practice questions.",
    id: "Hitung luas dan keliling layang-layang dengan mudah menggunakan diagonal dan panjang sisi. Dilengkapi rumus, ilustrasi visual, dan simulasi soal.",
  },
};

export default kiteJsonLdSEO;
