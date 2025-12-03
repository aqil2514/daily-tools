import { ToolCard } from "@/components/tools/tool-card";
import { defaultRotateState, useImageRotate } from "../provider";
import { SourceSelection } from "@/components/molecules/source-selection";
import { RotateSetting } from "./rotate-setting";
import { RotatePreview } from "./rotate-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateDownload } from "./rotate-download";
import { Button } from "@/components/ui/button";

export function ImageRotateComponent() {
  const { setImageUrl, imageUrl, setRotateState } = useImageRotate();

  const fileSelectedHandler = async (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    setImageUrl({ result: "", preview: url });
  };

  const urlSelectedHandler = async (url: string) => {
    setImageUrl({ result: "", preview: url });
  };

  if (!imageUrl.preview)
    return (
      <ToolCard>
        <SourceSelection
          onFileSelected={fileSelectedHandler}
          onUrlSelected={urlSelectedHandler}
        />
      </ToolCard>
    );

  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolCard>
        <RotatePreview />
        <RotateDownload />
      </ToolCard>

      <ToolCard>
        <div className="flex justify-between">

        <p className="text-2xl font-semibold">Rotate Setting</p>
        <Button variant={"outline"} onClick={() => setRotateState(defaultRotateState)} >Reset</Button>
        </div>
        <ScrollArea className="h-96">
          <RotateSetting />
        </ScrollArea>
      </ToolCard>
    </div>
  );
}
