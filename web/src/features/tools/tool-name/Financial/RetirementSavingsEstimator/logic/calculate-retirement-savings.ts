import { RetirementSavingsInput } from "../types/input";
import {
    RetirementSavingsOutput,
  RetirementSavingsResult,
} from "../types/output";

export function calculateRetirementSavings(
  input: RetirementSavingsInput
): RetirementSavingsOutput {
  const {
    currentAge,
    retirementAge,
    currentSavings,
    targetFund,
    annualReturnRate,
  } = input;

  // Basic validation
  if (
    currentAge < 0 ||
    retirementAge <= currentAge ||
    currentSavings < 0 ||
    targetFund <= 0
  ) {
    return {
      status: "invalid-input",
      result: null,
      message: "Invalid input values.",
    };
  }

  const yearsToRetirement = retirementAge - currentAge;
  const monthsToRetirement = yearsToRetirement * 12;

  const annualRate = annualReturnRate / 100;
  const monthlyRate = annualRate / 12;

  // Future value of current savings
  const futureValueOfCurrentSavings =
    currentSavings * Math.pow(1 + annualRate, yearsToRetirement);

  const remainingTargetAmount = Math.max(
    0,
    targetFund - futureValueOfCurrentSavings
  );

  // If already on track
  if (remainingTargetAmount === 0) {
    const result: RetirementSavingsResult = {
      yearsToRetirement,
      monthsToRetirement,
      futureValueOfCurrentSavings,
      remainingTargetAmount: 0,
      requiredMonthlySaving: 0,
    };

    return {
      status: "on-track",
      result,
      message: "You are already on track to reach your retirement goal.",
    };
  }

  // Monthly saving calculation
  let requiredMonthlySaving = 0;

  if (annualRate === 0) {
    requiredMonthlySaving =
      remainingTargetAmount / monthsToRetirement;
  } else {
    requiredMonthlySaving =
      (remainingTargetAmount * monthlyRate) /
      (Math.pow(1 + monthlyRate, monthsToRetirement) - 1);
  }

  const result: RetirementSavingsResult = {
    yearsToRetirement,
    monthsToRetirement,
    futureValueOfCurrentSavings,
    remainingTargetAmount,
    requiredMonthlySaving,
  };

  return {
    status: "valid",
    result,
  };
}
