import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOutputFormat: Dispatch<SetStateAction<string>>;
  outputFormat: string;
}

export function FormatSelector({ outputFormat, setOutputFormat }: Props) {
  return (
    <div>
      <label className="text-sm font-medium mb-1 block">Output Format</label>
      <Select value={outputFormat} onValueChange={setOutputFormat}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-slate-50 backdrop-blur-2xl">
          <SelectItem value="jpg" className="hover:bg">JPG</SelectItem>
          <SelectItem value="png">PNG</SelectItem>
          <SelectItem value="webp">WEBP</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
