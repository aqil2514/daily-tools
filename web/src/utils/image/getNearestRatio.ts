export function getNearestRatio(width: number, height: number) {
  const inputRatio = width / height;

  const ratios = [
    { label: "1:1", value: 1 / 1 },
    { label: "4:3", value: 4 / 3 },
    { label: "3:2", value: 3 / 2 },
    { label: "16:9", value: 16 / 9 },
    { label: "9:16", value: 9 / 16 },
    { label: "21:9", value: 21 / 9 },
    { label: "5:4", value: 5 / 4 },
    { label: "2:1", value: 2 / 1 },
    { label: "1.85:1", value: 1.85 / 1 },
    { label: "2.39:1", value: 2.39 / 1 },
  ];

  let nearest = ratios[0];
  let smallestDiff = Math.abs(inputRatio - ratios[0].value);

  for (const r of ratios) {
    const diff = Math.abs(inputRatio - r.value);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      nearest = r;
    }
  }

  return {
    nearestLabel: nearest.label,
    nearestRatio: nearest.value,
    inputRatio,
    difference: smallestDiff,
  };
}
