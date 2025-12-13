/* ============================
   OUTPUT TYPES
============================ */

export interface CategoryAllocationResult {
  categoryKey: string;
  categoryName: string;
  totalAmount: number;
  percentage: number;
}

export interface AssetAllocationItemResult {
  categoryKey: string;
  categoryName: string;
  subCategory?: string;
  name?: string;
  amount: number;
  percentage: number;
}

export interface AssetAllocationResult {
  totalAmount: number;
  categoryAllocations: CategoryAllocationResult[];
  assetAllocations: AssetAllocationItemResult[];
}
