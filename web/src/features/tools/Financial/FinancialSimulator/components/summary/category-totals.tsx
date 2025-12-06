import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { computeCategoryTotals } from "./helper";
import { useFinancialSimulator } from "../../store/provider";
import { formatCurrency } from "@/utils/formatCurrency";

export function CategoryTotals() {
  const { transactions, settings } = useFinancialSimulator();
  const categoryTotals = computeCategoryTotals(transactions);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Breakdown</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {Object.keys(categoryTotals).length === 0 && (
          <p className="text-sm text-muted-foreground">
            No category data available.
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
