export const HEALTH_TOOLS = ["bmi-calculator", "bmr-tdee-calculator"] as const;

export type HealthToolName = (typeof HEALTH_TOOLS)[number];
