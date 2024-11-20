"use client";

import { usePropertyType } from "@/hooks/use-property-type";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Suspense } from "react";

export default function RegisterTheProperty() {
  const { propertyType, setPropertyType } = usePropertyType();

  return (
    <Suspense>
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
            Register New Property
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
            Register Property
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginLeft: "30%",
            flexDirection: "column",
            mt: 2,
            pl: 2,
          }}>
          <Box component="form">
            <Stack spacing={16} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Name of Current Owner
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Name of the Registrant
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={23} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Type of Land
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Registration Number
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
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
                    <em>Type of Land</em>
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
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={21} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Property Tax ID
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Area of Land
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={21} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Location
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                ZIP/PIN Code
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
              Registered Address
            </FormLabel>
            <TextField
              fullWidth
              label="Enter Data"
              multiline
              maxRows={5}
              sx={{ my: 1 }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{
            mt: 2,
            backgroundColor: "#26a69a",
            "&:hover": { backgroundColor: "#26a69a" },
            borderRadius: "16px",
            boxShadow: "10px 10px 5px #269d91 inset",
            width: "150px",
            display: "flex",
            marginLeft: "31%",
            mb: 4,
          }}>
          Submit & Pay
        </Button>
      </Container>
    </Suspense>
  );
}
