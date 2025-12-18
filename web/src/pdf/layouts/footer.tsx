import { Link, Text, View } from "@react-pdf/renderer";
import { footer } from "../styles/footer.styles";
import { SEO_CONFIG } from "@/constants/seo";

interface Props {
  toolName: string;
  siteUrl?: string;
}

export function PDFFooter({
  toolName,
  siteUrl = SEO_CONFIG.siteUrl,
}: Props) {
  const date = new Date().toLocaleDateString("en-GB");

  return (
    <View style={footer.container} fixed>
      {/* ===== TOP FOOTER ROW ===== */}
      <View style={footer.topRow}>
        <Text style={footer.left}>
          Flowtooly • {toolName}
        </Text>

        <Text style={footer.center}>
          Generated: {date}
        </Text>

        <Text
          style={footer.right}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} / ${totalPages}`
          }
        />
      </View>

      {/* ===== BOTTOM FOOTER ROW (URL) ===== */}
      <View style={footer.bottomRow}>
        <Link src={siteUrl} style={footer.link}>
          {siteUrl.replace(/^https?:\/\//, "")}
        </Link>
      </View>
    </View>
  );
}
