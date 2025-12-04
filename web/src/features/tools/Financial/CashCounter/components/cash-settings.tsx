"use client";

import { currencyOptions } from "../config/currency-options";
import { useCashCounter } from "../store/provider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import CurrencyInput from "react-currency-input-field";

export function CashSettings() {
  const { settings, setSettings } = useCashCounter();

  const currencyFormatMap: Record<
    string,
    { prefix: string; locale: string }
  > = {
    idr: { prefix: "Rp ", locale: "id-ID" },
    usd: { prefix: "$ ", locale: "en-US" },
    eur: { prefix: "€ ", locale: "de-DE" },
    jpy: { prefix: "¥ ", locale: "ja-JP" },
  };

  const { prefix, locale } = currencyFormatMap[settings.currency];

  return (
    <div className="space-y-4 text-sm">
      {/* CASH IN DATA */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Cash in Data</label>
        <CurrencyInput
          value={settings.cashInData}
          onValueChange={(val) =>
            setSettings({ cashInData: Number(val) || 0 })
          }
          intlConfig={{ locale, currency: settings.currency.toUpperCase() }}
          prefix={prefix}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      {/* RECEIVABLES */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Receivables</label>
        <CurrencyInput
          value={settings.receivables}
          onValueChange={(val) =>
            setSettings({ receivables: Number(val) || 0 })
          }
          intlConfig={{ locale, currency: settings.currency.toUpperCase() }}
          prefix={prefix}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      {/* OTHER PEOPLE'S CASH */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Other People’s Cash</label>
        <CurrencyInput
          value={settings.otherPeopleCash}
          onValueChange={(val) =>
            setSettings({ otherPeopleCash: Number(val) || 0 })
          }
          intlConfig={{ locale, currency: settings.currency.toUpperCase() }}
          prefix={prefix}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      {/* CURRENCY SELECT */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Currency</label>
        <Select
          value={settings.currency}
          onValueChange={(value) =>
            setSettings({ currency: value as any })
          }
        >
          <SelectTrigger className="border rounded px-2 py-1 w-full">
            <SelectValue placeholder="Choose currency" />
          </SelectTrigger>

          <SelectContent className="w-(--radix-select-trigger-width)">
            {currencyOptions.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
