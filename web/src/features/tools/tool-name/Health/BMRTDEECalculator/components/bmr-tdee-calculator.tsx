"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { BMRInput } from "./bmr-input";
import { BMROutput } from "./bmr-output";
import { BMRTDEEProvider } from "../store/provider";
import { BMRTDEEInsight } from "./bmr-insight";

export function BMRTDEECalculator() {
  return (
    <BMRTDEEProvider>
      <div className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <ToolCard>
            <BMRInput />
          </ToolCard>

          <ToolCard>
            <BMROutput />
          </ToolCard>
        </div>

        <BMRTDEEInsight />
      </div>
    </BMRTDEEProvider>
  );
}
