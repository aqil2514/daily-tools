export function useImageLoader() {
  const urlToImage = async (imageUrl: string) => {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const blob = await response.blob();

    const file = new File([blob], "new-file");

    return file;
  };

  return { urlToImage };
}
