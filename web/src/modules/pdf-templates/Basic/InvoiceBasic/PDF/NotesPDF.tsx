import { View, Text } from "@react-pdf/renderer";
import {
  col,
  text,
  fontSemibold,
  border,
  px,
  py,
  mb,
} from "@/modules/pdf-templates/_shared/styles/pdfUtils";
import { PDFDocumentProps } from "./PDFDocument";

export function NotesPDF({ pdfData }: PDFDocumentProps) {
  return (
    <View style={[col, mb(6)]}>
      {/* Title */}
      <Text style={[fontSemibold, text("base"), mb(1)]}>Notes</Text>

      {/* Notes Box */}
      <View
        style={[
          border,
          px(2),
          py(2),
          {
            minHeight: 100, // kotak besar seperti contoh
            width: "100%",
          },
        ]}
      >
        <Text style={[text("sm")]}>
          {pdfData.notes || "Enter notes and other special considerations here"}
        </Text>
      </View>
    </View>
  );
}
