import React, { createContext, useContext, useState } from "react";
import {
  CompoundInterestInput,
  CompoundInterestInputForm,
  defaultValues,
} from "../type/input";
import { mapToCompoundInterest } from "../utils/mappers";

interface CompoundInterestCalculatorContextType {
  input: CompoundInterestInputForm;

  parsedData: CompoundInterestInput;

  updateInput: <T extends keyof CompoundInterestInputForm>(
    key: T,
    value: CompoundInterestInputForm[T]
  ) => void;
}

const CompoundInterestCalculatorContext =
  createContext<CompoundInterestCalculatorContextType>(
    {} as CompoundInterestCalculatorContextType
  );

export function CompoundInterestCalculatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState<CompoundInterestInputForm>(defaultValues);

  const parsedData = mapToCompoundInterest(input);

  const updateInput = <T extends keyof CompoundInterestInputForm>(
    key: T,
    value: CompoundInterestInputForm[T]
  ) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const values: CompoundInterestCalculatorContextType = {
    input,
    parsedData,
    updateInput,
  };

  return (
    <CompoundInterestCalculatorContext.Provider value={values}>
      {children}
    </CompoundInterestCalculatorContext.Provider>
  );
}

export const useCompoundInterest = () =>
  useContext(CompoundInterestCalculatorContext);
