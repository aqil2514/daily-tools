import { BMIResult, BMICategory } from "../types/bmi-types";

/**
 * Calculate BMI value and category.
 * @param weightKg - body weight in kilograms
 * @param heightCm - body height in centimeters
 */
export function calculateBMI(
  weightKg: number,
  heightCm: number
): BMIResult | null {
  if (
    !Number.isFinite(weightKg) ||
    !Number.isFinite(heightCm) ||
    weightKg <= 0 ||
    heightCm <= 0
  ) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const category = getBMICategory(bmi);

  return {
    bmi,
    category,
  };
}

/**
 * Determine BMI category based on WHO standard
 */
function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}
