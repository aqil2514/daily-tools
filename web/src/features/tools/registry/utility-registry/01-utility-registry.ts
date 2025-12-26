import dynamic from "next/dynamic";
import { ToolRegistryItem } from "@/@types/Tools";

import { UtilityToolName } from "@/@types/tools/utility";
import ageCalculatorJsonLdSEO from "../../tool-name/Utility/AgeCalculator/seo/jsonld";
import ageCalculatorMetadataSEO from "../../tool-name/Utility/AgeCalculator/seo/metadata";
import quizMakerJsonLdSEO from "../../tool-name/Utility/QuizMaker/seo/jsonld";
import quizMakerMetadataSEO from "../../tool-name/Utility/QuizMaker/seo/metadata";
import quizPlayerJsonLdSEO from "../../tool-name/Utility/QuizPlayer/seo/jsonld";
import quizPlayerMetadataSEO from "../../tool-name/Utility/QuizPlayer/seo/metadata";

export const utilityRegistry01: Partial<
  Record<UtilityToolName, ToolRegistryItem>
> = {
  "age-calculator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Utility/AgeCalculator")
    ),
    href: "/tools/age-calculator",
    category: "utility",

    title: {
      en: "Age Calculator",
      id: "Kalkulator Usia",
    },

    seo: {
      jsonLd: ageCalculatorJsonLdSEO,
      metadata: ageCalculatorMetadataSEO,
    },
  },

  "quiz-maker": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Utility/QuizMaker")
    ),
    href: "/tools/quiz-maker",
    category: "utility",

    title: {
      en: "Quiz Maker",
      id: "Pembuat Kuis",
    },

    seo: {
      jsonLd: quizMakerJsonLdSEO,
      metadata: quizMakerMetadataSEO,
    },

    relatedTools:['quiz-player']
  },

  "quiz-player": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Utility/QuizPlayer")
    ),
    href: "/tools/quiz-player",
    category: "utility",

    title: {
      en: "Quiz Player",
      id: "Pemain Kuis",
    },

    relatedTools:['quiz-maker'],

    seo: {
      jsonLd: quizPlayerJsonLdSEO,
      metadata: quizPlayerMetadataSEO,
    },
  },
};
