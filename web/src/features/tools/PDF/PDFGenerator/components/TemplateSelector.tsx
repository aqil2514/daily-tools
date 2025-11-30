"use client";

import { pdfTemplateRegistry } from "@/modules/pdf-templates/registry";
import { usePDFGenerator } from "../provider";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { PDFTemplateKey } from "@/modules/pdf-templates/type";

export function TemplateSelector() {
  const { templateKey, setTemplateKey, setPdfData } = usePDFGenerator();

  return (
    <div className="max-w-sm space-y-2 mb-6">
      <label className="text-sm font-medium">Select Template</label>

      <Select
        value={templateKey}
        onValueChange={(v) => {
          setTemplateKey(v as PDFTemplateKey);
          setPdfData(null);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a template..." />
        </SelectTrigger>

        <SelectContent>
          {Object.values(pdfTemplateRegistry).map((template) => (
            <SelectItem key={template.key} value={template.key}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
