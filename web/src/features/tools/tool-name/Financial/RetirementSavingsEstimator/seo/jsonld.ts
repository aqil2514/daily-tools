import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const retirementSavingsJsonLdSEO: JsonLdSEO = {
  slug: "retirement-savings-estimator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Estimate how much you need to save each month to reach your retirement fund based on age, savings, and expected annual return.",
    id: "Perkirakan berapa tabungan bulanan yang dibutuhkan untuk mencapai dana pensiun berdasarkan usia, tabungan, dan estimasi return tahunan.",
  },
};

export default retirementSavingsJsonLdSEO;
