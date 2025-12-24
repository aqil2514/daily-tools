import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { defaultMainQuestSchema, MainQuestSchema } from "../../../schema/main";
import { QuestionOptionArray } from "./question-options";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCcw, Trash } from "lucide-react";
import { questionSchemaDefaultValues } from "../../../schema/question";
import { Dispatch, SetStateAction, useState } from "react";
import { nanoid } from "nanoid";
import { QuizPreviewData } from "../../../types/preview";

interface Props {
  form: UseFormReturn<MainQuestSchema>;
  setShowErrors: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<QuizPreviewData | null>>;
}

export function QuestionFieldContent({ form, setShowErrors, setData }: Props) {
  const { fields, append, remove } = useFieldArray({
    name: "questions",
    control: form.control,
  });

  const [content, setContent] = useState(fields[0].questionId);

  const removeHandler = (index: number) => {
    setShowErrors(false);
    remove(index);

    const next =
      fields[index + 1]?.questionId ??
      fields[index - 1]?.questionId ??
      undefined;

    setContent(next);
  };

  const addHandler = () => {
    setShowErrors(false);
    const newQuestion = {
      ...questionSchemaDefaultValues,
      questionId: nanoid(),
    };

    append(newQuestion);

    setContent(newQuestion.questionId);
  };

  return (
    <TabsContent value="question" className="space-y-4">
      <div className="flex justify-between">
        <Button variant={"outline"} onClick={addHandler} type="button">
          <Plus /> Tambah Soal
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            form.reset(defaultMainQuestSchema);
            setData(null);
          }}
          type="button"
        >
          <RefreshCcw /> Reset
        </Button>
      </div>
      <Tabs value={content} onValueChange={setContent} className="w-full">
        <TabsList className="w-full">
          {fields.map((field, index) => (
            <TabsTrigger key={index} value={field.questionId}>
              {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {fields.map((field, index) => {
          const isHiddenDelete = fields.length > 1;
          return (
            <TabsContent key={field.id} value={field.questionId}>
              <div key={field.id} className="space-y-4">
                {isHiddenDelete && (
                  <Button
                    type="button"
                    variant={"destructive"}
                    onClick={() => removeHandler(index)}
                  >
                    <Trash /> Hapus Soal
                  </Button>
                )}
                <FormField
                  control={form.control}
                  name={`questions.${index}.text`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pertanyaan #{index + 1}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tulis pertanyaan..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <QuestionOptionArray index={index} form={form} />

                <FormField
                  control={form.control}
                  name={`questions.${index}.explanation`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Penjelasan</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Penjelasan..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </TabsContent>
  );
}
