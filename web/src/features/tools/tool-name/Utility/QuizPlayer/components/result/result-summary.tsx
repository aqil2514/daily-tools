import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <>
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-semibold">Quiz Selesai 🎉</h2>
        <p className="text-sm text-muted-foreground">
          Anda telah menyelesaikan quiz ini.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4 text-center">
          <p className="text-sm text-muted-foreground">Skor Anda</p>
          <p className="text-4xl font-bold">{scorePercent}%</p>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary">
              {correctCount} / {totalQuestions} Benar
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
