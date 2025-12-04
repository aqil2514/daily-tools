import { UploadImage } from "../atoms/upload-image-v2";
import { UrlImageSource } from "../atoms/url-image-v2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Props {
  onFilesSelected: (files: File[]) => void;
  onSelectImages: (urls: string[]) => void

}

export function SourceSelection({ onFilesSelected, onSelectImages }: Props) {
  return (
    <Tabs defaultValue="upload">
      <TabsList>
        <TabsTrigger value="upload">Upload</TabsTrigger>
        <TabsTrigger value="url">URL</TabsTrigger>
      </TabsList>
      <TabsContent value="upload">
        <UploadImage onFilesSelected={onFilesSelected} />
      </TabsContent>
      <TabsContent value="url">
        <UrlImageSource onSelectImages={onSelectImages} />
      </TabsContent>
    </Tabs>
  );
}
