import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const investmentReturnJsonLdSEO: JsonLdSEO = {
  slug: "investment-return-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-12",

  searchSnippet: {
    en: "Calculate CAGR instantly and understand your investment's yearly growth. Works entirely in your browser.",
    id: "Hitung CAGR secara instan dan pahami pertumbuhan tahunan investasi Anda. Semua perhitungan dilakukan di browser.",
  },
};

export default investmentReturnJsonLdSEO;
