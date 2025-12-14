import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const rectangleJsonLdSEO: JsonLdSEO = {
  slug: "rectangle-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a rectangle easily. Includes formulas, visual illustration, and practice questions for learning geometry.",
    id: "Hitung luas dan keliling persegi panjang dengan mudah. Dilengkapi rumus, ilustrasi visual, dan simulasi soal untuk belajar geometri.",
  },
};

export default rectangleJsonLdSEO;
