import { useCompoundInterest } from "../store/provider";
import { calculateCompoundInterest } from "../utils/calculate-compound-interest";
import { calculateCompoundWithFrequency } from "../utils/calculate-compound-with-frequency";
import { calculateCompoundMonthly } from "../utils/calculate-compound-monthly";

export function useCompoundSummary() {
  const { parsedData, input } = useCompoundInterest();

  /**
   * ======================
   * Future Value
   * ======================
   */
  const hasFrequency = input.frequency > 1;

  const futureValue =
    input.mode === "monthly-contribution"
      ? calculateCompoundMonthly(parsedData)
      : hasFrequency
      ? calculateCompoundWithFrequency(parsedData)
      : calculateCompoundInterest(parsedData);

  /**
   * ======================
   * Total Invested
   * ======================
   */
  const totalMonths = parsedData.periods * 12;

  const totalInvested =
    input.mode === "monthly-contribution"
      ? parsedData.principal * totalMonths
      : parsedData.principal;

  /**
   * ======================
   * Interest & Return
   * ======================
   */
  const interestEarned = futureValue - totalInvested;

  const returnPercentage =
    totalInvested > 0
      ? (interestEarned / totalInvested) * 100
      : 0;

  /**
   * ======================
   * Monthly Metrics (optional)
   * ======================
   */
  const avgMonthlyGain =
    input.mode === "monthly-contribution"
      ? interestEarned / totalMonths
      : null;

  return {
    futureValue,
    totalInvested,
    interestEarned,
    returnPercentage,
    avgMonthlyGain,
    mode: input.mode,
  };
}
