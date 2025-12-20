import React, { createContext, useContext, useState } from "react";
import { LoanCalculatorInput } from "../types/input";
import { LoanCalculationResult } from "../types/output";
import { calculateLoan } from "../utils/calculate-loan";

interface LoanCalculatorContextType {
  inputData: LoanCalculatorInput;
  editHandler: <K extends keyof LoanCalculatorInput>(
    key: K,
    value: LoanCalculatorInput[K]
  ) => void;

  result: LoanCalculationResult;
}

const LoanCalculatorContext = createContext<LoanCalculatorContextType>(
  {} as LoanCalculatorContextType
);

const defaultInput: LoanCalculatorInput = {
  amount: 10000000,
  annualInterestRate: 12,
  monthlyInterestRate: 1,
  tenorMonths: 12,
  loanType: "flat",
  currency: "IDR",
  locale: "id-ID",
};

export function LoanCalculatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputData, setInputData] = useState<LoanCalculatorInput>(defaultInput);

  const editHandler = <K extends keyof LoanCalculatorInput>(
    key: K,
    value: LoanCalculatorInput[K]
  ) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  const result = calculateLoan(inputData);

  const values: LoanCalculatorContextType = {
    editHandler,
    inputData,

    result,
  };

  return (
    <LoanCalculatorContext.Provider value={values}>
      {children}
    </LoanCalculatorContext.Provider>
  );
}

export const useLoanCalculator = () => useContext(LoanCalculatorContext);
