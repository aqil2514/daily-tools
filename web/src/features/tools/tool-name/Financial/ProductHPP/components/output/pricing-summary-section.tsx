"use client";

import { InfoBlock } from "@/components/atoms/info-block";
import { useProductHPP } from "../../store/provider";
import { IngredientItem, PackagingItem } from "../../types/input";

import { Calculator, Tag, DollarSign, TrendingUp } from "lucide-react";

import { useLocale } from "next-intl";
import { pricingSummaryI18n } from "../../i18n/output/pricing-summary";

/* ============================
       MAIN COMPONENT
==============================*/
export function PricingSummarySection() {
  const { basicInfo, ingredients, packaging, additionalCost, pricing } =
    useProductHPP();

  const locale = useLocale();
  const t = pricingSummaryI18n[locale];

  const formatRupiah = (value: number) =>
    value.toLocaleString("id-ID", { minimumFractionDigits: 0 });

  /* Perhitungan HPP */
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

  const hppPerPcs = totalBatchCost / (basicInfo.outputQuantity || 1);

  const marginPercentage = pricing.marginPercentage || 30;
  const recommendedPrice = hppPerPcs * (1 + marginPercentage / 100);

  const profitPerPcs = recommendedPrice - hppPerPcs;
  const profitPerBatch = profitPerPcs * basicInfo.outputQuantity;

  const marginOptions = [20, 30, 40];

  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">{t.title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* HPP SUMMARY */}
        <InfoBlock icon={<Calculator size={18} />} title={t.hppSummary.title}>
          <div className="flex justify-between">
            <span>{t.hppSummary.qty}</span>
            <span>{basicInfo.outputQuantity} pcs</span>
          </div>

          <div className="flex justify-between font-medium">
            <span>{t.hppSummary.hppPerUnit}</span>
            <span>Rp {formatRupiah(hppPerPcs)}</span>
          </div>

          <div className="flex justify-between font-semibold text-primary">
            <span>{t.hppSummary.sellingPrice(marginPercentage)}</span>
            <span>Rp {formatRupiah(recommendedPrice)}</span>
          </div>
        </InfoBlock>

        {/* ESTIMASI PROFIT */}
        <InfoBlock icon={<DollarSign size={18} />} title={t.profit.title}>
          <div className="flex justify-between">
            <span>{t.profit.perUnit}</span>
            <span className="text-green-600 font-medium">
              Rp {formatRupiah(profitPerPcs)}
            </span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>{t.profit.perBatch}</span>
            <span className="text-green-600">
              Rp {formatRupiah(profitPerBatch)}
            </span>
          </div>
        </InfoBlock>

        {/* ALTERNATIF HARGA */}
        <InfoBlock icon={<Tag size={18} />} title={t.alternatives.title}>
          {marginOptions.map((m) => {
            const price = hppPerPcs * (1 + m / 100);
            return (
              <div key={m} className="flex justify-between text-sm">
                <span>{t.alternatives.margin(m)}</span>
                <span>Rp {formatRupiah(price)}</span>
              </div>
            );
          })}
        </InfoBlock>

        {/* RINGKASAN BIAYA */}
        <InfoBlock icon={<TrendingUp size={18} />} title={t.totalCost.title}>
          <div className="flex justify-between">
            <span>{t.totalCost.ingredients}</span>
            <span>Rp {formatRupiah(totalIngredientsCost)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.totalCost.packaging}</span>
            <span>Rp {formatRupiah(totalPackagingCostBatch)}</span>
          </div>

          <div className="flex justify-between">
            <span>{t.totalCost.additional}</span>
            <span>Rp {formatRupiah(totalAdditionalCost)}</span>
          </div>

          <div className="flex justify-between font-semibold mt-2">
            <span>{t.totalCost.totalBatch}</span>
            <span>Rp {formatRupiah(totalBatchCost)}</span>
          </div>
        </InfoBlock>
      </div>
    </div>
  );
}
