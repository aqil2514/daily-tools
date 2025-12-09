import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

interface Props<T extends Record<string, string>>  {
  setText: Dispatch<SetStateAction<string>>;
  sampleData: T;
}

export function SampleDataComponent<T extends Record<string, string>>({
  setText,
  sampleData,
}: Props<T>) {
  const sampleKeys = Object.keys(sampleData);

  return (
    <ScrollArea>
      <div className="flex flex-wrap lg:flex-nowrap gap-4 p-4 items-center justify-center">
        {sampleKeys.map((sample, i) => (
          <Button
            variant="outline"
            key={sample}
            onClick={() => setText(sampleData[sample])}
          >
            Sample {i + 1}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
