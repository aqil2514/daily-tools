import { UploadPDF } from "@/components/atoms/upload-pdf";
import { usePDFMerge } from "../store/provider";
import { PDFSetting } from "./pdf-setting";
import { PDFPreview } from "./pdf-preview";

export function PDFMerge() {
  const { files, addFiles } = usePDFMerge();

  if (files.length < 1)
    return <UploadPDF onFilesSelected={(files) => addFiles(files)} />;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PDFPreview />
      <PDFSetting />
    </div>
  );
}
