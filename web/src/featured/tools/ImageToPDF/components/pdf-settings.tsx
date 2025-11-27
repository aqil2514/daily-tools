"use client";

interface Props {
  pageSize: "A4" | "Fit";
  setPageSize: (v: "A4" | "Fit") => void;
}

export function PDFSettings({ pageSize, setPageSize }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Page Size</label>
      <select
        className="border p-2 rounded-md w-full"
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value as "A4" | "Fit")}
      >
        <option value="A4">A4 (Portrait)</option>
        <option value="Fit">Fit image size</option>
      </select>
    </div>
  );
}
