import { CompoundInterestInput } from "../type/input";

export function calculateCompoundMonthly(data: CompoundInterestInput) {
  const { periods, principal, rate } = data;
  const frequency = 12;
  const totalPeriods = periods * frequency;
  const ratePeriod = rate / frequency;

  const futureValue =
    (principal * (Math.pow(1 + ratePeriod, totalPeriods) - 1)) / ratePeriod;

  return futureValue;
}
