export function formatTransactionDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTransactionTime(date: string) {
  return new Date(date)
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    .replace(" ", "");
}

export function formatShortDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB");
}
