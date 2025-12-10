import React from "react";

export type DeveloperToolName = "password-generator" | "jwt-decoder";

export type FinancialToolName =
  | "cash-counter"
  | "cogs-margin-tool"
  | "financial-simulator";

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
  | "url-extractor";

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
