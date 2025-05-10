export function formatHour(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function formatDateLong(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function parseDate(date: unknown): Date | null {
  if (!date) return null;
  if (date instanceof Date) return date;
  if (typeof date === "string") {
    const d = new Date(date);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

export function formatHourSimple(hour: number): string {
  return `${hour.toString().padStart(2, "0")}:00`;
}
