"use client";

import { Button } from "@/components/ui/button";
import { Code, FileSpreadsheet, FileText, Table } from "lucide-react";
import { useExportJson } from "@/hooks/json/use-export-json";
import { useExportQuizCsv } from "../hooks/use-export-quiz-csv";
import { useExportQuizExcel } from "../hooks/use-export-quiz-excel";
import { QuizMakerOutputData } from "../types/output";
import { useExportQuizDocx } from "../hooks/use-export-quiz-docx";

interface Props {
  data: QuizMakerOutputData | null;
}

export function QuizExport({ data }: Props) {
  const { handleExportJSON } = useExportJson();
  const { exportQuizCsv } = useExportQuizCsv();
  const { exportQuizExcel } = useExportQuizExcel();
  const {handleExportDocx} = useExportQuizDocx()

  if (!data) return null;

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => handleExportJSON(data)}>
        <Code /> JSON
      </Button>

      <Button variant="outline" onClick={() => exportQuizCsv(data)}>
        <Table /> CSV
      </Button>

      <Button variant="outline" onClick={() => exportQuizExcel(data)}>
        <FileSpreadsheet /> Excel
      </Button>

      <Button variant="outline" onClick={handleExportDocx}>
        <FileText /> Word
      </Button>
    </div>
  );
}
