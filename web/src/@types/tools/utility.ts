export const UTILITY_TOOLS = [
  "age-calculator",
  "quiz-maker"
] as const;

export type UtilityToolName = typeof UTILITY_TOOLS[number];
