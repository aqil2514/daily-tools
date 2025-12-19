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
import { useLocale } from "next-intl";
import { assetAllocationPieChartI18n } from "../../i18n/output/asset-allocation-pie-chart";
import { useAssetAllocation } from "../../store/provider";
import { AssetAllocationExport } from "./asset-allocation-export";

const COLORS = [
  "#2563eb", // blue-600
  "#1d4ed8", // blue-700
  "#16a34a", // green-600
  "#15803d", // green-700
  "#f59e0b", // amber-500
  "#d97706", // amber-600
  "#dc2626", // red-600
  "#b91c1c", // red-700
  "#7c3aed", // violet-600
  "#6d28d9", // violet-700
  "#0891b2", // cyan-600
  "#0e7490", // cyan-700
  "#4b5563", // gray-600
  "#374151", // gray-700
  "#9333ea", // purple-600
  "#a855f7", // purple-500
];

export function AssetAllocationPieChart() {
  const locale = useLocale();
  const t = assetAllocationPieChartI18n[locale];

  const { calculate: result, chartRef } = useAssetAllocation();

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
      <div className="flex justify-between items-center">

      <p className="text-sm font-medium">{t.title}</p>
      <AssetAllocationExport />
      </div>

      <div ref={chartRef} className="h-80 w-full bg-white">
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
              label={({ percent }) => `${((percent ?? 0) * 100).toFixed(1)}%`}
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
