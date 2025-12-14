"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CurrencyField } from "@/components/molecules/input/currency-field";
import {
  defaultRetirementSavingsInput,
  RetirementSavingsInput,
} from "../types/input";
import { Dispatch, SetStateAction } from "react";
import { SubHeading } from "@/components/atoms/subHeading";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { retirementInputI18n } from "../i18n/input/retirement-input";

interface Props {
  inputData: RetirementSavingsInput;
  setInputData: Dispatch<SetStateAction<RetirementSavingsInput>>;
}

export function RetirementInput({ inputData, setInputData }: Props) {
  const locale = useLocale();
  const t = retirementInputI18n[locale];

  return (
    <ToolCard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <SubHeading className="mt-0">
            {t.sectionTitle}
          </SubHeading>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setInputData(defaultRetirementSavingsInput)
            }
          >
            {t.resetButton}
          </Button>
        </div>

        {/* AGE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t.currentAgeLabel}</Label>
            <Input
              type="number"
              min={0}
              value={inputData.currentAge}
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  currentAge: Number(e.target.value),
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>{t.retirementAgeLabel}</Label>
            <Input
              type="number"
              min={0}
              value={inputData.retirementAge}
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  retirementAge: Number(e.target.value),
                }))
              }
            />
          </div>
        </div>

        {/* SAVINGS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t.currentSavingsLabel}</Label>
            <CurrencyField
              value={inputData.currentSavings}
              onValueChange={(value) =>
                setInputData((prev) => ({
                  ...prev,
                  currentSavings: value,
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>{t.targetFundLabel}</Label>
            <CurrencyField
              value={inputData.targetFund}
              onValueChange={(value) =>
                setInputData((prev) => ({
                  ...prev,
                  targetFund: value,
                }))
              }
            />
          </div>
        </div>

        {/* RETURN SECTION */}
        <div className="space-y-2">
          <Label>{t.annualReturnLabel}</Label>
          <Input
            type="number"
            step="0.1"
            min={0}
            value={inputData.annualReturnRate}
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                annualReturnRate: Number(e.target.value),
              }))
            }
          />
          <p className="text-xs text-muted-foreground">
            {t.annualReturnHint}
          </p>
        </div>
      </div>
    </ToolCard>
  );
}
