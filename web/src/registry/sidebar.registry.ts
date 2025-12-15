import { ToolRegistryItem } from "@/@types/Tools";
import { ToolCategoryName } from "@/@types/tools/categories";
import { CATEGORY_REGISTRY } from "./categories.registry";
import { toolsRegistry } from "@/features/tools/registry";

export interface SidebarSection {
  sectionCategory: ToolCategoryName;
  sectionItem: ToolRegistryItem[];
}

export function generateSidebarSections(): SidebarSection[] {
  const sectionsMap = new Map<ToolCategoryName, SidebarSection>();

  // init all categories (biar urut & konsisten)
  (Object.keys(CATEGORY_REGISTRY) as ToolCategoryName[]).forEach((category) => {
    sectionsMap.set(category, {
      sectionCategory: category,
      sectionItem: [],
    });
  });

  // group tools by category
  Object.values(toolsRegistry).forEach((tool) => {
    const section = sectionsMap.get(tool.category);
    if (!section) return;
    section.sectionItem.push(tool);
  });

  // remove empty categories
  return Array.from(sectionsMap.values()).filter(
    (section) => section.sectionItem.length > 0
  );
}

export const sidebarSections = generateSidebarSections();