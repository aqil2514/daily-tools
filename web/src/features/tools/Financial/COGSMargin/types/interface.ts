export interface CogsMarginItem {
  packAmount: number;
  qtyPerPack: number;
  pricePerPack: number;
  sellingPrice: number;
  itemName?: string;
  additionalInformation?: string;
}

export interface CogsMarginOutput {
  totalUnits: number;
  totalBuyCost: number;
  unitCost: number;

  unitProfit: number;

  // Margin Jual (Profit Margin %)
  marginSellPercentage: number;
  marginSellValue: number;

  // Margin Beli (Markup %)
  marginBuyPercentage: number;
  marginBuyValue: number;

  totalPotentialRevenue: number;
  totalPotentialProfit: number;

  breakEvenCount: number;
  packPricePerUnit: number;
}
