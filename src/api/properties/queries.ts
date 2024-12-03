import { builder } from "@/builder";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetProperties(page = 1) {
  return useQuery({
    queryKey: builder.properties.list.$get(page),
    queryFn: () => builder.$use.properties.list(page),
    placeholderData: keepPreviousData,
  });
}

export function useGetSingleProperty(id: number) {
  return useQuery({
    queryKey: builder.properties.single.$get(id),
    queryFn: () => builder.$use.properties.single(id),
  });
}

export function useFetchCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries",
      );
      const data = await response.json();

      const countryNames: string[] = data.data.map(
        (item: Record<string, unknown>) => item.country,
      );

      return countryNames.sort();
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}
