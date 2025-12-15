import { ComponentType, SVGProps } from "react";
import { LocalizedText } from "../metadata";

export const TOOL_CATEGORIES = [
  "developer",
  "financial",
  "image",
  "pdf",
  "qr",
  "text",
  "math",
  "utility"
] as const;

export type ToolCategoryName = (typeof TOOL_CATEGORIES)[number];

export interface ToolCategoryDefinition {
  name: ToolCategoryName;
  title: LocalizedText;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
