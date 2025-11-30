import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { HeaderPDF } from "./HeaderPDF";
import { InvoiceBasicSchemaType } from "../schema";

const styles = StyleSheet.create({
  page: { backgroundColor: "white", paddingHorizontal:"36px", paddingVertical:"16px" },
  section: { color: "white", textAlign: "center", margin: 30 },
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
