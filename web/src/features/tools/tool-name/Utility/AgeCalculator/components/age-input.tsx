"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ageCalculatorI18n } from "../i18n/age-input";
import { Input } from "@/components/ui/input";

interface AgeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AgeInput({ value, onChange }: AgeInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = ageCalculatorI18n[locale];

  return (
    <ToolCard>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {t.label}
        </label>

        <Input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="
            w-full rounded-md border border-input bg-background
            px-3 py-2 text-sm shadow-sm
            focus:outline-none focus:ring-2 focus:ring-ring
          "
        />

        <p className="text-xs text-muted-foreground">
          {t.description}
        </p>
      </div>
    </ToolCard>
  );
}
