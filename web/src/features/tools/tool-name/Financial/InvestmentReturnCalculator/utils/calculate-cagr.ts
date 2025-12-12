import { InvestmentReturnInput } from "../types/input";
import { InvestmentReturnResult } from "../types/output";

export function calculateCAGR(input: InvestmentReturnInput): InvestmentReturnResult {
  const { initialValue, finalValue, years } = input;

  // Safety guard
  if (initialValue <= 0 || finalValue <= 0 || years <= 0) {
    return {
      cagr: 0,
      growthMultiple: 0,
    };
  }

  // CAGR formula
  const growthMultiple = finalValue / initialValue;
  const cagr = Math.pow(growthMultiple, 1 / years) - 1;

  return {
    cagr: cagr * 100,
    growthMultiple,
  };
}
