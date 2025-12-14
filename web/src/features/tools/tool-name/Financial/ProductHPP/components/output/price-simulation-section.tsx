"use client";

import { useState } from "react";
import { useProductHPP } from "../../store/provider";
import { IngredientItem, PackagingItem } from "../../types/input";
import { Label } from "@/components/ui/label";
import { CurrencyField } from "@/components/molecules/input/currency-field";

import {
  Package,
  DollarSign,
  Percent,
  BarChart3,
  Target,
} from "lucide-react";

import { useLocale } from "next-intl";
import { priceSimulationI18n } from "../../i18n/output/price-simulation";

/* ============================
   UI BLOCK COMPONENT (SAFE)
==============================*/
function InfoBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl border bg-muted/20">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="text-sm space-y-1">{children}</div>
    </div>
  );
}

/* ============================
      MAIN COMPONENT
==============================*/
export function PriceSimulationSection() {
  const { basicInfo, ingredients, packaging, additionalCost } = useProductHPP();
  const [sellingPrice, setSellingPrice] = useState<number | null>(null);

  const locale = useLocale();
  const t = priceSimulationI18n[locale];

  const formatRupiah = (value: number) =>
    value.toLocaleString("id-ID", { minimumFractionDigits: 0 });

  /* Perhitungan */
  const calcIngredientCost = (item: IngredientItem) => {
    if (!item.purchaseQuantity) return 0;
    return (item.purchasePrice / item.purchaseQuantity) * item.usage;
  };

  const totalIngredientsCost = ingredients.reduce(
    (acc, item) => acc + calcIngredientCost(item),
    0
  );

  const calcPackagingCost = (item: PackagingItem) =>
    item.unitPrice * item.quantityPerProduct;

  const totalPackagingCostPerProduct = packaging.reduce(
    (acc, item) => acc + calcPackagingCost(item),
    0
  );

  const totalPackagingCostBatch =
    totalPackagingCostPerProduct * basicInfo.outputQuantity;

  const totalAdditionalCost =
    additionalCost.laborCost + additionalCost.overheadCost;

  const totalBatchCost =
    totalIngredientsCost + totalPackagingCostBatch + totalAdditionalCost;

  const hppPerUnit = totalBatchCost / basicInfo.outputQuantity;

  const price = sellingPrice ?? 0;
  const profitPerUnit = price - hppPerUnit;

  const margin = price > 0 ? (profitPerUnit / price) * 100 : 0;
  const markup = hppPerUnit > 0 ? (profitPerUnit / hppPerUnit) * 100 : 0;

  const omzet = price * basicInfo.outputQuantity;
  const potentialProfit = profitPerUnit * basicInfo.outputQuantity;

  const breakEvenUnits = price > 0 ? Math.ceil(totalBatchCost / price) : 0;

  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">{t.title}</h3>

      {/* INPUT */}
      <div className="space-y-2">
        <Label>{t.input.label}</Label>
        <CurrencyField
          value={price}
          onValueChange={(v) => setSellingPrice(v)}
          placeholder={t.input.placeholder}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* INFORMASI PEMBELIAN */}
        <InfoBlock icon={<Package size={18} />} title={t.purchaseInfo.title}>
          <div className="flex justify-between">
            <span>{t.purchaseInfo.qty}</span>
            <span>{basicInfo.outputQuantity}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.purchaseInfo.batchCost}</span>
            <span>Rp {formatRupiah(totalBatchCost)}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.purchaseInfo.pricePerUnit}</span>
            <span>Rp {formatRupiah(price)}</span>
          </div>
        </InfoBlock>

        {/* HPP & PROFIT */}
        <InfoBlock icon={<DollarSign size={18} />} title={t.hppProfit.title}>
          <div className="flex justify-between">
            <span>{t.hppProfit.hppPerUnit}</span>
            <span>Rp {formatRupiah(hppPerUnit)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.hppProfit.profitPerUnit}</span>
            <span className="font-medium text-green-600">
              Rp {formatRupiah(profitPerUnit)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>{t.hppProfit.totalUnit}</span>
            <span>{basicInfo.outputQuantity}</span>
          </div>
        </InfoBlock>

        {/* MARGIN */}
        <InfoBlock icon={<Percent size={18} />} title={t.marginMarkup.title}>
          <div className="flex justify-between">
            <span>{t.marginMarkup.margin}</span>
            <span>{margin.toFixed(1)}%</span>
          </div>

          <div className="flex justify-between">
            <span>{t.marginMarkup.markup}</span>
            <span>{markup.toFixed(1)}%</span>
          </div>
        </InfoBlock>

        {/* POTENSI */}
        <InfoBlock icon={<BarChart3 size={18} />} title={t.potential.title}>
          <div className="flex justify-between">
            <span>{t.potential.omzet}</span>
            <span>Rp {formatRupiah(omzet)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.potential.profit}</span>
            <span className="text-green-600 font-medium">
              Rp {formatRupiah(potentialProfit)}
            </span>
          </div>
        </InfoBlock>

        {/* BREAK EVEN */}
        <InfoBlock icon={<Target size={18} />} title={t.breakEven.title}>
          <div className="flex justify-between">
            <span>{t.breakEven.required}</span>
            <span>
              {breakEvenUnits > 0 ? `${breakEvenUnits} unit` : t.breakEven.noValue}
            </span>
          </div>
        </InfoBlock>

      </div>
    </div>
  );
}
