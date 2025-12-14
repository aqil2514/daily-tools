import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const triangleJsonLdSEO: JsonLdSEO = {
  slug: "triangle-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area, hypotenuse, and perimeter of a right triangle easily. Includes formulas, visual illustration, and practice questions for learning geometry.",
    id: "Hitung luas, sisi miring, dan keliling segitiga siku-siku dengan mudah. Dilengkapi rumus, ilustrasi visual, dan simulasi soal untuk belajar geometri.",
  },
};

export default triangleJsonLdSEO;
