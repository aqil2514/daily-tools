import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { computeCategoryTotals } from "./helper";
import { useFinancialSimulator } from "../../store/provider";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useTranslations } from "next-intl";

export function CategoryTotals() {
  const t = useTranslations("tools-registry.financial.financial-simulator")
  const { transactions, settings } = useFinancialSimulator();
  const categoryTotals = computeCategoryTotals(transactions);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("category-breakdown")}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {Object.keys(categoryTotals).length === 0 && (
          <p className="text-sm text-muted-foreground">
            {t("no-category-data")}
          </p>
        )}

        {Object.entries(categoryTotals).map(([cat, value]) => (
          <div key={cat} className="flex justify-between">
            <p className="font-medium capitalize">{cat}</p>
            <p className="font-bold">
              {formatCurrency(value, settings.currency, settings.decimal)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
