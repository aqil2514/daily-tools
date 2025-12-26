import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  currentIndex: number;
  totalQuestions: number;
  progressPercent: number;
  timeLeft?: number;
  isTimed?: boolean;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export function QuestionHeader({
  title,
  currentIndex,
  totalQuestions,
  progressPercent,
  isTimed,
  timeLeft,
}: Props) {
  const isWarning = timeLeft && isTimed && timeLeft <= 30;

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="flex items-center gap-3">
        <Progress value={progressPercent} className="h-2" />
        <span className="text-xs text-muted-foreground">
          {currentIndex + 1} / {totalQuestions}
        </span>
        {isTimed && (
          <span
            className={cn(
              "text-xs font-medium",
              isWarning && "text-destructive"
            )}
          >
            ⏱ {formatTime(timeLeft!)}
          </span>
        )}
      </div>
    </div>
  );
}
