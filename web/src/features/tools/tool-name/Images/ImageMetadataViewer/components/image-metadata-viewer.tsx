"use client";

import { useState } from "react";
import Image from "next/image";
import ExifReader from "exifreader";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { SourceSelection } from "@/components/molecules/source-selection-v2";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useImageLoader } from "@/hooks/use-image-loader";
import {
  METADATA_GROUP_LABEL,
  MetadataGroup,
  resolveMetadataGroup,
} from "../utils/metadata-groups";
import { toast } from "sonner";

/* =========================================================
 * Types
 * ======================================================= */

type ExifTag = ExifReader.Tags[string];
type MetadataEntry = [string, ExifTag];

/* =========================================================
 * Helpers
 * ======================================================= */

function getExifValue(data: ExifReader.Tags, keys: string[]): string | null {
  for (const key of keys) {
    const tag = data[key];
    if (tag?.value != null) {
      if (Array.isArray(tag.value)) return tag.value.join(" ");
      return String(tag.value);
    }
  }
  return null;
}

function isUint8Array(value: unknown): value is Uint8Array {
  return ArrayBuffer.isView(value) && value instanceof Uint8Array;
}

function normalizeExifValue(value: ExifTag["value"]): string {
  if (Array.isArray(value)) {
    return value.join(" ").toLowerCase();
  }

  if (isUint8Array(value)) {
    return Array.from(value).join(" ").toLowerCase();
  }

  return String(value ?? "").toLowerCase();
}

function formatExifValue(value: ExifTag["value"]): string {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (isUint8Array(value)) {
    return Array.from(value).join(", ");
  }

  return String(value ?? "");
}

/* =========================================================
 * Copy Button
 * ======================================================= */

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Berhasil copy");
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="
        opacity-0 group-hover:opacity-100
        transition-opacity
        rounded-md border px-2 py-1
        text-xs text-muted-foreground
        hover:bg-muted
      "
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/* =========================================================
 * Important EXIF
 * ======================================================= */

const IMPORTANT_EXIF_KEYS = new Set<string>([
  // Image
  "Image Width",
  "Image Height",
  "ExifImageWidth",
  "ExifImageHeight",
  "Orientation",

  // Camera
  "Make",
  "Model",
  "LensModel",
  "ISO",
  "ExposureTime",
  "FNumber",
  "FocalLength",

  // Date
  "DateTimeOriginal",
  "CreateDate",

  // GPS
  "GPSLatitude",
  "GPSLongitude",
]);

function isImportantExifKey(key: string): boolean {
  return IMPORTANT_EXIF_KEYS.has(key);
}

/* =========================================================
 * Component
 * ======================================================= */

