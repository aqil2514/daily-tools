import { PDFGeneratorProvider } from "../provider";
import { TemplateSelector } from "./TemplateSelector";
import { PDFGeneratorForm } from "./Form";
import { PDFGeneratorPreview } from "./Preview";

export default function PDFGenerator() {
  return (
    <PDFGeneratorProvider>
      <div>
        <TemplateSelector />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PDFGeneratorForm />
          <PDFGeneratorPreview />
        </div>
      </div>
    </PDFGeneratorProvider>
  );
}
