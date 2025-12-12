import { LoanCalculatorInput } from "../types/input";
import { LoanCalculationResult } from "../types/output";


export function calculateFlatLoan(input: LoanCalculatorInput): LoanCalculationResult {
  const { amount, annualInterestRate, tenorMonths } = input;

  const interestPerMonth = (amount * (annualInterestRate / 100)) / 12;
  const principalPerMonth = amount / tenorMonths;

  const monthlyInstallment = principalPerMonth + interestPerMonth;
  const totalInterest = interestPerMonth * tenorMonths;
  const totalPayment = monthlyInstallment * tenorMonths;

  return {
    monthlyInstallment,
    totalInterest,
    totalPayment,
  };
}
