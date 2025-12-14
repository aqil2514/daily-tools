"use client";

import { CurrencyField } from "@/components/molecules/input/currency-field";
import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { LoanCalculatorInput, LoanType } from "../types/input";
import { useLocale } from "next-intl";
import { i18nLoanInput } from "../i18n/loan-input";

interface Props {
  inputData: LoanCalculatorInput;
  setInputData: Dispatch<SetStateAction<LoanCalculatorInput>>;
}

export function LoanInput({ inputData, setInputData }: Props) {
  const locale = useLocale();
  const t = i18nLoanInput[locale];

  const editHandler = <K extends keyof LoanCalculatorInput>(
    key: K,
    value: LoanCalculatorInput[K]
  ) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">
        {/* Loan Amount */}
        <div className="space-y-2">
          <Label htmlFor="loan-amount">{t.amount.label}</Label>

          <CurrencyField
            onValueChange={(e) => editHandler("amount", e)}
            value={inputData.amount}
            placeholder={t.amount.placeholder}
            enableCurrencySelect
            onCurrencyChange={(currency, locale) => {
              editHandler("locale", locale);
              editHandler("currency", currency);
            }}
          />
        </div>

        {/* Annual + Monthly Interest */}
        <div className="gap-4 grid grid-cols-2">
          {/* Annual Interest */}
          <div className="space-y-2">
            <Label htmlFor="interest-annual">
              {t.annualInterestRate.label}
            </Label>

            <Input
              id="interest-annual"
              type="number"
              placeholder={t.annualInterestRate.placeholder}
              className="w-full"
              value={inputData.annualInterestRate}
              onChange={(e) => {
                const annual = e.target.valueAsNumber || 0;
                editHandler("annualInterestRate", annual);
                editHandler("monthlyInterestRate", annual / 12);
              }}
            />
          </div>

          {/* Monthly Interest */}
          <div className="space-y-2">
            <Label htmlFor="interest-monthly">
              {t.monthlyInterestRate.label}
            </Label>

            <Input
              id="interest-monthly"
              type="number"
              placeholder={t.monthlyInterestRate.placeholder}
              className="w-full"
              value={inputData.monthlyInterestRate}
              onChange={(e) => {
                const monthly = e.target.valueAsNumber || 0;
                editHandler("monthlyInterestRate", monthly);
                editHandler("annualInterestRate", monthly * 12);
              }}
            />
          </div>
        </div>

        {/* Tenor */}
        <div className="space-y-2">
          <Label htmlFor="tenor">{t.tenorMonths.label}</Label>
          <Input
            id="tenor"
            type="number"
            placeholder={t.tenorMonths.placeholder}
            className="w-full"
            value={inputData.tenorMonths}
            onChange={(e) => editHandler("tenorMonths", e.target.valueAsNumber)}
          />
        </div>

        {/* Loan Type */}
        <div className="space-y-2">
          <Label htmlFor="loan-type">{t.loanType.label}</Label>
          <Select
            value={inputData.loanType}
            onValueChange={(e: LoanType) => editHandler("loanType", e)}
          >
            <SelectTrigger id="loan-type" className="w-full">
              <SelectValue placeholder={t.loanType.placeholder} />
            </SelectTrigger>
            <SelectContent className="w-(--radix-select-trigger-width)">
              <SelectItem value="flat">{t.loanType.types.flat}</SelectItem>
              <SelectItem value="effective">
                {t.loanType.types.effective}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolCard>
  );
}
