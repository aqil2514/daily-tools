"use client";

import React, { createContext, useContext } from "react";
import { useQuizRuntime } from "../hooks/use-quiz-runtime";
import { useQuizPlayer } from "./provider";

const QuizRuntimeContext = createContext<
  ReturnType<typeof useQuizRuntime> | null
>(null);

export function QuizRuntimeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useQuizPlayer();
  const runtime = useQuizRuntime({ quiz: data });

  return (
    <QuizRuntimeContext.Provider value={runtime}>
      {children}
    </QuizRuntimeContext.Provider>
  );
}

export const useQuizRuntimeContext = () => {
  const ctx = useContext(QuizRuntimeContext);
  if (!ctx) {
    throw new Error(
      "useQuizRuntimeContext must be used inside QuizRuntimeProvider"
    );
  }
  return ctx;
};
