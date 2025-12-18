"use client";

import { useState, useMemo } from "react";
import ExifReader from "exifreader";
import { toast } from "sonner";

import { resolveMetadataGroup } from "../utils/metadata-groups";
import {
  normalizeExifValue,
  formatExifValue,
  getExifValue,
} from "../utils/exif-format";
import { isImportantExifKey } from "../utils/important-exif";
import { MetadataGroup, MetadataEntry } from "../types/metadata";

export function useImageMetadata() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<ExifReader.Tags | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const loadMetadata = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const tags = await ExifReader.load(file, { includeUnknown: true });
      setData(tags);
    } catch {
      toast.error("Failed to read metadata");
    } finally {
      setLoading(false);
    }
  };

  const groupedData = useMemo(() => {
    if (!data) return null;

    return Object.entries(data).reduce<Record<MetadataGroup, MetadataEntry[]>>(
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
    );
  }, [data]);

  const filteredGroupedData = useMemo(() => {
    if (!groupedData) return null;

    return Object.fromEntries(
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
    ) as Record<MetadataGroup, MetadataEntry[]>;
  }, [groupedData, query, showImportantOnly]);

  const summary = useMemo(() => {
    if (!data || !file) return null;

    return {
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
    };
  }, [data, file]);

  return {
    file,
    setFile,
    data,
    setData,
    loading,
    query,
    setQuery,
    showImportantOnly,
    setShowImportantOnly,
    loadMetadata,
    groupedData,
    filteredGroupedData,
    summary,
    formatExifValue,
  };
}

export type ImageDataHooksType = typeof useImageMetadata;