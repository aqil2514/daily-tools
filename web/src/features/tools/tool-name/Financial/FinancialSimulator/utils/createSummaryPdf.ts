/* eslint-disable @typescript-eslint/no-explicit-any */
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { FinancialSimulatorSettings } from "../types/interface";

interface PdfParams {
  settings: FinancialSimulatorSettings;
  balance: number;
  totalIncome: number;
  totalExpense: number;
  netChange: number;
  categories: Record<string, number>;
}

export async function createSummaryPdf({
  settings,
  balance,
  totalIncome,
  totalExpense,
  netChange,
  categories,
}: PdfParams) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]); // A4
  const { width } = page.getSize();

  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  let y = 800;

  const write = (text: string, opts: {
    font?: any;
    size?: number;
    color?: any;
    x?: number;
  } = {}) => {
    page.drawText(text, {
      x: opts.x ?? 40,
      y,
      size: opts.size ?? 12,
      font: opts.font ?? font,
      color: opts.color ?? rgb(0, 0, 0),
    });
    y -= 18;
  };

  // Title
  write("Financial Summary", { font: bold, size: 18 });
  y -= 10;

  const fmt = (v: number) =>
    formatCurrency(v, settings.currency, settings.decimal);

  // Summary Rows
  write(`Starting Balance:`, { });
  write(`${fmt(settings.startingBalance)}`, { x: width - 200 });

  write(`Total Income:`);
  write(`${fmt(totalIncome)}`, { 
    x: width - 200,
    color: rgb(0, 0.6, 0) 
  });

  write(`Total Expense:`);
  write(`${fmt(totalExpense)}`, { 
    x: width - 200,
    color: rgb(0.8, 0, 0)
  });

  write(`Net Change:`);
  write(`${fmt(netChange)}`, { 
    x: width - 200,
    color: netChange >= 0 ? rgb(0, 0.6, 0) : rgb(0.8, 0, 0),
  });

  write(`Current Balance:`, { font: bold });
  write(`${fmt(balance)}`, { 
    font: bold,
    x: width - 200 
  });

  y -= 20;

  // Category Breakdown
  write("Category Breakdown", { font: bold, size: 14 });
  y -= 10;

  if (Object.keys(categories).length === 0) {
    write("No category data.");
  } else {
    Object.entries(categories).forEach(([cat, val]) => {
      write(cat, { font: bold });
      write(fmt(val), {
        x: width - 200,
        color: val >= 0 ? rgb(0, 0.6, 0) : rgb(0.8, 0, 0),
        font: bold,
      });
    });
  }

  return await pdf.save();
}
