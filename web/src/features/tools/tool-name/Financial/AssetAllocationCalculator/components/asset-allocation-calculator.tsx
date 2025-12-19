"use client";

import { AssetAllocationInputComp } from "./asset-allocation-input";
import { AssetAllocationOutput } from "./output/asset-allocation-output";
import { AssetAllocationProvider } from "../store/provider";

export function AssetAllocationCalculator() {
  return (
    <AssetAllocationProvider>
      <div className="grid lg:grid-cols-2 gap-4">
        <AssetAllocationInputComp />
        <AssetAllocationOutput />
      </div>
    </AssetAllocationProvider>
  );
}
