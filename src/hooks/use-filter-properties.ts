import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useFilterProperties(page_size = 10) {
  return useQueryStates({
    filter: parseAsString.withDefault(""),
    property_type: parseAsString.withDefault(""),
    property_sub_type: parseAsString.withDefault(""),
    page: parseAsInteger.withDefault(1),
    page_size: parseAsInteger.withDefault(page_size),
    listingType: parseAsString.withDefault(""),
    status: parseAsString.withDefault(""),
  });
}
