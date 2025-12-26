import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Locale, useLocale } from "next-intl";

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
  const locale = useLocale();
  const badgeAnswer: Record<Locale, Record<typeof status, string>> = {
    en: {
      correct: "Correct",
      unanswered: "Unanswered",
      wrong: "Wrong",
    },
    id: {
      correct: "Benar",
      unanswered: "Tidak Dijawab",
      wrong: "Salah",
    },
  };
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
              ? badgeAnswer[locale].correct
              : status === "wrong"
              ? badgeAnswer[locale].wrong
              : badgeAnswer[locale].unanswered}
          </Badge>
        </div>

        <div className="text-sm space-y-1">
          <p>
            <strong>{locale ==="en" ? "Your Answer:" :"Jawaban Anda:"}</strong> {userAnswer ?? "—"}
          </p>
          <p>
            <strong>{locale ==="en" ? "Correct Answer" :"Jawaban Benar:"}</strong> {question.correctOptionId}
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
