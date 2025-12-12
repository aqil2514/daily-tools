"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { TextEditor } from "./text-editor";
import { Summary } from "./summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { KeywordDensitySection } from "./keyword-density-section";
import { WordCounterProvider } from "../store/provider";

export function WordCounter() {
  return (
    <WordCounterProvider>
      <InnerTemplate />
    </WordCounterProvider>
  );
}

const InnerTemplate = () => {
  const t = useTranslations("tools-text.word-counter");
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <ToolCard>
        <TextEditor />
      </ToolCard>
      <div className="space-y-4">
        <ToolCard>
          <Tabs defaultValue="summary">
            <TabsList>
              <TabsTrigger value="summary">{t("summary-title")}</TabsTrigger>
              <TabsTrigger value="keyword">
                {t("keyword-density-title")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="summary">
              <Summary />
            </TabsContent>
            <TabsContent value="keyword">
              <KeywordDensitySection />
            </TabsContent>
          </Tabs>
        </ToolCard>
      </div>
    </div>
  );
};
