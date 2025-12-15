export const HEALTH_TOOLS = ["bmi-calculator"] as const;

export type HealthToolName = (typeof HEALTH_TOOLS)[number];
