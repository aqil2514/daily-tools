import React from "react";
import { JsonLdSEO, MetadataSEO } from "./metadata";

export type DeveloperToolName =
  | "password-generator"
  | "jwt-decoder"
  | "uuid-generator"
  | "base64-encoder"
  | "url-encoder"
  | "json-formatter"
  | "yaml-json-converter"
  | "html-escape"
  | "regex-tester";

export type FinancialToolName =
  | "cash-counter"
  | "cogs-margin-tool"
  | "financial-simulator"
  | "product-hpp-calculator"
  | "loan-calculator"
  | "investment-return-calculator"
  | "savings-goal-calculator";

export type ImageToolName =
  | "image-converter"
  | "image-resizer"
  // TODO : Nanti kalo Python udah siap
  // | "image-compressor"
  | "image-cropper"
  | "image-rotate"
  | "image-to-pdf";

export type PDFToolName =
  | "pdf-merge"
  | "pdf-split"
  // TODO : Nanti kalo Python udah siap
  // | "pdf-compress"
  | "pdf-generator";

export type QRToolName = "qr-generator";

export type TextToolName =
  | "word-counter"
  | "remove-duplicate-lines"
  | "case-converter"
  | "text-diff"
  | "url-extractor"
  | "slug-generator"
  | "lorem-ipsum-generator";

export type ToolName =
  | DeveloperToolName
  | FinancialToolName
  | ImageToolName
  | PDFToolName
  | QRToolName
  | TextToolName;

export interface ToolRegistryItem {
  Component: React.ComponentType;
  href: `/tools/${ToolName}`;
  category: "image" | "pdf" | "qr" | "financial" | "developer" | "text";

  seo?: {
    metadata: MetadataSEO;
    jsonLd: JsonLdSEO;
  };

  relatedTools?: ToolName[];

  description: {
    en: string;
    id: string;
  };
  keywords: {
    en: string[];
    id: string[];
  };
  title: { en: string; id: string };
}

export type ToolRegistry = Record<ToolName, ToolRegistryItem>;
