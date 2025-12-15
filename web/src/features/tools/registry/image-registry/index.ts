import { ToolRegistryItem } from "@/@types/Tools";
import { imageRegistry01 } from "./01-image-registry";
import { ImageToolName } from "@/@types/tools/image";

export const imageRegistry: Record<ImageToolName, ToolRegistryItem> = {
  ...imageRegistry01,
};
