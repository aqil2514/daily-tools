"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import { useCogsMargin } from "../store/provider";
import { calculateCogsMargin } from "../utils/calculateCogsMargin";
import { useTranslations } from "next-intl";

export function COGSItem() {
  const { items, highlightItem, deleteItem, startEdit } = useCogsMargin();
  const t = useTranslations("tools-registry.financial.cogs-margin-tool");

  if (!items.length) {
    return (
      <p className="text-sm text-muted-foreground italic px-3 pt-4">
        {t("list.empty")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {items.map((item, index) => {
        const data = calculateCogsMargin(item);

        return (
          <Card
            key={index}
            className="relative cursor-pointer transition hover:bg-accent group"
            onClick={() => highlightItem(item)}
          >
            {/* Floating Buttons */}
            <div className="group absolute top-2 right-2 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startEdit(index);
                }}
                className="p-1 rounded-md hover:bg-muted opacity-0 group-hover:opacity-100 transition"
              >
                <Pencil className="w-4 h-4 text-blue-600" />
              </button>

              <button
                className="opacity-0 group-hover:opacity-100 transition p-1 rounded-md hover:bg-muted"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                }}
              >
                <Trash className="w-4 h-4 text-red-600" />
              </button>
            </div>

            <CardContent className="p-4">
              {/* TOP SECTION – Responsive row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                {/* Item name */}
                <div className="min-w-0">
                  <h2 className="font-medium truncate">
                    {item.itemName || "Tanpa Nama"}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.packAmount} pak × {item.qtyPerPack} unit
                  </p>
                </div>

                {/* Profit per unit */}
                <div className="text-right sm:min-w-[100px]">
                  <p className="text-sm font-medium text-primary">
                    Rp {data.unitProfit.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("list.profit-per-unit")}
                  </p>
                </div>
              </div>

              {/* BOTTOM SECTION – Wrap nicely on mobile */}
              <div className="flex flex-wrap justify-between gap-4 text-xs mt-4">
                {/* HPP */}
                <div className="flex-1 min-w-20">
                  <p className="text-muted-foreground">{t("list.hpp")}</p>
                  <p className="font-medium">
                    Rp {data.unitCost.toLocaleString()}
                  </p>
                </div>

                {/* Selling Price */}
                <div className="flex-1 min-w-20">
                  <p className="text-muted-foreground">
                    {t("list.selling-price")}
                  </p>
                  <p className="font-medium">
                    Rp {item.sellingPrice.toLocaleString()}
                  </p>
                </div>

                {/* Margin */}
                <div className="flex-1 min-w-20 text-right">
                  <p className="text-muted-foreground">{t("list.margin")}</p>
                  <p
                    className={`font-medium ${
                      data.marginSellPercentage >= 40
                        ? "text-green-600"
                        : data.marginSellPercentage >= 20
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {data.marginSellPercentage.toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
