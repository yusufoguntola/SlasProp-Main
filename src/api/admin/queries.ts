import { builder } from "@/builder";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  const [filters] = useFilterProperties();

  return useQuery({
    queryKey: builder.admin.users.list.$get(filters),
    queryFn: () => builder.$use.admin.users.list(filters),
  });
}

export function useGetClaimants() {
  const [filters] = useFilterProperties();

  return useQuery({
    queryKey: builder.admin.users.claimants.$get(filters),
    queryFn: () => builder.$use.admin.users.claimants(filters),
  });
}

export function useGetUserByUserName(username: string) {
  return useQuery({
    queryKey: builder.admin.users.single_user_by_username.$get(),
    queryFn: () =>
      builder.$use.admin.users.single_user_by_username.get(username),
  });
}

export function useGetPermissions() {
  return useQuery({
    queryKey: builder.admin.roles.permissions_list.$get(),
    queryFn: () => builder.$use.admin.roles.permissions_list(),
  });
}

export function useGetRoles() {
  return useQuery({
    queryKey: builder.admin.roles.list.$get(),
    queryFn: () => builder.$use.admin.roles.list(),
  });
}

export function useGetTools() {
  return useQuery({
    queryKey: builder.admin.tools.list.$get(),
    queryFn: () => builder.$use.admin.tools.list(),
  });
}

export function useGetToolById() {}

export function useGetToolsCategories() {
  return useQuery({
    queryKey: builder.admin.tools.categories.list.$get(),
    queryFn: () => builder.$use.admin.tools.categories.list(),
  });
}

export function useGetToolCategoryById() {}
