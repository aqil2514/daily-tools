import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";

export async function splitPdfToZip(
  file: File,
  outputName: string
): Promise<Blob> {
  const buffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(buffer);
  const totalPages = pdf.getPageCount();

  const zip = new JSZip();

  for (let i = 0; i < totalPages; i++) {
    const newPdf = await PDFDocument.create();
    const [copied] = await newPdf.copyPages(pdf, [i]);
    newPdf.addPage(copied);

    const bytes = await newPdf.save();

    zip.file(`${outputName}-page-${i + 1}.pdf`, bytes);
  }

  return await zip.generateAsync({ type: "blob" });
}
