"use client";

import { Button } from "@/components/ui/button";
import { useCashCounter } from "../store/provider";
import { formatCurrency } from "@/utils/formatCurrency";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Braces, FileSpreadsheet, FileText } from "lucide-react";

export function CashExport() {
  const { denoms, settings, totalCash, difference } = useCashCounter();

  /* ---------------------------------------
      EXPORT JSON
  ---------------------------------------- */
  const exportJSON = () => {
    const data = {
      currency: settings.currency,
      denominations: denoms,
      totalCash,
      receivables: settings.receivables,
      otherPeopleCash: settings.otherPeopleCash,
      cashInData: settings.cashInData,
      difference,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cash-counter.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ---------------------------------------
      EXPORT PDF USING PDF-LIB
  ---------------------------------------- */
  const exportPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const margin = 40;
    let y = 800;
    const rowHeight = 24;

    const drawText = (
      text: string,
      x: number,
      y: number,
      size = 11,
      align: "left" | "center" | "right" = "left"
    ) => {
      const width = font.widthOfTextAtSize(text, size);

      if (align === "right") x -= width;
      if (align === "center") x -= width / 2;

      page.drawText(text, {
        x,
        y,
        size,
        font,
        color: rgb(0, 0, 0),
      });
    };

    const drawRect = (x: number, y: number, width: number, height: number) => {
      page.drawRectangle({
        x,
        y: y - height,
        width,
        height,
        borderWidth: 1,
        borderColor: rgb(0.75, 0.75, 0.75),
      });
    };

    // Title
    drawText("Cash Counter Report", margin, y, 18);
    y -= 30;

    // Table columns
    const colNominal = margin;
    const colQty = margin + 260;
    const colSubtotal = margin + 350;

    // HEADER ROW
    drawRect(margin, y, 515, rowHeight);
    drawText("Nominal", colNominal + 5, y - 16);
    drawText("Qty", colQty + 20, y - 16, 11, "center");
    drawText("Subtotal", colSubtotal + 90, y - 16, 11, "right");

    y -= rowHeight;

    // TABLE ROWS
    denoms.forEach((d) => {
      drawRect(margin, y, 515, rowHeight);

      drawText(d.label, colNominal + 5, y - 16);

      drawText(String(d.quantity), colQty + 20, y - 16, 11, "center");

      drawText(
        formatCurrency(d.value * d.quantity, settings.currency.toUpperCase()),
        colSubtotal + 90,
        y - 16,
        11,
        "right"
      );

      y -= rowHeight;
    });

    y -= 20;

    // SUMMARY SECTION BOX
    drawText("Summary", margin, y, 14);
    y -= 20;

    const summaryRow = (label: string, value: string) => {
      drawRect(margin, y, 515, rowHeight);

      drawText(label, margin + 5, y - 16);
      drawText(value, margin + 505, y - 16, 11, "right");

      y -= rowHeight;
    };

    summaryRow(
      "Total Cash",
      formatCurrency(totalCash, settings.currency.toUpperCase())
    );

    summaryRow(
      "Receivables",
      formatCurrency(settings.receivables, settings.currency.toUpperCase())
    );

    summaryRow(
      "Other People Cash",
      formatCurrency(settings.otherPeopleCash, settings.currency.toUpperCase())
    );

    summaryRow(
      "Cash In Data",
      formatCurrency(settings.cashInData, settings.currency.toUpperCase())
    );

    summaryRow(
      "Difference",
      formatCurrency(difference, settings.currency.toUpperCase())
    );

    // Save
    const pdfBytes = await pdfDoc.save();
    const arrayBuffer = pdfBytes.slice().buffer;

    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cash-counter.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ---------------------------------------
      EXPORT CSV
  ---------------------------------------- */
  const exportCSV = () => {
    const rows = [
      ["Nominal", "Qty", "Subtotal"],
      ...denoms.map((d) => [
        d.label,
        d.quantity.toString(),
        (d.value * d.quantity).toString(),
      ]),
      [],
      ["TotalCash", totalCash.toString()],
      ["Receivables", settings.receivables.toString()],
      ["OtherPeopleCash", settings.otherPeopleCash.toString()],
      ["CashInData", settings.cashInData.toString()],
      ["Difference", difference.toString()],
    ];

    const csvContent = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cash-counter.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ---------------------------------------
      EXPORT EXCEL (HTML/XLS)
  ---------------------------------------- */
  const exportExcel = () => {
    const table = `
      <table border="1">
        <tr><th>Nominal</th><th>Qty</th><th>Subtotal</th></tr>
        ${denoms
          .map(
            (d) =>
              `<tr><td>${d.label}</td><td>${d.quantity}</td><td>${
                d.value * d.quantity
              }</td></tr>`
          )
          .join("")}
        <tr><td colspan="2">Total Cash</td><td>${totalCash}</td></tr>
        <tr><td colspan="2">Receivables</td><td>${
          settings.receivables
        }</td></tr>
        <tr><td colspan="2">Other People Cash</td><td>${
          settings.otherPeopleCash
        }</td></tr>
        <tr><td colspan="2">Cash In Data</td><td>${
          settings.cashInData
        }</td></tr>
        <tr><td colspan="2">Difference</td><td>${difference}</td></tr>
      </table>
    `;

    const blob = new Blob([table], { type: "application/vnd.ms-excel" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cash-counter.xls";
    link.click();
    URL.revokeObjectURL(url);
  };

   return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      <Button onClick={exportPDF} variant="default" className="flex gap-2 items-center">
        <FileText className="w-4 h-4" />
        Export PDF
      </Button>

      <Button onClick={exportExcel} variant="secondary" className="flex gap-2 items-center">
        <FileSpreadsheet className="w-4 h-4" />
        Export Excel
      </Button>

      <Button onClick={exportCSV} variant="outline" className="flex gap-2 items-center">
        <FileSpreadsheet className="w-4 h-4" />
        Export CSV
      </Button>

      <Button onClick={exportJSON} variant="outline" className="flex gap-2 items-center">
        <Braces className="w-4 h-4" />
        Export JSON
      </Button>
    </div>
  );
}
