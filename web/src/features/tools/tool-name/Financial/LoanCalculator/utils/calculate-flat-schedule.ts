import { LoanCalculatorInput } from "../types/input";
import { AmortizationRow } from "../types/output";

export function calculateFlatSchedule(
  input: LoanCalculatorInput
): AmortizationRow[] {
  const { amount, annualInterestRate, tenorMonths } = input;

  const monthlyInterest =
    (amount * (annualInterestRate / 100)) / 12;
  const principalPerMonth = amount / tenorMonths;
  const installment = principalPerMonth + monthlyInterest;

  let remainingBalance = amount;
  let totalPaid = 0;

  const schedule: AmortizationRow[] = [];

  for (let month = 1; month <= tenorMonths; month++) {
    remainingBalance -= principalPerMonth;
    totalPaid += installment;

    schedule.push({
      month,
      installment,
      principal: principalPerMonth,
      interest: monthlyInterest,
      remainingBalance: Math.max(remainingBalance, 0),
      totalPaid,
    });
  }

  return schedule;
}
