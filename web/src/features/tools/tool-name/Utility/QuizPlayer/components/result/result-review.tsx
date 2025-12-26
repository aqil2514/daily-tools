import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResultReviewItem } from "./result-review-item";

interface Question {
  questionId: string;
  text: string;
  correctOptionId: string;
  explanation: string;
}

interface Props {
  questions: Question[];
  answers: Record<string, string>;
  getAnswerStatus: (
    questionId: string,
    correctOptionId: string
  ) => "correct" | "wrong" | "unanswered";
}

export function ResultReview({ questions, answers, getAnswerStatus }: Props) {
  return (
    <>
      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Review Jawaban</h3>

        <ScrollArea className="h-[360px] pr-4">
          <div className="space-y-4">
            {questions.map((q, index) => (
              <ResultReviewItem
                key={q.questionId}
                index={index}
                question={q}
                userAnswer={answers[q.questionId]}
                status={getAnswerStatus(q.questionId, q.correctOptionId)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
