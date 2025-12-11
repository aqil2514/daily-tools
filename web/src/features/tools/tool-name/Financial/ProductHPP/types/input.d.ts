export interface ProductBasicInfo {
  productName: string;
  outputQuantity: number;
}

export interface IngredientItem {
  id: string;
  name: string;

  purchasePrice: number;
  purchaseQuantity: number;

  usage: number;
  unit?: string;
}

export interface PackagingItem {
  id: string;
  name: string;

  unitPrice: number;
  quantityPerProduct: number;
}

export interface AdditionalCost {
  laborCost: number;
  overheadCost: number;
}

export interface PricingSetting {
  marginPercentage: number;
}

export interface ProductHPPState {
  basicInfo: ProductBasicInfo;

  ingredients: IngredientItem[];
  packaging: PackagingItem[];

  additionalCost: AdditionalCost;
  pricing: PricingSetting;
}
