"use client";
import React, { createContext, useContext, useState } from "react";
import { QuizMakerOutputData } from "../../QuizMaker/types/output";

interface QuizPlayerContextType {
  data: QuizMakerOutputData | null;
  setData: React.Dispatch<React.SetStateAction<QuizMakerOutputData | null>>;
}

const QuizPlayerContext = createContext<QuizPlayerContextType>(
  {} as QuizPlayerContextType
);

export function QuizPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<QuizMakerOutputData | null>(null);

  const values: QuizPlayerContextType = {
    data,
    setData,
  };

  return (
    <QuizPlayerContext.Provider value={values}>
      {children}
    </QuizPlayerContext.Provider>
  );
}

export const useQuizPlayer = () => useContext(QuizPlayerContext);
