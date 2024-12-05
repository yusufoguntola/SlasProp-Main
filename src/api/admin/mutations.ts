import { builder } from "@/builder";
import { useMutation } from "@tanstack/react-query";

/** USERS */
export function useCreateUser() {
  return useMutation({
    mutationFn: builder.$use.admin.users.create,
  });
}

export function useDeleteUser() {
  return useMutation({
    mutationFn: builder.$use.admin.users.single_user_by_username.delete,
  });
}

export function useUpdateUser() {
  return useMutation({
    mutationFn: builder.$use.admin.users.single_user_by_username.update,
  });
}

export function useChangeUserStatus() {
  return useMutation({
    mutationFn: builder.$use.admin.users.single_user_by_username.change_status,
  });
}
/** END USERS */

/** LOCATIONS */
export function useCreateLocation() {
  return useMutation({
    mutationFn: builder.$use.admin.locations.create,
  });
}

export function useUpdateLocation() {
  return useMutation({
    mutationFn: builder.$use.admin.locations.update,
  });
}

export function useDeleteLocation() {
  return useMutation({
    mutationFn: builder.$use.admin.locations.delete,
  });
}
/** END LOCATIONS */

/** TOOLS */
export function useCreateTool() {
  return useMutation({
    mutationFn: builder.$use.admin.tools.create,
  });
}

export function useCreateToolCategory() {
  return useMutation({
    mutationFn: builder.$use.admin.tools.categories.create,
  });
}
/** END TOOLS */

/** ROLES */
export function useCreateRole() {
  return useMutation({
    mutationFn: builder.$use.admin.roles.create,
  });
}

export function useUpdateRoleById() {
  return useMutation({
    mutationFn: builder.$use.admin.roles.update,
  });
}

export function useDeleteRoleById() {
  return useMutation({
    mutationFn: builder.$use.admin.roles.delete,
  });
}

/** END ROLES */
