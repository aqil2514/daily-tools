import { Locale } from "next-intl";
import z from "zod";

const quizConfigSchema = z.object({
  shuffleQuestions: z.boolean(),
  shuffleOptions: z.boolean(),
  revealCorrectAnswer: z.boolean(),
  timeLimitSeconds: z.number(),
});

export const quizMetadataSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  description: z.string(),
  config: quizConfigSchema,
});

export const createQuizMetadataSchema = (locale: Locale) => {
  return z.object({
    title: z
      .string()
      .min(1, locale === "en" ? "Title is required" : "Judul wajib diisi"),
    description: z.string(),
    config: quizConfigSchema,
  });
};

export type QuizMetadataSchemaType = z.infer<ReturnType<typeof createQuizMetadataSchema>>;

export const defaultQuizMetadata: QuizMetadataSchemaType = {
  title: "",
  description: "",
  config: {
    revealCorrectAnswer: true,
    shuffleOptions: true,
    shuffleQuestions: true,
    timeLimitSeconds: 0,
  },
};
