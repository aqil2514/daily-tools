"use client";

import { useState } from "react";
import {
  AssetAllocationInput,
  defaultAssetAllocationInput,
} from "../types/input";
import { AssetAllocationInputComp } from "./asset-allocation-input";
import { AssetAllocationOutput } from "./output/asset-allocation-output";
import { calculateAssetAllocation } from "../utils/calculateAssetAllocation";

export function AssetAllocationCalculator() {
  const [inputData, setInputData] = useState<AssetAllocationInput>(
    defaultAssetAllocationInput
  );

  const calculate = calculateAssetAllocation(inputData);
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AssetAllocationInputComp
        inputData={inputData}
        setInputData={setInputData}
      />
      <AssetAllocationOutput result={calculate} />
    </div>
  );
}
