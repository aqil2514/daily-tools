"use client";

import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuizPreviewData } from "../types/preview";
import { shuffle } from "../utils/shuffle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { QuizExport } from "./quiz-export";

interface Props {
  data: QuizPreviewData | null;
}

function QuizPreviewEmpty({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex h-96 items-center justify-center rounded-lg border border-dashed">
      <div className="max-w-sm text-center space-y-2">
        <p className="text-lg font-semibold">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

export function QuizPreview({ data }: Props) {
  // ===== NULL DATA =====
  if (!data) {
    return (
      <QuizPreviewEmpty
        title="Belum ada data kuis"
        description="Silakan buat kuis terlebih dahulu atau pilih sample data untuk melihat preview."
      />
    );
  }

  const { metadata, questions } = data;

  // ===== EMPTY QUESTIONS =====
  if (!questions || questions.length === 0) {
    return (
      <QuizPreviewEmpty
        title="Belum ada soal"
        description="Tambahkan minimal satu soal untuk menampilkan preview kuis."
      />
    );
  }

  const renderedQuestions = shuffle(
    questions,
    metadata.config.shuffleQuestions
  );

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {metadata.title || "Untitled Quiz"}
          </h1>
          {metadata.description && (
            <p className="text-muted-foreground mt-1">{metadata.description}</p>
          )}
        </div>

        <QuizExport data={data} />
      </div>

      <Separator />

      {/* ===== QUESTIONS ===== */}
      <ScrollArea className="h-96">
        <div className="space-y-4 pr-4">
          {renderedQuestions.map((question, qIndex) => {
            const options = shuffle(
              question.options,
              metadata.config.shuffleOptions
            );

            return (
              <Card key={question.questionId} className="p-4 space-y-4">
                {/* Question */}
                <p className="font-medium">
                  {qIndex + 1}. {question.text}
                </p>

                {/* Options */}
                <div className="grid gap-2">
                  {options.map((opt) => {
                    const isCorrect = opt.optionId === question.correctOptionId;

                    return (
                      <div
                        key={opt.optionId}
                        className={`flex items-center gap-2 rounded-md border p-2
                          ${
                            metadata.config.revealCorrectAnswer && isCorrect
                              ? "border-green-500 bg-green-50"
                              : "border-muted"
                          }`}
                      >
                        {metadata.config.revealCorrectAnswer && isCorrect && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}

                        <span>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                {metadata.config.revealCorrectAnswer &&
                  question.explanation && (
                    <div className="rounded-md bg-muted p-3 text-sm">
                      <strong>Penjelasan:</strong> {question.explanation}
                    </div>
                  )}
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
