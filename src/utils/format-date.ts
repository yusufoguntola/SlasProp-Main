import dayjs, { type ConfigType } from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);

/**
 * Formats a Date object or date string using the specified format.
 * @param {Date | string | null | undefined} date - The Date object, date string, or null/undefined to be formatted.
 * @param {string | undefined} format - The custom format (optional). If not provided, "LLL" format will be used.
 * @returns {string | null} - The formatted date string, or null if the input date is invalid.
 */
export function formatDate(date?: ConfigType, format?: string): string {
  return dayjs(date).isValid() ? dayjs(date).format(format ?? "LLL") : "";
}

export function fromNow(date: ConfigType): string {
  return dayjs(date).fromNow();
}
