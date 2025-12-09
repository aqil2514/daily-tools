"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  eventCalendarSchema,
  EventCalendarSchemaType,
} from "../../schemas/event-calendar-schema";

import { useWatch } from "react-hook-form";

import { SubHeading } from "@/components/atoms/subHeading";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { buildEventICS } from "../../builder/event-calendar-builder";
import { useQRGenerator } from "../../store/provider";

export function EventCalendarForm() {
  const { setOptions } = useQRGenerator();
  const form = useForm<EventCalendarSchemaType>({
    resolver: zodResolver(eventCalendarSchema),
    defaultValues: {
      allDay: false,
      title: "",
      start: "",
      end: "",
      location: "",
      description: "",
    },
  });

  // Determine if all-day or normal event
  const allDay = useWatch({
    control: form.control,
    name: "allDay",
  });

  const onSubmit = (values: EventCalendarSchemaType) => {
    const outputUrl = buildEventICS(values);

    setOptions((prev) => ({ ...prev, data: outputUrl }));
  };

  return (
    <div>
      <SubHeading>Event Calendar</SubHeading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* =========================
              Event Type (all-day / timed)
             ========================= */}
          <FormField
            control={form.control}
            name="allDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Acara</FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(val === "true")}
                  defaultValue={field.value ? "true" : "false"}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih jenis acara" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="w-(--radix-select-trigger-width)">
                    <SelectItem value="false">Event dengan Jam</SelectItem>
                    <SelectItem value="true">All-Day Event</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* =========================
              Title
             ========================= */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul Acara</FormLabel>
                <FormControl>
                  <Input placeholder="Meeting Penting" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* =========================
              ALL-DAY EVENT
             ========================= */}
          {allDay && (
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* =========================
              TIMED EVENT (start - end)
             ========================= */}
          {!allDay && (
            <>
              <FormField
                control={form.control}
                name="start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waktu Mulai</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waktu Selesai</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* =========================
              Location
             ========================= */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lokasi (opsional)</FormLabel>
                <FormControl>
                  <Input placeholder="Jakarta / Zoom / Online" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* =========================
              Description
             ========================= */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi (opsional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Deskripsi acara..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
