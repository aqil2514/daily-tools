import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const compoundInterestJsonLdSEO: JsonLdSEO = {
  slug: "compound-interest-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-20",

  searchSnippet: {
    en: "Calculate compound interest instantly and see how your money grows over time. Supports recurring contributions and long-term projections.",
    id: "Hitung bunga majemuk secara instan dan lihat pertumbuhan uang Anda dari waktu ke waktu. Mendukung setoran rutin dan proyeksi jangka panjang.",
  },
};

export default compoundInterestJsonLdSEO;
