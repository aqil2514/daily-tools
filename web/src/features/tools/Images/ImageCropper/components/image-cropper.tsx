"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { defaultCropState, useImageCroper } from "../provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SourceSelection } from "@/components/molecules/source-selection";
import { CropperUI } from "./cropper-ui";
import { Separator } from "@/components/ui/separator";
import { CropperSetting } from "./cropper-setting";
import { Button } from "@/components/ui/button";
import { CropperAction } from "./cropper-action";

export function ImageCropperComp() {
  const { setImageUrl, setCropState } = useImageCroper();

  const fileSelectedHandler = async (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    setImageUrl({ result: "", preview: url });
  };

  const urlSelectedHandler = async (url: string) => {
    setImageUrl({ result: "", preview: url });
  };

  return (
    <div className="grid grid-cols-[70%_auto] gap-4">
      <ToolCard>
        <ScrollArea className="h-96 px-4">
          <SourceSelection
            onFileSelected={fileSelectedHandler}
            onUrlSelected={urlSelectedHandler}
          />

          <CropperUI />

          <CropperAction />
          
        </ScrollArea>
      </ToolCard>

      <ToolCard>
        <div className="flex justify-between items-center">

        <p className="text-xl font-semibold underline">Crop Setting</p>
        <Button variant={"outline"} onClick={() => setCropState(defaultCropState)} >Reset</Button>
        </div>
        <Separator /> 
        <CropperSetting />
      </ToolCard>
    </div>
  );
}
