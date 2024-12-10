"use client";

import { useMemo, useState } from "react";

import { useCreateUser } from "@/api/admin/mutations";
import { useGetUsers } from "@/api/admin/queries";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import { Button, Modal } from "@mui/material";
import {
  MaterialReactTable,
  // type MRT_PaginationState,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { NewUser } from "./new-user";

export default function UsersTable() {
  const [modalOpened, setModalState] = useState(false);

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
            weekday: "short",
          }),
        id: "createdAt",
      },
    ],
    [],
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

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-end">
        <Button
          type="button"
          variant="contained"
          onClick={() => setModalState(true)}
        >
          Add User
        </Button>
      </div>
      <MaterialReactTable table={table} />

      <Modal open={modalOpened} onClose={() => setModalState(false)}>
        <NewUser
          initialValues={undefined}
          onClose={() => setModalState(false)}
        />
      </Modal>
    </div>
  );
}
