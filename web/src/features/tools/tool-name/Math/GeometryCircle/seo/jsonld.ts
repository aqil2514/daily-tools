import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const circleJsonLdSEO: JsonLdSEO = {
  slug: "circle-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and circumference of a circle easily using its radius. Includes formulas, visual illustration, and practice questions for learning geometry.",
    id: "Hitung luas dan keliling lingkaran dengan mudah menggunakan jari-jari. Dilengkapi rumus, ilustrasi visual, dan simulasi soal untuk belajar geometri.",
  },
};

export default circleJsonLdSEO;
