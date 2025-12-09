import { SubHeading } from "@/components/atoms/subHeading";
import { Separator } from "@/components/ui/separator";
import { MainOptions } from "./main-options";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DotsOptions } from "./dots-options";
import { CornerSquareOptions } from "./corner-square-options";
import { CornerDotOptions } from "./corner-dot-options";
import { BackgroundOptions } from "./background-options";
import { ImageOptions } from "./image-options";
import { Accordion } from "@/components/ui/accordion";

// Siapa tau nanti kepakek
// import { QRInnerOptions } from "./qr-options";

export function QROptions() {
  return (
    <ScrollArea className="h-96">
      <SubHeading>Options</SubHeading>
      <Separator />
      <Accordion type="single" collapsible>
        <MainOptions />
        <Separator />
        <DotsOptions />
        <Separator />
        <CornerSquareOptions />
        <Separator />
        <CornerDotOptions />
        <Separator />
        <BackgroundOptions />
        <Separator />
        <ImageOptions />
        <Separator />
        {/* <QRInnerOptions /> */}
      </Accordion>
    </ScrollArea>
  );
}
