export interface QuizPreviewData {
  version: string;
  questions: {
    questionId: string;
    text: string;
    options: {
      optionId: string;
      text: string;
    }[];
    correctOptionId: string;
    explanation?: string;
  }[];
  metadata: {
    title: string;
    description?: string;
    config: {
      shuffleQuestions: boolean;
      shuffleOptions: boolean;
      revealCorrectAnswer: boolean;
      timeLimitSeconds: number;
    };
  };
}
