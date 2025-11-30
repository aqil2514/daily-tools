"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { usePDFMerge } from "../hooks/usePDFMerge";
import { MergeList } from "./merge-list";
import { MergeAction } from "./merge-action";

export function PDFMerge() {
  const { files, mergedUrl, loading, handleSelect, handleMerge } =
    usePDFMerge();

  return (
    <ToolCard>
      <FileDropzone
        accept="application/pdf"
        label="Klik atau drag beberapa PDF untuk gabungkan"
        multiple={true}
        onSelect={(f) => handleSelect(Array.isArray(f) ? f : [f])}
      />

      <MergeList files={files} />

      <MergeAction
        files={files}
        mergedUrl={mergedUrl}
        loading={loading}
        onMerge={handleMerge}
      />

      {loading && <TaskProgress label="Menggabungkan PDF..." />}

      {mergedUrl && (
        <iframe
          src={mergedUrl}
          className="w-full h-[400px] border rounded-md mt-4"
        />
      )}
    </ToolCard>
  );
}
