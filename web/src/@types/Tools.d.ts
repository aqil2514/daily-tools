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
  | "pdf-compress"
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
  title: string;
  description: string;
  keywords: string[] | const;
  category: "image" | "pdf" | "qr" | "financial";
}

export interface ToolRegistryKeys {
  Component: React.ComponentType;
  href: string;
  category: "image" | "pdf" | "qr" | "financial";

  // Properti konten menyimpan KUNCI PESAN (string)
  title: string;
  description: string;
  keywords: string;
}

export type ToolRegistry = Record<ToolName, ToolRegistryItem>;

// Ini nanti hapus
export interface ToolsListItemType {
  title: string;
  href: `/tools/${ToolName}`;
  description: string;
}
