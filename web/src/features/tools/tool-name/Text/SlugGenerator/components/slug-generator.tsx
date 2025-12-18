"use client";

import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { useState } from "react";
import { SlugController } from "./slug-controller";
import { SlugAction } from "./slug-action";
import { SlugOutput } from "./slug-output";
import { SlugControllerState } from "../types/interface";
import { defaultSlugControllerState } from "../data/default";
import { slugify } from "../utils/slugify";
import { FAQSection } from "@/components/organisms/faq-section";
import { useLocale } from "next-intl";
import { slugFAQ_en, slugFAQ_id } from "../i18n/faq";
import { slugSampleData } from "../data/sample";
import { SampleDataComponent } from "@/components/atoms/sample-data";

export function SlugGenerator() {
  const [text, setText] = useState<string>("");
  const [controller, setController] = useState<SlugControllerState>(
    defaultSlugControllerState
  );

  const autoSlug = slugify(text, controller);
  const [manualSlug, setManualSlug] = useState("");

  const slug = controller.autoUpdate ? autoSlug : manualSlug;

  const manualGenerate = () => {
    const generated = slugify(text, controller);
    setManualSlug(generated);
  };

  const locale = useLocale();
  const faq = locale === "id" ? slugFAQ_id : slugFAQ_en;

  return (
    <div className="space-y-4">
      <ToolCard>
        <SampleDataComponent setText={setText} sampleData={slugSampleData} />
        <TextEditor setText={setText} text={text} title="Text Editor" />

        <SlugController controller={controller} setController={setController} />

        <SlugAction
          setText={setText}
          setController={setController}
          generate={manualGenerate}
        />
      </ToolCard>

      <ToolCard>
        <SlugOutput slug={slug} />
      </ToolCard>

      <FAQSection items={faq} />
    </div>
  );
}
