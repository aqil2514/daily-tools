export type LoanType = "flat" | "effective";

export interface LoanCalculatorInput {
  /** Jumlah pinjaman (loan amount) */
  amount: number;

  /** Bunga tahunan dalam persen, contoh: 12 */
  annualInterestRate: number;

  /** Tenor dalam bulan */
  tenorMonths: number;

  /** flat = bunga flat, effective = bunga anuitas */
  loanType: LoanType;

  /** Optional: currency code (IDR, USD, JPY, dll) */
  currency?: string;

  /** Optional: locale formatting (id-ID, en-US, ja-JP, dll) */
  locale?: string;
}
