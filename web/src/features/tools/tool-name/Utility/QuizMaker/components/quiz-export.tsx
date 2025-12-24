"use client";

import { Button } from "@/components/ui/button";
import { QuizPreviewData } from "../types/preview";
import { toast } from "sonner";
import { Code } from "lucide-react";

interface Props {
  data: QuizPreviewData | null;
}

export function QuizExport({ data }: Props) {
  // TODO : BUAT GENERAL HOOKSNYA NANTI
  function handleExportJSON() {
    if (!data) {
      toast.error("Tidak ada data untuk diekspor");
      return;
    }

    try {
      const json = JSON.stringify(data, null, 2);

      const blob = new Blob([json], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "quiz-export.json";
      a.click();

      URL.revokeObjectURL(url);

      toast.success("JSON berhasil diekspor");
    } catch {
      toast.error("Gagal mengekspor JSON");
    }
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={handleExportJSON} disabled={!data}>
        <Code /> Export JSON
      </Button>
    </div>
  );
}
