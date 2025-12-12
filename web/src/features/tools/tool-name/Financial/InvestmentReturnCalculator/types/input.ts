export interface InvestmentReturnInput {
  /** Nilai awal investasi */
  initialValue: number;

  /** Nilai akhir investasi */
  finalValue: number;

  /** Durasi (tahun) — bisa desimal */
  years: number;

  /** Currency (default: IDR) */
  currency: string;

  /** Locale (default: id-ID) */
  locale: string;
}

export const defaultInvestmentInput: InvestmentReturnInput = {
  initialValue: 0,
  finalValue: 0,
  years: 1,
  currency: "IDR",
  locale: "id-ID",
};