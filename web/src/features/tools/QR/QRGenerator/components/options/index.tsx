import { SubHeading } from "@/components/atoms/subHeading";
import { Separator } from "@/components/ui/separator";
import { MainOptions } from "./main-options";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DotsOptions } from "./dots-options";

export function QROptions() {
  return (
    <ScrollArea className="h-96">
      <SubHeading>Options</SubHeading>
      <Separator />
      <MainOptions />
      <Separator />
      <DotsOptions />
    </ScrollArea>
  );
}
