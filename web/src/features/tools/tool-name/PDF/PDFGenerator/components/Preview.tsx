"use client";
import { usePDFGenerator } from "../provider";
import { pdfTemplateRegistry } from "@/modules/pdf-templates/registry";

export function PDFGeneratorPreview() {
  const { templateKey } = usePDFGenerator();

  const FormComponent = pdfTemplateRegistry[templateKey].Preview;

  return <FormComponent />;
}
