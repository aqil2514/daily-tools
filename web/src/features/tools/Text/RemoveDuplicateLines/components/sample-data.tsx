import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRemoveDuplicateLines } from "../store/provider";

type SampleKey =
  | "sample-1"
  | "sample-2"
  | "sample-3"
  | "sample-4"
  | "sample-5"
  | "sample-6";

const sampleData: Record<SampleKey, string> = {
  "sample-1": `apple
banana
apple
orange
banana
apple
grape
`,
  "sample-2": `Apple
apple
  apple  
BANANA
banana
BaNaNa   
orange
Orange
`,
  "sample-3": `
apple

banana

apple


grape

grape

`,
  "sample-4": `john.doe@gmail.com
hello
test
john.doe@gmail.com
sample
test
hello
alpha
beta
sample
`,
  "sample-5": `Error: Failed to load module
Warning: Deprecated function used
Error: Failed to load module
Info: User logged in
Error: Failed to load module
Info: User logged in  
Warning: Deprecated function used
`,
  "sample-6": `Alpha
Beta
Gamma
Alpha
Delta
Epsilon
Beta
Zeta
Eta
Theta
Iota
Alpha
Kappa
Lambda
Iota
Beta
Gamma
Gamma
Mu
Nu
`,
};

export function SampleDataComponent() {
  const { setText } = useRemoveDuplicateLines();
  const sampleKeys = Object.keys(sampleData) as SampleKey[];

  return (
    <ScrollArea>
      <div className="flex gap-4 p-4">
        {sampleKeys.map((sample, i) => (
          <Button
            variant={"outline"}
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
