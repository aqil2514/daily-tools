import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const quizMakerJsonLdSEO: JsonLdSEO = {
  slug: "quiz-maker",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-24",

  searchSnippet: {
    en: "Create interactive quizzes easily with this free quiz maker. No login required. Share your quiz via link or export it instantly.",
    id: "Buat kuis interaktif dengan mudah menggunakan quiz maker gratis ini. Tanpa login, bisa dibagikan melalui link atau diekspor.",
  },
};

export default quizMakerJsonLdSEO;
