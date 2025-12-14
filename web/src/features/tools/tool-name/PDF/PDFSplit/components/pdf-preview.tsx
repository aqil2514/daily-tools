"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";

import { Document, Page, pdfjs } from "react-pdf";
import { usePdfSplit } from "../store/provider";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PDFPreview() {
  const { file, totalPages, setTotalPages, setFile } = usePdfSplit();
  const [loading, setLoading] = useState(true);

  if (!file) return null;

  return (
    <ToolCard>
      <div className="flex justify-between">
        <SubHeading>PDF Preview</SubHeading>
        <Button onClick={() => setFile(null)} variant={"destructive"}>
          Hapus
        </Button>
      </div>
      <Separator className="my-4" />

      <div className="space-y-6">
        <Document
          file={file}
          loading={
            <p className="text-muted-foreground text-sm animate-pulse">
              Memuat PDF...
            </p>
          }
          onLoadSuccess={({ numPages }) => {
            setTotalPages?.(numPages);
            setLoading(false);
          }}
        >
          {loading ? (
            <p className="text-muted-foreground text-sm animate-pulse">
              Memuat halaman...
            </p>
          ) : (
            <div
              className="
              grid grid-cols-2 md:grid-cols-4 gap-4 
              max-h-[600px] overflow-y-auto pr-2
              "
            >
              {Array.from(new Array(totalPages), (_, i) => (
                <div
                  key={i}
                  className="
                    border rounded-lg overflow-hidden bg-white shadow-sm 
                    hover:shadow-md transition-shadow
                  "
                >
                  <Page
                    pageNumber={i + 1}
                    width={180}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={
                      <div className="w-full h-[230px] bg-muted animate-pulse" />
                    }
                  />

                  <p className="text-center text-xs py-2 bg-muted">
                    Halaman {i + 1}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Document>
      </div>
    </ToolCard>
  );
}
