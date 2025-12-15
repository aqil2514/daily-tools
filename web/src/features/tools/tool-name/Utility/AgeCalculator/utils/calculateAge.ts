export interface AgeResult {
  years: number;
  months: number;
  days: number;
}

export function calculateAge(birthDate: string): AgeResult | null {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return null;

  const today = new Date();

  // Tidak boleh tanggal di masa depan
  if (birth > today) return null;

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // Jika hari negatif, pinjam hari dari bulan sebelumnya
  if (days < 0) {
    months -= 1;

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  // Jika bulan negatif, pinjam dari tahun
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Safety: usia tidak boleh negatif
  if (years < 0) return null;

  return {
    years,
    months,
    days,
  };
}
