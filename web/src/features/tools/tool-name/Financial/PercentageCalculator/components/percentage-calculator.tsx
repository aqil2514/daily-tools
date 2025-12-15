"use client";

import { useMemo, useState } from "react";

import {
  PercentageMode,
  PercentageResult,
} from "../types/percentage-types";
import { calculatePercentage } from "../utils/calculate-percentage";

// (akan dibuat setelah ini)
import { PercentageInput } from "./percentage-input";
import { PercentageOutput } from "./percentage-output";
import { PercentageInsight } from "./percentage-insight";
import { PercentageModeSelect } from "./percentage-mode-select";

export function PercentageCalculator() {
  // ======================
  // State
  // ======================
  const [mode, setMode] =
    useState<PercentageMode>("percentage-of");

  const [values, setValues] = useState<{
    percent?: number;
    value?: number;
    oldValue?: number;
    newValue?: number;
    a?: number;
    b?: number;
  }>({});

  // ======================
  // Derived Result
  // ======================
  const result: PercentageResult | null = useMemo(() => {
    return calculatePercentage(mode, values);
  }, [mode, values]);

  // ======================
  // Render
  // ======================
  return (
    <div className="space-y-4">
      <PercentageModeSelect
        mode={mode}
        onModeChange={(nextMode) => {
          setMode(nextMode);
          setValues({}); // reset input saat mode berubah
        }}
      />

      <div className="grid lg:grid-cols-2 gap-4">
        <PercentageInput
          mode={mode}
          values={values}
          onChange={setValues}
        />

        <PercentageOutput
          mode={mode}
          result={result}
          currency="IDR"
        />
      </div>

      <PercentageInsight mode={mode}  />
    </div>
  );
}
