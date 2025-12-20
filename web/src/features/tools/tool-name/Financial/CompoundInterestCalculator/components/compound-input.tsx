"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Label } from "@/components/ui/label";
import { CurrencyField } from "@/components/molecules/input/currency-field";
import { PercentField } from "@/components/molecules/input/percent-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCompoundInterest } from "../store/provider";
import { i18nCompoundInput } from "../i18n/compound-input";

export function CompoundInput() {
  const { input, updateInput } = useCompoundInterest();
  const locale = useLocale() as "en" | "id";
  const t = i18nCompoundInput[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      {/* Mode Selection */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={input.mode === "once" ? "default" : "outline"}
          onClick={() => updateInput("mode", "once")}
        >
          {t.mode.once}
        </Button>

        <Button
          variant={
            input.mode === "monthly-contribution"
              ? "default"
              : "outline"
          }
          onClick={() =>
            updateInput("mode", "monthly-contribution")
          }
        >
          {t.mode.monthly}
        </Button>
      </div>

      {/* Principal */}
      <div className="space-y-2">
        <Label htmlFor="principal">
          {t.principal.label}
        </Label>
        <CurrencyField
          id="principal"
          value={input.principal}
          onValueChange={(e) =>
            updateInput("principal", e)
          }
        />
      </div>

      {/* Rate */}
      <div className="space-y-2">
        <Label htmlFor="rate">{t.rate.label}</Label>
        <PercentField
          id="rate"
          value={input.rate}
          onValueChange={(e) =>
            updateInput("rate", e)
          }
        />
      </div>

      {/* Periods */}
      <div className="space-y-2">
        <Label htmlFor="periods">
          {t.periods.label}
        </Label>
        <Input
          id="periods"
          type="number"
          value={input.periods}
          onChange={(e) =>
            updateInput("periods", e.target.valueAsNumber)
          }
        />
      </div>

      {/* Frequency */}
      <div className="space-y-2">
        <Label htmlFor="frequency">
          {t.frequency.label}
        </Label>
        <Input
          id="frequency"
          type="number"
          disabled={input.mode === "monthly-contribution"}
          value={
            input.mode === "monthly-contribution"
              ? 12
              : input.frequency
          }
          onChange={(e) =>
            updateInput("frequency", e.target.valueAsNumber)
          }
        />
      </div>
    </ToolCard>
  );
}
