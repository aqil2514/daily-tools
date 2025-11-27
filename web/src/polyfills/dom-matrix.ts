// Ensure DOMMatrix exists before pdf.js loads
if (typeof window !== "undefined" && !("DOMMatrix" in window)) {
  // Minimal polyfill
  //   @ts-expect-error pasti error
  window.DOMMatrix =
    //   @ts-expect-error pasti error
    window.WebKitCSSMatrix ||
    //   @ts-expect-error pasti error
    window.MSCSSMatrix ||
    //   @ts-expect-error pasti error
    window.CSSMatrix ||
    function DOMMatrix() {};
}
