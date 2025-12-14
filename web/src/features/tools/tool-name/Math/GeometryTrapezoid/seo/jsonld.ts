import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const trapezoidJsonLdSEO: JsonLdSEO = {
  slug: "trapezoid-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-14",

  searchSnippet: {
    en: "Calculate the area and perimeter of a trapezoid easily using parallel sides, height, and non-parallel sides. Includes formulas, visual illustration, and practice questions.",
    id: "Hitung luas dan keliling trapesium dengan mudah menggunakan sisi sejajar, tinggi, dan sisi miring. Dilengkapi rumus, ilustrasi visual, dan simulasi soal.",
  },
};

export default trapezoidJsonLdSEO;
