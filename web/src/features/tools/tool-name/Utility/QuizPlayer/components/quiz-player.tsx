import { ToolCard } from "@/components/molecules/card/tool-card";
import { QuizPlayerProvider, useQuizPlayer } from "../store/provider";
import { NoQuizData } from "./setup/no-quiz-data";
import { WithQuizData } from "./setup/with-quiz-data";
import { QuizRuntimeProvider } from "../store/runtime-provider";
import { QuizShortcutHelp } from "./quiz-shortcut-help";

export function QuizPlayer() {
  return (
    <QuizPlayerProvider>
      <QuizRuntimeProvider>
        <InnerTemplate />
      </QuizRuntimeProvider>
    </QuizPlayerProvider>
  );
}

const InnerTemplate = () => {
  const { data } = useQuizPlayer();

  return (
    <div>
      <ToolCard>{!data ? <NoQuizData /> : <WithQuizData />}</ToolCard>
      <QuizShortcutHelp />
    </div>
  );
};
