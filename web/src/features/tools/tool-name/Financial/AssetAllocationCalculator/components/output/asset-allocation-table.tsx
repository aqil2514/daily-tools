"use client";

import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { AssetAllocationResult } from "../../types/output";
import { useLocale } from "next-intl";
import { assetAllocationTableI18n } from "../../i18n/output/asset-allocation-table";

interface Props {
  result: AssetAllocationResult;
}

export function AssetAllocationTable({ result }: Props) {
  const locale = useLocale();
  const t = assetAllocationTableI18n[locale];

  return (
    <div className="space-y-6">
      {/* TOTAL */}
      <div className="p-4 rounded-xl border bg-muted/20">
        <p className="text-sm text-muted-foreground">
          {t.total.label}
        </p>
        <p className="text-xl font-semibold">
          {formatCurrency(result.totalAmount, "IDR")}
        </p>
      </div>

      {/* CATEGORY TABLE */}
      <div className="space-y-2">
        <h4 className="font-semibold">
          {t.categorySection.title}
        </h4>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left p-2">
                  {t.categorySection.table.category}
                </th>
                <th className="text-right p-2">
                  {t.categorySection.table.amount}
                </th>
                <th className="text-right p-2">
                  {t.categorySection.table.percentage}
                </th>
              </tr>
            </thead>
            <tbody>
              {result.categoryAllocations.map((item) => (
                <tr
                  key={item.categoryKey}
                  className="border-t"
                >
                  <td className="p-2">
                    {item.categoryName}
                  </td>
                  <td className="p-2 text-right">
                    {formatCurrency(
                      item.totalAmount,
                      "IDR"
                    )}
                  </td>
                  <td className="p-2 text-right">
                    {item.percentage.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ASSET DETAILS */}
      <div className="space-y-2">
        <h4 className="font-semibold">
          {t.assetSection.title}
        </h4>

        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left p-2">
                  {t.assetSection.table.asset}
                </th>
                <th className="text-left p-2">
                  {t.assetSection.table.category}
                </th>
                <th className="text-right p-2">
                  {t.assetSection.table.amount}
                </th>
                <th className="text-right p-2">
                  {t.assetSection.table.percentage}
                </th>
              </tr>
            </thead>
            <tbody>
              {result.assetAllocations.map(
                (item, idx) => (
                  <tr
                    key={idx}
                    className="border-t"
                  >
                    <td className="p-2">
                      {item.name ??
                        t.assetSection.emptyAssetName}
                    </td>
                    <td className="p-2">
                      {item.categoryName}
                    </td>
                    <td className="p-2 text-right">
                      {formatCurrency(
                        item.amount,
                        "IDR"
                      )}
                    </td>
                    <td className="p-2 text-right">
                      {item.percentage.toFixed(2)}%
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
