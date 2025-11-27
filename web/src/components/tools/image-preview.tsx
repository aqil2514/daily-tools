import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt?: string;
}

export function ImagePreview({ src, alt = "preview" }: ImagePreviewProps) {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded-md border"
      />
    </div>
  );
}
