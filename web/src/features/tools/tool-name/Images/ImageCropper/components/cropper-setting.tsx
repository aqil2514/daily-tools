import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useImageCroper } from "../provider";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CropperSetting() {
  const { cropState, setCropState } = useImageCroper();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Width (px)</Label>
          <Input
            value={cropState.crop.x}
            onChange={(e) =>
              setCropState({
                ...cropState,
                crop: { ...cropState.crop, x: e.target.valueAsNumber },
              })
            }
            type="number"
          />
        </div>
        <div className="space-y-1">
          <Label>Height (px)</Label>
          <Input
            value={cropState.crop.y}
            onChange={(e) =>
              setCropState({
                ...cropState,
                crop: { ...cropState.crop, y: e.target.valueAsNumber },
              })
            }
            type="number"
          />
        </div>
      </div>
      <Separator />
      <div className="space-y-1">
        <Label>Rotation</Label>
        <Input
          value={cropState.rotation}
          max={360}
          min={0}
          onChange={(e) =>
            setCropState({
              ...cropState,
              rotation: e.target.valueAsNumber,
            })
          }
          type="number"
        />
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Zoom</Label>
        <Slider
          value={[cropState.zoom]}
          onValueChange={(e) => setCropState({ ...cropState, zoom: e[0] })}
          min={1}
          max={4}
        />
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Shape</Label>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <Label htmlFor="rect">Rect</Label>
            <Input
              id="rect"
              type="radio"
              name="crop-shape"
              checked={cropState.cropShape === "rect"}
              onChange={() => setCropState({ ...cropState, cropShape: "rect" })}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Label htmlFor="round">Round</Label>
            <Input
              id="round"
              type="radio"
              name="crop-shape"
              checked={cropState.cropShape === "round"}
              onChange={() =>
                setCropState({ ...cropState, cropShape: "round" })
              }
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Aspect Ratio</Label>
        <Select
          value={String(cropState.aspect)}
          onValueChange={(value) =>
            setCropState({ ...cropState, aspect: Number(value) })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Aspect Ratio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 : 1 (Square)</SelectItem>
            <SelectItem value={String(4 / 3)}>4 : 3</SelectItem>
            <SelectItem value={String(3 / 2)}>3 : 2</SelectItem>
            <SelectItem value={String(16 / 9)}>16 : 9</SelectItem>
            <SelectItem value={String(21 / 9)}>21 : 9</SelectItem>
            <SelectItem value={String(9 / 16)}>9 : 16 (Portrait)</SelectItem>
            <SelectItem value="0">Free (No aspect)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
