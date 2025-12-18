import { ToolRegistryItem } from "@/@types/Tools";
import { imageRegistry01 } from "./01-image-registry";
import { ImageToolName } from "@/@types/tools/image";
import { imageRegistry02 } from "./02-image-registry";

export const imageRegistry = {
  ...imageRegistry01,
  ...imageRegistry02
} as  Record<ImageToolName, ToolRegistryItem>;
