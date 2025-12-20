import { LoanCalculatorInput } from "../types/input";
import { AmortizationRow } from "../types/output";

export function calculateAnnuitySchedule(
  input: LoanCalculatorInput
): AmortizationRow[] {
  const { amount, annualInterestRate, tenorMonths } = input;

  const monthlyRate = annualInterestRate / 100 / 12;
  const n = tenorMonths;

  let remainingBalance = amount;
  let totalPaid = 0;

  if (monthlyRate === 0) {
    const principalPerMonth = amount / n;

    return Array.from({ length: n }, (_, i) => {
      totalPaid += principalPerMonth;
      remainingBalance -= principalPerMonth;

      return {
        month: i + 1,
        installment: principalPerMonth,
        principal: principalPerMonth,
        interest: 0,
        remainingBalance: Math.max(remainingBalance, 0),
        totalPaid,
      };
    });
  }

  const installment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

  const schedule: AmortizationRow[] = [];

  for (let month = 1; month <= n; month++) {
    const interest = remainingBalance * monthlyRate;
    const principal = installment - interest;

    remainingBalance -= principal;
    totalPaid += installment;

    schedule.push({
      month,
      installment,
      principal,
      interest,
      remainingBalance: Math.max(remainingBalance, 0),
      totalPaid,
    });
  }

  return schedule;
}
