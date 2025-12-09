import { Separator } from "@/components/ui/separator";
import { PageOrientation } from "./page-orientation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useImageToPDF } from "../../provider";
import { Button } from "@/components/ui/button";
import {  RotateCcw } from "lucide-react";
import { PageSize } from "./page-size";
import { PageMargin } from "./page-margin";

export function PDFSetting() {
  const { resetSetting } = useImageToPDF();
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-2xl text-center text-gray-500">
          Image To PDF Setting
        </p>
        <Button variant={"destructive"} onClick={resetSetting}>
          <RotateCcw /> Setting
        </Button>
      </div>

      <Separator />
      <ScrollArea className="h-96">
        <PageOrientation />
        <Separator className="mt-6" />
        <PageSize />
        <PageMargin />
        <Separator className="mt-6" />
      </ScrollArea>
    </div>
  );
}
