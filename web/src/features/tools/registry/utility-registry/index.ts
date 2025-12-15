import { UtilityToolName } from "@/@types/tools/utility";
import { utilityRegistry01 } from "./01-utility-registry";
import { ToolRegistryItem } from "@/@types/Tools";

export const utilityRegistry = {
    ...utilityRegistry01
}  as Record<UtilityToolName, ToolRegistryItem>;