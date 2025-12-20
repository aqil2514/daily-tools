import { CompoundInterestInput } from "../type/input";

export interface MonthlyCompoundBreakdownItem {
  month: number;
  totalInvested: number;
  value: number;
  interestEarned: number;
  monthlyInterest: number;
}

export function breakdownCompoundMonthly(
  data: CompoundInterestInput
): MonthlyCompoundBreakdownItem[] {
  const { principal, rate, periods } = data;

  const frequency = 12;
  const ratePerPeriod = rate / frequency;
  const totalMonths = periods * frequency;

  const breakdown: MonthlyCompoundBreakdownItem[] = [];

  let previousValue = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const totalInvested = principal * month;

    const currentValue =
      principal *
      ((Math.pow(1 + ratePerPeriod, month) - 1) /
        ratePerPeriod);

    const monthlyInterest =
      month === 1
        ? currentValue - principal
        : currentValue - previousValue - principal;

    breakdown.push({
      month,
      totalInvested,
      value: Math.round(currentValue),
      interestEarned: Math.round(currentValue - totalInvested),
      monthlyInterest: Math.round(monthlyInterest),
    });

    previousValue = currentValue;
  }

  return breakdown;
}
