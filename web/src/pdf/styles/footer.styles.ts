import { StyleSheet } from "@react-pdf/renderer";

export const footer = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 9,
    color: "#555",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  bottomRow: {
    alignItems: "center", // 🔥 URL di tengah
  },

  left: {
    textAlign: "left",
  },

  center: {
    textAlign: "center",
  },

  right: {
    textAlign: "right",
  },

  link: {
    fontSize: 8,
    color: "#777",
    textDecoration: "underline", // opsional, tapi disarankan
  },
});
