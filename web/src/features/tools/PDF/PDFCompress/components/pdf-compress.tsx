"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { usePDFCompress } from "../hooks/usePDFCompress";
import { CompressSettings } from "./compress-settings";
import { CompressAction } from "./compress-action";

export function PDFCompress() {
  const {
    file,
    outputUrl,
    loading,
    quality,
    setQuality,
    handleSelect,
    handleCompress,
  } = usePDFCompress();

  return (
    <ToolCard>
      <FileDropzone
        accept="application/pdf"
        label="Klik atau drag PDF untuk kompresi"
        onSelect={handleSelect}
      />

      <CompressSettings quality={quality} setQuality={setQuality} />

      <CompressAction
        file={file}
        loading={loading}
        outputUrl={outputUrl}
        onCompress={handleCompress}
      />

      {loading && <TaskProgress label="Mengompresi PDF..." />}

      {outputUrl && (
        <iframe
          src={outputUrl}
          className="w-full h-[400px] border rounded-md mt-4"
        />
      )}
    </ToolCard>
  );
}
