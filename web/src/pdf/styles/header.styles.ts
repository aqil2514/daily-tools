import { Styles } from "@react-pdf/renderer";

export const HEADER_MARGIN_BOTTOM = -38;

export const headerStyles: Styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",

    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 32,

    borderBottomWidth: 1.5,
    borderBottomColor: "#111",
  },

  logoWrapper: {
    width: 148,
    height: 105,
    justifyContent: "flex-end",
    marginBottom: HEADER_MARGIN_BOTTOM,
  },

  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  textWrapper: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  brand: {
    fontSize: 11,
    fontFamily: "Times-Roman",
    color: "#555",
    letterSpacing: 0.6,
  },

  title: {
    fontSize: 20,
    fontFamily: "Times-Bold",
    color: "#000",
  },

  subtitle: {
    fontSize: 10,
    fontFamily: "Times-Roman",
    color: "#777",
  },
};

