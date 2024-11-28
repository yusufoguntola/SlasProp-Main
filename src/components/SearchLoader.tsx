<<<<<<< HEAD
import { LocationOn, MyLocation, Search } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

import { usePropertyStatus } from "@/hooks/use-property-status";
import { usePropertyType } from "@/hooks/use-property-type";

export function SearchLoader() {
  const { propertyStatus, setPropertyStatus } = usePropertyStatus();
  const { propertyType, setPropertyType } = usePropertyType();

  return (
    <Paper
      component="form"
      sx={{
        p: "10px 10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
        borderRadius: "0px",
      }}
    >
      <Container sx={{ py: 1, display: "flex" }}>
        <Container
          sx={{ display: "flex", py: 1, border: "1px solid lightgrey" }}
        >
          <LocationOn sx={{ color: "#DF593D", mr: 0.5, mt: 0.5 }} />
          <InputBase
            sx={{ fontSize: { lg: 12, sm: 12, xs: 7 } }}
            placeholder="  Search Location"
            inputProps={{ "aria-label": "search-location" }}
          />
          <Button
            size="small"
            sx={{ marginRight: -2, backgroundColor: "lightgrey", flexGrow: 1 }}
          >
            <MyLocation sx={{ color: "grey" }} />
          </Button>
        </Container>

        <FormControl fullWidth sx={{ mx: 2 }}>
          <Select
            defaultValue=""
            value={propertyType || null}
            sx={{ fontSize: "14px" }}
            name="propertyType"
            onChange={(e) => setPropertyType(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Property Type</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ ml: 1 }}>
          <Select
            value={propertyStatus || null}
            name="propertyStatus"
            onChange={(e) => setPropertyStatus(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "WithoutPropertylabel" }}
            sx={{ fontSize: "14px" }}
            defaultValue=""
          >
            <MenuItem value="">
              <em>Property Status</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="button"
          className="SearchButton"
          sx={{
            bgcolor: "#26a69a",
            color: "white",
            px: 5,
            py: 1,
            ml: 2,
            borderRadius: "0px",
            minWidth: {
              lg: "150px",
            },
            "&:hover": { backgroundColor: "#52d6cf" },
          }}
          aria-label="search"
        >
          <Search />
          Search
        </Button>
      </Container>
    </Paper>
  );
}
=======
import { LocationOn, MyLocation, Search } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

import { usePropertyStatus } from "@/hooks/use-property-status";
import { usePropertyType } from "@/hooks/use-property-type";

export function SearchLoader() {
  const { propertyStatus, setPropertyStatus } = usePropertyStatus();
  const { propertyType, setPropertyType } = usePropertyType();

  return (
    <Paper
      component="form"
      sx={{
        p: "10px 10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
        borderRadius: "0px",
      }}
    >
      <Container sx={{ py: 1, display: "flex" }}>
        <Container
          sx={{ display: "flex", py: 1, border: "1px solid lightgrey" }}
        >
          <LocationOn sx={{ color: "#DF593D", mr: 0.5, mt: 0.5 }} />
          <InputBase
            sx={{ fontSize: { lg: 12, sm: 12, xs: 7 } }}
            placeholder="  Search Location"
            inputProps={{ "aria-label": "search-location" }}
          />
          <Button
            size="small"
            sx={{ marginRight: -2, backgroundColor: "lightgrey", flexGrow: 1 }}
          >
            <MyLocation sx={{ color: "grey" }} />
          </Button>
        </Container>

        <FormControl fullWidth sx={{ mx: 2 }}>
          <Select
            defaultValue=""
            value={propertyType || null}
            sx={{ fontSize: "14px" }}
            name="propertyType"
            onChange={(e) => setPropertyType(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Property Type</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ ml: 1 }}>
          <Select
            value={propertyStatus || null}
            name="propertyStatus"
            onChange={(e) => setPropertyStatus(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "WithoutPropertylabel" }}
            sx={{ fontSize: "14px" }}
            defaultValue=""
          >
            <MenuItem value="">
              <em>Property Status</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="button"
          className="SearchButton"
          sx={{
            bgcolor: "#26a69a",
            color: "white",
            px: 5,
            py: 1,
            ml: 2,
            borderRadius: "0px",
            minWidth: {
              lg: "150px",
            },
            "&:hover": { backgroundColor: "#52d6cf" },
          }}
          aria-label="search"
        >
          <Search />
          Search
        </Button>
      </Container>
    </Paper>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
