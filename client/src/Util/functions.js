export function capitalize(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
}

export function dateParser(date) {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timestamp = Date.parse(date);
  let result = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return result.toString();
}

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}
