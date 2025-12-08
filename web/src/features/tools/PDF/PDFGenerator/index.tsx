import { SectionHeader } from "@/components/molecules/section-header";
import { PDFGeneratorForm } from "./components/Form";
import { PDFGeneratorProvider } from "./provider";
import { TemplateSelector } from "./components/TemplateSelector";
import { PDFGeneratorPreview } from "./components/Preview";

export default function PDFGenerator() {
  return (
    <PDFGeneratorProvider>
      <div>
        <SectionHeader
          title="PDF Generator (On Progress)"
          description="Generate a PDF file for certificates, invoice, etc"
        />
        <TemplateSelector />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PDFGeneratorForm />
          <PDFGeneratorPreview />
        </div>
      </div>
    </PDFGeneratorProvider>
  );
}
