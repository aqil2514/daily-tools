import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Question {
  text: string;
  correctOptionId: string;
  explanation: string;
}

interface Props {
  index: number;
  question: Question;
  userAnswer?: string;
  status: "correct" | "wrong" | "unanswered";
}

export function ResultReviewItem({
  index,
  question,
  userAnswer,
  status,
}: Props) {
  // TODO : Lanjut ke sini i18n
  return (
    <Card>
      <CardContent className="pt-5 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <p className="font-medium">
            {index + 1}. {question.text}
          </p>

          <Badge
            variant={
              status === "correct"
                ? "default"
                : status === "wrong"
                ? "destructive"
                : "secondary"
            }
          >
            {status === "correct"
              ? "Benar"
              : status === "wrong"
              ? "Salah"
              : "Tidak Dijawab"}
          </Badge>
        </div>

        <div className="text-sm space-y-1">
          <p>
            <strong>Jawaban Anda:</strong>{" "}
            {userAnswer ?? "—"}
          </p>
          <p>
            <strong>Jawaban Benar:</strong>{" "}
            {question.correctOptionId}
          </p>
        </div>

        {question.explanation && (
          <div className="text-sm text-muted-foreground border-l-2 pl-3">
            {question.explanation}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
