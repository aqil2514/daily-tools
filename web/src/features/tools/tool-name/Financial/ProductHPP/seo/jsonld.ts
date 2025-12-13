import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const productHPPJsonLdSEO: JsonLdSEO = {
  slug: "product-hpp-calculator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Calculate product HPP using materials, packaging, labor, and overhead costs. Designed for manufacturing, food, and handmade businesses.",
    id: "Hitung HPP produk dari bahan baku, kemasan, tenaga kerja, dan overhead. Dirancang untuk bisnis produksi, makanan, dan handmade.",
  },
};

export default productHPPJsonLdSEO;
