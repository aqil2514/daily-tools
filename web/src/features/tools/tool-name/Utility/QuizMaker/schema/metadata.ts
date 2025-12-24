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

export type QuizMetadataSchemaType = z.infer<typeof quizMetadataSchema>;

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
