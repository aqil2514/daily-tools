"use client";
import { usePDFGenerator } from "../provider";
import { pdfTemplateRegistry } from "@/modules/pdf-templates/registry";

export function PDFGeneratorForm() {
  const { templateKey } = usePDFGenerator();

  const FormComponent = pdfTemplateRegistry[templateKey].Form;

  return <FormComponent />;
}
