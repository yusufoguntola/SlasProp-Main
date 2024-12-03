import type { UseFormReturnType } from "@mantine/form";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2 as Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

export default function NeighbourhoodDetailsForm({
  form,
}: PropertyDetailsFormProps) {
  const handleAddPublicPlace = () => {
    form.setFieldValue("neighbourhoodDetails.proximityToPublicPlaces", [
      ...form.values.neighbourhoodDetails.proximityToPublicPlaces,
      { distance: "", place: "", type: "" },
    ]);
  };

  const handleRemovePublicPlace = (index: number) => {
    const filtered =
      form.values.neighbourhoodDetails.proximityToPublicPlaces.filter(
        (_, idx) => idx !== index,
      );

    form.setFieldValue(
      "neighbourhoodDetails.proximityToPublicPlaces",
      filtered,
    );
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2} sx={{ mb: 2, width: "100%" }}>
        {/* Name Field */}
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">Neighbourhood Name</p>
          <TextField
            label="Enter neighbourhood Name"
            name="neighbourhoodDetails.name"
            {...form.getInputProps("neighbourhoodDetails.name")}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Description Field */}
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">Description</p>
          <TextField
            label="Enter description"
            name="neighbourhoodDetails.description"
            {...form.getInputProps("neighbourhoodDetails.description")}
            fullWidth
            size="small"
            multiline
          />
        </Grid>

        {/* Population Field */}
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">Population</p>
          <TextField
            label="Enter Population"
            name="population"
            type="number"
            {...form.getInputProps("neighbourhoodDetails.population")}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Located in Gated Estate */}
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">
            Located in Gated Estate?
          </p>
          <FormControl fullWidth size="small">
            <Select
              name="locatedInGatedEstate"
              value={form.values.neighbourhoodDetails.locatedInGatedEstate}
              onChange={(ev) =>
                form.setFieldValue(
                  "neighbourhoodDetails.locatedInGatedEstate",
                  ev.target.value === "true",
                )
              }
              label="Located in Gated Estate?"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Public Places Section */}
      {form.values.neighbourhoodDetails.proximityToPublicPlaces.map(
        (place, index) => (
          <Grid container spacing={2} key={place.place} sx={{ mb: 2 }}>
            {/* Place Name */}
            <Grid size={{ xs: 4 }}>
              <FormControl fullWidth size="small">
                <p className="mb-1 text-[12px] text-[#000000]">Place</p>
                <Select
                  name={`neighbourhoodDetails.proximityToPublicPlaces.${index}.place`}
                  onChange={(e) =>
                    form.setFieldValue(
                      `neighbourhoodDetails.proximityToPublicPlaces.${index}.place`,
                      e.target.value,
                    )
                  }
                  label="Place"
                >
                  <MenuItem value="Shopping Malls">Shopping Malls</MenuItem>
                  <MenuItem value="Cinemas">Cinemas</MenuItem>
                  <MenuItem value="Schools">Schools</MenuItem>
                  <MenuItem value="Banks">Banks</MenuItem>
                  <MenuItem value="Other Notable Locations">
                    Other Notable Locations
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Place Type */}

            <Divider />
            <Grid size={{ xs: 4 }}>
              <p className="mb-1 text-[12px] text-[#000000]">Type</p>
              <TextField
                label="Enter Type"
                name={`neighbourhoodDetails.proximityToPublicPlaces.${index}.type`}
                {...form.getInputProps(
                  `neighbourhoodDetails.proximityToPublicPlaces.${index}.type`,
                )}
                fullWidth
                size="small"
              />
            </Grid>

            {/* Distance */}
            <Grid size={{ xs: 3 }}>
              <p className="mb-1 text-[12px] text-[#000000]">Distance</p>
              <TextField
                label="Enter Distance"
                name={`neighbourhoodDetails.proximityToPublicPlaces.${index}.distance`}
                {...form.getInputProps(
                  `neighbourhoodDetails.proximityToPublicPlaces.${index}.distance`,
                )}
                fullWidth
                size="small"
              />
            </Grid>

            {/* Remove Place */}
            <div className="mt-[2rem]">
              <Grid size={{ xs: 1 }}>
                <IconButton
                  onClick={() => handleRemovePublicPlace(index)}
                  color="error"
                >
                  <RemoveCircleOutline />
                </IconButton>
              </Grid>
            </div>
          </Grid>
        ),
      )}

      {/* Add Place Button */}
      <Button
        startIcon={<AddCircleOutline />}
        onClick={handleAddPublicPlace}
        sx={{ mt: 1, backgroundColor: "#EFFCF7", color: "#26a69a" }}
      >
        Add Public Place
      </Button>
    </Box>
  );
}
