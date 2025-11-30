import { ComponentType } from "react";

export type PDFTemplateKey = "none" | "basic-invoice";

export interface PDFTemplateRegistry {
  key: PDFTemplateKey;
  name: string;
  description: string;
  Form: ComponentType;
  Preview: ComponentType;
}
