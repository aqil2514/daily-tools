import { SavingsGoalInput } from "../types/input";
import { SavingsGoalResult } from "../types/output";

export function calculateSavingsGoal(
  input: SavingsGoalInput
): SavingsGoalResult {
  const {
    targetAmount,
    monthlyContribution,
    durationMonths,
    annualInterestRate,
  } = input;

  const r = annualInterestRate > 0 ? annualInterestRate / 100 / 12 : 0; // monthly rate
  const n = durationMonths;

  // ================================================
  // CASE A: User memasukkan monthly contribution
  // ================================================
  if (monthlyContribution && monthlyContribution > 0) {
    if (r === 0) {
      // No interest
      return {
        finalValue: monthlyContribution * n,
        requiredMonthly: undefined,
        monthlyInterestRate: r,
      };
    }

    const fv =
      monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);

    return {
      finalValue: fv,
      requiredMonthly: undefined,
      monthlyInterestRate: r,
    };
  }

  // ================================================
  // CASE B: User TIDAK mengisi monthly contribution
  // → Hitung monthly required
  // ================================================
  if (r === 0) {
    return {
      finalValue: targetAmount,
      requiredMonthly: targetAmount / n,
      monthlyInterestRate: r,
    };
  }

  const required =
    (targetAmount * r) / (Math.pow(1 + r, n) - 1);

  return {
    finalValue: targetAmount,
    requiredMonthly: required,
    monthlyInterestRate: r,
  };
}
