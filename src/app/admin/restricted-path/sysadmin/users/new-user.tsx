"use client";

import { number, object, string } from "yup";

import { useCreateUser } from "@/api/admin/mutations";
import { useGetLocations, useGetRoles, useGetUsers } from "@/api/admin/queries";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";

const new_user: UserCreationPayload = {
  email: "",
  firstName: "",
  username: "",
  imageUrl: "",
  lastName: "",
  locationId: 0,
  phoneNumber: "",
  reportingOfficerId: null,
  reportingOfficerType: null,
  roleId: 0,
};

const schema = object({
  email: string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  firstName: string().required("Please enter a first name"),
  lastName: string().required("Please enter a first name"),
  username: string().required("Please enter a first name"),
  phoneNumber: string().required("Please enter a first name"),
  roleId: number().required("Please enter a first name"),
});

export function NewUser({
  initialValues = new_user,
  onClose,
}: {
  initialValues: UserCreationPayload | undefined;
  onClose?: () => void;
}) {
  const form = useForm({
    initialValues,
    validate: yupResolver(schema),
  });

  const roles = useGetRoles();
  const locations = useGetLocations();
  const users = useGetUsers();

  const createUser = useCreateUser();

  const handleSubmit = (values: UserCreationPayload) => {
    createUser.mutate(values, {
      onSuccess: () => {
        showToast("success", <p>User Created!</p>);
        form.reset();

        onClose?.();
      },
      onError: (error) => {
        showToast("error", error.message);
      },
    });
  };

  return (
    <form
      className="bg-white p-4 max-w-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormControl>
          <FormLabel>First name</FormLabel>
          <TextField
            fullWidth
            type="text"
            size="small"
            margin="normal"
            sx={{ color: "grey" }}
            error={!!form.errors.firstName}
            helperText={form.errors.firstName}
            autoComplete="given-name"
            {...form.getInputProps("firstName")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <TextField
            fullWidth
            type="text"
            size="small"
            margin="normal"
            sx={{ color: "grey" }}
            error={!!form.errors.lastName}
            helperText={form.errors.lastName}
            autoComplete="family-name"
            {...form.getInputProps("lastName")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField
            fullWidth
            type="text"
            size="small"
            margin="normal"
            sx={{ color: "grey" }}
            error={!!form.errors.username}
            helperText={form.errors.username}
            autoComplete="nickname"
            {...form.getInputProps("username")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField
            fullWidth
            type="email"
            size="small"
            margin="normal"
            sx={{ color: "grey" }}
            error={!!form.errors.email}
            helperText={form.errors.email}
            autoComplete="email"
            {...form.getInputProps("email")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <TextField
            fullWidth
            type="tel"
            size="small"
            margin="normal"
            sx={{ color: "grey" }}
            error={!!form.errors.phoneNumber}
            helperText={form.errors.phoneNumber}
            autoComplete="tel"
            {...form.getInputProps("phoneNumber")}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mb: 2 }}>Select a Role</FormLabel>
          <Autocomplete
            disablePortal
            fullWidth
            loading={roles.isFetching}
            options={
              roles.data?.data.data.map((el) => ({
                label: el.name,
                id: el.id,
              })) ?? []
            }
            onChange={(_, value) =>
              form.setFieldValue("roleId", Number(value?.id))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                disabled={roles.isPending}
                error={!!form.errors.roleId}
                helperText={form.errors.roleId}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mb: 2 }}>Select Reporting Officer</FormLabel>
          <Autocomplete
            disablePortal
            fullWidth
            loading={users.isFetching}
            options={
              users.data?.data.data.map((el) => ({
                label: `${el.firstName} ${el.lastName}`,
                id: el.id,
              })) ?? []
            }
            onChange={(_, value) =>
              form.setFieldValue("reportingOfficerId", Number(value?.id))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                disabled={users.isPending}
                error={!!form.errors.reportingOfficerId}
                helperText={form.errors.reportingOfficerId}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mb: 2 }}>Select Location</FormLabel>
          <Autocomplete
            disablePortal
            fullWidth
            loading={locations.isFetching}
            options={
              locations.data?.data.data.map((el) => ({
                label: el.name,
                id: el.id,
              })) ?? []
            }
            onChange={(_, value) =>
              form.setFieldValue("locationId", Number(value?.id))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                disabled={locations.isPending}
                error={!!form.errors.locationId}
                helperText={form.errors.locationId}
              />
            )}
          />
        </FormControl>
        <div className="md:col-span-2 inline-flex justify-center">
          <Button
            type="submit"
            disabled={createUser.isPending}
            sx={{ width: "50%" }}
            variant="contained"
          >
            {createUser.isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
