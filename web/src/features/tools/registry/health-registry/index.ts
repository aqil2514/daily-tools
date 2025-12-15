import { ToolRegistryItem } from "@/@types/Tools";
import { healthRegistry01 } from "./01-health-registry";
import { HealthToolName } from "@/@types/tools/health";

export const healthRegistry = {
  ...healthRegistry01,
} as Record<HealthToolName, ToolRegistryItem>;
