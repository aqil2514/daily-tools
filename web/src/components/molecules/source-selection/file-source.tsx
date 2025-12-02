import { UploadImage } from "@/components/atoms/upload-image";
import { TabsContent } from "@/components/ui/tabs";

interface Props {
  onFileSelected: (file: File | null) => void;
}

export function FileContent({ onFileSelected }: Props) {
  const uploadHandler = (file: File | null) => {
      onFileSelected(file);
  };
  return (
    <TabsContent value="file">
      <UploadImage onUploadChange={uploadHandler} />
    </TabsContent>
  );
}
