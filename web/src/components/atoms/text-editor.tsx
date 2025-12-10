import { SubHeading } from "@/components/atoms/subHeading";
import { Button } from "@/components/ui/button";
import { Trash, Upload } from "lucide-react"; // atau icon lain
import { Dispatch, SetStateAction, useRef } from "react";

interface Props {
  title: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function TextEditor({ setText, text, title }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        setText(content);
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SubHeading className="mt-0">{title}</SubHeading>

        <div className="flex gap-2">
          {/* Import Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2"
          >
            <Upload size={16} />
            Import
          </Button>

          {/* Clear Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setText("")}
            className="flex items-center gap-2"
          >
            <Trash size={16} />
            Clear
          </Button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <textarea
        className="
    h-48 w-full
    resize-none
    wrap-break-word
    whitespace-pre-wrap
    overflow-y-auto
    overflow-x-hidden
    rounded-md border border-input bg-background px-3 py-2 text-sm
    ring-offset-background 
    placeholder:text-muted-foreground 
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
    focus-visible:ring-offset-2
  "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
