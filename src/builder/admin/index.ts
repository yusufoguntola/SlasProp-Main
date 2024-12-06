import { axiosInstance } from "@/axios";

const roles = {
  list: (params = {}) =>
    axiosInstance.get<PostResponse<Role[]>>("/roles", { params }),
  delete: (roleId: number) => axiosInstance.delete(`/roles/${roleId}`),
  create: (payload: RoleCreationPayload) =>
    axiosInstance.post("roles", payload),
  update: ({ roleID, ...payload }: RoleCreationPayload & { roleID: PermId }) =>
    axiosInstance.patch(`/roles/${roleID}`, payload),
  permissions_list: () => axiosInstance.get("/roles/permissions/list"),
};

const users = {
  list: (params = {}) =>
    axiosInstance.get<ApiResponse<AdminUser[]>>("/users", { params }),
  claimants: (params = {}) =>
    axiosInstance.get<ApiResponse<AdminUser[]>>("/roles", { params }),
  create: (payload: UserCreationPayload) =>
    axiosInstance.post<PostResponse<AdminUser>>("users", payload),
  single_user_by_username: {
    get: (username: string) =>
      axiosInstance.get<AdminUser>(`/users/${username}`),
    delete: (username: string) => axiosInstance.delete(`/users/${username}`),
    update: ({
      username,
      ...payload
    }: Partial<UserCreationPayload> & { username: string }) =>
      axiosInstance.put<PostResponse<AdminUser>>(`/users/${username}`, payload),
    change_status: ({ username, isActive }: UserStatusPayload) =>
      axiosInstance.put(`/users/${username}`, { isActive }),
  },
};

const locations = {
  list: (params = {}) =>
    axiosInstance.get<ApiResponse<ILocation[]>>("/locations", { params }),
  create: (payload: { name: string; code: string }) =>
    axiosInstance.post<PostResponse<ILocation>>("locations", payload),
  update: ({
    locationID,
    ...payload
  }: {
    name: string;
    code: string;
    locationID: PermId;
  }) => axiosInstance.put(`/locations/${locationID}`, payload),
  delete: (locationID: PermId) =>
    axiosInstance.delete(`/locations/${locationID}`),
};

const tools = {
  list: (params = {}) => axiosInstance.get("/tools", { params }),
  create: (payload: ToolCreationPayload) => axiosInstance.put("tools", payload),
  categories: {
    list: (params = {}) => axiosInstance.get("/tools-categories", { params }),
    single: (id: PermId) => axiosInstance.get(`/tools-categories/${id}`),
    create: (payload: { name: string }) =>
      axiosInstance.post("tools-categories", payload),
  },
};

export const admin = { roles, users, locations, tools };
