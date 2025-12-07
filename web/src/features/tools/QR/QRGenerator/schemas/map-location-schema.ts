import z from "zod";

const linkSchema = z.object({
  source: z.literal("link"),
  link: z.url("Link tidak valid"),
});

const coordinateSchema = z.object({
  source: z.literal("coordinate"),

  longitude: z
    .number()
    .min(-180, "Bujur minimal -180")
    .max(180, "Bujur maksimal 180"),

  latitude: z
    .number()
    .min(-90, "Lintang minimal -90")
    .max(90, "Lintang maksimal 90"),
});

export const mapLocationSchema = z.discriminatedUnion("source", [
  linkSchema,
  coordinateSchema,
]);

export type MapLocationSchemaType = z.infer<typeof mapLocationSchema>;
