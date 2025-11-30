import { Styles } from "@react-pdf/renderer";

export const invoiceBasicStyle: Styles = {
  page: {
    backgroundColor: "white",
    paddingLeft: "36px",
    paddingRight: "36px",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  headerInvoice: { color: "black", textAlign: "right", fontSize: "3rem" },
};
