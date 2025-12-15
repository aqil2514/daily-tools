import React from "react";
import { JsonLdSEO, MetadataSEO } from "./metadata";
import { ToolCategory } from "./tools/categories";
import { ToolName } from "./tools";

export interface ToolRegistryItem {
  Component: React.ComponentType;
  href: `/tools/${ToolName}`;
  category: ToolCategory;

  seo?: {
    metadata: MetadataSEO;
    jsonLd: JsonLdSEO;
  };

  relatedTools?: ToolName[];

  description?: {
    en: string;
    id: string;
  };

  keywords?: {
    en: string[];
    id: string[];
  };

  title: { en: string; id: string };
}

export type ToolRegistry = Record<ToolName, ToolRegistryItem>;
