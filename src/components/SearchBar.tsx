import { useFilterProperties } from "@/hooks/use-filter-properties";
import { LocationOn, Search } from "@mui/icons-material";
import { Button, Container, InputBase, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

import { useForm } from "@mantine/form";
import Link from "next/link";

export function SearchBar() {
  const { replace } = useRouter();
  const [_, setFilter] = useFilterProperties();

  const form = useForm({
    initialValues: {
      searchTerm: "",
    },
  });

  return (
    <Paper
      component='form'
      onSubmit={() => {
        setFilter({ filter: form.values.searchTerm });
        replace(`/properties?filter=${form.values.searchTerm}`);
      }}
      sx={{
        p: "10px 10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
        borderRadius: "0px",
        maxWidth: "45%",
        minWidth: "25%",
        ml: "28%",
      }}
    >
      <Container sx={{ boxShadow: "0px 2px 2px grey;", py: 1 }}>
        <LocationOn sx={{ color: "#DF593D" }} />
        <InputBase
          sx={{ fontSize: { lg: 12, sm: 12, xs: 7 } }}
          placeholder='  Search Property'
          inputProps={{ "aria-label": "search-property" }}
          {...form.getInputProps("searchTerm")}
        />
      </Container>
      <Button
        type='submit'
        component={Link}
        href={`/properties?filter=${form.values.searchTerm}`}
        className='SearchButton'
        sx={{
          bgcolor: "#26a69a",
          color: "white",
          px: 5,
          py: 1,
          ml: 2,
          borderRadius: "0px",
          "&:hover": { backgroundColor: "#52d6cf" },
        }}
        aria-label='search'
      >
        <Search />
        Search
      </Button>
    </Paper>
  );
}
