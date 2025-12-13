/* ============================
   INPUT TYPES
============================ */

export interface RetirementSavingsInput {
  /**
   * Current age of the user (years)
   * Example: 30
   */
  currentAge: number;

  /**
   * Target retirement age (years)
   * Example: 60
   */
  retirementAge: number;

  /**
   * Current total savings / assets
   * Example: 50000000
   */
  currentSavings: number;

  /**
   * Target retirement fund
   * Example: 1500000000
   */
  targetFund: number;

  /**
   * Expected annual return (percentage)
   * Example: 8 means 8%
   */
  annualReturnRate: number;
}

export const defaultRetirementSavingsInput: RetirementSavingsInput = {
  annualReturnRate: 8,
  currentAge: 30,
  currentSavings: 500000,
  retirementAge: 60,
  targetFund: 1500000000,
};
