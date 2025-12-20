import { LoanCalculatorInput } from "../types/input";
import { LoanCalculationResult } from "../types/output";
import { calculateAnnuityLoan } from "./calculate-annuity-loan";
import { calculateFlatLoan } from "./calculate-flat-loan";
import { calculateFlatSchedule } from "./calculate-flat-schedule";
import { calculateAnnuitySchedule } from "./calculate-annuity-schedule";

export function calculateLoan(
  input: LoanCalculatorInput
): LoanCalculationResult {
  if (input.loanType === "flat") {
    const summary = calculateFlatLoan(input);

    return {
      ...summary,
      schedule: calculateFlatSchedule(input),
    };
  }

  const summary = calculateAnnuityLoan(input);

  return {
    ...summary,
    schedule: calculateAnnuitySchedule(input),
  };
}
