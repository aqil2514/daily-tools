/**
 * Mode perhitungan persentase
 */
export type PercentageMode =
  | "percentage-of"   // X% dari Y
  | "increase"        // kenaikan %
  | "decrease"        // penurunan %
  | "difference";     // selisih %

/**
 * Hasil perhitungan persentase
 */
export interface PercentageResult {
  result: number;
  percentage?: number; // dipakai di mode tertentu
}
