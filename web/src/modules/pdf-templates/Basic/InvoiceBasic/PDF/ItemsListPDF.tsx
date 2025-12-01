import { View, Text } from "@react-pdf/renderer";
import {
  row,
  col,
  text,
  fontSemibold,
  itemsCenter,
  border,
  borderBottom,
  borderRight,
  px,
  mb,
  itemsEnd,
  justifyBetween,
  py,
  mt,
  justifyCenter,
} from "@/modules/pdf-templates/_shared/styles/pdfUtils";
import { PDFDocumentProps } from "./PDFDocument";
import { formatCurrency } from "@/utils/formatCurrency";

const headerHeight = 24;
const rowHeight = 24;

export function ItemsListPDF({ pdfData }: PDFDocumentProps) {
  const subtotal = pdfData.items.reduce(
    (total, item) =>
      total + (Number(item.quantity) || 0) * (Number(item.price) || 0),
    0
  );

  const tax = pdfData.tax;
  const balanceDue = subtotal - tax;

  const showValue = (v: string | number) => {
    const n = Number(v);
    if (!isFinite(n) || n === 0) return "";
    return n;
  };

  const maxRows = 10;

  const fullRows = Array.from({ length: maxRows }).map(
    (_, i) =>
      pdfData.items[i] || {
        description: "",
        quantity: 0,
        price: 0,
      }
  );

  return (
    <View style={[col, mb(4), mt(4)]}>
      {/* -------- TABLE -------- */}
      <View style={[col, border]}>
        {/* Header */}
        <View style={[row, borderBottom]}>
          <View
            style={[
              row,
              itemsCenter,
              borderRight,
              { width: "50%", height: headerHeight },
            ]}
          >
            <Text style={[fontSemibold, text("sm"), px(2)]}>
              Item Description
            </Text>
          </View>

          <View
            style={[
              row,
              itemsCenter,
              borderRight,
              { width: "15%", height: headerHeight },
            ]}
          >
            <Text style={[fontSemibold, text("sm"), px(2)]}>Quantity</Text>
          </View>

          <View
            style={[
              row,
              itemsCenter,
              borderRight,
              { width: "15%", height: headerHeight },
            ]}
          >
            <Text style={[fontSemibold, text("sm"), px(2)]}>Price</Text>
          </View>

          <View
            style={[row, itemsCenter, { width: "20%", height: headerHeight }]}
          >
            <Text style={[fontSemibold, text("sm"), px(2)]}>Amount</Text>
          </View>
        </View>

        {/* Body rows */}
        {fullRows.map((item, index) => {
          return (
            <View
              key={index}
              style={[row, borderBottom, { height: rowHeight }]}
            >
              <View
                style={[borderRight, justifyCenter, px(1), { width: "50%" }]}
              >
                <Text style={[text("sm")]}>{item.description}</Text>
              </View>

              <View
                style={[
                  borderRight,
                  justifyCenter,
                  itemsCenter,
                  { width: "15%" },
                ]}
              >
                <Text style={[text("sm")]}>{showValue(item.quantity)}</Text>
              </View>

              <View
                style={[
                  borderRight,
                  justifyCenter,
                  itemsCenter,
                  { width: "15%" },
                ]}
              >
                <Text style={[text("sm")]}>{formatCurrency(item.price, pdfData.currency)}</Text>
              </View>

              <View style={[{ width: "20%" }, justifyCenter, itemsCenter]}>
                <Text style={[text("sm")]}>
                  {formatCurrency(item.quantity * item.price, pdfData.currency)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* -------- TOTAL SECTION -------- */}
      <View style={[col, itemsEnd, { width: "100%" }]}>
        {/* Subtotal */}
        <View
          style={[row, justifyBetween, border, px(2), py(1), { width: 200 }]}
        >
          <Text style={[text("sm")]}>Subtotal</Text>
          <Text style={[text("sm")]}>
            {formatCurrency(subtotal, pdfData.currency)}
          </Text>
        </View>

        {/* Tax */}
        <View
          style={[
            row,
            justifyBetween,
            border,
            px(2),
            py(1),
            mb(2),
            { width: 200 },
          ]}
        >
          <Text style={[text("sm")]}>Tax</Text>
          <Text style={[text("sm")]}>{formatCurrency(tax, pdfData.currency)}</Text>
        </View>

        {/* Balance Due */}
        <View style={[row, justifyBetween, itemsCenter, { width: 200 }]}>
          <Text style={[fontSemibold, text("lg")]}>BALANCE DUE</Text>

          <View style={[border, px(2), py(1)]}>
            <Text style={[fontSemibold, text("lg")]}>{formatCurrency(balanceDue, pdfData.currency)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
