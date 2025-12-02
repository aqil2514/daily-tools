"use client";
import { UploadImage } from "@/components/atoms/upload-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useImageConverter } from "../provider";
import { mapFileToImageItem } from "@/utils/mapper/fileToImageItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { isValidImageURL } from "@/utils/validation/isValidImageUrl";
import { useRef, useState } from "react";
import { Paragraph } from "@/components/atoms/paragraph";
import { mapUrlToImageItem } from "@/utils/mapper/urlToImageItem";
import { ImageSource } from "@/@types/Images";

export function SourceSelection() {
  const { setSourceMedia, sourceMedia } = useImageConverter();
  return (
    <Tabs
      value={sourceMedia}
      onValueChange={(e) => setSourceMedia(e as ImageSource)}
    >
      <TabsList>
        <TabsTrigger value="file">File</TabsTrigger>
        <TabsTrigger value="url">URL</TabsTrigger>
      </TabsList>

      <FileContent />
      <URLContent />
    </Tabs>
  );
}

const FileContent = () => {
  const { setItems, setConvertedUrl } = useImageConverter();
  const uploadHandler = (file: File | null) => {
    if (!file) return setItems([]);
    setItems([mapFileToImageItem(file)]);
    setConvertedUrl("");
  };
  return (
    <TabsContent value="file">
      <UploadImage onUploadChange={uploadHandler} />
    </TabsContent>
  );
};

const URLContent = () => {
  const { setItems, setConvertedUrl } = useImageConverter();

  const [error, setError] = useState<string>("");
  const urlRef = useRef<HTMLInputElement | null>(null);
  const addHandler = async () => {
    setError("");
    const element = urlRef.current;
    if (!element) return;
    const isValid = await isValidImageURL(element.value);
    if (!isValid) return setError("URL gambar tidak valid!");
    setItems([mapUrlToImageItem(element.value)]);
    setConvertedUrl("")
  };
  return (
    <TabsContent value="url">
      <div className="flex gap-4">
        <Input
          ref={urlRef}
          className="w-full"
          placeholder="Masukkan URL Gambar (https://)..."
        />
        <Button variant={"outline"} onClick={addHandler}>
          <Plus /> Add
        </Button>
      </div>
      {error && <Paragraph className="text-red-500">{error}</Paragraph>}
    </TabsContent>
  );
};
