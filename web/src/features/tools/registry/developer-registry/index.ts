import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import { developerRegistry01 } from "./01-developer-registry";

export const developerRegistry = {
  ...developerRegistry01,
} as Record<DeveloperToolName, ToolRegistryItem>;

export const developerToolNames = Object.keys(
  developerRegistry
) as DeveloperToolName[];
