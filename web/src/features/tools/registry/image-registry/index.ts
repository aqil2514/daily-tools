import { ImageToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path
import { imageRegistry01 } from "./01-image-registry";

export const imageRegistry: Record<ImageToolName, ToolRegistryItem> = {
  ...imageRegistry01,
};

export const imageToolNames = Object.keys(imageRegistry) as ImageToolName[];
