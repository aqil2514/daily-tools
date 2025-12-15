"use client";

import { useMemo, useState } from "react";

import { calculateBMI } from "../utils/calculate-bmi";
import { BMIResult } from "../types/bmi-types";

// (akan kita buat setelah ini)
import { BMIInput } from "./bmi-input";
import { BMIOutput } from "./bmi-output";
import { BMIInsight } from "./bmi-insight";

/**
 * BMI Calculator Orchestrator
 */
export function BMICalculator() {
  // ======================
  // State
  // ======================
  const [weightKg, setWeightKg] = useState<number>(0);
  const [heightCm, setHeightCm] = useState<number>(0);

  // ======================
  // Derived BMI Result
  // ======================
  const result: BMIResult | null = useMemo(() => {
    return calculateBMI(weightKg, heightCm);
  }, [weightKg, heightCm]);

  // ======================
  // Render
  // ======================
  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <BMIInput
          weightKg={weightKg}
          heightCm={heightCm}
          onWeightChange={setWeightKg}
          onHeightChange={setHeightCm}
        />

        <BMIOutput result={result} />
      </div>
      <BMIInsight />
    </div>
  );
}
