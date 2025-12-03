import { Button } from "@/components/ui/button";
import { useImageRotate } from "../provider";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FlipHorizontal, FlipVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function RotateSetting() {
  return (
    <div className="space-y-4 px-4">
      <AngleRotation />
      <Separator />
      <FlipImage />
      <Separator />
      <BackgroundSetting />
      <Separator />
      <PreserveSizeSetting />
      <OrientationFixSetting />
      <Separator />
    </div>
  );
}

const AngleRotation = () => {
  const { rotateState, setRotateState } = useImageRotate();

  const normalizeRotation = (value: number) => {
    return ((value % 360) + 360) % 360;
  };

  const buttonRotateHandle = (delta: number) => {
    setRotateState({
      ...rotateState,
      rotation: normalizeRotation(rotateState.rotation + delta),
    });
  };

  return (
    <div className="space-y-4">
      <p className="font-semibold underline">Angle ({rotateState.rotation}°)</p>

      <div className="flex gap-1">
        <Button onClick={() => buttonRotateHandle(-90)} variant={"outline"}>
          90° (Kiri)
        </Button>

        <Button onClick={() => buttonRotateHandle(+90)} variant={"outline"}>
          90° (Kanan)
        </Button>

        <Button onClick={() => buttonRotateHandle(+180)} variant={"outline"}>
          180°
        </Button>
      </div>

      <Input
        type="number"
        min={0}
        max={359}
        value={rotateState.rotation}
        onChange={(e) =>
          setRotateState({ ...rotateState, rotation: e.target.valueAsNumber })
        }
      />

      <Slider
        value={[rotateState.rotation]}
        min={0}
        max={359}
        onValueChange={(e) =>
          setRotateState({ ...rotateState, rotation: e[0] })
        }
      />
    </div>
  );
};

const FlipImage = () => {
  const { rotateState, setRotateState } = useImageRotate();
  return (
    <div className="space-y-4">
      <p className="font-semibold underline">Flip Image</p>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={"outline"}
          onClick={() =>
            setRotateState({
              ...rotateState,
              flipHorizontal: !rotateState.flipHorizontal,
            })
          }
        >
          <FlipHorizontal /> Horizontal
        </Button>
        <Button
          variant={"outline"}
          onClick={() =>
            setRotateState({
              ...rotateState,
              flipVertical: !rotateState.flipVertical,
            })
          }
        >
          <FlipVertical /> Vertical
        </Button>
      </div>
    </div>
  );
};

const BackgroundSetting = () => {
  const { rotateState, setRotateState } = useImageRotate();

  return (
    <div className="space-y-2">
      <p className="font-semibold underline">Background</p>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant={
            rotateState.background === "transparent" ? "default" : "outline"
          }
          onClick={() =>
            setRotateState({ ...rotateState, background: "transparent" })
          }
        >
          Transparent
        </Button>

        <Button
          variant={rotateState.background === "#ffffff" ? "default" : "outline"}
          onClick={() =>
            setRotateState({ ...rotateState, background: "#ffffff" })
          }
        >
          White
        </Button>

        <Button
          variant={rotateState.background === "#000000" ? "default" : "outline"}
          onClick={() =>
            setRotateState({ ...rotateState, background: "#000000" })
          }
        >
          Black
        </Button>

        <Input
          type="color"
          value={rotateState.background}
          onChange={(e) =>
            setRotateState({ ...rotateState, background: e.target.value })
          }
        />
      </div>
    </div>
  );
};

const PreserveSizeSetting = () => {
  const { rotateState, setRotateState } = useImageRotate();

  return (
    <div className="flex items-center justify-between py-2">
      <label className="font-medium">Preserve Size</label>
      <Switch
        checked={rotateState.preserveSize}
        onCheckedChange={(value) =>
          setRotateState({ ...rotateState, preserveSize: value })
        }
      />
    </div>
  );
};

const OrientationFixSetting = () => {
  const { rotateState, setRotateState } = useImageRotate();

  return (
    <div className="flex items-center justify-between py-2">
      <label className="font-medium">Auto Fix Orientation</label>
      <Switch
        checked={rotateState.autoFixOrientation}
        onCheckedChange={(value) =>
          setRotateState({ ...rotateState, autoFixOrientation: value })
        }
      />
    </div>
  );
};