import { initialProductHPPState } from "../store/provider";
import {
  ProductHPPState,
  IngredientItem,
  PackagingItem,
  ProductBasicInfo,
  AdditionalCost,
  PricingSetting,
} from "../types/input";

export type ProductHPPAction =
  | { type: "SET_BASIC_INFO"; payload: ProductBasicInfo }
  | { type: "ADD_INGREDIENT"; payload: IngredientItem }
  | {
      type: "UPDATE_INGREDIENT";
      payload: { id: string; data: Partial<IngredientItem> };
    }
  | { type: "REMOVE_INGREDIENT"; payload: string }
  | { type: "ADD_PACKAGING"; payload: PackagingItem }
  | {
      type: "UPDATE_PACKAGING";
      payload: { id: string; data: Partial<PackagingItem> };
    }
  | { type: "REMOVE_PACKAGING"; payload: string }
  | { type: "SET_ADDITIONAL_COST"; payload: AdditionalCost }
  | { type: "SET_PRICING"; payload: PricingSetting }
  | { type: "RESET" }
  | { type: "SET_ALL"; payload: ProductHPPState };

export function productHPPreducer(
  state: ProductHPPState,
  action: ProductHPPAction
): ProductHPPState {
  switch (action.type) {
    case "SET_BASIC_INFO":
      return { ...state, basicInfo: action.payload };

    // INGREDIENTS
    case "ADD_INGREDIENT":
      return { ...state, ingredients: [...state.ingredients, action.payload] };

    case "UPDATE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
      };

    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter((i) => i.id !== action.payload),
      };

    // PACKAGING
    case "ADD_PACKAGING":
      return { ...state, packaging: [...state.packaging, action.payload] };

    case "UPDATE_PACKAGING":
      return {
        ...state,
        packaging: state.packaging.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
      };

    case "REMOVE_PACKAGING":
      return {
        ...state,
        packaging: state.packaging.filter((i) => i.id !== action.payload),
      };

    // COST & PRICING
    case "SET_ADDITIONAL_COST":
      return { ...state, additionalCost: action.payload };

    case "SET_PRICING":
      return { ...state, pricing: action.payload };

    case "RESET":
      return initialProductHPPState;

    case "SET_ALL":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
