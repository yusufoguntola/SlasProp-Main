"use client";

import { useMemo } from "react";

import { useCreateUser } from "@/api/admin/mutations";
import { useGetUsers } from "@/api/admin/queries";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import {
  MaterialReactTable,
  // type MRT_PaginationState,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

export default function UsersTable() {
  const { data, isPending, isRefetching } = useGetUsers();
  const [{ page, page_size, filter }] = useFilterProperties();

  const { isPending: isSavingUser } = useCreateUser();

  const columns = useMemo<MRT_ColumnDef<AdminUser>[]>(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
        id: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
        id: "lastName",
      },
      {
        header: "UserName",
        accessorKey: "username",
        id: "username",
      },
      {
        header: "Email",
        accessorKey: "email",
        id: "email",
      },
      {
        header: "Role",
        accessorKey: "role.name",
        id: "role_name",
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
        Cell: ({ row }) =>
          new Date(row.original.createdAt).toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            dayPeriod: "short",
            weekday: "short",
          }),
        id: "createdAt",
      },
    ],
    []
  );

  const users = useMemo(() => data?.data.data ?? [], [data]);

  // const updatePagination = (paginationState: MRT_PaginationState) => {}

  const table = useMaterialReactTable({
    columns,
    data: users,
    state: {
      isLoading: isPending, //cell skeletons and loading overlay
      showProgressBars: isRefetching, //progress bars while refetching
      isSaving: isSavingUser, //progress bars and save button spinners
      pagination: { pageSize: page_size, pageIndex: page - 1 },
      globalFilter: filter,
    },
    paginationDisplayMode: "pages",
    initialState: {
      pagination: { pageSize: page_size, pageIndex: page - 1 },
      globalFilter: filter,
    },
  });

  return <MaterialReactTable table={table} />;
}
