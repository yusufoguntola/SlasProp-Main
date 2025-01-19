import { axiosInstance } from "@/axios";
import { builder } from "@/builder";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetProperties(params = {}) {
  return useQuery({
    queryKey: builder.properties.list.$get(params),
    queryFn: () => builder.$use.properties.list(params),
    placeholderData: keepPreviousData,
  });
}
export function useGetPublicProperties(params = {}) {
  return useQuery({
    queryKey: builder.properties.publicList.$get(params),
    queryFn: () => builder.$use.properties.publicList(params),
    placeholderData: keepPreviousData,
  });
}
export function useGetFeaturedProperties() {
  return useQuery({
    queryKey: builder.properties.featuredList.$get(),
    queryFn: () => builder.$use.properties.featuredList(),
    placeholderData: keepPreviousData,
  });
}
export function useGetPublicSingleProperty(id: number | string) {
  return useQuery({
    queryKey: builder.properties.publicSingle.$get(id),
    queryFn: () => builder.$use.properties.publicSingle(id),
    placeholderData: keepPreviousData,
  });
}

export function useGetRegisteredProperties(page = 1) {
  return useQuery({
    queryKey: builder.properties.list_registered.$get(page),
    queryFn: () => builder.$use.properties.list_registered(page),
    placeholderData: keepPreviousData,
  });
}

export function useGetSingleProperty(id: number | string) {
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

export function useFetchLocations() {
  return useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      const response =
        await axiosInstance.get<
          ApiResponse<{ code: string; name: string; id: number }[]>
        >("/locations");

      return response.data.data;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useGetSearchQueryResults(propertyID: string) {
  return useQuery({
    queryKey: ["searchResults", propertyID],
  });
}

export function useGetPropertyRequests(params = {}) {
  return useQuery({
    queryKey: builder.properties.requests.list.$get(),
    queryFn: () => builder.$use.properties.requests.list(params),
  });
}
