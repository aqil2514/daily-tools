export function convertToTransparentPNG(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return reject("Canvas context missing");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove white background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (r > 230 && g > 230 && b > 230) {
          data[i + 3] = 0; // alpha = transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Convert to blob instead of base64
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject("Failed to convert to PNG blob");
            return;
          }

          // Return a short URL blob
          const blobUrl = URL.createObjectURL(blob);
          resolve(blobUrl);
        },
        "image/png",
        1
      );
    };

    img.onerror = reject;
  });
}
