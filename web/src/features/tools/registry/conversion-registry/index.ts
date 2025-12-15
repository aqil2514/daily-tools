import { ConversionToolName } from "@/@types/tools/conversion";
import { conversionRegistry01 } from "./01-conversion-registry";
import { ToolRegistryItem } from "@/@types/Tools";

export const conversionRegistry = {
    ...conversionRegistry01
}  as Record<ConversionToolName, ToolRegistryItem>;