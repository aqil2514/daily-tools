export interface SavingsGoalInput {
  /** Target tabungan akhir */
  targetAmount: number;

  /** Jumlah tabungan per bulan (opsional).
   * Jika user tidak mengisi ini, kalkulator akan mencari nilai ini.
   */
  monthlyContribution?: number;

  /** Total durasi menabung dalam bulan */
  durationMonths: number;

  /** Bunga tahunan (opsional, default 0%) */
  annualInterestRate: number;

  /** Currency (default IDR) */
  currency: string;

  /** Locale (default id-ID) */
  locale: string;
}

export const defaultSavingsGoalInput: SavingsGoalInput = {
  targetAmount: 0,
  monthlyContribution: 0,
  durationMonths: 12,
  annualInterestRate: 0,
  currency: "IDR",
  locale: "id-ID",
};
