import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const regexTesterJsonLdSEO: JsonLdSEO = {
  slug: "regex-tester",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Test and debug regular expressions with live matching, flags support, and instant feedback in your browser.",
    id: "Uji dan debug regular expression dengan hasil langsung, dukungan flags, dan feedback instan di browser.",
  },
};

export default regexTesterJsonLdSEO;
