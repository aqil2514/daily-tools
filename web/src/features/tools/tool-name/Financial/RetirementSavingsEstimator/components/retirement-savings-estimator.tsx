"use client";

import { useState } from "react";
import {
  defaultRetirementSavingsInput,
  RetirementSavingsInput,
} from "../types/input";
import { RetirementInput } from "./retirement-input";
import { RetirementOutput } from "./retirement-output";
import { calculateRetirementSavings } from "../logic/calculate-retirement-savings";

export function RetirementSavingsEstimator() {
  const [inputData, setInputData] = useState<RetirementSavingsInput>(
    defaultRetirementSavingsInput
  );

  const calculation = calculateRetirementSavings(inputData);
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <RetirementInput inputData={inputData} setInputData={setInputData} />
      <RetirementOutput result={calculation.result} status={calculation.status} />
    </div>
  );
}
