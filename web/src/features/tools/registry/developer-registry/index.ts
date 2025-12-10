import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import { developerRegistry01 } from "./01-developer-registry";

export const developerRegistry: Record<DeveloperToolName, ToolRegistryItem> = {
  ...developerRegistry01,
};

export const developerToolNames = Object.keys(
  developerRegistry
) as DeveloperToolName[];
