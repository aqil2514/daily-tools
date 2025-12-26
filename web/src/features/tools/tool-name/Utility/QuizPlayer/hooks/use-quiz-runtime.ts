"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { QuizMakerOutputData } from "../../QuizMaker/types/output";
import { toast } from "sonner";
import { shuffle } from "../../QuizMaker/utils/shuffle";

interface UseQuizRuntimeOptions {
  quiz: QuizMakerOutputData | null;
}

export function useQuizRuntime({ quiz }: UseQuizRuntimeOptions) {
  const timeLimitSeconds = quiz?.metadata.config.timeLimitSeconds ?? 0;

  const [timeLeft, setTimeLeft] = useState<number>(timeLimitSeconds);

  const questions = useMemo(() => {
    if (!quiz) return [];

    const shuffledQuestions = shuffle(
      quiz.questions,
      quiz.metadata.config.shuffleQuestions
    );

    return shuffledQuestions.map((q) => ({
      ...q,
      options: shuffle(q.options, quiz.metadata.config.shuffleOptions),
    }));
  }, [quiz]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!quiz) return;
    if (timeLimitSeconds <= 0) return;
    if (isFinished) return;
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [quiz, timeLimitSeconds, timeLeft, isFinished]);

  useEffect(() => {
    if (timeLimitSeconds <= 0) return;
    if (timeLeft === 0 && !isFinished) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFinished(true);
      toast.warning("Waktu habis. Quiz otomatis diselesaikan.");
    }
  }, [timeLeft, timeLimitSeconds, isFinished]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  const selectedOptionId = currentQuestion
    ? answers[currentQuestion.questionId] ?? null
    : null;

  const selectOption = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.questionId]: optionId,
      }));
    },
    [currentQuestion]
  );

  const next = useCallback(() => {
    if (isLast) return;
    setCurrentIndex((i) => i + 1);
  }, [isLast]);

  const prev = useCallback(() => {
    if (isFirst) return;
    setCurrentIndex((i) => i - 1);
  }, [isFirst]);

  const finish = useCallback(() => {
    toast.success("Quiz selesai. Hasil ditampilkan.");
    setIsFinished(true);
  }, []);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setTimeLeft(timeLimitSeconds);
    toast("Quiz diulang dari awal.");
  }, [timeLimitSeconds]);

  const progressPercent = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return Math.round(((currentIndex + 1) / totalQuestions) * 100);
  }, [currentIndex, totalQuestions]);

  const correctCount = useMemo(() => {
    if (!quiz) return 0;

    return quiz.questions.filter(
      (q) => answers[q.questionId] === q.correctOptionId
    ).length;
  }, [quiz, answers]);

  const scorePercent = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return Math.round((correctCount / totalQuestions) * 100);
  }, [correctCount, totalQuestions]);

  const getAnswerStatus = useCallback(
    (questionId: string, correctOptionId: string) => {
      const userAnswer = answers[questionId];
      if (!userAnswer) return "unanswered";
      if (userAnswer === correctOptionId) return "correct";
      return "wrong";
    },
    [answers]
  );

  return {
    currentIndex,
    currentQuestion,
    selectedOptionId,
    answers,
    isFinished,

    totalQuestions,
    isFirst,
    isLast,
    progressPercent,

    correctCount,
    scorePercent,

    timeLeft,
    timeLimitSeconds,
    isTimed: timeLimitSeconds > 0,

    getAnswerStatus,

    selectOption,
    next,
    prev,
    finish,
    reset,
  };
}
