import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { HeaderPDF } from "./HeaderPDF";
import { InvoiceBasicSchemaType } from "../schema";
import { invoiceBasicStyle } from "../styles";
import { IdentityPDF } from "./IdentityPDF";
import { TermsPDF } from "./TermsPDF";
import { ItemsListPDF } from "./ItemsListPDF";
import { NotesPDF } from "./NotesPDF";

const styles = StyleSheet.create({
  page: invoiceBasicStyle.page,
});

export interface PDFDocumentProps {
  pdfData: InvoiceBasicSchemaType;
}

export function PDFDocument({ pdfData }: PDFDocumentProps) {
  if (!pdfData) return null;

  return (
    <Document >
      <Page size={"A4"} style={styles.page}>
        <HeaderPDF pdfData={pdfData} />
        <IdentityPDF pdfData={pdfData} />
        <TermsPDF pdfData={pdfData} />
        <ItemsListPDF pdfData={pdfData} />
        <NotesPDF pdfData={pdfData} />
      </Page>
    </Document>
  );
}
