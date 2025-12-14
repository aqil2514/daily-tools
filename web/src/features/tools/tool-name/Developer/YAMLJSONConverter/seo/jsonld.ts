import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const yamlJsonConverterJsonLdSEO: JsonLdSEO = {
  slug: "yaml-json-converter",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Convert YAML to JSON or JSON to YAML instantly for DevOps workflows, configuration files, and backend development.",
    id: "Konversi YAML ke JSON atau JSON ke YAML secara instan untuk workflow DevOps, file konfigurasi, dan backend.",
  },
};

export default yamlJsonConverterJsonLdSEO;
