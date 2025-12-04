import { useState } from "react";
import { useImageToPDF } from "../../provider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SourceSelection } from "@/components/molecules/source-selection-v2";

export function AddImageDialog ()  {
  const { addImage } = useImageToPDF();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus /> Tambah Gambar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Gambar</DialogTitle>
          <DialogDescription>Pilih sumber</DialogDescription>
        </DialogHeader>

        <SourceSelection
          onFilesSelected={(files) => {
            files.forEach((file) => addImage(URL.createObjectURL(file)));
            setOpen(false);
          }}
          onSelectImages={(urls) => {
            urls.forEach((url) => addImage(url));
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
