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
  | "regex-tester"
  | "url-parser";

export type FinancialToolName =
  | "cash-counter"
  | "cogs-margin-tool"
  | "financial-simulator"
  | "product-hpp-calculator"
  | "loan-calculator"
  | "investment-return-calculator"
  | "savings-goal-calculator"
  | "retirement-savings-estimator"
  | "asset-allocation-calculator";

export type ImageToolName =
  | "image-converter"
  | "image-resizer"
  | "image-cropper"
  | "image-rotate"
  | "image-to-pdf";

export type PDFToolName = "pdf-merge" | "pdf-split" | "pdf-generator";

export type QRToolName = "qr-generator";

export type TextToolName =
  | "word-counter"
  | "remove-duplicate-lines"
  | "case-converter"
  | "text-diff"
  | "url-extractor"
  | "slug-generator"
  | "lorem-ipsum-generator";

export type MathToolName =
  | "geometry-square"
  | "geometry-rectangle"
  | "geometry-triangle";


export type ToolName =
  | DeveloperToolName
  | FinancialToolName
  | ImageToolName
  | PDFToolName
  | QRToolName
  | TextToolName
  | MathToolName;

export type ToolCategory =
  | "image"
  | "pdf"
  | "qr"
  | "financial"
  | "developer"
  | "text"
  | "math";

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
