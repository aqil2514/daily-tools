"use client";

import { Button } from "@/components/ui/button";
import { QuizPreviewData } from "../types/preview";
import { Code } from "lucide-react";
import { useExportJson } from "@/hooks/json/use-export-json";

interface Props {
  data: QuizPreviewData | null;
}

export function QuizExport({ data }: Props) {
  const { handleExportJSON } = useExportJson();

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => handleExportJSON(data)}
        disabled={!data}
      >
        <Code /> Export JSON
      </Button>
    </div>
  );
}
