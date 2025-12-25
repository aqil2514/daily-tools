"use client";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionFieldContent } from "./contents/questions/question-field";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
// import { QuestionError } from "./contents/questions/question-error";
import { QuestionMetadataContent } from "./contents/metadata/question-metadata";
import { QuizPreview } from "./preview";
import { quizSampleData } from "../sample/sample-data";
import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import { QuizMakerProvider, useQuizMaker } from "../store/provider";
import { QuizMakerOutputData } from "../types/output";
import { QuestionError } from "./contents/questions/question-error";

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

  return (
    <div className="space-y-4">
      <p className="uppercase text-center underline font-semibold text-2xl">
        This tool on progress
      </p>
      <SampleDataComponent
        onSelected={(data) => {
          setData(data as QuizMakerOutputData);
          form.reset(data as QuizMakerOutputData);
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
              toast.error("Ada data yang tidak valid, silahkan periksa lagi");
            })}
            className="space-y-8"
          >
            <Tabs defaultValue="question" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="question">Question</TabsTrigger>
                <TabsTrigger value="metadata">Metadata</TabsTrigger>
              </TabsList>

              <QuestionFieldContent />
              <QuestionMetadataContent />
            </Tabs>

            {showErrors && quizErrors.length > 0 && (
              <QuestionError quizErrors={quizErrors} />
            )}

            {isFromSample && (
              <p className="text-muted-foreground text-sm my-0">
                Data sample tidak bisa diubah
              </p>
            )}

            <Button type="submit" disabled={isFromSample}>
              Submit
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
