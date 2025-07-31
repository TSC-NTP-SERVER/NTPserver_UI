export function formatDateTime(datetimeStr, timeZone = "UTC") {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
    hour12: false,
  };

  return new Intl.DateTimeFormat("en-US", options).format(
    new Date(datetimeStr)
  );
}