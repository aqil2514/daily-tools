import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { HeaderPDF } from "./HeaderPDF";
import { InvoiceBasicSchemaType } from "../schema";
import { invoiceBasicStyle } from "../styles";

const styles = StyleSheet.create({
  page: invoiceBasicStyle.page,
});

interface Props {
  pdfData: InvoiceBasicSchemaType;
}

export function PDFDocument({ pdfData }: Props) {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <HeaderPDF />
      </Page>
    </Document>
  );
}
