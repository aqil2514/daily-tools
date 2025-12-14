"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { AssetAllocationResult } from "../../types/output";
import { useLocale } from "next-intl";
import { assetAllocationPieChartI18n } from "../../i18n/output/asset-allocation-pie-chart";

interface Props {
  result: AssetAllocationResult;
}

/**
 * Color palette (repeatable & soft)
 */
const COLORS = [
  "#2563eb", // blue
  "#16a34a", // green
  "#f59e0b", // amber
  "#dc2626", // red
  "#7c3aed", // purple
  "#0891b2", // cyan
];

export function AssetAllocationPieChart({ result }: Props) {
  const locale = useLocale();
  const t = assetAllocationPieChartI18n[locale];

  // Empty state safety
  if (result.categoryAllocations.length === 0) {
    return (
      <div className="border rounded-xl p-4 text-sm text-muted-foreground">
        {t.empty}
      </div>
    );
  }

  const data = result.categoryAllocations.map((item) => ({
    name: item.categoryName,
    value: item.totalAmount,
    percentage: item.percentage,
  }));

  return (
    <div className="border rounded-xl p-4 space-y-2">
      <p className="text-sm font-medium">{t.title}</p>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={60}
              paddingAngle={3}
              label={({ percent }) =>
                `${((percent ?? 0) * 100).toFixed(1)}%`
              }
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number, name) => [
                formatCurrency(value, "IDR"),
                name,
              ]}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
