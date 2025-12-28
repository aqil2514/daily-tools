import { DataToolName } from "@/@types/tools/data";
import { dataRegistry01 } from "./01-data-registry";
import { ToolRegistryItem } from "@/@types/Tools";

export const dataRegistry = {
  ...dataRegistry01,
} as Record<DataToolName, ToolRegistryItem>;
