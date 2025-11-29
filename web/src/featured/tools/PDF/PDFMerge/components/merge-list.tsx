"use client";

interface Props {
  files: File[];
}

export function MergeList({ files }: Props) {
  if (files.length === 0) return null;

  return (
    <div className="bg-muted/40 p-3 rounded-md space-y-2">
      <p className="text-sm font-medium">Files to merge:</p>

      <ul className="space-y-1 text-sm text-muted-foreground">
        {files.map((f) => (
          <li key={f.name}>• {f.name}</li>
        ))}
      </ul>
    </div>
  );
}
