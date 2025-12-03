import Image from "next/image";
import { useImageRotate } from "../provider";

export function RotatePreview() {
  const { imageUrl, rotateState } = useImageRotate();

  const rotation = rotateState.rotation;
  const rad = (rotation * Math.PI) / 180;

  const originalW = 300;
  const originalH = 300;

  // Hitung expanded bounding box (canvas style)
  const expandedW =
    Math.abs(originalW * Math.cos(rad)) +
    Math.abs(originalH * Math.sin(rad));

  const expandedH =
    Math.abs(originalH * Math.cos(rad)) +
    Math.abs(originalW * Math.sin(rad));

  const previewW = rotateState.preserveSize ? expandedW : originalW;
  const previewH = rotateState.preserveSize ? expandedH : originalH;

  const transformValue = `
    rotate(${rotation}deg)
    scaleX(${rotateState.flipHorizontal ? -1 : 1})
    scaleY(${rotateState.flipVertical ? -1 : 1})
  `;

  return (
    <div
      className="flex justify-center items-center p-4 rounded-2xl bg-black/10"
      style={{
        width: previewW,
        height: previewH,
        transition: "width .2s ease, height .2s ease",
        background:
          rotateState.background === "transparent"
            ? "transparent"
            : rotateState.background,
      }}
    >
      <div
        style={{
          transform: transformValue,
          transition: "transform .2s ease",
        }}
      >
        <Image
          src={imageUrl.preview}
          alt="Rotate Preview"
          width={originalW}
          height={originalH}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}
