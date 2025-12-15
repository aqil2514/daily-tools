import { ComponentType, SVGProps } from "react";
import { LocalizedText } from "../metadata";

/**
 * Alur tambah kategori
 * 1. Buat file baru khusus kategori yang dibuat
 * 2. Import dari sini src\@types\tools\index.ts
 * 3. Buat registry di sini src\registry\categories.registry.ts
 * 4. Buat direktori baru di sini src\features\tools\registry
 * 5. Tambah direktori itu di sini src\features\tools\registry\index.ts
 */

export const TOOL_CATEGORIES = [
  "developer",
  "financial",
  "image",
  "pdf",
  "qr",
  "text",
  "math",
  "utility",
  "conversion",
  "health"
] as const;

export type ToolCategoryName = (typeof TOOL_CATEGORIES)[number];

export interface ToolCategoryDefinition {
  name: ToolCategoryName;
  title: LocalizedText;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
