/* ============================
   INPUT TYPES
============================ */

/**
 * Asset category type
 * Example: Cash, Stocks, Crypto, Property
 */
export interface AssetCategory {
  id: string;
  name: string;
}

/**
 * Individual asset item
 */
export interface AssetItem {
  /**
   * Free-form category name
   * Example: Cash, Stocks, Crypto, Business
   */
  category: string;

  /**
   * Optional subcategory
   */
  subCategory?: string;

  /**
   * Optional asset name
   */
  name?: string;

  /**
   * Asset amount
   */
  amount: number;
}

/**
 * Full asset allocation input
 */
export interface AssetAllocationInput {
  assets: AssetItem[];
}

/* ============================
   DEFAULT INPUT
============================ */

export const defaultAssetAllocationInput: AssetAllocationInput = {
  assets: [],
};
