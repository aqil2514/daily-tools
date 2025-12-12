"use client";
import { useState } from "react";
import { SavingsGoalInputComp } from "./savings-goal-input";
import { defaultSavingsGoalInput, SavingsGoalInput } from "../types/input";
import { SavingsGoalOutput } from "./savings-goal-output";

export function SavingsGoalCalculator() {
  const [inputData, setInputData] = useState<SavingsGoalInput>(
    defaultSavingsGoalInput
  );
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <SavingsGoalInputComp inputData={inputData} setInputData={setInputData} />
      <SavingsGoalOutput inputData={inputData} />
    </div>
  );
}
