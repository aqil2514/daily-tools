"use client";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionFieldContent } from "./contents/questions/question-field";
import { useForm, useFormState } from "react-hook-form";
import {
  defaultMainQuestSchema,
  mainQuestSchema,
  MainQuestSchema,
} from "../schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { QuestionError } from "./contents/questions/question-error";
import { QuestionMetadataContent } from "./contents/metadata/question-metadata";
import { QuizPreviewData } from "../types/preview";
import { QuizPreview } from "./preview";
import { quizSampleData } from "../sample/sample-data";
import { SampleDataComponent } from "@/components/organisms/sample-data-section";

export type QuizErrorGroup = {
  questionIndex: number;
  messages: string[];
};

export function QuizMaker() {
  const form = useForm<MainQuestSchema>({
    resolver: zodResolver(mainQuestSchema),
    defaultValues: defaultMainQuestSchema,
  });
  const [data, setData] = useState<QuizPreviewData | null>(null);

  const { errors } = useFormState({ control: form.control });
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const quizErrors = useMemo<QuizErrorGroup[]>(() => {
    if (!errors.questions) return [];

    return Object.values(errors.questions)
      .map((_, qIndex) => {
        const messages: string[] = [];

        (["text", "options", "correctOptionId"] as const).forEach((field) => {
          const raw = errors.questions?.[qIndex]?.[field]?.message;
          if (raw) {
            messages.push(raw);
          }
        });

        return {
          questionIndex: qIndex,
          messages,
        };
      })
      .filter((group) => group.messages.length > 0);
  }, [errors]);

  const onSubmit = (values: MainQuestSchema) => {
    setShowErrors(false);
    setData(values);
  };

  return (
    <div className="space-y-4">
      <p className="uppercase text-center underline font-semibold text-2xl">This tool on progress</p>
      <SampleDataComponent
        onSelected={(data) => {
          setData(data as QuizPreviewData);
          form.reset(data as QuizPreviewData);
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

              <QuestionFieldContent
                form={form}
                setShowErrors={setShowErrors}
                setData={setData}
              />
              <QuestionMetadataContent form={form} />
            </Tabs>

            {showErrors && quizErrors.length > 0 && (
              <QuestionError quizErrors={quizErrors} />
            )}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ToolCard>

      <ToolCard>
        <QuizPreview data={data} />
      </ToolCard>
    </div>
  );
}
