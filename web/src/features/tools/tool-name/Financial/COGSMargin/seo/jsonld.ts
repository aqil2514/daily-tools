import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const cogsMarginJsonLdSEO: JsonLdSEO = {
  slug: "cogs-margin-tool",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Calculate COGS, gross profit margin, and markup percentage to set accurate prices and improve business profitability.",
    id: "Hitung HPP, margin keuntungan kotor, dan persentase markup untuk menentukan harga yang tepat dan meningkatkan profit bisnis.",
  },
};

export default cogsMarginJsonLdSEO;
