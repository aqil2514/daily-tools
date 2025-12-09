import { CogsMarginItem, CogsMarginOutput } from "../types/interface";

export function calculateCogsMargin(data: CogsMarginItem): CogsMarginOutput {
  const totalUnits = data.packAmount * data.qtyPerPack;
  const totalBuyCost = data.packAmount * data.pricePerPack;

  const unitCost = totalBuyCost / totalUnits;
  const unitProfit = data.sellingPrice - unitCost;

  // Margin Jual = profit / harga jual
  const marginSellPercentage = (unitProfit / data.sellingPrice) * 100;

  // Margin Beli (Markup) = profit / modal
  const marginBuyPercentage = (unitProfit / unitCost) * 100;

  return {
    totalUnits,
    totalBuyCost,
    unitCost,
    unitProfit,

    // Margin jual
    marginSellValue: unitProfit,
    marginSellPercentage,

    // Margin beli
    marginBuyValue: unitProfit,
    marginBuyPercentage,

    totalPotentialRevenue: totalUnits * data.sellingPrice,
    totalPotentialProfit: totalUnits * unitProfit,

    breakEvenCount: totalBuyCost / data.sellingPrice,
    packPricePerUnit: data.pricePerPack / data.qtyPerPack,
  };
}
