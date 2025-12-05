import React from "react";

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
  // | "pdf-compress"
  | "pdf-generator";

export type QRToolName = "qr-generator";

export type FinancialToolName = "cash-counter";

export type ToolName =
  | ImageToolName
  | PDFToolName
  | QRToolName
  | FinancialToolName;

export interface ToolRegistryItem {
  Component: React.ComponentType;
  href: `/tools/${ToolName}`;
  category: "image" | "pdf" | "qr" | "financial";

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
