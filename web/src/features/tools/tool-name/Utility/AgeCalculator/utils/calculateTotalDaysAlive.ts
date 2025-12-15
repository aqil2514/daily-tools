export function calculateTotalDaysAlive(
  birthDate: string
): number | null {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  birth.setHours(0, 0, 0, 0);

  if (birth > today) return null;

  const diffTime = today.getTime() - birth.getTime();
  const daysAlive = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  return daysAlive;
}
