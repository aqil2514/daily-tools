import { HEADER_MARGIN_BOTTOM } from "@/pdf/styles/header.styles";
import { StyleSheet } from "@react-pdf/renderer";

export const imageMetadataStyles = StyleSheet.create({
  /* ================= LAYOUT ================= */

  container: {
    paddingHorizontal: 32,
    marginTop: HEADER_MARGIN_BOTTOM - 50,
  },

  introText: {
    fontSize: 10,
    color: "#555",
    marginBottom: 16,
    lineHeight: 1.4,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 10,
  },

  footerNote: {
  fontSize: 9,
  color: "#777",
  marginTop: 24,
  textAlign: "center",
},

  /* ================= SUMMARY ================= */

  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  summaryItem: {
    width: "50%",
    marginBottom: 8,
  },

  summaryLabel: {
    fontSize: 9,
    color: "#666",
  },

  summaryValue: {
    fontSize: 11,
    fontWeight: 500,
  },

  /* ================= TABLE ================= */

  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 6,
    marginBottom: 6,
  },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 4,
  },

  keyCol: {
    width: "35%",
    fontSize: 9,
    fontWeight: 500,
    paddingRight: 6,
  },

  valueCol: {
    width: "65%",
    fontSize: 9,
  },

  importantRow: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 4,
    borderRadius: 2,
  },

  imagePreview: {
    marginBottom: 20,
    alignItems: "center",
  },

  imageBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 6,
  },

  image: {
    width: 240,
    height: 240,
    objectFit: "contain",
  },
});
