/* eslint-disable @typescript-eslint/no-unused-vars */
import z from "zod";
import { nanoid } from "nanoid";
import { Locale } from "next-intl";

const createQuizOptionSchema = (locale: Locale) => {
  return z.object({
    id: z.string(),
    optionId: z.string(),
    text: z
      .string()
      .min(
        1,
        locale === "en"
          ? "Answer option is required"
          : "Opsi jawaban wajib diisi"
      ),
  });
};

export const createQuestionSchema = (locale: Locale) => {
  const quizOptionSchema = createQuizOptionSchema(locale);

  return z
    .object({
      id: z.string(),
      questionId: z.string().min(1),
      text: z
        .string()
        .min(1, locale === "en" ? "Question is required" : "Soal wajib diisi"),
      options: z.array(quizOptionSchema).min(4),
      correctOptionId: z.string(),
      explanation: z.string(),
    })
    .refine(
      (data) =>
        data.options.some((option) => option.optionId === data.correctOptionId),
      {
        error:
          locale === "en"
            ? "Correct option haven't chosen yet"
            : "Jawaban yang benar belum dipilih",
        path: ["correctOptionId"],
      }
    );
};

export type QuestionSchemaType = z.infer<
  ReturnType<typeof createQuestionSchema>
>;
export type QuizOptionSchemaType = z.infer<
  ReturnType<typeof createQuizOptionSchema>
>;

export const questionOptionSchemaDefault: QuizOptionSchemaType = {
  id: "",
  optionId: "",
  text: "",
};

export const questionSchemaDefaultValues: QuestionSchemaType = {
  explanation: "",
  id: "",
  questionId: nanoid(),
  correctOptionId: "",
  options: Array.from({ length: 4 }).map((_) => ({
    ...questionOptionSchemaDefault,
    optionId: nanoid(),
  })),
  text: "",
};

export const QUESTION_OPTION_ID = ["A", "B", "C", "D"] as const;
