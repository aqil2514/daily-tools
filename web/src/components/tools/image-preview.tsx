import Image from "next/image";
import { Paragraph } from "../atoms/paragraph";

export interface ImagePreviewProps {
  src?: string;
  alt?: string;
  noImageMessage?: string;
  title?: string;
}

export function ImagePreview({
  src,
  title,
  alt = "preview",
  noImageMessage = "No Image Preview",
}: ImagePreviewProps) {
  if (!src) return <Paragraph>{noImageMessage}</Paragraph>;
  return (
    <div className="space-y-4">
      <p>{title}</p>
      <div className="flex justify-center">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}
