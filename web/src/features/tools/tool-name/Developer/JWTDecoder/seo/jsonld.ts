import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const jwtDecoderJsonLdSEO: JsonLdSEO = {
  slug: "jwt-decoder",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-13",

  searchSnippet: {
    en: "Decode JWT tokens in your browser to inspect header and payload. Useful for debugging authentication and API tokens.",
    id: "Decode token JWT di browser untuk melihat header dan payload. Berguna untuk debugging autentikasi dan API.",
  },
};

export default jwtDecoderJsonLdSEO;
