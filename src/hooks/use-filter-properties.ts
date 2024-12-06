import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useFilterProperties() {
  return useQueryStates({
    filter: parseAsString.withDefault(""),
    property_type: parseAsString.withDefault(""),
    property_sub_type: parseAsString.withDefault(""),
    page: parseAsInteger.withDefault(1),
    page_size: parseAsInteger.withDefault(10),
  });
}
