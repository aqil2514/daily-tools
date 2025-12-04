"use client";

import { Button } from "@/components/ui/button";
import { PDFDocument, PDFImage } from "pdf-lib";
import { useImageToPDF } from "../../provider";
import { getImageFileData } from "@/utils/image/getImageFileData";
import { convertImageFormat } from "@/utils/convertImageFormat";
import { useState } from "react";

const PAGE_SIZES = {
  a4: { width: 595.28, height: 841.89 },
  "us-letter": { width: 612, height: 792 },
  fit: null,
};

export function PdfAction() {
  const { images, settings } = useImageToPDF();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPageSize = (imgWidth: number, imgHeight: number) => {
    if (settings.pageSize === "fit") {
      // Fit mengikuti dimensi gambar terbesar
      return { width: imgWidth, height: imgHeight };
    }

    let base = PAGE_SIZES[settings.pageSize];

    // Orientasi
    if (settings.pageOrientation === "landscape") {
      base = { width: base.height, height: base.width };
    }

    return base;
  };

  const generatePDF = async () => {
    setIsLoading(true)
    // File mentah. Artinya, ada banyak image selain format JPG dan PNG
    const rawImagesFile = await Promise.all(
      images.map((image) => getImageFileData(image))
    );

    const processedFiles: File[] = [];

    for (const file of rawImagesFile) {
      if (
        file.type.includes("png") ||
        file.type.includes("jpg") ||
        file.type.includes("jpeg")
      ) {
        processedFiles.push(file);
      } else {
        const converted = await convertImageFormat(file, "png");
        processedFiles.push(await getImageFileData(converted));
      }
    }

    // Ubah agar jadi array buffer
    const buffers = await Promise.all(
      processedFiles.map(async (file) => ({
        buffer: await file.arrayBuffer(),
        type: file.type,
      }))
    );

    // Buat dokumen PDF
    const pdfDoc = await PDFDocument.create();

    // Mapping
    // for (const image of buffers) {
    //   const page = pdfDoc.addPage();
    //   let pdfImage: PDFImage;

    //   if (image.type.includes("jpg") || image.type.includes("jpeg")) {
    //     pdfImage = await pdfDoc.embedJpg(image.buffer);
    //   } else {
    //     pdfImage = await pdfDoc.embedPng(image.buffer);
    //   }

    //   const pageSize = page.getSize();

    //   page.drawImage(pdfImage, {
    //     x: 0,
    //     y: (pageSize.height - pdfImage.height) / 2,
    //   });
    // }

    for (const image of buffers) {
      let pdfImage: PDFImage;

      if (image.type.includes("jpg") || image.type.includes("jpeg")) {
        pdfImage = await pdfDoc.embedJpg(image.buffer);
      } else {
        pdfImage = await pdfDoc.embedPng(image.buffer);
      }

      const imgW = pdfImage.width;
      const imgH = pdfImage.height;

      const pageSize = getPageSize(imgW, imgH);
      const page = pdfDoc.addPage([pageSize.width, pageSize.height]);

      const margin = settings.pageMargin;

      const innerW = pageSize.width - margin * 2;
      const innerH = pageSize.height - margin * 2;

      // Fit image
      const ratio = Math.min(innerW / imgW, innerH / imgH);
      const finalW = imgW * ratio;
      const finalH = imgH * ratio;

      // Center
      const x = (pageSize.width - finalW) / 2;
      const y = (pageSize.height - finalH) / 2;

      page.drawImage(pdfImage, {
        x,
        y,
        width: finalW,
        height: finalH,
      });
    }

    const pdfBytes = await pdfDoc.save();

    const arrayBuffer = pdfBytes.slice().buffer;

    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Merged PDF";
    a.click();
    a.remove();

    setIsLoading(false)
  };

  return (
    <Button onClick={generatePDF} disabled={images.length === 0 || isLoading} >
      {isLoading ? "Memproses..." : "Unduh PDF"}
    </Button>
  );
}
