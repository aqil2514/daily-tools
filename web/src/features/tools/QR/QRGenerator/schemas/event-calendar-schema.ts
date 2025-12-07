import { z } from "zod";

// ============================
// EVENT DENGAN JAM (Normal event)
// ============================
const timedEvent = z.object({
  allDay: z.literal(false),

  title: z.string().min(1, "Judul acara wajib diisi"),

  // date-time must be ISO string
  start: z.string().refine(v => !isNaN(Date.parse(v)), {
    message: "Waktu mulai tidak valid",
  }),

  end: z.string().refine(v => !isNaN(Date.parse(v)), {
    message: "Waktu selesai tidak valid",
  }),

  location: z.string().optional(),
  description: z.string().optional(),
});

// ============================
// ALL-DAY EVENT (Tanpa jam)
// ============================
const allDayEvent = z.object({
  allDay: z.literal(true),

  title: z.string().min(1, "Judul acara wajib diisi"),

  // tanggal tanpa jam
  date: z.string().refine(v => !isNaN(Date.parse(v)), {
    message: "Tanggal tidak valid",
  }),

  location: z.string().optional(),
  description: z.string().optional(),
});

// ============================
// FINAL SCHEMA
// ============================
export const eventCalendarSchema = z.discriminatedUnion("allDay", [
  timedEvent,
  allDayEvent,
]);

export type EventCalendarSchemaType = z.infer<typeof eventCalendarSchema>;
