import { ChangeObject } from "diff";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Props {
  diffResult: ChangeObject<string>[];
}

export function OutputSection({ diffResult }: Props) {
  if (diffResult.length === 0) return null;

  const originalText = diffResult
    .filter((p) => !p.added)
    .map((p) => p.value)
    .join("");

  const changedText = diffResult
    .filter((p) => !p.removed)
    .map((p) => p.value)
    .join("");

  function downloadFile(filename: string, content: string) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      {/* TOP BUTTONS */}
      <div className="flex gap-3 justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => downloadFile("original.txt", originalText)}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Download Original
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => downloadFile("changed.txt", changedText)}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Download Changed
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* LEFT = ORIGINAL TEXT */}
        <div className="p-4 rounded-md border bg-card text-card-foreground whitespace-pre-wrap leading-relaxed">
          <h3 className="font-semibold mb-2">Original</h3>
          {diffResult.map((part, idx) => {
            let className = "";

            if (part.removed) {
              className =
                "bg-red-200 text-red-900 dark:bg-red-800 dark:text-red-100 line-through px-1 rounded";
            } else if (part.added) {
              return null;
            }

            return (
              <span key={idx} className={className}>
                {part.value}
              </span>
            );
          })}
        </div>

        {/* RIGHT = CHANGED TEXT */}
        <div className="p-4 rounded-md border bg-card text-card-foreground whitespace-pre-wrap leading-relaxed">
          <h3 className="font-semibold mb-2">Changed</h3>
          {diffResult.map((part, idx) => {
            let className = "";

            if (part.added) {
              className =
                "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100 px-1 rounded";
            } else if (part.removed) {
              return null;
            }

            return (
              <span key={idx} className={className}>
                {part.value}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
