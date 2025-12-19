import React from "react";
import { JsonLdSEO, MetadataSEO } from "./metadata";
import { ToolCategoryName, ToolName } from "./tools/index";

export interface ToolRegistryItem {
  Component: React.ComponentType;
  href: `/tools/${ToolName}`;
  category: ToolCategoryName;

  seo: {
    metadata: MetadataSEO;
    jsonLd: JsonLdSEO;
  };

  relatedTools?: ToolName[];

  title: { en: string; id: string };
}

export type ToolRegistry = Record<ToolName, ToolRegistryItem>;
