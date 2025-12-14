import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const parallelogramJsonLdSEO: JsonLdSEO = {
  slug: "parallelogram-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a parallelogram easily using base, height, and side length. Includes formulas, visual illustration, and practice questions.",
    id: "Hitung luas dan keliling jajar genjang dengan mudah menggunakan alas, tinggi, dan sisi miring. Dilengkapi rumus, ilustrasi visual, dan simulasi soal.",
  },
};

export default parallelogramJsonLdSEO;
