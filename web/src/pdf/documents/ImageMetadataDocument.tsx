import { Document, OnRenderProps, Page, View } from "@react-pdf/renderer";
import { PDFHeader } from "../layouts/header";
import { PDFFooter } from "../layouts/footer";
import { ImageMetadataTable } from "../templates/ImageMetadataTable";
import { FOOTER_HEIGHT } from "../styles/footer.styles";

interface ImageMetadataSummary {
  resolution: string | null;
  camera: string | null;
  date: string | null;
  size: string | null;
}

interface ImageMetadataItem {
  key: string;
  value: string;
  important: boolean;
}

interface ImageMetadataDocumentProps {
  fileName: string;
  imageBase64?: string; // 👈 TAMBAHAN

  summary: ImageMetadataSummary;

  /**
   * Grouped metadata, already formatted
   * {
   *   image: [{ key, value, important }],
   *   camera: [...]
   * }
   */
  metadata: Record<string, ImageMetadataItem[]>;

  locale?: "en" | "id";

  // ===== PDF metadata =====
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;

  // ===== Optional hook =====
  onRender?: (props: OnRenderProps) => void;
}

export function ImageMetadataDocument({
  fileName,
  summary,
  metadata,
  locale = "en",

  title = "Image Metadata Report",
  author = "Flowtooly",
  subject = "Image metadata and EXIF information report",
  keywords = "image metadata, exif data, photo metadata, flowtooly",
  imageBase64,

  onRender,
}: ImageMetadataDocumentProps) {
  return (
    <Document
      title={title}
      author={author}
      subject={subject}
      keywords={keywords}
      creator="Flowtooly"
      producer="Flowtooly PDF Engine"
      pdfVersion="1.7"
      language={locale}
      onRender={onRender}
    >
      <Page
        size="A4"
        style={{
          paddingBottom: FOOTER_HEIGHT + 16,
        }}
      >
        {/* ===== HEADER ===== */}
        <PDFHeader title={title} subtitle="EXIF & technical information" />

        {/* ===== CONTENT ===== */}
        <View style={{ marginTop: 120 }}>
          <ImageMetadataTable
            fileName={fileName}
            summary={summary}
            metadata={metadata}
            locale={locale}
            imageBase64={imageBase64}
          />
        </View>

        {/* ===== FOOTER ===== */}
        <PDFFooter toolName="Image Metadata Viewer" />
      </Page>
    </Document>
  );
}
