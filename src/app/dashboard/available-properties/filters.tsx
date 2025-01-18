import { useFilterProperties } from "@/hooks/use-filter-properties";

import {
  debounce,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { type ChangeEvent, useCallback, useState } from "react";

const listingTypes = ["Buy", "Rent", "Lease"];

export function Filters() {
  const [search, setSearch] = useState("");
  const [filters, setFilter] = useFilterProperties();

  const setDebouncedSearch = useCallback(
    debounce(
      (filter: string) =>
        setFilter({
          filter,
        }),
      750,
    ),
    [],
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setSearch(value);
    setDebouncedSearch(value);
  };

  return (
    <div className="flex pb-6 gap-6">
      <div className="flex-1 relative">
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Search"
            placeholder="Search for a property..."
            value={search}
            onChange={handleSearchChange}
          />
        </FormControl>
      </div>
      <FormControl className="w-full max-w-32">
        <InputLabel>Listing Type</InputLabel>
        <Select
          value={filters.listingType}
          onChange={(ev) => setFilter({ listingType: ev.target.value })}
        >
          <MenuItem value="">All</MenuItem>
          {listingTypes.map((listingType) => (
            <MenuItem value={listingType} key={listingType}>
              {listingType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
