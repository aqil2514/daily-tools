"use client";

import { CompoundInterestCalculatorProvider } from "../store/provider";
import { CompoundInput } from "./compound-input";
import { CompoundInsight } from "./compound-insight";
import { CompoundOutput } from "./compound-output";

export function CompoundInterestCalculator() {
  return (
    <CompoundInterestCalculatorProvider>
      <div className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-white">
            <div className="lg:sticky top-12">
              <CompoundInput />
            </div>
          </div>

          <CompoundOutput />
        </div>

        <CompoundInsight />
      </div>
    </CompoundInterestCalculatorProvider>
  );
}
