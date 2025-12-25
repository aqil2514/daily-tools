"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionFieldContent } from "./contents/questions/question-field";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { QuestionMetadataContent } from "./contents/metadata/question-metadata";
import { QuizPreview } from "./preview";
import { quizSampleData } from "../sample/sample-data";
import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import { QuizMakerProvider, useQuizMaker } from "../store/provider";
import { QuestionError } from "./contents/questions/question-error";
import { SampleData } from "../sample/finansial";
import { useLocale } from "next-intl";
import { quizMakerI18n } from "../i18n/quiz-maker";

export function QuizMaker() {
  return (
    <QuizMakerProvider>
      <InnerTemplate />
    </QuizMakerProvider>
  );
}

const InnerTemplate = () => {
  const {
    form,
    setData,
    onSubmit,
    setShowErrors,
    showErrors,
    quizErrors,
    setIsInitContent,
    isFromSample,
    setIsFromSample,
  } = useQuizMaker();

  const locale = useLocale() as "en" | "id";
  const t = quizMakerI18n[locale];

  return (
    <div className="space-y-4">
      <SampleDataComponent
        onSelected={(data: SampleData) => {
          setData(data[locale]);
          form.reset(data[locale]);
          setIsInitContent(true);
          setIsFromSample(true);
        }}
        sampleData={quizSampleData}
      />

      <ToolCard>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, () => {
              setShowErrors(true);
              toast.error(t.invalidDataToast);
            })}
            className="space-y-8"
          >
            <Tabs defaultValue="question" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="question">{t.tabQuestion}</TabsTrigger>
                <TabsTrigger value="metadata">{t.tabMetadata}</TabsTrigger>
              </TabsList>

              <QuestionFieldContent />
              <QuestionMetadataContent />
            </Tabs>

            {showErrors && quizErrors.length > 0 && (
              <QuestionError quizErrors={quizErrors} />
            )}

            {isFromSample && (
              <p className="text-muted-foreground text-sm my-0">
                {t.sampleLocked}
              </p>
            )}

            <Button type="submit" disabled={isFromSample}>
              {t.submit}
            </Button>
          </form>
        </Form>
      </ToolCard>

      <ToolCard>
        <QuizPreview />
      </ToolCard>
    </div>
  );
};
