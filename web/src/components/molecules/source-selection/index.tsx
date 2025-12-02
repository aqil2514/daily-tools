import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileContent } from "./file-source";
import { URLContent } from "./url-source";

export interface SourceSelectionProps {
  onFileSelected: (file: File | null) => void;
  onUrlSelected: (url: string) => void;
}

export function SourceSelection({onFileSelected, onUrlSelected}:SourceSelectionProps) {
  return (
    <Tabs defaultValue="file">
      <TabsList>
        <TabsTrigger value="file">File</TabsTrigger>
        <TabsTrigger value="url">URL</TabsTrigger>
      </TabsList>

      <FileContent onFileSelected={onFileSelected} />
      <URLContent onUrlSelected={onUrlSelected} />
    </Tabs>
  );
}
