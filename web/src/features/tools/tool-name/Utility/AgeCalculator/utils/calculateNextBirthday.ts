export interface NextBirthdayResult {
  date: Date;
  daysLeft: number;
}

export function calculateNextBirthday(
  birthDate: string
): NextBirthdayResult | null {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let nextBirthday = new Date(
    today.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );

  // Handle Feb 29 on non-leap year → fallback to Feb 28
  if (birth.getMonth() === 1 && birth.getDate() === 29) {
    if (!isLeapYear(today.getFullYear())) {
      nextBirthday = new Date(today.getFullYear(), 1, 28);
    }
  }

  // Jika sudah lewat tahun ini, pakai tahun depan
  if (nextBirthday < today) {
    const nextYear = today.getFullYear() + 1;

    nextBirthday = new Date(
      nextYear,
      birth.getMonth(),
      birth.getDate()
    );

    if (birth.getMonth() === 1 && birth.getDate() === 29) {
      if (!isLeapYear(nextYear)) {
        nextBirthday = new Date(nextYear, 1, 28);
      }
    }
  }

  const diffTime = nextBirthday.getTime() - today.getTime();
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    date: nextBirthday,
    daysLeft,
  };
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
