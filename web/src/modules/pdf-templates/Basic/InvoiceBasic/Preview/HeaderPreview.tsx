import React from "react";
import { invoiceBasicStyle } from "../styles";

export function HeaderPreview() {
  return (
    <div>
      <p style={invoiceBasicStyle.headerInvoice as React.CSSProperties}>Invoice</p>
    </div>
  );
}
