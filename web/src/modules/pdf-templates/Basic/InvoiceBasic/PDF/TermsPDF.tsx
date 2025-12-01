import { Text, View } from "@react-pdf/renderer";
import { PDFDocumentProps } from "./PDFDocument";
import { fontSemibold, mb, row, text } from "@/modules/pdf-templates/_shared/styles/pdfUtils";

export function TermsPDF({ pdfData }: PDFDocumentProps) {
  return (
    <View>
      <View style={[row, mb(2)]}>
        <Text style={[text("base"), fontSemibold]}>TERMS : </Text>
        <Text style={[text("base")]}>{pdfData.terms.terms} </Text>
      </View>
      <View style={[row]}>
        <Text style={[text("base"), fontSemibold]}>DUE : </Text>
        <Text style={[text("base")]}>{pdfData.terms.dueDate} </Text>
      </View>
    </View>
  );
}
