import React, { createContext, useContext, useMemo, useState } from "react";
import { QuizErrorGroup } from "../components/quiz-maker";
import { useForm, UseFormReturn, useFormState } from "react-hook-form";
import {
  defaultMainQuestSchema,
  mainQuestSchema,
  MainQuestSchema,
} from "../schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuizPreviewData } from "../types/preview";

interface QuizMakerContextType {
  quizErrors: QuizErrorGroup[];
  form: UseFormReturn<MainQuestSchema>;
  onSubmit: (values: MainQuestSchema) => void;

  showErrors: boolean;
  setShowErrors: React.Dispatch<React.SetStateAction<boolean>>;

  data: QuizPreviewData | null;
  setData: React.Dispatch<React.SetStateAction<QuizPreviewData | null>>;
}

const QuizMakerContext = createContext<QuizMakerContextType>(
  {} as QuizMakerContextType
);

export function QuizMakerProvider({ children }: { children: React.ReactNode }) {
  const form = useForm<MainQuestSchema>({
    resolver: zodResolver(mainQuestSchema),
    defaultValues: defaultMainQuestSchema,
  });
  const [data, setData] = useState<QuizPreviewData | null>(null);

  const { errors } = useFormState({ control: form.control });
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const quizErrors = useMemo<QuizErrorGroup[]>(() => {
    if (!errors.questions) return [];

    return Object.values(errors.questions)
      .map((_, qIndex) => {
        const messages: string[] = [];

        (["text", "options", "correctOptionId"] as const).forEach((field) => {
          const raw = errors.questions?.[qIndex]?.[field]?.message;
          if (raw) {
            messages.push(raw);
          }
        });

        return {
          questionIndex: qIndex,
          messages,
        };
      })
      .filter((group) => group.messages.length > 0);
  }, [errors]);

  const onSubmit = (values: MainQuestSchema) => {
    setShowErrors(false);
    setData(values);
  };

  const values: QuizMakerContextType = {
    quizErrors,
    form,
    onSubmit,
    data,
    showErrors,
    setData,
    setShowErrors
  };
  return (
    <QuizMakerContext.Provider value={values}>
      {children}
    </QuizMakerContext.Provider>
  );
}

export const useQuizMaker = () => useContext(QuizMakerContext);
