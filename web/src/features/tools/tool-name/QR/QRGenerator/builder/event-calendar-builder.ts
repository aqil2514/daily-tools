import { EventCalendarSchemaType } from "../schemas/event-calendar-schema";

/**
 * Format Date object to ICS datetime: YYYYMMDDTHHMMSSZ
 */
function formatDateTime(date: Date): string {
  return date
    .toISOString()               // 2025-12-06T09:00:00.000Z
    .replace(/[-:]/g, "")        // 20251206T090000.000Z
    .replace(/\.\d{3}Z$/, "Z");  // 20251206T090000Z
}

/**
 * Format all-day date: YYYYMMDD
 */
function formatDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10).replace(/-/g, "");
}

/**
 * Escape special characters for ICS fields
 */
function escapeICS(value?: string): string {
  if (!value) return "";
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * Build ICS Event Calendar text
 */
export function buildEventICS(data: EventCalendarSchemaType): string {
  let ics = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\n";

  // Title (SUMMARY)
  ics += `SUMMARY:${escapeICS(data.title)}\n`;

  // =========================
  // ALL-DAY EVENT
  // =========================
  if (data.allDay) {
    const d = new Date(data.date);
    const formatted = formatDateOnly(d);

    ics += `DTSTART;VALUE=DATE:${formatted}\n`;
    ics += `DTEND;VALUE=DATE:${formatted}\n`;

    if (data.location) {
      ics += `LOCATION:${escapeICS(data.location)}\n`;
    }

    if (data.description) {
      ics += `DESCRIPTION:${escapeICS(data.description)}\n`;
    }

    ics += "END:VEVENT\nEND:VCALENDAR";
    return ics;
  }

  // =========================
  // TIMED EVENT (start & end)
  // =========================
  const start = new Date(data.start);
  const end = new Date(data.end);

  ics += `DTSTART:${formatDateTime(start)}\n`;
  ics += `DTEND:${formatDateTime(end)}\n`;

  if (data.location) {
    ics += `LOCATION:${escapeICS(data.location)}\n`;
  }

  if (data.description) {
    ics += `DESCRIPTION:${escapeICS(data.description)}\n`;
  }

  ics += "END:VEVENT\nEND:VCALENDAR";
  return ics;
}
