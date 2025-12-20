import { BMRInput } from "../types/input";
import { BMROutput } from "../types/output";
import { ACTIVITY_FACTORS } from "../types/constants";

/**
 * Calculate BMR using Mifflin–St Jeor equation
 */
function calculateBMR(input: BMRInput): number {
  const { gender, weight, height, age } = input;

  const base = 10 * weight + 6.25 * height - 5 * age;

  return gender === "male"
    ? base + 5
    : base - 161;
}

/**
 * Main calculator: BMR + TDEE + goal calories
 */
export function calculateBMRTDEE(input: BMRInput): BMROutput {
  const bmr = calculateBMR(input);

  const activityFactor = ACTIVITY_FACTORS[input.activityLevel];
  const tdee = bmr * activityFactor;

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),

    goals: {
      cutting: Math.round(tdee - 300),
      maintenance: Math.round(tdee),
      bulking: Math.round(tdee + 300),
    },
  };
}
