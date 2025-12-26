import { JsonLdSEO } from "@/@types/metadata";
import faq from "./faq";

export const quizPlayerJsonLdSEO: JsonLdSEO = {
  slug: "quiz-player",

  schemaType: "WebApplication",

  faq,

  lastUpdated: "2025-12-26",

  searchSnippet: {
    en: "Play multiple-choice quizzes instantly with this free quiz player. No login required. Supports timer, shuffle, and keyboard shortcuts.",
    id: "Mainkan kuis pilihan ganda secara instan dengan quiz player gratis ini. Tanpa login, mendukung timer dan soal acak.",
  },
};

export default quizPlayerJsonLdSEO;
