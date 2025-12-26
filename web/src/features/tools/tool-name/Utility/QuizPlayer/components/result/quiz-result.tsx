"use client";

import { useQuizPlayer } from "../../store/provider";

import { ResultSummary } from "./result-summary";
import { ResultReview } from "./result-review";
import { ResultActions } from "./result-action";
import { useQuizRuntimeContext } from "../../store/runtime-provider";

export function QuizResult() {
  const { data } = useQuizPlayer();
  const runtime = useQuizRuntimeContext();

  if (!data) return null;

  const { revealCorrectAnswer } = data.metadata.config;

  return (
    <div className="space-y-8">
      <ResultSummary
        totalQuestions={runtime.totalQuestions}
        correctCount={runtime.correctCount}
        scorePercent={runtime.scorePercent}
      />

      {revealCorrectAnswer && (
        <ResultReview
          questions={data.questions}
          answers={runtime.answers}
          getAnswerStatus={runtime.getAnswerStatus}
        />
      )}

      <ResultActions />
    </div>
  );
}
