import { LoanCalculatorInput } from "../types/input";
import { LoanCalculationResult } from "../types/output";
import { calculateAnnuityLoan } from "./calculate-annuity-loan";
import { calculateFlatLoan } from "./calculate-flat-loan";

export function calculateLoan(input: LoanCalculatorInput): LoanCalculationResult {
  if (input.loanType === "flat") {
    return calculateFlatLoan(input);
  }
  return calculateAnnuityLoan(input);
}