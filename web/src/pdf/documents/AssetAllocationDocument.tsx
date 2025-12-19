import { Document, OnRenderProps, Page } from "@react-pdf/renderer";
import { PDFHeader } from "../layouts/header";
import { PDFFooter } from "../layouts/footer";
import { AssetAllocationTable } from "../templates/AssetAllocationPdf";
import { AssetAllocationResult } from "@/features/tools/tool-name/Financial/AssetAllocationCalculator/types/output";
import { FOOTER_HEIGHT } from "../styles/footer.styles";

const metaByLocale = {
  en: {
    title: "Asset Allocation Report",
    subject: "Overview of asset allocation based on user-provided data",
    keywords:
      "asset allocation report, asset distribution, financial overview, portfolio allocation, flowtooly",
  },
  id: {
    title: "Laporan Alokasi Aset",
    subject: "Ringkasan alokasi aset berdasarkan data yang dimasukkan pengguna",
    keywords:
      "laporan alokasi aset, distribusi aset, ringkasan keuangan, komposisi aset, flowtooly",
  },
} as const;

interface CashCounterDocumentProps {
  image: string;
  data: AssetAllocationResult;
  locale?: "en" | "id";

  // PDF metadata
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;

  // Optional hooks
  onRender?: (props: OnRenderProps) => void;
}

export function AssetAllocationDocument({
  data,
  locale = "en",
  image,

  title = "Asset Allocation Report",
  author = "Flowtooly",
  subject = "Asset Allocation Report",
  keywords = "asset allocation, financial, asset, flowtooly",

  onRender,
}: CashCounterDocumentProps) {
  const meta = metaByLocale[locale];

  return (
    <Document
      title={title ?? meta.title}
      author={author ?? "Flowtooly"}
      subject={subject ?? meta.subject}
      keywords={keywords ?? meta.keywords}
      creator="Flowtooly"
      producer="Flowtooly PDF Engine"
      pdfVersion="1.7"
      language={locale}
      onRender={onRender}
    >
      <Page
        size="A4"
        style={{
          paddingBottom: FOOTER_HEIGHT + 24,
        }}
      >
        <PDFHeader title={title} />
        <AssetAllocationTable data={data} image={image} locale={locale} />
        <PDFFooter toolName={title} />
      </Page>
    </Document>
  );
}
