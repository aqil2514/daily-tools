import { Denomination } from "@/features/tools/tool-name/Financial/CashCounter/types/interface";
import { Document, OnRenderProps, Page } from "@react-pdf/renderer";
import { PDFHeader } from "../layouts/header";
import { CashCounterTable } from "../templates/CashCounterTable";
import { PDFFooter } from "../layouts/footer";
import { CashCounterSetting } from "@/features/tools/tool-name/Financial/CashCounter/store/provider";

interface CashCounterDocumentProps {
  data: Denomination[];
  settings?: CashCounterSetting;
  locale?: "en" | "id";

  // PDF metadata
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;

  // Optional hooks
  onRender?: (props: OnRenderProps) => void;
}

export function CashCounterDocument({
  data,
  settings,
  locale = "en",

  title = "Cash Counter Report",
  author = "Flowtooly",
  subject = "Cash denomination breakdown report",
  keywords = "cash counter, cash report, denomination, flowtooly",

  onRender,
}: CashCounterDocumentProps) {
  return (
    <Document
      title={title}
      author={author}
      subject={subject}
      keywords={keywords}
      creator="Flowtooly"
      producer="Flowtooly PDF Engine"
      pdfVersion="1.7"
      language={locale}
      onRender={onRender}
    >
      <Page size="A4">
        <PDFHeader title={title} />
        <CashCounterTable data={data} settings={settings} locale={locale} />
        <PDFFooter toolName="Cash Counter" />
      </Page>
    </Document>
  );
}
