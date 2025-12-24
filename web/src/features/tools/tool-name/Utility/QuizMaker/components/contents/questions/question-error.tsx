import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal } from "lucide-react";
import { QuizErrorGroup } from "../../quiz-maker";

export function QuestionError({ quizErrors }: { quizErrors: QuizErrorGroup[] }) {
  return (
    <Alert className="border-destructive/50 bg-destructive/5 text-destructive">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="text-destructive font-semibold">
        Data Tidak Valid
      </AlertTitle>

      <AlertDescription className="mt-3">
        <Tabs
          defaultValue={`q-${quizErrors[0].questionIndex}`}
          className="w-full"
        >
          <TabsList className="mb-2 bg-destructive/10 border border-destructive/30 w-full">
            {quizErrors.map(({ questionIndex }) => (
              <TabsTrigger
                key={questionIndex}
                value={`q-${questionIndex}`}
                className="text-destructive"
              >
                Soal {questionIndex + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {quizErrors.map(({ questionIndex, messages }) => (
            <TabsContent
              key={questionIndex}
              value={`q-${questionIndex}`}
              className="space-y-1"
            >
              {messages.map((msg, i) => (
                <p key={i} className="text-sm text-destructive">
                  • {msg}
                </p>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </AlertDescription>
    </Alert>
  );
}
