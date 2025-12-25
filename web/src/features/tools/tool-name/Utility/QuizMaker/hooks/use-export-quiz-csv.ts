"use client";

import { useLocale } from "next-intl";
import { toast } from "sonner";
import { useExportCsv } from "@/hooks/csv/use-export-csv";
import { QuizMakerOutputData } from "../types/output";
import { ToolName } from "@/@types/tools/index";
import { trackToolExport } from "@/utils/analytics/track-tool";

const TOOL_NAME: ToolName = "quiz-maker";

type CsvRow = {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
};

export function useExportQuizCsv() {
  const locale = useLocale();
  const { exportCsv } = useExportCsv();

  const exportQuizCsv = (data: QuizMakerOutputData) => {
    if (data.questions.length === 0) {
      toast.error(
        locale === "en"
          ? "No questions available to export."
          : "Tidak ada pertanyaan untuk diekspor."
      );
      return;
    }

    const rows: CsvRow[] = data.questions.map((q) => {
      const correct = q.options.find(
        (o) => o.optionId === q.correctOptionId
      );

      return {
        question: q.text,
        optionA: q.options[0]?.text ?? "",
        optionB: q.options[1]?.text ?? "",
        optionC: q.options[2]?.text ?? "",
        optionD: q.options[3]?.text ?? "",
        correctAnswer: correct?.text ?? "",
        explanation: q.explanation,
      };
    });

    exportCsv<CsvRow>({
      filename: `${data.metadata.title} - Flowtooly.csv`,
      data: rows,
      columns: [
        {
          key: "question",
          label: locale === "id" ? "Pertanyaan" : "Question",
        },
        { key: "optionA", label: "Option A" },
        { key: "optionB", label: "Option B" },
        { key: "optionC", label: "Option C" },
        { key: "optionD", label: "Option D" },
        {
          key: "correctAnswer",
          label: locale === "id" ? "Jawaban Benar" : "Correct Answer",
        },
        {
          key: "explanation",
          label: locale === "id" ? "Penjelasan" : "Explanation",
        },
      ],
    });

    // 📊 Analytics
    trackToolExport(TOOL_NAME, "csv");

    toast.success(
      locale === "en"
        ? "Quiz exported successfully as CSV."
        : "Quiz berhasil diekspor ke CSV."
    );
  };

  return { exportQuizCsv };
}
