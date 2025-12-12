import { LoanCalculatorInput } from "../types/input";
import { LoanCalculationResult } from "../types/output";

export function calculateAnnuityLoan(input: LoanCalculatorInput): LoanCalculationResult {
  const { amount, annualInterestRate, tenorMonths } = input;

  const monthlyRate = (annualInterestRate / 100) / 12;
  const n = tenorMonths;

  if (monthlyRate === 0) {
    // Jika bunga 0%
    const monthlyInstallment = amount / n;
    return {
      monthlyInstallment,
      totalInterest: 0,
      totalPayment: amount,
    };
  }

  const monthlyInstallment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

  const totalPayment = monthlyInstallment * n;
  const totalInterest = totalPayment - amount;

  return {
    monthlyInstallment,
    totalInterest,
    totalPayment,
  };
}
