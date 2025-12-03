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

export type ToolName = ImageToolName | PDFToolName | QRToolName;

export interface ToolRegistryItem {
  title: string;
  Component: React.ComponentType;
  href: `/tools/${ToolName}`;
  description: string;
  category: "image" | "pdf" | "qr";
}

export type ToolRegistry = Record<ToolName, ToolRegistryItem>;

// Ini nanti hapus
export interface ToolsListItemType {
  title: string;
  href: `/tools/${ToolName}`;
  description: string;
}
