"use client";
import { LoanInput } from "./loan-input";
import { LoanOutput } from "./loan-output";
import { LoanCalculatorProvider } from "../store/provider";

export function LoanCalculator() {
  return (
    <LoanCalculatorProvider>

    <div className="grid lg:grid-cols-2 gap-4">
      <LoanInput />
      <LoanOutput />
    </div>
    </LoanCalculatorProvider>
  );
}
