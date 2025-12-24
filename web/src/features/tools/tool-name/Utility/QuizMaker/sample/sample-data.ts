import { QuizPreviewData } from "../types/preview";
import { quizSampleFinansial } from "./finansial";
import { quizSampleHTML } from "./html-basic";
import { quizSampleIPA } from "./ipa";
import { quizSampleIPS } from "./ips";
import { quizSampleJS } from "./quiz-js";

export const quizSampleData: Record<string, QuizPreviewData> = {
  sample1: quizSampleFinansial,
  sample2: quizSampleHTML,
  sample3: quizSampleIPA,
  sample4: quizSampleIPS,
  sample5: quizSampleJS,
};
