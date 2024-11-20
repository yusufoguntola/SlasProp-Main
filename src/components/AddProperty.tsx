"use client";

import { MultipleFileUpload } from "@/components/MultiFileUpload";
import { usePropertyType } from "@/hooks/use-property-type";
import { KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function AddProperty() {
  const { propertyType, setPropertyType } = usePropertyType();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pl: 2,
          pb: 2,
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Add New Property
        </Typography>
        <IconButton
          sx={{
            backgroundColor: "#DF593D",
            "&:hover": { backgroundColor: "#DF593D" },
            borderRadius: "16px",
            color: "white",
            fontSize: "12px",
            p: 1,
          }}>
          Add Property
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          flexDirection: "row",
          mt: 2,
          pl: 2,
        }}>
        <Box component="form">
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Name Of Property
          </FormLabel>
          <TextField size="small" fullWidth label="Enter data" sx={{ my: 1 }} />
          <Stack spacing={38} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Price
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Property Type
            </FormLabel>
          </Stack>
          <Stack spacing={4} direction="row" sx={{ my: 1 }}>
            <TextField
              size="small"
              label="Enter data"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "14px",
                        borderRight: "1px solid lightgrey",
                      }}>
                      $
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ mx: 2, minWidth: 220 }} size="small">
              <Select
                defaultValue=""
                value={propertyType || null}
                sx={{ fontSize: "12px" }}
                name="propertyType"
                onChange={(e) => setPropertyType(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="" sx={{ fontSize: "12px" }}>
                  <em>Property Type</em>
                </MenuItem>
                <MenuItem value={10} sx={{ fontSize: "12px" }}>
                  Ten
                </MenuItem>
                <MenuItem value={20} sx={{ fontSize: "12px" }}>
                  Twenty
                </MenuItem>
                <MenuItem value={30} sx={{ fontSize: "12px" }}>
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={34} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Build Year
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Total Sqft
            </FormLabel>
          </Stack>
          <Stack spacing={13} direction="row" sx={{ my: 1 }}>
            <TextField size="small" label="Enter data" />
            <TextField
              size="small"
              label="Enter data"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "12px",
                        borderRight: "1px solid lightgrey",
                        pl: -1,
                      }}>
                      Sqft
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack spacing={38} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Rate
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Garage
            </FormLabel>
          </Stack>
          <Stack spacing={14} direction="row" sx={{ my: 1 }}>
            <TextField size="small" label="Enter data" />
            <TextField
              size="small"
              label="Enter data"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "12px",
                        borderLeft: "1px solid lightgrey",
                        pl: -1,
                      }}>
                      Garage Type
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Property Description
          </FormLabel>
          <TextField
            fullWidth
            label="Enter Data"
            multiline
            maxRows={5}
            sx={{ my: 1 }}
          />
        </Box>

        <MultipleFileUpload />
      </Box>

      <Button
        sx={{
          marginLeft: "31%",
          mt: 4,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Property Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Construction Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Utilities / Green Energy Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Community and Neighborhood Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          mb: 3,
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        HOA and Financial Details
      </Button>
    </Container>
  );
}
