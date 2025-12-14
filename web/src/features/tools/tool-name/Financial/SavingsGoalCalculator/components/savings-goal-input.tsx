"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CurrencyField } from "@/components/molecules/input/currency-field";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nSavingsInput } from "../i18n/savings-input";
import { SavingsGoalInput } from "../types/input";

interface Props {
  inputData: SavingsGoalInput;
  setInputData: Dispatch<SetStateAction<SavingsGoalInput>>;
}

export function SavingsGoalInputComp({ inputData, setInputData }: Props) {
  const locale = useLocale();
  const t = i18nSavingsInput[locale];

  const editHandler = <K extends keyof SavingsGoalInput>(
    key: K,
    value: SavingsGoalInput[K]
  ) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">
        {/* Target Amount */}
        <div className="space-y-2">
          <Label>{t.targetAmount.label}</Label>
          <CurrencyField
            value={inputData.targetAmount}
            placeholder={t.targetAmount.placeholder}
            onValueChange={(v) => editHandler("targetAmount", v)}
            enableCurrencySelect
            onCurrencyChange={(currency, locale) => {
              editHandler("currency", currency);
              editHandler("locale", locale);
            }}
          />
        </div>

        {/* Monthly Contribution (optional) */}
        <div className="space-y-2">
          <Label>{t.monthlyContribution.label}</Label>
          <CurrencyField
            value={inputData.monthlyContribution || 0}
            placeholder={t.monthlyContribution.placeholder}
            onValueChange={(v) => editHandler("monthlyContribution", v)}
            currency={inputData.currency}
            locale={inputData.locale}
          />
          <p className="text-xs text-muted-foreground">
            {locale === "id"
              ? "Biarkan kosong jika ingin menghitung tabungan per bulan otomatis."
              : "Leave empty to calculate required monthly savings automatically."}
          </p>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label>{t.duration.label}</Label>
          <Input
            type="number"
            placeholder={t.duration.placeholder}
            value={inputData.durationMonths}
            onChange={(e) =>
              editHandler("durationMonths", e.target.valueAsNumber)
            }
          />
        </div>

        {/* Annual Interest */}
        <div className="space-y-2">
          <Label>{t.interest.label}</Label>
          <Input
            type="number"
            placeholder={t.interest.placeholder}
            value={inputData.annualInterestRate}
            onChange={(e) =>
              editHandler("annualInterestRate", e.target.valueAsNumber)
            }
          />

          {inputData.annualInterestRate > 0 && (
            <p className="text-xs text-muted-foreground">
              {(inputData.annualInterestRate / 12).toFixed(3)}%{" "}
              {locale === "id"
                ? "bunga per bulan (perkiraan sederhana)"
                : "monthly interest (approximate)"}
            </p>
          )}
        </div>
      </div>
    </ToolCard>
  );
}
