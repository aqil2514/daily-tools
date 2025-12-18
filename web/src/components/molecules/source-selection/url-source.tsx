import { Paragraph } from "@/components/atoms/text/paragraph";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { isValidImageURL } from "@/utils/validation/isValidImageUrl";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  onUrlSelected: (url: string) => void;
}

export function URLContent({ onUrlSelected }: Props) {
  const [error, setError] = useState<string>("");
  const urlRef = useRef<HTMLInputElement | null>(null);

  const addHandler = async () => {
    setError("");
    const element = urlRef.current;
    if (!element) return;
    const isValid = await isValidImageURL(element.value);
    if (!isValid) return setError("URL gambar tidak valid!");
    onUrlSelected(element.value);
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
}
