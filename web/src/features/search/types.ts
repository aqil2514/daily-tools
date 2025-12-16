import { ToolCategoryName } from "@/@types/tools/categories";

export interface SearchableTool {
  name: string;
  href: string;
  category: ToolCategoryName;
  title: string;
  description?: string;
  keywords: string[];
}
