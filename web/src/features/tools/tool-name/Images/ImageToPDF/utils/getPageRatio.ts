export function getPageRatio(
  size: "a4" | "us-letter" | "fit",
  orientation: string
) {
  // base rasio ukuran PDF
  const sizes = {
    a4: 1.414, // A4: 1:1.414 (tinggi)
    "us-letter": 1.294, // US letter: 1:1.294
    fit: 1, // bebas (square)
  };

  let r = sizes[size];

  if (orientation === "landscape") {
    r = 1 / r; // rotate rasio
  }

  return r; // return height/width ratio
}
