type Locale = "id" | "en";

export function formatDuration(
  totalSeconds: number,
  locale: Locale = "en"
): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return locale === "id" ? "0 detik" : "0 seconds";
  }

  const seconds = Math.floor(totalSeconds);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const units = {
    en: {
      hour: ["hour", "hours"],
      minute: ["minute", "minutes"],
      second: ["second", "seconds"],
    },
    id: {
      hour: ["jam", "jam"],
      minute: ["menit", "menit"],
      second: ["detik", "detik"],
    },
  };

  const t = units[locale];

  const parts: string[] = [];

  if (hours > 0) {
    parts.push(
      `${hours} ${hours === 1 ? t.hour[0] : t.hour[1]}`
    );
  }

  if (minutes > 0) {
    parts.push(
      `${minutes} ${
        minutes === 1 ? t.minute[0] : t.minute[1]
      }`
    );
  }

  if (secs > 0 || parts.length === 0) {
    parts.push(
      `${secs} ${secs === 1 ? t.second[0] : t.second[1]}`
    );
  }

  return parts.join(" ");
}
