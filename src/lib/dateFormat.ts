export function formatHour(dateString: string) {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatDateLong(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
