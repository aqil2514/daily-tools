"use client";

import { Button } from "@/components/ui/button";
import { useCashCounter } from "../store/provider";
import { Braces, FileSpreadsheet, FileText } from "lucide-react";
import { CashCounterDocument } from "@/pdf/documents/CashCounterDocument";
import { useLocale } from "next-intl";
import { usePdfExport } from "@/hooks/pdf/use-pdf-export";

export function CashExport() {
  const { denoms, settings, totalCash, difference } = useCashCounter();
  const { exportPdf } = usePdfExport();
  const locale = useLocale();

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

  const exportPdfHandler = async () => {
    const component = (
      <CashCounterDocument
        data={denoms}
        settings={settings}
        locale={locale}
        title={
          locale === "id" ? "Laporan Penghitung Uang" : "Cash Counter Report"
        }
        subject={
          locale === "id"
            ? "Laporan perhitungan uang tunai"
            : "Cash counter report"
        }
        keywords="cash counter, laporan kas, flowtooly"
      />
    );

    await exportPdf(component, {
      fileName:
        locale === "id" ? "Laporan Penghitung Uang" : "Cash Counter Report",
    });

    // const blob = await pdf(
    //   <CashCounterDocument
    //     data={denoms}
    //     settings={settings}
    //     locale={locale}
    //     title={
    //       locale === "id" ? "Laporan Penghitung Uang" : "Cash Counter Report"
    //     }
    //     subject={
    //       locale === "id"
    //         ? "Laporan perhitungan uang tunai"
    //         : "Cash counter report"
    //     }
    //     keywords="cash counter, laporan kas, flowtooly"
    //   />
    // ).toBlob();

    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "cash-counter.pdf";
    // link.click();
    // URL.revokeObjectURL(url);
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
      <Button
        onClick={exportPdfHandler}
        variant="default"
        className="flex gap-2 items-center"
      >
        <FileText className="w-4 h-4" />
        Export PDF
      </Button>

      <Button
        onClick={exportExcel}
        variant="secondary"
        className="flex gap-2 items-center"
      >
        <FileSpreadsheet className="w-4 h-4" />
        Export Excel
      </Button>

      <Button
        onClick={exportCSV}
        variant="outline"
        className="flex gap-2 items-center"
      >
        <FileSpreadsheet className="w-4 h-4" />
        Export CSV
      </Button>

      <Button
        onClick={exportJSON}
        variant="outline"
        className="flex gap-2 items-center"
      >
        <Braces className="w-4 h-4" />
        Export JSON
      </Button>
    </div>
  );
}
