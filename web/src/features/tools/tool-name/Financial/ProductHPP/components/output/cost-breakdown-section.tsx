"use client";

import { InfoBlock } from "@/components/atoms/info-block";
import { useProductHPP } from "../../store/provider";
import { IngredientItem, PackagingItem } from "../../types/input";

import { Wheat, Package, Settings, Calculator } from "lucide-react";

import { useLocale } from "next-intl";
import { costBreakdownI18n } from "../../i18n/output/cost-breakdown";

export function CostBreakdownSection() {
  const { ingredients, packaging, additionalCost, basicInfo } = useProductHPP();

  const locale = useLocale();
  const t = costBreakdownI18n[locale];

  const formatRupiah = (value: number) =>
    value.toLocaleString("id-ID", { minimumFractionDigits: 0 });

  /* INGREDIENT COST */
  const calcIngredientCost = (item: IngredientItem) => {
    if (!item.purchaseQuantity) return 0;
    return (item.purchasePrice / item.purchaseQuantity) * item.usage;
  };
  const totalIngredientsCost = ingredients.reduce(
    (acc, item) => acc + calcIngredientCost(item),
    0
  );

  /* PACKAGING COST */
  const calcPackagingCost = (item: PackagingItem) =>
    item.unitPrice * item.quantityPerProduct;

  const totalPackagingCostPerProduct = packaging.reduce(
    (acc, item) => acc + calcPackagingCost(item),
    0
  );

  const totalPackagingCostBatch =
    totalPackagingCostPerProduct * basicInfo.outputQuantity;

  /* ADDITIONAL COST */
  const totalAdditionalCost =
    additionalCost.laborCost + additionalCost.overheadCost;

  /* TOTAL */
  const totalBatchCost =
    totalIngredientsCost +
    totalPackagingCostBatch +
    totalAdditionalCost;

  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">{t.title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* INGREDIENT COST */}
        <InfoBlock icon={<Wheat size={18} />} title={t.ingredients.title}>
          <div className="flex justify-between">
            <span>{t.ingredients.total}</span>
            <span>Rp {formatRupiah(totalIngredientsCost)}</span>
          </div>
        </InfoBlock>

        {/* PACKAGING COST */}
        <InfoBlock icon={<Package size={18} />} title={t.packaging.title}>
          <div className="flex justify-between">
            <span>{t.packaging.perPcs}</span>
            <span>Rp {formatRupiah(totalPackagingCostPerProduct)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.packaging.batch}</span>
            <span>Rp {formatRupiah(totalPackagingCostBatch)}</span>
          </div>
        </InfoBlock>

        {/* ADDITIONAL COST */}
        <InfoBlock icon={<Settings size={18} />} title={t.additional.title}>
          <div className="flex justify-between">
            <span>{t.additional.labor}</span>
            <span>Rp {formatRupiah(additionalCost.laborCost)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.additional.overhead}</span>
            <span>Rp {formatRupiah(additionalCost.overheadCost)}</span>
          </div>
        </InfoBlock>

        {/* TOTAL COST */}
        <InfoBlock icon={<Calculator size={18} />} title={t.total.title}>
          <div className="flex justify-between font-semibold">
            <span>{t.total.totalCost}</span>
            <span>Rp {formatRupiah(totalBatchCost)}</span>
          </div>
        </InfoBlock>
      </div>
    </div>
  );
}
