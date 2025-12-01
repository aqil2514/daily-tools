import { Text, View } from "@react-pdf/renderer";
import {
  row,
  col,
  itemsEnd,
  fontSemibold,
  textRight,
  text,
  mb,
  mr,
} from "@/modules/pdf-templates/_shared/styles/pdfUtils";
import { PDFDocumentProps } from "./PDFDocument";

export function HeaderPDF({ pdfData }: PDFDocumentProps) {
  return (
    <View style={col}>
      <Text style={[text("4xl"), textRight, mb(2)]}>Invoice</Text>

      <View style={[col, itemsEnd, text("base")]}>
        <View style={[row, mb(1)]}>
          <Text style={[fontSemibold, mr(1)]}>DATE:</Text>
          <Text>{pdfData.header.date}</Text>
        </View>

        <View style={[row, text("base")]}>
          <Text style={[fontSemibold, mr(1)]}>INVOICE:</Text>
          <Text>{pdfData.header.documentNumber}</Text>
        </View>
      </View>
    </View>
  );
}
