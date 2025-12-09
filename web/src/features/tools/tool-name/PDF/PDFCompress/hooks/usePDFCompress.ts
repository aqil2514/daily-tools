// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import "@/polyfills/dom-matrix";

// import { useState } from "react";
// import { PDFDocument } from "pdf-lib";
// let pdfjsLib: any;

// async function loadPdfJs() {
//   if (!pdfjsLib) {
//     pdfjsLib = await import("pdfjs-dist");
//     pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";
//   }
//   return pdfjsLib;
// }

// export function usePDFCompress() {
//   const [file, setFile] = useState<File | null>(null);
//   const [outputUrl, setOutputUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [quality, setQuality] = useState(0.6);

//   function handleSelect(files: File[]) {
//     setFile(files[0]);
//     setOutputUrl(null);
//   }

//   async function rasterizePage(page: any) {
//     const viewport = page.getViewport({ scale: 2 });

//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;

//     await page.render({
//       canvasContext: ctx,
//       viewport,
//     }).promise;

//     return canvas;
//   }

//   async function handleCompress() {
//     if (!file) return;

//     setLoading(true);
//     setOutputUrl(null);

//     const pdfjs = await loadPdfJs();
//     const array = await file.arrayBuffer();

//     const pdf = await pdfjs.getDocument({ data: array }).promise;

//     const newPdf = await PDFDocument.create();

//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i);
//       const canvas = await rasterizePage(page);

//       const compressed = canvas.toDataURL("image/jpeg", quality);
//       const imgBytes = await (await fetch(compressed)).arrayBuffer();

//       const embedded = await newPdf.embedJpg(imgBytes);

//       const { width, height } = embedded.scale(1);
//       const newPage = newPdf.addPage([width, height]);

//       newPage.drawImage(embedded, {
//         x: 0,
//         y: 0,
//         width,
//         height,
//       });
//     }

//     const outBytes = await newPdf.save();
//     const blob = new Blob([new Uint8Array(outBytes)], {
//       type: "application/pdf",
//     });

//     const url = URL.createObjectURL(blob);
//     setOutputUrl(url);
//     setLoading(false);
//   }

//   return {
//     file,
//     outputUrl,
//     loading,
//     quality,

//     setQuality,
//     handleSelect,
//     handleCompress,
//   };
// }
