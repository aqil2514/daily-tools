"use client";
import { LoanInput } from "./loan-input";
import { LoanCalculatorInput } from "../types/input";
import { useState } from "react";
import { LoanOutput } from "./loan-output";
import { FAQSection } from "@/components/atoms/faq-section";
import loanCalculatorFAQ from "../seo/faq";
import { useLocale } from "next-intl";

const defaultInput: LoanCalculatorInput = {
  amount: 10000000,
  annualInterestRate: 12,
  monthlyInterestRate: 1,
  tenorMonths: 12,
  loanType: "flat",
  currency: "IDR",
  locale: "id-ID",
};

export function LoanCalculator() {
  const [inputData, setInputData] = useState<LoanCalculatorInput>(defaultInput);
  const locale = useLocale();
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        <LoanInput inputData={inputData} setInputData={setInputData} />
        <LoanOutput inputData={inputData} />
      </div>

      <FAQSection items={loanCalculatorFAQ[locale]} />
    </div>
  );
}
