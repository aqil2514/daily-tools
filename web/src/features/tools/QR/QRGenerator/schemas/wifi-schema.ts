import z from "zod";

const passwordWifi = z.object({
  type: z.enum(["WPA", "WEP"]),
  ssid: z.string().min(1, "Nama WiFi wajib diisi"),
  password: z.string().min(1, "Password wajib diisi"),
  hidden: z.boolean(),
});

const noPassWifi = z.object({
  type: z.literal("nopass"),
  ssid: z.string().min(1, "Nama WiFi wajib diisi"),
  password: z.string().optional(),
  hidden: z.boolean(),
});

export const wifiSchema = z.discriminatedUnion("type", [
  noPassWifi,
  passwordWifi,
]);

export type WifiSchemaType = z.infer<typeof wifiSchema>;
