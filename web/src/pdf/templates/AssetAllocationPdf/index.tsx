/* eslint-disable jsx-a11y/alt-text */
import { View, Text, Image } from "@react-pdf/renderer";
import { styles } from "./assetAllocation.styles";
import { assetAllocationI18n } from "./assetAllocation.i18n";
import { AssetAllocationResult } from "@/features/tools/tool-name/Financial/AssetAllocationCalculator/types/output";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { global } from "@/pdf/styles/global.styles";

interface Props {
  image: string;
  data: AssetAllocationResult;
  locale?: "id" | "en";
}

export function AssetAllocationTable({
  image,
  data,
  locale = "id",
}: Props) {
  const t = assetAllocationI18n[locale];

  return (
    <View style={{...global.container}}>
      <Text style={styles.copy}>{t.intro}</Text>
      {/* Chart */}
      <Image src={image} style={{ width: "100%", marginBottom: 16 }} />

      {/* Summary */}
      <View style={styles.section} break>
        <Text style={styles.title}>{t.summary}</Text>
        <View style={styles.summaryBox}>
          <Text>
            {t.totalAsset}: {formatCurrency(data.totalAmount, "IDR")}
          </Text>
        </View>
      </View>

      {/* Category Allocation */}
      <View style={styles.section}>
        <Text style={styles.title}>{t.categoryAllocation}</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerCell}>{t.category}</Text>
            <Text style={styles.headerCell}>{t.amount}</Text>
            <Text style={styles.headerCell}>{t.percentage}</Text>
          </View>

          {data.categoryAllocations.map((item, i) => (
            <View style={styles.row} key={i}>
              <Text style={styles.cell}>{item.categoryName}</Text>
              <Text style={styles.cell}>
                {formatCurrency(item.totalAmount, "IDR")}
              </Text>
              <Text style={styles.cell}>
                {`${item.percentage.toFixed(2)} %`}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Asset Allocation Detail */}
      <View style={styles.section}>
        <Text style={styles.title}>{t.assetAllocation}</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerCell}>{t.name}</Text>
            <Text style={styles.headerCell}>{t.category}</Text>
            <Text style={styles.headerCell}>{t.amount}</Text>
            <Text style={styles.headerCell}>{t.percentage}</Text>
          </View>

          {data.assetAllocations.map((item, i) => (
            <View style={styles.row} key={i}>
              <Text style={styles.cell}>{item.name ?? "-"}</Text>
              <Text style={styles.cell}>{item.categoryName ?? "-"}</Text>
              <Text style={styles.cell}>
                {formatCurrency(item.amount, "IDR")}
              </Text>
              <Text style={styles.cell}>
                {`${item.percentage.toFixed(2)} %`}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.closing}>{t.closing}</Text>
    </View>
  );
}
