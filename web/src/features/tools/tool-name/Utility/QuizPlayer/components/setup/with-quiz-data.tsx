"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuizPlayer } from "../../store/provider";
import { QuestionPlayer } from "../player/question-player";
import { toast } from "sonner";
import { useQuizRuntimeContext } from "../../store/runtime-provider";
import { useLocale } from "next-intl";
import { quizPlayerReadyI18n } from "../../i18n/quiz-player-ready";

export function WithQuizData() {
  const { data, setData } = useQuizPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const { reset } = useQuizRuntimeContext();

  const locale = useLocale() as "en" | "id";
  const t = quizPlayerReadyI18n[locale];

  if (!data) return null;

  const { config } = data.metadata;

  if (isPlaying) {
    return <QuestionPlayer />;
  }

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{t.headerTitle}</h2>
        <p className="text-sm text-muted-foreground">
          {t.headerSubtitle}
        </p>
      </div>

      {/* ================= QUIZ INFO ================= */}
      <div className="rounded-md border p-4 space-y-2">
        <h3 className="font-medium">{data.metadata.title}</h3>
        <p className="text-sm text-muted-foreground">
          {data.metadata.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="secondary">
            {t.quizInfo.questionCount(data.questions.length)}
          </Badge>
          <Badge variant="secondary">
            {t.quizInfo.multipleChoice}
          </Badge>
          <Badge variant="secondary">
            {t.quizInfo.noLogin}
          </Badge>
        </div>
      </div>

      {/* ================= QUIZ CONFIG ================= */}
      <div className="rounded-md border p-4 space-y-2">
        <p className="text-sm font-medium">{t.config.title}</p>

        <div className="flex flex-wrap gap-2">
          {config.shuffleQuestions && (
            <Badge variant="outline">
              {t.config.shuffleQuestions}
            </Badge>
          )}

          {config.shuffleOptions && (
            <Badge variant="outline">
              {t.config.shuffleOptions}
            </Badge>
          )}

          {config.revealCorrectAnswer && (
            <Badge variant="outline">
              {t.config.revealAnswer}
            </Badge>
          )}

          {config.timeLimitSeconds > 0 && (
            <Badge variant="outline">
              {t.config.timeLimit(
                Math.ceil(config.timeLimitSeconds / 60)
              )}
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          {t.config.note}
        </p>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex gap-3">
        <Button
          size="lg"
          onClick={() => {
            toast.info(t.toast.start);
            setIsPlaying(true);
          }}
        >
          {t.actions.start}
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            setData(null);
            toast.info(t.toast.change);
            if (isPlaying) reset();
          }}
        >
          {t.actions.change}
        </Button>
      </div>
    </div>
  );
}
