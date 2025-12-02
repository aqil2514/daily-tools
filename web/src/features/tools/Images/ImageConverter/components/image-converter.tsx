"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { SourceSelection } from "./source-selection";
import { ImagePreview } from "@/components/tools/image-preview";
import { useImageConverter } from "../provider";
import { Paragraph } from "@/components/atoms/paragraph";
import { OutputFormatSelect } from "./output-format";
import { DownloadButton } from "@/components/tools/download-button";

// // Reusable components
// import { FileDropzone } from "@/components/tools/file-dropzone";
// import { ImagePreview } from "@/components/tools/image-preview";
// import { TaskProgress } from "@/components/tools/task-progress";
// import { ToolCard } from "@/components/tools/tool-card";

// import { FormatSelector } from "./format-selector";
// import { ActionButton } from "./action-button";
// import { useImageConverter } from "../hooks/useImageConverter";

// export function ImageConverter() {
//    const {
//     file,
//     previewUrl,
//     outputFormat,
//     convertedUrl,
//     loading,
//     setOutputFormat,
//     handleSelect,
//     handleConvert,
//   } = useImageConverter();

//   return (
//     <ToolCard>
//       {/* Upload */}
//       <FileDropzone
//         accept="image/*"
//         label="Klik atau drag ke sini untuk upload gambar"
//         onSelect={(files) => handleSelect(files[0])}
//       />

//       {/* Preview */}
//       {previewUrl && <ImagePreview src={previewUrl} />}

//       {/* Format Selector */}
//       <FormatSelector
//         outputFormat={outputFormat}
//         setOutputFormat={setOutputFormat}
//       />

//       {/* Actions */}
//       <ActionButton
//         convertedUrl={convertedUrl}
//         file={file}
//         handleConvert={handleConvert}
//         loading={loading}
//         outputFormat={outputFormat}
//       />

//       {/* Loader */}
//       {loading && <TaskProgress label="Mengonversi..." />}

//       {/* Output Preview */}
//       {convertedUrl && (
//         <>
//           <p className="text-sm font-medium mt-2 text-center">Hasil:</p>
//           <ImagePreview src={convertedUrl} />
//         </>
//       )}
//     </ToolCard>
//   );
// }

export function ImageConverter() {
  const { items, convertedUrl, outputFormat } = useImageConverter();

   const getCleanFileName = (originalFileName: string): string => {
    const lastDotIndex = originalFileName.lastIndexOf('.');
    return lastDotIndex !== -1 ? originalFileName.substring(0, lastDotIndex) : originalFileName;
  };

  const newFileName = items.length > 0 && outputFormat
    ? `${getCleanFileName(items[0].fileName)}.${outputFormat}`
    : '';
  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolCard>
        <SourceSelection />
        <OutputFormatSelect />
        {convertedUrl && <DownloadButton url={convertedUrl} filename={newFileName} /> }
      </ToolCard>
      <ToolCard>
        {items.length > 0 && (
          <ImagePreview
            src={items[0].url}
            title={`Format Sebelumnya : ${items[0].format}`}
          />
        )}
        <ImagePreview
          src={convertedUrl}
          noImageMessage="Anda belum melakukan konversi gambar"
          title={`Format Sekarang : ${outputFormat}`}
        />
      </ToolCard>
    </div>
  );
}
