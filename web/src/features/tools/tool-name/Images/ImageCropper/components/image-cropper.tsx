"use client";
import { ToolCard } from "@/components/molecules/card/tool-card";
import {
  defaultCropState,
  ImageCropperProvider,
  useImageCroper,
} from "../provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SourceSelection } from "@/components/molecules/source-selection";
import { CropperUI } from "./cropper-ui";
import { Separator } from "@/components/ui/separator";
import { CropperSetting } from "./cropper-setting";
import { Button } from "@/components/ui/button";
import { CropperAction } from "./cropper-action";

export function ImageCropperComp() {
  return (
    <ImageCropperProvider>
      <InnerTemplate />
    </ImageCropperProvider>
  );
}

const InnerTemplate = () => {
  const { setImageUrl, setCropState, imageUrl } = useImageCroper();

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
    <div className="grid grid-cols-1 lg:grid-cols-[70%_auto] gap-4">
      <ToolCard>
        <ScrollArea className="h-96 px-4">
          <CropperUI />

          <CropperAction />
        </ScrollArea>
      </ToolCard>

      <ToolCard>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold underline">Crop Setting</p>
          <Button
            variant={"outline"}
            onClick={() => setCropState(defaultCropState)}
          >
            Reset
          </Button>
        </div>
        <Separator />
        <CropperSetting />
      </ToolCard>
    </div>
  );
};
