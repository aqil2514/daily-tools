import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  section: {
    marginTop: 16,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },

  summaryBox: {
    padding: 8,
    border: "1 solid #E5E7EB",
    borderRadius: 4,
  },

  table: {
    display: "flex",
    width: "100%",
    border: "1 solid #E5E7EB",
  },

  row: {
    flexDirection: "row",
  },

  headerCell: {
    flex: 1,
    fontSize: 10,
    fontWeight: "bold",
    padding: 6,
    backgroundColor: "#F3F4F6",
    borderRight: "1 solid #E5E7EB",
  },

  cell: {
    flex: 1,
    fontSize: 10,
    padding: 6,
    borderRight: "1 solid #E5E7EB",
  },

  copy: {
    fontSize: 10,
    color: "#4B5563",
    lineHeight: 1.4,
    marginBottom: 12,
  },
  closing: {
    fontSize: 9,
    color: "#6B7280",
    marginTop: 16,
  },
});
