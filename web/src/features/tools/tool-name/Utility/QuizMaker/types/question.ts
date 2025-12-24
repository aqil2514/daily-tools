export interface QuizDefinition {
  version: 1;

  meta: QuizMeta;

  questions: QuizQuestion[];
}

export interface QuizMeta {
  title: string;
  description?: string;

  config: QuizConfig;
}

export interface QuizConfig {
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;

  revealCorrectAnswer?: boolean;

  timeLimitSeconds?: number;
}

export interface QuizQuestion {
  id: string;

  text: string;

  options: QuizOption[];

  correctOptionId: string;

  explanation?: string;
}

export interface QuizOption {
  id: string;
  text: string;
}
