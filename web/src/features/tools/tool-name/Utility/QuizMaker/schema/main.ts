import z from "zod";
import { questionSchema, questionSchemaDefaultValues } from "./question";
import { defaultQuizMetadata, quizMetadataSchema } from "./metadata";

export const mainQuestSchema = z.object({
  version: z.string(),
  questions: z.array(questionSchema).min(1),
  metadata: quizMetadataSchema,
});

export type MainQuestSchema = z.infer<typeof mainQuestSchema>;
export const defaultMainQuestSchema: MainQuestSchema = {
  version: "1",
  questions: [questionSchemaDefaultValues],
  metadata: defaultQuizMetadata,
};
