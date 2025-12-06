"use client";

import { useFinancialSimulator } from "../../store/provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CurrencyCode } from "../../types/interface";
import CurrencyInput from "react-currency-input-field";
import { ClearDataButton } from "./clear-data";
import { useTranslations } from "next-intl";

function getCurrencyPrefix(code: CurrencyCode) {
  const prefixes = {
    IDR: "Rp ",
    USD: "$ ",
    EUR: "€ ",
    JPY: "¥ ",
  };
  return prefixes[code] ?? "";
}

export function FinancialSetting() {
  const t = useTranslations("tools-registry.financial.financial-simulator")
  const { settings, setSettings, resetSetting } =
    useFinancialSimulator();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{t("setting")}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Currency */}
          <div className="space-y-2">
            <Label>{t("currency")}</Label>
            <Select
              value={settings.currency}
              onValueChange={(v) =>
                setSettings({ currency: v as CurrencyCode })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IDR">IDR - Indonesian Rupiah</SelectItem>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Decimal */}
          <div className="space-y-2">
            <Label>{t("decimal-format")}</Label>
            <Input
              type="number"
              min={0}
              max={4}
              value={settings.decimal}
              onChange={(e) => setSettings({ decimal: Number(e.target.value) })}
            />
            <p className="text-xs text-muted-foreground">
              {t("recommended")}: IDR = 0, USD/EUR = 2
            </p>
          </div>

          {/* Starting Balance */}
          <div className="space-y-2">
            <Label>{t("starting-balance")}</Label>

            <CurrencyInput
              id="startingBalance"
              name="startingBalance"
              placeholder="0"
              value={settings.startingBalance}
              decimalsLimit={settings.decimal}
              allowNegativeValue={false}
              prefix={getCurrencyPrefix(settings.currency)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors"
              onValueChange={(value) => {
                setSettings({
                  startingBalance: Number(value || 0),
                });
              }}
            />

            <p className="text-xs text-muted-foreground">
              {t("starting-balance-info")}
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="secondary" onClick={resetSetting}>
              {t("reset-settings")}
            </Button>
            <ClearDataButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
