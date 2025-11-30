"use client";

import { FileDropzone } from "@/components/tools/file-dropzone";
import { TaskProgress } from "@/components/tools/task-progress";
import { ToolCard } from "@/components/tools/tool-card";

import { usePDFSplit } from "../hooks/usePDFSplit";
import { SplitList } from "./split-list";
import { SplitAction } from "./split-action";

export function PDFSplit() {
  const { file, urls, loading, handleSelect, handleSplit } = usePDFSplit();

  return (
    <ToolCard>
      <FileDropzone
        accept="application/pdf"
        label="Klik atau drag PDF untuk memisah halaman"
        onSelect={handleSelect}
      />

      <SplitAction file={file} loading={loading} onSplit={handleSplit} />

      {loading && <TaskProgress label="Memisah PDF..." />}

      <SplitList urls={urls} />
    </ToolCard>
  );
}
