// // // referensi https://eforms.com/images/2016/10/invoice-template-pdf-1.png

import { BlobProvider } from "@react-pdf/renderer";
import { PDFDocument } from "../PDF/PDFDocument";
import { InvoiceBasicSchemaType } from "../schema";
import { usePDFGenerator } from "@/features/tools/tool-name/PDF/PDFGenerator/provider";

export default function InvoiceBasicHTMLPreview() {
  const { pdfData } = usePDFGenerator();

  if (!pdfData) return null;
  return (
    <BlobProvider
      document={<PDFDocument pdfData={pdfData as InvoiceBasicSchemaType} />}
    >
      {({ url }) =>
        url ? (
          <iframe src={url} style={{ width: "100%", height: "500px" }} />
        ) : (
          "Loading..."
        )
      }
    </BlobProvider>
  );
}
