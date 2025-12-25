import z from "zod";
import { createQuestionSchema, questionSchemaDefaultValues } from "./question";
import { createQuizMetadataSchema, defaultQuizMetadata } from "./metadata";
import { Locale } from "next-intl";

export const createMainQuestSchema = (locale: Locale) => {
  const quizMetadataSchema = createQuizMetadataSchema(locale);
  const questionSchema = createQuestionSchema(locale);

  return z.object({
    version: z.string(),
    questions: z.array(questionSchema).min(1),
    metadata: quizMetadataSchema,
  });
};

export type MainQuestSchema = z.infer<ReturnType<typeof createMainQuestSchema>>;
export const defaultMainQuestSchema: MainQuestSchema = {
  version: "1",
  questions: [questionSchemaDefaultValues],
  metadata: defaultQuizMetadata,
};
