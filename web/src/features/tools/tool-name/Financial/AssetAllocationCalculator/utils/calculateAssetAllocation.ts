import { AssetAllocationInput, AssetItem } from "../types/input";
import {
  AssetAllocationResult,
  CategoryAllocationResult,
  AssetAllocationItemResult,
} from "../types/output";

/**
 * Normalize category string for grouping
 * - trim whitespace
 * - lowercase
 */
function normalizeCategoryKey(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Calculate asset allocation from free-form categories
 */
export function calculateAssetAllocation(
  input: AssetAllocationInput
): AssetAllocationResult {
  const validAssets: AssetItem[] = input.assets.filter(
    (asset) =>
      asset.amount > 0 &&
      asset.category.trim().length > 0
  );

  // Total asset value
  const totalAmount = validAssets.reduce(
    (sum, asset) => sum + asset.amount,
    0
  );

  // Edge case: no valid assets
  if (totalAmount === 0) {
    return {
      totalAmount: 0,
      categoryAllocations: [],
      assetAllocations: [],
    };
  }

  /* ============================
     CATEGORY AGGREGATION
  ============================ */

  const categoryMap = new Map<
    string,
    CategoryAllocationResult
  >();

  validAssets.forEach((asset) => {
    const key = normalizeCategoryKey(asset.category);

    if (!categoryMap.has(key)) {
      categoryMap.set(key, {
        categoryKey: key,
        categoryName: asset.category.trim(),
        totalAmount: 0,
        percentage: 0,
      });
    }

    const category = categoryMap.get(key)!;
    category.totalAmount += asset.amount;
  });

  const categoryAllocations: CategoryAllocationResult[] =
    Array.from(categoryMap.values()).map(
      (category) => ({
        ...category,
        percentage:
          (category.totalAmount / totalAmount) * 100,
      })
    );

  /* ============================
     ASSET-LEVEL ALLOCATION
  ============================ */

  const assetAllocations: AssetAllocationItemResult[] =
    validAssets.map((asset) => {
      const key = normalizeCategoryKey(asset.category);
      const category = categoryMap.get(key)!;

      return {
        categoryKey: key,
        categoryName: category.categoryName,
        subCategory: asset.subCategory,
        name: asset.name,
        amount: asset.amount,
        percentage:
          (asset.amount / totalAmount) * 100,
      };
    });

  return {
    totalAmount,
    categoryAllocations,
    assetAllocations,
  };
}
