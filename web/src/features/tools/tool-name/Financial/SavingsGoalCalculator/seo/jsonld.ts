import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const savingsGoalJsonLdSEO: JsonLdSEO = {
  slug: "savings-goal-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-12",

  searchSnippet: {
    en: "Calculate how much you need to save monthly to reach your target amount. Plan your savings with or without interest growth.",
    id: "Hitung berapa yang perlu Anda tabung setiap bulan untuk mencapai target tabungan. Dapat digunakan dengan atau tanpa perhitungan bunga.",
  },
};

export default savingsGoalJsonLdSEO;
