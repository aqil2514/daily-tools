// "use client";
// import { PDFViewer } from "@react-pdf/renderer";
// import { PDFDocument } from "./PDFDocument";
// import { usePDFGenerator } from "@/features/tools/PDF/PDFGenerator/provider";
// import { InvoiceBasicSchemaType } from "../schema";

// // referensi https://eforms.com/images/2016/10/invoice-template-pdf-1.png

// export default function InvoiceBasicPreview() {
//   const { pdfData } = usePDFGenerator();
//   return (
//     <PDFViewer width={"100%"} height={"100%"} key={JSON.stringify(pdfData)} >
//       <PDFDocument pdfData={pdfData as InvoiceBasicSchemaType} />
//     </PDFViewer>
//   );
// }

"use client";

import { usePDFGenerator } from "@/features/tools/PDF/PDFGenerator/provider";
import { InvoiceBasicSchemaType } from "../schema";

export default function InvoiceBasicHTMLPreview() {
  const { pdfData } = usePDFGenerator<InvoiceBasicSchemaType>();

  console.log(pdfData);

  const { from, header, items, notes, terms, to } =
    pdfData as InvoiceBasicSchemaType;

  // return null;

  return (
    <div className="w-full bg-white text-black p-10 border shadow-sm">
      {/* TITLE + HEADER */}
      <div className="flex justify-between mb-16">
        <h1 className="text-5xl font-light">Invoice</h1>

        <div className="text-sm space-y-1">
          <div>
            <b>Date:</b> {header.date || "-"}
          </div>
          <div>
            <b>Invoice:</b> {header.documentNumber || "-"}
          </div>
        </div>
      </div>

      {/* FROM & TO */}
      <div className="flex justify-between mb-12 text-sm">
        <div>
          <div className="font-bold text-gray-700 mb-1">FROM:</div>
          <div>{from.name}</div>
          <div>{from.email}</div>
          <div>{from.address1}</div>
          <div>{from.address2}</div>
        </div>

        <div>
          <div className="font-bold text-gray-700 mb-1">TO:</div>
          <div>{to.name}</div>
          <div>{to.email}</div>
          <div>{to.address1}</div>
          <div>{to.address2}</div>
        </div>
      </div>

      {/* TERMS */}
      <div className="flex gap-16 text-sm mb-10">
        <div>
          <b>TERMS:</b> {terms.terms || "-"}
        </div>
        <div>
          <b>DUE:</b> {terms.dueDate || "-"}
        </div>
      </div>

      {/* TABLE */}
      <table className="w-full border-collapse mb-10 text-sm">
        <thead>
          <tr className="bg-gray-100 border">
            <th className="border p-2">Item Description</th>
            <th className="border p-2 w-24">Quantity</th>
            <th className="border p-2 w-24">Price</th>
            <th className="border p-2 w-32">Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="border">
              <td className="border p-2">{item.description}</td>
              <td className="border p-2 text-center">{item.quantity}</td>
              <td className="border p-2 text-center">
                ${item.price.toFixed(2)}
              </td>
              <td className="border p-2 text-right">
                ${(item.quantity * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTAL SECTION */}
      <div className="flex justify-end mb-12">
        <div className="text-sm space-y-1 w-48">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              $
              {items
                .reduce((sum, i) => sum + i.quantity * i.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>BALANCE DUE</span>
            <span>
              $
              {items
                .reduce((sum, i) => sum + i.quantity * i.price, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* NOTES */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Notes</h2>
        <div className="border p-4 h-28 text-sm text-gray-700 whitespace-pre-wrap">
          {notes || "Enter notes and considerations here."}
        </div>
      </div>
    </div>
  );
}
