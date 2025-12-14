import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const rhombusJsonLdSEO: JsonLdSEO = {
  slug: "rhombus-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a rhombus easily using diagonals and side length. Includes formulas, visual illustration, and practice questions.",
    id: "Hitung luas dan keliling belah ketupat dengan mudah menggunakan diagonal dan panjang sisi. Dilengkapi rumus, ilustrasi visual, dan simulasi soal.",
  },
};

export default rhombusJsonLdSEO;
