import { theme } from "./pdfTheme";

// 📌 Layout
export const row = { flexDirection: "row" } as const;
export const col = { flexDirection: "column" } as const;

export const itemsCenter = { alignItems: "center" } as const;
export const itemsStart = { alignItems: "flex-start" } as const;
export const itemsEnd = { alignItems: "flex-end" } as const;

export const justifyCenter = { justifyContent: "center" } as const;
export const justifyBetween = { justifyContent: "space-between" } as const;
export const justifyEnd = { justifyContent: "flex-end" } as const;
export const justifyStart = { justifyContent: "flex-start" } as const;

// 📌 Text alignment
export const textLeft = { textAlign: "left" } as const;
export const textCenter = { textAlign: "center" } as const;
export const textRight = { textAlign: "right" } as const;

// 📌 Font size generator
export const text = (size: keyof typeof theme.fontSize) => ({
  fontSize: theme.fontSize[size],
});

// 📌 Font weight
export const fontNormal = { fontWeight: theme.fontWeight.normal } as const;
export const fontMedium = { fontWeight: theme.fontWeight.medium } as const;
export const fontSemibold = { fontWeight: theme.fontWeight.semibold } as const;
export const fontBold = { fontWeight: theme.fontWeight.bold } as const;

// 📌 Margin utils
export const mb = (v: keyof typeof theme.spacing) => ({
  marginBottom: theme.spacing[v],
});
export const mt = (v: keyof typeof theme.spacing) => ({
  marginTop: theme.spacing[v],
});
export const ml = (v: keyof typeof theme.spacing) => ({
  marginLeft: theme.spacing[v],
});
export const mr = (v: keyof typeof theme.spacing) => ({
  marginRight: theme.spacing[v],
});

// 📌 Padding utils
export const p = (v: keyof typeof theme.spacing) => ({
  padding: theme.spacing[v],
});
export const px = (v: keyof typeof theme.spacing) => ({
  paddingLeft: theme.spacing[v],
  paddingRight: theme.spacing[v],
});
export const py = (v: keyof typeof theme.spacing) => ({
  paddingTop: theme.spacing[v],
  paddingBottom: theme.spacing[v],
});

// 📌 Border utils
export const border = { borderWidth: 1, borderColor: "#E5E7EB" } as const;
export const borderTop = { borderTopWidth: 1, borderColor: "#E5E7EB" } as const;
export const borderBottom = { borderBottomWidth: 1, borderColor: "#E5E7EB" } as const;
export const borderLeft = { borderLeftWidth: 1, borderColor: "#E5E7EB" } as const;
export const borderRight = { borderRightWidth: 1, borderColor: "#E5E7EB" } as const;

// 📌 Gap utilities
export const gap = (v: keyof typeof theme.spacing) => ({
  gap: theme.spacing[v],
}) as const;

export const gapX = (v: keyof typeof theme.spacing) => ({
  columnGap: theme.spacing[v],
}) as const;

export const gapY = (v: keyof typeof theme.spacing) => ({
  rowGap: theme.spacing[v],
}) as const;