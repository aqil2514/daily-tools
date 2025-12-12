"use client";
import { useState } from "react";
import { InvestmentInput } from "./investment-input";
import { defaultInvestmentInput, InvestmentReturnInput } from "../types/input";
import { InvestmentOutput } from "./investment-output";
import { useLocale } from "next-intl";
import { FAQSection } from "@/components/atoms/faq-section";
import investmentReturnFAQ from "../seo/faq";

export function InvestmentReturnCalculator() {
  const [inputData, setInputData] = useState<InvestmentReturnInput>(
    defaultInvestmentInput
  );
  const locale = useLocale();

  return (
    <div>

    <div className="grid lg:grid-cols-2 gap-4">
      <InvestmentInput inputData={inputData} setInputData={setInputData} />
      <InvestmentOutput inputData={inputData} />
    </div>

    <FAQSection items={investmentReturnFAQ[locale]} />
    </div>
  );
}
