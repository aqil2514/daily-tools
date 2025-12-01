import { View, Text } from "@react-pdf/renderer";
import {
  row,
  justifyBetween,
  itemsStart,
  fontSemibold,
  mb,
  mt,
  text,
  gap,
} from "@/modules/pdf-templates/_shared/styles/pdfUtils";
import { PDFDocumentProps } from "./PDFDocument";

export function IdentityPDF({ pdfData }: PDFDocumentProps) {
  return (
    <View style={[row, justifyBetween, mb(4), mt(6)]}>
      {/* ---------------- LEFT: FROM ---------------- */}
      <View style={[row, itemsStart, gap(4)]}>
        <Text style={[fontSemibold, text("base"), mb(1)]}>FROM:</Text>
        <View>
          <Text style={text("base")}>{pdfData.from.name}</Text>
          <Text style={text("base")}>{pdfData.from.email}</Text>
          <Text style={text("base")}>{pdfData.from.address1}</Text>
          <Text style={text("base")}>{pdfData.from.address2}</Text>
        </View>
      </View>

      {/* ---------------- RIGHT: TO ---------------- */}
      <View style={[row, itemsStart, gap(4)]}>
        <Text style={[fontSemibold, text("base"), mb(1)]}>TO:</Text>

        <View>
          <Text style={text("base")}>{pdfData.to.name}</Text>
          <Text style={text("base")}>{pdfData.to.email}</Text>
          <Text style={text("base")}>{pdfData.to.address1}</Text>
          <Text style={text("base")}>{pdfData.to.address2}</Text>
        </View>
      </View>
    </View>
  );
}
