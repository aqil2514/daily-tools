import { ToolRegistryItem } from "@/@types/Tools";
import { developerRegistry01 } from "./01-developer-registry";
import { developerRegistry02 } from "./02-developer-registry";
import { DeveloperToolName } from "@/@types/tools/developer";
import { developerRegistry03 } from "./03-developer-registry";

export const developerRegistry = {
  ...developerRegistry01,
  ...developerRegistry02,
  ...developerRegistry03
} as Record<DeveloperToolName, ToolRegistryItem>;
