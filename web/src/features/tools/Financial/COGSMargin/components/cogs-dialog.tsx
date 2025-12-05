"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Info, Package, DollarSign, TrendingUp, Wallet } from "lucide-react";

import { useCogsMargin } from "../store/provider";
import { calculateCogsMargin } from "../utils/calculateCogsMargin";
import { useTranslations } from "next-intl";

export function COGSDetailDialog() {
  const { highlightedItem, clearHighlight } = useCogsMargin();
  const t = useTranslations("tools-registry.financial.cogs-margin-tool");

  const output = highlightedItem ? calculateCogsMargin(highlightedItem) : null;

  return (
    <Dialog open={!!highlightedItem} onOpenChange={clearHighlight}>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            {highlightedItem?.itemName || t("dialog.title")}
          </DialogTitle>

          <DialogDescription>{t("dialog.description")}</DialogDescription>
        </DialogHeader>

        {highlightedItem && output && (
          <div className="space-y-7 grid grid-cols-2 gap-4">
            {/* === Informasi Dasar === */}
            <section className="p-4 rounded-lg border bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-4 w-4 text-primary" />
                <h3 className="font-medium text-sm uppercase tracking-wide">
                  {t("dialog.purchase-info")}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.pack-amount")}
                  </p>
                  <p className="font-medium">{highlightedItem.packAmount}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.qty-per-pack")}
                  </p>
                  <p className="font-medium">
                    {highlightedItem.qtyPerPack} unit
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.price-per-pack")}
                  </p>
                  <p className="font-medium">
                    Rp {highlightedItem.pricePerPack.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.selling-price")}
                  </p>
                  <p className="font-medium">
                    Rp {highlightedItem.sellingPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {highlightedItem.additionalInformation && (
                <p className="text-xs text-muted-foreground mt-3 italic">
                  * {highlightedItem.additionalInformation}
                </p>
              )}
            </section>

            {/* === HPP Section === */}
            <section className="p-4 rounded-lg border bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-4 w-4 text-green-600" />
                <h3 className="font-medium text-sm uppercase tracking-wide">
                  {t("dialog.hpp-section")}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.total-units")}
                  </p>
                  <p className="font-medium">{output.totalUnits}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.total-cost")}
                  </p>
                  <p className="font-medium">
                    Rp {output.totalBuyCost.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.unit-cost")}
                  </p>
                  <p className="font-medium">
                    Rp {output.unitCost.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.unit-profit")}
                  </p>
                  <p className="font-medium text-green-600">
                    Rp {output.unitProfit.toLocaleString()}
                  </p>
                </div>
              </div>
            </section>

            {/* === Margin Section === */}
            <section className="p-4 rounded-lg border bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <h3 className="font-medium text-sm uppercase tracking-wide">
                  {t("dialog.margin-section")}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.margin-sell")}
                  </p>
                  <p
                    className={`font-medium ${
                      output.marginSellPercentage >= 40
                        ? "text-green-600"
                        : output.marginSellPercentage >= 20
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {output.marginSellPercentage.toFixed(1)}%
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.margin-buy")}
                  </p>
                  <p className="font-medium text-purple-600">
                    {output.marginBuyPercentage.toFixed(1)}%
                  </p>
                </div>
              </div>
            </section>

            {/* === Potensi Section === */}
            <section className="p-4 rounded-lg border bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="h-4 w-4 text-orange-600" />
                <h3 className="font-medium text-sm uppercase tracking-wide">
                  {t("dialog.potential-section")}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.potential-revenue")}
                  </p>
                  <p className="font-medium">
                    Rp {output.totalPotentialRevenue.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.potential-profit")}
                  </p>
                  <p className="font-medium text-green-700">
                    Rp {output.totalPotentialProfit.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    {t("dialog.fields.break-even")}
                  </p>
                  <p className="font-medium">
                    {Math.ceil(output.breakEvenCount)} unit
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        <DialogFooter>
          <button
            className="text-sm text-muted-foreground hover:text-primary"
            onClick={clearHighlight}
          >
            Tutup
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
