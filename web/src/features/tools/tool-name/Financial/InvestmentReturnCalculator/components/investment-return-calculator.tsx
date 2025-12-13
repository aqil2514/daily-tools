"use client";
import { useState } from "react";
import { InvestmentInput } from "./investment-input";
import { defaultInvestmentInput, InvestmentReturnInput } from "../types/input";
import { InvestmentOutput } from "./investment-output";

export function InvestmentReturnCalculator() {
  const [inputData, setInputData] = useState<InvestmentReturnInput>(
    defaultInvestmentInput
  );

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <InvestmentInput inputData={inputData} setInputData={setInputData} />
      <InvestmentOutput inputData={inputData} />
    </div>
  );
}
