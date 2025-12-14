"use client";

import { CurrencyField } from "@/components/molecules/input/currency-field";
import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";
import { InvestmentReturnInput } from "../types/input";
import { useLocale } from "next-intl";
import { i18nInvestmentInput } from "../i18n/investment-input";

interface Props {
  inputData: InvestmentReturnInput;
  setInputData: Dispatch<SetStateAction<InvestmentReturnInput>>;
}

export function InvestmentInput({ inputData, setInputData }: Props) {
  const locale = useLocale();
  const t = i18nInvestmentInput[locale];

  const editHandler = <K extends keyof InvestmentReturnInput>(
    key: K,
    value: InvestmentReturnInput[K]
  ) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">
        {/* Initial Value */}
        <div className="space-y-2">
          <Label>{t.initialValue.label}</Label>

          <CurrencyField
            value={inputData.initialValue}
            placeholder={t.initialValue.placeholder}
            onValueChange={(v) => editHandler("initialValue", v)}
            currency={inputData.currency}
            locale={inputData.locale}
            enableCurrencySelect
            onCurrencyChange={(currency, locale) => {
              editHandler("currency", currency);
              editHandler("locale", locale);
            }}
          />
        </div>

        {/* Final Value */}
        <div className="space-y-2">
          <Label>{t.finalValue.label}</Label>

          <CurrencyField
            value={inputData.finalValue}
            placeholder={t.finalValue.placeholder}
            onValueChange={(v) => editHandler("finalValue", v)}
            currency={inputData.currency}
            locale={inputData.locale}
          />
        </div>

        {/* Years */}
        <div className="space-y-2">
          <Label>{t.years.label}</Label>

          <Input
            type="number"
            placeholder={t.years.placeholder}
            value={inputData.years}
            onChange={(e) => editHandler("years", e.target.valueAsNumber)}
          />
        </div>
      </div>
    </ToolCard>
  );
}
