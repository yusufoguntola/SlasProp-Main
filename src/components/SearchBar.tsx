import { useRouter } from "next/navigation";
import { object, string } from "yup";

import { useForm, yupResolver } from "@mantine/form";
import { LocationOn, Search } from "@mui/icons-material";
import { Button } from "@mui/material";

const schema = object({
  searchTerm: string()
    .required()
    .min(3, "Search term must be at least 3 characters long")
    .max(50, "Search term must be at most 50 characters long"),
});

export function SearchBar() {
  const { push } = useRouter();

  const form = useForm({
    initialValues: {
      searchTerm: "",
    },
    validate: yupResolver(schema),
  });

  return (
    <form
      className="w-full p-3 flex items-center shadow-[0_0_10_10_rgba(108,122,137,0.5)] bg-white max-w-3xl gap-3"
      onSubmit={form.onSubmit((values) => {
        push(`/properties?filter=${values.searchTerm}`);
      })}
    >
      <div className="relative w-full flex">
        <LocationOn
          sx={{ color: "#DF593D" }}
          className="absolute top-1/2 -translate-y-1/2 left-1"
        />
        <input
          type="text"
          className="w-full p-3 pl-7 h-14 outline-none border border-gray-500"
          placeholder="Enter search term"
          name="searchTerm"
          {...form.getInputProps("searchTerm")}
        />
      </div>
      <Button
        type="submit"
        className="SearchButton"
        sx={{
          bgcolor: "#26a69a",
          color: "white",
          px: 5,
          height: 56,
          "&:hover": { backgroundColor: "#52d6cf" },
        }}
        aria-label="search"
      >
        <Search />
        Search
      </Button>
    </form>
  );
}
