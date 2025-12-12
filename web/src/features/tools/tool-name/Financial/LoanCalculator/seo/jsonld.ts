import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const loanCalculatorJsonLdSEO: JsonLdSEO = {
  slug: "loan-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-12",

  searchSnippet: {
    en: "Calculate monthly loan installments instantly using flat or effective (annuity) interest methods.",
    id: "Hitung cicilan pinjaman bulanan secara instan dengan metode bunga flat atau efektif (anuitas).",
  },
};

export default loanCalculatorJsonLdSEO;
