import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

const assetAllocationJsonLdSEO: JsonLdSEO = {
  slug: "asset-allocation-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "See how your assets are allocated across categories and understand their percentage composition in one view.",
    id: "Lihat bagaimana aset Anda dialokasikan ke dalam berbagai kategori dan pahami komposisi persentasenya dalam satu tampilan.",
  },
};

export default assetAllocationJsonLdSEO;
