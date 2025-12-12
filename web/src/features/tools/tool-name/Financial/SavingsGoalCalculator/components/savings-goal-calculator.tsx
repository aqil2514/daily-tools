"use client";
import { useState } from "react";
import { SavingsGoalInputComp } from "./savings-goal-input";
import { defaultSavingsGoalInput, SavingsGoalInput } from "../types/input";
import { SavingsGoalOutput } from "./savings-goal-output";
import { useLocale } from "next-intl";
import { FAQSection } from "@/components/atoms/faq-section";
import savingsGoalFAQ from "../seo/faq";

export function SavingsGoalCalculator() {
  const [inputData, setInputData] = useState<SavingsGoalInput>(
    defaultSavingsGoalInput
  );
  const locale = useLocale()
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <SavingsGoalInputComp
          inputData={inputData}
          setInputData={setInputData}
        />
        <SavingsGoalOutput inputData={inputData} />
      </div>

      <FAQSection items={savingsGoalFAQ[locale]}/>
    </div>
  );
}
