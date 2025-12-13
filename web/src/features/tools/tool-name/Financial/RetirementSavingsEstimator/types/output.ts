/* ============================
   CORE CALCULATION OUTPUT
============================ */

export interface RetirementSavingsResult {
  /**
   * Years remaining until retirement
   */
  yearsToRetirement: number;

  /**
   * Months remaining until retirement
   */
  monthsToRetirement: number;

  /**
   * Future value of current savings at retirement age
   */
  futureValueOfCurrentSavings: number;

  /**
   * Remaining amount needed to reach target fund
   */
  remainingTargetAmount: number;

  /**
   * Required monthly saving to reach retirement goal
   */
  requiredMonthlySaving: number;
}

/* ============================
   CALCULATION STATUS
============================ */

export type RetirementCalculationStatus =
  | "valid"
  | "on-track"
  | "invalid-input";

  /* ============================
   CORE RESULT
============================ */

export interface RetirementSavingsResult {
  /**
   * Years remaining until retirement
   */
  yearsToRetirement: number;

  /**
   * Months remaining until retirement
   */
  monthsToRetirement: number;

  /**
   * Future value of current savings at retirement age
   */
  futureValueOfCurrentSavings: number;

  /**
   * Remaining amount needed to reach target fund
   */
  remainingTargetAmount: number;

  /**
   * Required monthly saving to reach retirement goal
   */
  requiredMonthlySaving: number;
}

/* ============================
   FINAL OUTPUT SHAPE
============================ */

export interface RetirementSavingsOutput {
  /**
   * Calculation status
   * - valid       → normal calculation
   * - on-track    → already meets target
   * - invalid     → invalid input
   */
  status: RetirementCalculationStatus;

  /**
   * Calculation result
   * null when status is invalid-input
   */
  result: RetirementSavingsResult | null;

  /**
   * Optional message for UX feedback
   */
  message?: string;
}
