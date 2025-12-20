import { CompoundInterestInput } from "../type/input";

export function calculateCompoundWithFrequency(data: CompoundInterestInput) {
  const futureValue =
    data.principal *
    Math.pow(1 + data.rate / data.frequency, data.frequency * data.periods);

  return futureValue;
}
