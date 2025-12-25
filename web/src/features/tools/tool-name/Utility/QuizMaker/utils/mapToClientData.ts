/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainQuestSchema } from "../schema/main";
import { QuizMakerOutputData } from "../types/output";

export function mapQuizToClientData(raw: MainQuestSchema): QuizMakerOutputData {
  const newQuestions = raw.questions.map((question) => {
    const { id, ...restQuestion } = question;
    const OPTIONS = ["a", "b", "c", "d"];
    const newOptions = question.options.map((option, i) => {
      const { id, ...rest } = option;
      const isCorrectAnswer = option.optionId === question.correctOptionId;
      if (isCorrectAnswer) restQuestion.correctOptionId = OPTIONS[i];
      return {
        ...rest,
        optionId: OPTIONS[i],
      };
    });
    return {
      ...restQuestion,
      options: newOptions,
    };
  });

  return {
    ...raw,
    questions: newQuestions,
  };
}
