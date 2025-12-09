import React, { createContext, useContext, useState } from "react";
import { analyzeText, TextAnalysis } from "../utils/analyze-text";

interface TextContextTypes {
  text: string;
  setText: (text: string) => void;
  summary: TextAnalysis;
}

const TextContext = createContext<TextContextTypes>({} as TextContextTypes);

export function WordCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text, setText] = useState<string>("");
  const summary = analyzeText(text);

  const values: TextContextTypes = {
    setText,
    summary,
    text,
  };

  return <TextContext.Provider value={values}>{children}</TextContext.Provider>;
}

export const useWordCounter = () => useContext(TextContext);
