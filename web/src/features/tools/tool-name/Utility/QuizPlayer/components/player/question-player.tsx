"use client";

import { useQuizPlayer } from "../../store/provider";
import { QuizResult } from "../result/quiz-result";

import { QuestionHeader } from "./question-header";
import { QuestionCard } from "./question-card";
import { QuestionNavigation } from "./question-navigation";
import { useQuizRuntimeContext } from "../../store/runtime-provider";
import { useQuizKeyboard } from "../../hooks/use-quiz-keyboard";

export function QuestionPlayer() {
  const { data } = useQuizPlayer();
  const runtime = useQuizRuntimeContext();

  useQuizKeyboard({
    enabled: !runtime.isFinished,
    isFirst: runtime.isFirst,
    isLast: runtime.isLast,
    onPrev: runtime.prev,
    onNext: runtime.next,
    onFinish: runtime.finish,
    onSelectOption: (index) => {
      const option = runtime.currentQuestion?.options[index];
      if (option) {
        runtime.selectOption(option.optionId);
      }
    },
  });

  if (!data || !runtime.currentQuestion) return null;

  if (runtime.isFinished) {
    return <QuizResult />;
  }

  return (
    <div className="space-y-6">
      <QuestionHeader
        title={data.metadata.title}
        currentIndex={runtime.currentIndex}
        totalQuestions={runtime.totalQuestions}
        progressPercent={runtime.progressPercent}
        isTimed={runtime.isTimed}
        timeLeft={runtime.timeLeft}
      />

      <QuestionCard
        question={runtime.currentQuestion}
        currentIndex={runtime.currentIndex}
        selectedOptionId={runtime.selectedOptionId}
        onSelect={runtime.selectOption}
      />

      <QuestionNavigation
        isFirst={runtime.isFirst}
        isLast={runtime.isLast}
        onPrev={runtime.prev}
        onNext={runtime.next}
        onFinish={runtime.finish}
      />
    </div>
  );
}
