import { parseAsString, useQueryStates } from "nuqs";

export function useFilterProperties() {
  return useQueryStates({
    filter: parseAsString.withDefault(""),
    property_type: parseAsString.withDefault(""),
    property_sub_type: parseAsString.withDefault(""),
  });
}
