import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const loremIpsumGeneratorJsonLdSEO: JsonLdSEO = {
  slug: "lorem-ipsum-generator",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Generate Lorem Ipsum placeholder text instantly for design mockups and UI testing with full privacy.",
    id: "Hasilkan teks placeholder Lorem Ipsum secara instan untuk mockup desain dan uji UI dengan privasi penuh.",
  },
};

export default loremIpsumGeneratorJsonLdSEO;
