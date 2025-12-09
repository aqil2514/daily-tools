import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

type SampleKey = "sample-1" | "sample-2" | "sample-3";

interface SampleItem {
  original: string;
  changed: string;
}

const sampleData: Record<SampleKey, SampleItem> = {
  "sample-1": {
    original: `Flowtooly is a simple tool for everyday productivity.
It helps users process files quickly and securely.`,

    changed: `Flowtooly is a privacy-first utility tool for productivity.
It allows users to edit, convert, and manage files effortlessly.`,
  },

  "sample-2": {
    original: `The quick brown fox jumps over the lazy dog.
This sentence contains every letter in English.`,

    changed: `The quick brown fox leaps over a sleeping dog.
This phrase includes almost every letter in the English language.`,
  },

  "sample-3": {
    original: `JavaScript is a versatile programming language.
It is commonly used for web development.`,

    changed: `JavaScript is a highly flexible programming language.
It is widely used to build modern web applications.`,
  },
};

interface Props {
  setOriginal: Dispatch<SetStateAction<string>>;
  setChanged: Dispatch<SetStateAction<string>>;
}

export function SampleDataComponent({ setOriginal, setChanged }: Props) {
  const sampleKeys = Object.keys(sampleData) as SampleKey[];

  return (
    <ScrollArea>
      <div className="flex gap-4 p-4">
        {sampleKeys.map((sample, i) => (
          <Button
            key={sample}
            variant={"outline"}
            onClick={() => {
              setOriginal(sampleData[sample].original);
              setChanged(sampleData[sample].changed);
            }}
          >
            Sample {i + 1}
          </Button>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
