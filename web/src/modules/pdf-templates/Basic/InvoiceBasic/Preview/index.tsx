// // referensi https://eforms.com/images/2016/10/invoice-template-pdf-1.png

"use client";

import { HeaderPreview } from "./HeaderPreview";
import { invoiceBasicStyle } from "../styles";
import React from "react";

export default function InvoiceBasicHTMLPreview() {

  return (
    <div style={invoiceBasicStyle.page as React.CSSProperties}>
      <HeaderPreview />
    </div>
  )
}
