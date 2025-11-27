"use client";

interface Props {
  urls: string[];
}

export function SplitList({ urls }: Props) {
  if (urls.length === 0) return null;

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">
        Hasil Split ({urls.length} halaman)
      </p>

      <ul className="space-y-2">
        {urls.map((url, idx) => (
          <li key={idx} className="flex justify-between items-center p-2 border rounded-md bg-muted/40">
            <span>Halaman {idx + 1}</span>

            <a
              href={url}
              download={`page-${idx + 1}.pdf`}
              className="text-primary underline text-sm"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
