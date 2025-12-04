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

export function CashSettings() {
  const { settings, setSettings } = useCashCounter();

  return (
    <div className="space-y-4 text-sm">
      {/* CASH IN DATA */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Cash in Data</label>
        <input
          type="number"
          value={settings.cashInData}
          onChange={(e) =>
            setSettings({ cashInData: Number(e.target.value) })
          }
          className="border rounded px-2 py-1"
        />
      </div>

      {/* RECEIVABLES */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Receivables</label>
        <input
          type="number"
          value={settings.receivables}
          onChange={(e) =>
            setSettings({ receivables: Number(e.target.value) })
          }
          className="border rounded px-2 py-1"
        />
      </div>

      {/* OTHER PEOPLE'S CASH */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Other People’s Cash</label>
        <input
          type="number"
          value={settings.otherPeopleCash}
          onChange={(e) =>
            setSettings({ otherPeopleCash: Number(e.target.value) })
          }
          className="border rounded px-2 py-1"
        />
      </div>

      {/* CURRENCY */}
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
