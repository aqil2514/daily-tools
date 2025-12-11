"use client";

import { useProductHPP } from "../../store/provider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CurrencyField } from "@/components/atoms/currency-field";

import { useLocale } from "next-intl";
import { additionalCostI18n } from "../../i18n/sections/additional-cost";

export function AdditionalCostSection() {
  const locale = useLocale();
  const t = additionalCostI18n[locale];

  const { additionalCost, setAdditionalCost } = useProductHPP();

  return (
    <Card className="border rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {t.cardTitle}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {t.cardDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* LABOR COST */}
        <div className="space-y-1">
          <Label>{t.laborLabel}</Label>
          <CurrencyField
            value={additionalCost.laborCost}
            onValueChange={(value) =>
              setAdditionalCost({
                ...additionalCost,
                laborCost: value,
              })
            }
            placeholder="0"
          />
          <p className="text-xs text-muted-foreground">
            {t.laborDescription}
          </p>
        </div>

        {/* OVERHEAD COST */}
        <div className="space-y-1">
          <Label>{t.overheadLabel}</Label>
          <CurrencyField
            value={additionalCost.overheadCost}
            onValueChange={(value) =>
              setAdditionalCost({
                ...additionalCost,
                overheadCost: value,
              })
            }
            placeholder="0"
          />
          <p className="text-xs text-muted-foreground">
            {t.overheadDescription}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
