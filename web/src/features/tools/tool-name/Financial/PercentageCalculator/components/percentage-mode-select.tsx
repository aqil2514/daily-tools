"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { PercentageMode } from "../types/percentage-types";
import { percentageModeSelectText } from "../i18n/percentage-mode-select";

interface PercentageModeSelectProps {
  mode: PercentageMode;
  onModeChange: (mode: PercentageMode) => void;
}

export function PercentageModeSelect({
  mode,
  onModeChange,
}: PercentageModeSelectProps) {
  const locale = useLocale() as "en" | "id";
  const t = percentageModeSelectText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4">
        <Select
          value={mode}
          onValueChange={(value) =>
            onModeChange(value as PercentageMode)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t.placeholder} />
          </SelectTrigger>

          <SelectContent className="w-(--radix-select-trigger-width)">
            {t.modes.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </ToolCard>
  );
}
