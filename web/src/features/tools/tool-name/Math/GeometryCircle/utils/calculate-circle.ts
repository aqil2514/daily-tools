export function calculateCircle(radius: number) {
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;

  return {
    area,
    circumference,
  };
}
