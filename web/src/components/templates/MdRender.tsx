import { MarkdownStyled } from "@/components/atoms/markdown-styled";
import { ToolCard } from "@/components/molecules/card/tool-card";

export function MDRender({ content }: { content: string }) {
  return (
    <ToolCard>
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MarkdownStyled>{content}</MarkdownStyled>
      </div>
    </ToolCard>
  );
}
