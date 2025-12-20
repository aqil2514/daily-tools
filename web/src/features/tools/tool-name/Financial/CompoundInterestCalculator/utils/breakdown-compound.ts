import { CompoundInterestInput } from "../type/input";
import { BreakdownCompound } from "../type/output";
import { calculateCompoundInterest } from "./calculate-compound-interest";
import { calculateCompoundWithFrequency } from "./calculate-compound-with-frequency";

export function breakdownCompound(
  data: CompoundInterestInput
): BreakdownCompound[] {
  const isWithFrequent = data.frequency > 1;
  const breakdown: BreakdownCompound[] = [];
  let currentValue = data.principal;

  for (let year = 1; year <= data.periods; year++) {
    const snapshot: CompoundInterestInput = {
      frequency: data.frequency,
      periods: 1,
      principal: currentValue,
      rate: data.rate,
      mode: "once",
    };

    const futureValue = isWithFrequent
      ? calculateCompoundWithFrequency(snapshot)
      : calculateCompoundInterest(snapshot);

    const newData: BreakdownCompound = {
      value: Math.round(futureValue),
      year: year,
      interestEarned: Math.round(futureValue - currentValue),
      startValue: Math.round(currentValue),
    };

    breakdown.push(newData);
    currentValue = futureValue;
  }

  return breakdown;
}
