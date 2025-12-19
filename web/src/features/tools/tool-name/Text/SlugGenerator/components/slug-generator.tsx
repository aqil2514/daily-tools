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
    </div>
  );
}