export function ImageMetadataViewer() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<ExifReader.Tags | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const { urlToImage } = useImageLoader();

  /* ---------------- Load Metadata ---------------- */

  const loadMetadata = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const tags = await ExifReader.load(file, { includeUnknown: true });
      setData(tags);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Empty State ---------------- */

  if (!file)
    return (
      <ToolCard>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Image Metadata Viewer</h2>
            <p className="text-sm text-muted-foreground">
              Upload an image to inspect EXIF & technical metadata.
            </p>
          </div>

          <SourceSelection
            onFilesSelected={(files) => {
              if (!files?.length) return;
              setFile(files[0]);
            }}
            onSelectImages={async (url) => {
              const file = await urlToImage(url[0]);
              setFile(file);
            }}
          />
        </div>
      </ToolCard>
    );

  /* ---------------- Group Metadata ---------------- */

  const groupedData = data
    ? Object.entries(data).reduce<Record<MetadataGroup, MetadataEntry[]>>(
        (acc, [key, value]) => {
          const group = resolveMetadataGroup(key);
          acc[group].push([key, value]);
          return acc;
        },
        {
          image: [],
          camera: [],
          color: [],
          gps: [],
          date: [],
          other: [],
        }
      )
    : null;

  /* ---------------- Search + Important Filter ---------------- */

  const filteredGroupedData = groupedData
    ? (Object.fromEntries(
        Object.entries(groupedData).map(([group, items]) => {
          let result = items;

          if (query.trim()) {
            const q = query.toLowerCase();
            result = result.filter(
              ([key, value]) =>
                key.toLowerCase().includes(q) ||
                normalizeExifValue(value.value).includes(q)
            );
          }

          if (showImportantOnly) {
            result = result.filter(([key]) => isImportantExifKey(key));
          }

          return [group, result];
        })
      ) as Record<MetadataGroup, MetadataEntry[]>)
    : null;

  /* ---------------- Summary ---------------- */

  const summary = data
    ? {
        resolution: (() => {
          const w = getExifValue(data, ["Image Width", "ExifImageWidth"]);
          const h = getExifValue(data, ["Image Height", "ExifImageHeight"]);
          return w && h ? `${w} × ${h}` : null;
        })(),
        camera: (() => {
          const make = getExifValue(data, ["Make"]);
          const model = getExifValue(data, ["Model"]);
          return make || model ? [make, model].filter(Boolean).join(" ") : null;
        })(),
        date: getExifValue(data, [
          "DateTimeOriginal",
          "CreateDate",
          "ModifyDate",
        ]),
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }
    : null;

  /* ========================================================= */

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-lg font-semibold">Image Metadata</h2>
          <p className="text-sm text-muted-foreground">
            EXIF, resolution, color profile, and camera information.
          </p>
        </div>

        {/* Summary */}
        {summary && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <SummaryItem label="Resolution" value={summary.resolution} />
            <SummaryItem label="Camera" value={summary.camera} />
            <SummaryItem label="Date Taken" value={summary.date} />
            <SummaryItem label="File Size" value={summary.size} />
          </div>
        )}

        {/* Preview + Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-lg border bg-muted">
            <Image
              src={URL.createObjectURL(file)}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <Button onClick={loadMetadata} disabled={loading}>
                {loading ? "Reading metadata..." : "Load Metadata"}
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  setFile(null);
                  setData(null);
                  setQuery("");
                  setShowImportantOnly(false);
                }}
              >
                Reset
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              File: <span className="font-medium">{file.name}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Search + Toggle */}
        {data && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search metadata (key or value)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full max-w-sm rounded-md border px-3 py-2 text-sm"
              />

              {query && (
                <Button variant="ghost" size="sm" onClick={() => setQuery("")}>
                  Clear
                </Button>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showImportantOnly}
                onChange={(e) => setShowImportantOnly(e.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-muted-foreground">Show important only</span>
            </label>
          </div>
        )}

        {/* Empty Important */}
        {showImportantOnly &&
          filteredGroupedData &&
          Object.values(filteredGroupedData).every(
            (items) => items.length === 0
          ) && (
            <div className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
              No important metadata found.
            </div>
          )}

        {/* Accordion */}
        {filteredGroupedData && (
          <Accordion type="multiple" className="w-full">
            {(
              Object.entries(filteredGroupedData) as [
                MetadataGroup,
                MetadataEntry[]
              ][]
            ).map(([group, items]) => {
              if (items.length === 0) return null;

              return (
                <AccordionItem key={group} value={group}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      {METADATA_GROUP_LABEL[group]}
                      <Badge variant="secondary">{items.length}</Badge>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="divide-y rounded-md border">
                      {items.map(([key, value]) => (
                        <div
                          key={key}
                          className={`group grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[220px_1fr]
                            ${isImportantExifKey(key) ? "bg-muted/40" : ""}`}
                        >
                          <div className="font-medium text-sm break-all">
                            {key}
                          </div>

                          <div className="flex items-start justify-between gap-2">
                            <div
                              className={`text-sm break-all ${
                                isImportantExifKey(key)
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {formatExifValue(value.value)}
                            </div>

                            <CopyButton value={formatExifValue(value.value)} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )}
      </div>
    </ToolCard>
  );
}

/* =========================================================
 * Summary Item
 * ======================================================= */

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  if (!value) return null;

  return (
    <div className="rounded-lg border bg-muted/40 px-3 py-2">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold leading-tight">{value}</div>
    </div>
  );
}
