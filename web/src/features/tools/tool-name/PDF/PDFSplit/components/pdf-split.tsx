"use client";
import { UploadPDF } from "@/components/atoms/upload-pdf";
import { PdfSplitProvider, usePdfSplit } from "../store/provider";
import { PDFPreview } from "./pdf-preview";
import { PDFSetting } from "./pdf-setting";

export function PDFSplit() {
  return (
    <PdfSplitProvider>
      <InnerTemplate />
    </PdfSplitProvider>
  );
}

const InnerTemplate = () => {
  const { file, setFile } = usePdfSplit();

  if (!file)
    return (
      <UploadPDF
        onFilesSelected={(files) => {
          setFile(files[0]);
        }}
      />
    );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PDFPreview />
      <PDFSetting />
    </div>
  );
};
