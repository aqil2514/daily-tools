import { SubHeading } from "@/components/atoms/subHeading";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react"; // atau icon lain
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

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <Textarea
        className="h-48"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
