"use client";

import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export interface CurrencyFieldProps {
  value: number | undefined;
  onValueChange: (value: number) => void;
  onCurrencyChange?: (currency: string, locale: string) => void; // 🔥 NEW

  id?: string;
  placeholder?: string;

  /** Default currency: IDR */
  currency?: string;

  /** Locale for formatting */
  locale?: string;

  /** Limit decimal digits */
  decimalsLimit?: number;

  /** If true → show currency selector */
  enableCurrencySelect?: boolean;
}

export function CurrencyField({
  value,
  onValueChange,
  onCurrencyChange, // NEW
  id,
  placeholder,
  currency = "IDR",
  locale = "id-ID",
  decimalsLimit = 2,
  enableCurrencySelect = false,
}: CurrencyFieldProps) {
  // Local state for currency + locale if selector enabled
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleCurrencyChange = (newCurrency: string) => {
    let newLocale = "id-ID";

    switch (newCurrency) {
      case "USD":
        newLocale = "en-US";
        break;
      case "EUR":
        newLocale = "de-DE";
        break;
      case "JPY":
        newLocale = "ja-JP";
        break;
      default:
        newLocale = "id-ID";
    }

    setCurrentCurrency(newCurrency);
    setCurrentLocale(newLocale);

    // 🔥 Trigger callback to parent if provided
    if (onCurrencyChange) {
      onCurrencyChange(newCurrency, newLocale);
    }
  };

  return (
    <div className="space-y-4">
      {/* Currency Selector — only if enabled */}
      {enableCurrencySelect && (
        <div className="space-y-1">
          <Label htmlFor={`${id}-currency`}>Currency</Label>

          <Select
            defaultValue={currentCurrency}
            onValueChange={handleCurrencyChange}
          >
            <SelectTrigger id={`${id}-currency`} className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="w-(--radix-select-trigger-width)">
              <SelectItem value="IDR">IDR (Rupiah)</SelectItem>
              <SelectItem value="USD">USD (Dollar)</SelectItem>
              <SelectItem value="EUR">EUR (Euro)</SelectItem>
              <SelectItem value="JPY">JPY (Yen)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Main numeric input */}
      <CurrencyInput
        id={id}
        placeholder={placeholder}
        value={value}
        decimalsLimit={decimalsLimit}
        intlConfig={{
          locale: enableCurrencySelect ? currentLocale : locale,
          currency: enableCurrencySelect ? currentCurrency : currency,
        }}
        onValueChange={(val) => onValueChange(Number(val) || 0)}
        className="
          flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
          text-sm ring-offset-background file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
        "
      />
    </div>
  );
}
