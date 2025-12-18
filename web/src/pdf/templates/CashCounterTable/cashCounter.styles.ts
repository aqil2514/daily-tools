import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 24,
  },

  introText: {
    fontSize: 11,
    fontFamily: "Times-Roman",
    color: "#333",
    marginBottom: 16,
    lineHeight: 1.4,
  },

  groupTitle: {
    marginTop: 16,
    marginBottom: 6,
    fontSize: 12,
    fontFamily: "Times-Bold",
  },

  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 6,
    marginBottom: 6,
  },

  bodyRow: {
    flexDirection: "row",
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },

  subtotalRow: {
    flexDirection: "row",
    marginTop: 4,
    paddingTop: 4,
    borderTopWidth: 0.5,
    borderTopColor: "#666",
  },

  totalRow: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 1.5,
    borderTopColor: "#000",
  },

  cell: {
    fontSize: 11,
    fontFamily: "Times-Roman",
  },

  colLabel: {
    flex: 3,
  },

  colQty: {
    flex: 1,
    textAlign: "center",
  },

  colValue: {
    flex: 2,
    textAlign: "right",
  },

  bold: {
    fontFamily: "Times-Bold",
  },

  note: {
    marginTop: 24,
    fontSize: 10,
    fontFamily: "Times-Roman",
    color: "#555",
    lineHeight: 1.4,
  },

  summarySection: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#000",
  },

  summaryTitle: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginBottom: 8,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  summaryLabel: {
    fontSize: 11,
    fontFamily: "Times-Roman",
  },

  summaryValue: {
    fontSize: 11,
    fontFamily: "Times-Roman",
    textAlign: "right",
  },
});
