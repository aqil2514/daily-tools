import { CompoundInterestInput } from "../type/input";

export function calculateCompoundInterest(data: CompoundInterestInput) {
  const finalValue = data.principal * Math.pow(1 + data.rate, data.periods);

  return finalValue;
}
