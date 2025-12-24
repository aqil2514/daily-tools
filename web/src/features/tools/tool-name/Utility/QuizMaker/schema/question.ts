import z from "zod";
import { nanoid } from "nanoid";

const quizOptionSchema = z.object({
  id: z.string(),
  optionId: z.string(),
  text: z.string(),
});

export const questionSchema = z
  .object({
    id: z.string(),
    questionId: z.string().min(1),
    text: z.string().min(1),
    options: z.array(quizOptionSchema).min(4),
    correctOptionId: z.string(),
    explanation: z.string(),
  })
  .refine(
    (data) => data.options.some((option) => option.optionId === data.correctOptionId),
    {
      error: "Jawaban yang benar belum dipilih",
      path: ["correctOptionId"],
    }
  );

export type QuestionSchemaType = z.infer<typeof questionSchema>;
export type QuizOptionSchemaType = z.infer<typeof quizOptionSchema>;

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
  options: [],
  text: "",
};

export const QUESTION_OPTION_ID = ["A", "B", "C", "D"] as const;
