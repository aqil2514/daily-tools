import { View, Text } from "@react-pdf/renderer";
import { Denomination } from "@/features/tools/tool-name/Financial/CashCounter/types/interface";
import { CASH_COUNTER_I18N, Locale } from "./cashCounter.i18n";
import { groupByType, calculateTotal } from "./cashCounter.utils";
import { styles } from "./cashCounter.styles";
import { CashCounterSetting } from "@/features/tools/tool-name/Financial/CashCounter/store/provider";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { formatNumber } from "@/utils/formatter/formatNumber";

interface Props {
  data: Denomination[];
  settings?: CashCounterSetting;
  locale?: Locale;
}

export function CashCounterTable({ data, locale = "en", settings }: Props) {
  const t = CASH_COUNTER_I18N[locale];
  const grouped = groupByType(data);
  const grandTotal = calculateTotal(data);

  const cashTotal = grandTotal;
  const finalDifference = settings
    ? cashTotal +
      settings.cashInData -
      settings.receivables -
      settings.otherPeopleCash
    : null;

  return (
    <View style={styles.container}>
      {/* Intro */}
      <Text style={styles.introText}>{t.intro}</Text>

      {/* Grouped tables */}
      {Object.entries(grouped).map(([type, items]) => {
        const subtotal = calculateTotal(items);

        return (
          <View key={type} wrap={false}>
            <Text style={styles.groupTitle}>
              {t.typeLabel[type as Denomination["type"]]}
            </Text>

            <View style={styles.headerRow}>
              <Text style={[styles.cell, styles.colLabel]}>
                {t.denomination}
              </Text>
              <Text style={[styles.cell, styles.colQty]}>{t.quantity}</Text>
              <Text style={[styles.cell, styles.colValue]}>{t.subtotal}</Text>
            </View>

            {items.map((d, i) => (
              <View key={i} style={styles.bodyRow}>
                <Text style={[styles.cell, styles.colLabel]}>{d.label}</Text>
                <Text style={[styles.cell, styles.colQty]}>{`${formatNumber(d.quantity)} pcs`}</Text>
                <Text style={[styles.cell, styles.colValue]}>
                  {formatCurrency(
                    d.value * d.quantity,
                    settings?.currency.toUpperCase() ?? "IDR"
                  )}
                </Text>
              </View>
            ))}

            <View style={styles.subtotalRow}>
              <Text style={[styles.cell, styles.colLabel, styles.bold]}>
                {t.subtotal}
              </Text>
              <Text style={[styles.cell, styles.colQty]} />
              <Text style={[styles.cell, styles.colValue, styles.bold]}>
                {formatCurrency(
                  subtotal,
                  settings?.currency.toUpperCase() ?? "IDR"
                )}
              </Text>
            </View>
          </View>
        );
      })}

      {/* Grand total */}
      <View style={styles.totalRow}>
        <Text style={[styles.cell, styles.colLabel, styles.bold]}>
          {t.total}
        </Text>
        <Text style={[styles.cell, styles.colQty]} />
        <Text style={[styles.cell, styles.colValue, styles.bold]}>
          {formatCurrency(
            grandTotal,
            settings?.currency.toUpperCase() ?? "IDR"
          )}
        </Text>
      </View>

      {/* ===== SUMMARY / ADJUSTMENTS ===== */}
      {settings && (
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>{t.summaryTitle}</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.cashInData}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(
                settings.cashInData,
                settings.currency.toUpperCase()
              )}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.receivables}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(
                settings.receivables,
                settings.currency.toUpperCase()
              )}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.otherPeopleCash}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(
                settings.otherPeopleCash,
                settings.currency.toUpperCase()
              )}
            </Text>
          </View>

          {finalDifference !== null && (
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryLabel, styles.bold]}>
                {t.finalDifference}
              </Text>
              <Text style={[styles.summaryValue, styles.bold]}>
                {formatCurrency(
                  finalDifference,
                  settings.currency.toUpperCase()
                )}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Note */}
      <Text style={styles.note}>{t.note}</Text>
    </View>
  );
}
