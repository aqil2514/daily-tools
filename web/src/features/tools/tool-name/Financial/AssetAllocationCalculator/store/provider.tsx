import React, {
  createContext,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import {
  AssetAllocationInput,
  AssetItem,
  defaultAssetAllocationInput,
} from "../types/input";
import { calculateAssetAllocation } from "../utils/calculateAssetAllocation";
import { AssetAllocationResult } from "../types/output";

interface AssetAllocationContextType {
  inputData: AssetAllocationInput;
  addAsset: () => void;
  updateAsset: (index: number, updated: Partial<AssetItem>) => void;
  removeAsset: (index: number) => void;

  calculate: AssetAllocationResult;

  chartRef: RefObject<HTMLDivElement | null>;
}

const AssetAllocationContext = createContext<AssetAllocationContextType>(
  {} as AssetAllocationContextType
);

export function AssetAllocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const chartRef = useRef(null);
  const [inputData, setInputData] = useState<AssetAllocationInput>(
    defaultAssetAllocationInput
  );

  const calculate = calculateAssetAllocation(inputData);

  const addAsset = () => {
    const newAsset: AssetItem = {
      category: "",
      amount: 0,
    };

    setInputData((prev) => ({
      ...prev,
      assets: [...prev.assets, newAsset],
    }));
  };

  const updateAsset = (index: number, updated: Partial<AssetItem>) => {
    setInputData((prev) => ({
      ...prev,
      assets: prev.assets.map((asset, i) =>
        i === index ? { ...asset, ...updated } : asset
      ),
    }));
  };

  const removeAsset = (index: number) => {
    setInputData((prev) => ({
      ...prev,
      assets: prev.assets.filter((_, i) => i !== index),
    }));
  };
  const values: AssetAllocationContextType = {
    inputData,
    addAsset,
    updateAsset,
    removeAsset,
    calculate,
    chartRef,
  };
  return (
    <AssetAllocationContext.Provider value={values}>
      {children}
    </AssetAllocationContext.Provider>
  );
}

export const useAssetAllocation = () => useContext(AssetAllocationContext);
