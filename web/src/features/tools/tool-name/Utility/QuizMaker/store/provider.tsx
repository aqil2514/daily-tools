import React, { createContext, useContext, useMemo, useState } from "react";
import { useForm, UseFormReturn, useFormState } from "react-hook-form";
import {
  createMainQuestSchema,
  defaultMainQuestSchema,
  MainQuestSchema,
} from "../schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { mapQuizToClientData } from "../utils/mapToClientData";
import { QuizMakerOutputData } from "../types/output";
import { toast } from "sonner";
import { getErrors } from "../utils/getErrors";
import { useLocale } from "next-intl";

interface QuizMakerContextType {
  quizErrors: string[];
  form: UseFormReturn<MainQuestSchema>;
  onSubmit: (values: MainQuestSchema) => void;

  showErrors: boolean;
  setShowErrors: React.Dispatch<React.SetStateAction<boolean>>;

  data: QuizMakerOutputData | null;
  setData: React.Dispatch<React.SetStateAction<QuizMakerOutputData | null>>;

  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;

  isInitContent: boolean;
  setIsInitContent: React.Dispatch<React.SetStateAction<boolean>>;

  isFromSample: boolean;
  setIsFromSample: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizMakerContext = createContext<QuizMakerContextType>(
  {} as QuizMakerContextType
);

export function QuizMakerProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const mainQuestSchema = createMainQuestSchema(locale);

  const form = useForm<MainQuestSchema>({
    resolver: zodResolver(mainQuestSchema),
    defaultValues: defaultMainQuestSchema,
  });
  const [data, setData] = useState<QuizMakerOutputData | null>(null);
  const [content, setContent] = useState("");
  const [isInitContent, setIsInitContent] = useState<boolean>(true);
  const [isFromSample, setIsFromSample] = useState<boolean>(false);

  const { errors } = useFormState({ control: form.control });
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const quizErrors = useMemo(() => getErrors(errors, locale), [errors, locale]);

  const onSubmit = (values: MainQuestSchema) => {
    const mappedData = mapQuizToClientData(values);
    toast.success("Soal berhasil dibuat");

    setShowErrors(false);
    setData(mappedData);
  };

  const values: QuizMakerContextType = {
    quizErrors,
    form,
    onSubmit,

    data,
    setData,

    showErrors,
    setShowErrors,

    content,
    setContent,

    isInitContent,
    setIsInitContent,

    isFromSample,
    setIsFromSample,
  };

  return (
    <QuizMakerContext.Provider value={values}>
      {children}
    </QuizMakerContext.Provider>
  );
}

export const useQuizMaker = () => useContext(QuizMakerContext);
