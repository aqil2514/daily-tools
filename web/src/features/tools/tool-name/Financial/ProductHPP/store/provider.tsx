"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import {
  ProductHPPState,
  ProductBasicInfo,
  IngredientItem,
  PackagingItem,
  AdditionalCost,
  PricingSetting,
} from "../types/input";
import { productHPPreducer } from "../utils/reducer";

// ===========================
// INITIAL STATE
// ===========================
export const initialProductHPPState: ProductHPPState = {
  basicInfo: {
    productName: "",
    outputQuantity: 1,
  },

  ingredients: [],
  packaging: [],

  additionalCost: {
    laborCost: 0,
    overheadCost: 0,
  },

  pricing: {
    marginPercentage: 30,
  },
};

// ===========================
// CONTEXT
// ===========================
interface ProductHPPContextValue extends ProductHPPState {
  setBasicInfo: (info: ProductBasicInfo) => void;

  addIngredient: (item: IngredientItem) => void;
  updateIngredient: (id: string, data: Partial<IngredientItem>) => void;
  removeIngredient: (id: string) => void;

  addPackaging: (item: PackagingItem) => void;
  updatePackaging: (id: string, data: Partial<PackagingItem>) => void;
  removePackaging: (id: string) => void;

  setAdditionalCost: (cost: AdditionalCost) => void;
  setPricing: (pricing: PricingSetting) => void;

  resetAll: () => void;
  setAllState: (state: ProductHPPState) => void;
}

const ProductHPPContext = createContext<ProductHPPContextValue | null>(null);

// ===========================
// PROVIDER
// ===========================
export function ProductHPPProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    productHPPreducer,
    initialProductHPPState
  );

  // ACTION METHODS
  const value: ProductHPPContextValue = {
    ...state,

    setBasicInfo: (info) => dispatch({ type: "SET_BASIC_INFO", payload: info }),

    addIngredient: (item) =>
      dispatch({ type: "ADD_INGREDIENT", payload: item }),
    updateIngredient: (id, data) =>
      dispatch({ type: "UPDATE_INGREDIENT", payload: { id, data } }),
    removeIngredient: (id) =>
      dispatch({ type: "REMOVE_INGREDIENT", payload: id }),

    addPackaging: (item) => dispatch({ type: "ADD_PACKAGING", payload: item }),
    updatePackaging: (id, data) =>
      dispatch({ type: "UPDATE_PACKAGING", payload: { id, data } }),
    removePackaging: (id) =>
      dispatch({ type: "REMOVE_PACKAGING", payload: id }),

    setAdditionalCost: (cost) =>
      dispatch({ type: "SET_ADDITIONAL_COST", payload: cost }),
    setPricing: (pricing) =>
      dispatch({ type: "SET_PRICING", payload: pricing }),

    resetAll: () => dispatch({ type: "RESET" }),
    setAllState: (state) => dispatch({ type: "SET_ALL", payload: state }),
  };

  return (
    <ProductHPPContext.Provider value={value}>
      {children}
    </ProductHPPContext.Provider>
  );
}

// ===========================
// HOOK
// ===========================
export function useProductHPP() {
  const ctx = useContext(ProductHPPContext);
  if (!ctx) {
    throw new Error("useProductHPP must be used within ProductHPPProvider");
  }
  return ctx;
}
