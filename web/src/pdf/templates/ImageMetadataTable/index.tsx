/* eslint-disable jsx-a11y/alt-text */
import { View, Text, Image } from "@react-pdf/renderer";
import { imageMetadataStyles as s } from "./imageMetadata.styles";
import { i18nImageMetadataPdf } from "./imageMetadata.i18n";

type LocaleDict =
  (typeof i18nImageMetadataPdf)[keyof typeof i18nImageMetadataPdf];

interface MetadataItem {
  key: string;
  value: string;
  important: boolean;
}

interface Props {
  fileName: string;
  imageBase64?: string; // 👈
  summary: {
    resolution: string | null;
    camera: string | null;
    date: string | null;
    size: string | null;
  };
  metadata: Record<string, MetadataItem[]>;
  locale: "en" | "id";
}

export function ImageMetadataTable({
  fileName,
  imageBase64,
  summary,
  metadata,
  locale,
}: Props) {
  const t = i18nImageMetadataPdf[locale];

  return (
    <View style={s.container}>
      <Text style={s.introText}>{t.intro}</Text>
      {/* ================= IMAGE PREVIEW ================= */}
      {imageBase64 && (
        <View style={s.imagePreview}>
          <View style={s.imageBox}>
            <Image src={imageBase64} style={s.image} />
          </View>
          <Text style={s.summaryLabel}>{fileName}</Text>
        </View>
      )}

      {/* ================= SUMMARY ================= */}
      <Section title={t.section.summary}>
        <View style={s.summaryGrid}>
          <SummaryItem label={t.summary.fileName} value={fileName} />
          <SummaryItem label={t.summary.fileSize} value={summary.size} />
          <SummaryItem
            label={t.summary.resolution}
            value={summary.resolution}
          />
          <SummaryItem label={t.summary.camera} value={summary.camera} />
          <SummaryItem label={t.summary.date} value={summary.date} />
        </View>
      </Section>

      {/* ================= ALL METADATA ================= */}
      {Object.entries(metadata).map(([group, items]) => (
        <Section key={group} title={formatGroupTitle(group, locale)}>
          <TableHeader t={t} />
          {items.map((item) => (
            <TableRow key={item.key} item={item} important={item.important} />
          ))}
        </Section>
      ))}

      <Text style={s.footerNote}>{t.note}</Text>

    </View>
  );
}

/* ================= REUSABLE ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  if (!value) return null;

  return (
    <View style={s.summaryItem}>
      <Text style={s.summaryLabel}>{label}</Text>
      <Text style={s.summaryValue}>{value}</Text>
    </View>
  );
}

function TableHeader({ t }: { t: LocaleDict }) {
  return (
    <View style={s.tableHeader}>
      <Text style={s.keyCol}>{t.table.key}</Text>
      <Text style={s.valueCol}>{t.table.value}</Text>
    </View>
  );
}

function TableRow({
  item,
  important,
}: {
  item: { key: string; value: string };
  important?: boolean;
}) {
  return (
    <View style={important ? [s.tableRow, s.importantRow] : s.tableRow}>
      <Text style={s.keyCol}>{item.key}</Text>
      <Text style={s.valueCol}>{item.value}</Text>
    </View>
  );
}

function formatGroupTitle(group: string, locale: "en" | "id"): string {
  const map: Record<string, { en: string; id: string }> = {
    image: { en: "Image", id: "Gambar" },
    camera: { en: "Camera", id: "Kamera" },
    color: { en: "Color", id: "Warna" },
    gps: { en: "GPS", id: "GPS" },
    date: { en: "Date", id: "Tanggal" },
    other: { en: "Other", id: "Lainnya" },
  };

  return map[group]?.[locale] ?? group;
}
