import { ImagePreview, ImagePreviewProps } from "../tools/image-preview";
import { ToolCard } from "./card/tool-card";
import { ScrollArea } from "../ui/scroll-area";

interface ImageBeforeAfterPreviewProps {
  before: ImagePreviewProps;
  after: ImagePreviewProps;
}

export function ImageBeforeAfterPreview({
  after,
  before,
}: ImageBeforeAfterPreviewProps) {
  return (
    <ToolCard>
      <ScrollArea className="h-96">
        <ImagePreview
          src={before.src}
          title={before.title}
          alt={before.alt}
          noImageMessage={before.noImageMessage}
        />
        <ImagePreview
          src={after.src}
          title={after.title}
          alt={after.alt}
          noImageMessage={after.noImageMessage}
        />
      </ScrollArea>
    </ToolCard>
  );
}
