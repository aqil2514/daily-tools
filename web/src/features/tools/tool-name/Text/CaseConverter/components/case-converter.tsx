import { ToolCard } from "@/components/tools/tool-card";
import { TextEditor } from "./text-editor";
import { useState } from "react";
import { OutputSection } from "./output-section";

export function CaseConverter() {
  const [text, setText] = useState<string>("");
  return (
    <div className="space-y-4">
      <ToolCard>
        <TextEditor setText={setText} text={text} />
      </ToolCard>
      <ToolCard>
        <OutputSection initialText={text} />
      </ToolCard>
    </div>
  );
}
