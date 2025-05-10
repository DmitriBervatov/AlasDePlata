

export function formatCurrency(value: number | string): string {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(value);
}
