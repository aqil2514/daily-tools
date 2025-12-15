/**
 * Kategori BMI berdasarkan WHO
 */
export type BMICategory =
  | "underweight"
  | "normal"
  | "overweight"
  | "obese";

export interface BMIResult {
  bmi: number;
  category: BMICategory;
}
