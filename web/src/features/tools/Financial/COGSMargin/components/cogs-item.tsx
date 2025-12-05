"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Trash } from "lucide-react";
import { useCogsMargin } from "../store/provider";
import { calculateCogsMargin } from "../utils/calculateCogsMargin";
import { useTranslations } from "next-intl";

export function COGSItem() {
  const { items, highlightItem, deleteItem } = useCogsMargin();
  const t = useTranslations("tools-registry.financial.cogs-margin-tool")

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
            {/* Delete Button */}
            <button
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition p-1 rounded-md hover:bg-muted"
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(index);
              }}
            >
              <Trash className="w-4 h-4 text-red-600" />
            </button>

            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-medium">
                    {item.itemName || "Tanpa Nama"}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.packAmount} pak × {item.qtyPerPack} unit
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-primary">
                    Rp {data.unitProfit.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">{t("list.profit-per-unit")}</p>
                </div>
              </div>

              <div className="flex justify-between text-xs mt-3">
                <div>
                  <p className="text-muted-foreground">{t("list.hpp")}</p>
                  <p className="font-medium">
                    Rp {data.unitCost.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">{t("list.selling-price")}</p>
                  <p className="font-medium">
                    Rp {item.sellingPrice.toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
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
