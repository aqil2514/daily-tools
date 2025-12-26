import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "next-intl";

interface Props {
  totalQuestions: number;
  correctCount: number;
  scorePercent: number;
}

export function ResultSummary({
  totalQuestions,
  correctCount,
  scorePercent,
}: Props) {
  const locale = useLocale()
  return (
    <>
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-semibold">{locale ==="en" ? "Quiz Finish" : "Quiz Selesai"} 🎉</h2>
        <p className="text-sm text-muted-foreground">
          { locale ==="en" ? "You've finished this quiz" : "Anda telah menyelesaikan quiz ini."}
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4 text-center">
          <p className="text-sm text-muted-foreground">{ locale ==="en" ? "Your score" : "Skor Anda"}</p>
          <p className="text-4xl font-bold">{scorePercent}%</p>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary">
              {correctCount} / {totalQuestions} { locale ==="en" ? "Right" : "Benar"}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
