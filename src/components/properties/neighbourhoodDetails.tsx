import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton, MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from "@mui/material";
import React from "react";

interface PublicPlace {
  place: string;
  type: string;
  distance: string;
}

interface NeighbourhoodDetails {
  name: string;
  description: string;
  population: string;
  locatedInGatedEstate: boolean;
  proximityToPublicPlaces: PublicPlace[];
}

interface NeighbourhoodDetailsFormProps {
  formData: NeighbourhoodDetails;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: keyof PublicPlace
  ) => void;
  handleAddPublicPlace: () => void;
  handleRemovePublicPlace: (index: number) => void;
  handleDropdownChange: (e: SelectChangeEvent<string>) => void; // Use SelectChangeEvent<string>
}

export default function NeighbourhoodDetailsForm({
  formData,
  handleInputChange,
  handleAddPublicPlace,
  handleRemovePublicPlace,
  handleDropdownChange,
}: NeighbourhoodDetailsFormProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2} sx={{ mb: 2, width: "100%" }}>
        {/* Name Field */}
        <Grid item xs={6}>
           <p className="mb-1 text-[12px] text-[#000000]">Neighbourhood Name</p>
          <TextField
            label="Enter neighbourhood Name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Description Field */}
        <Grid item xs={6}>
          <p className="mb-1 text-[12px] text-[#000000]">Description</p>
          <TextField
            label="Enter description"
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            size="small"
            multiline
          />
        </Grid>

        {/* Population Field */}
        <Grid item xs={6}>
          <p className="mb-1 text-[12px] text-[#000000]">Population</p> 
          <TextField
            label="Enter Population"
            name="population"
            type="number"
            value={formData.population}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Located in Gated Estate */}
        <Grid item xs={6}>
          <p className="mb-1 text-[12px] text-[#000000]">Located in Gated Estate?</p> 
          <FormControl fullWidth size="small">
            <Select
              name="locatedInGatedEstate"
              value={String(formData.locatedInGatedEstate)}
              onChange={handleDropdownChange}
              label="Located in Gated Estate?"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Public Places Section */}
      {formData.proximityToPublicPlaces.map((place, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
          {/* Place Name */}
          <Grid item xs={4}>
           <FormControl fullWidth size="small">
      <p className="mb-1 text-[12px] text-[#000000]">Place</p>
      <Select
        name="place"
        value={place.place}
        onChange={(e) => handleInputChange(e, index, "place")}
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
          <Grid item xs={4}>
             <p className="mb-1 text-[12px] text-[#000000]">Type</p>
            <TextField
              label="Enter Type"
              name="type"
              value={place.type}
              onChange={(e) => handleInputChange(e, index, "type")}
              fullWidth
              size="small"
            />
          </Grid>

          {/* Distance */}
          <Grid item xs={3}>
             <p className="mb-1 text-[12px] text-[#000000]">Distance</p>
            <TextField
              label="Enter Distance"
              name="distance"
              value={place.distance}
              onChange={(e) => handleInputChange(e, index, "distance")}
              fullWidth
              size="small"
            />
          </Grid>

          {/* Remove Place */}
          <div className="mt-[2rem]">
          <Grid item xs={1}>
            <IconButton
              onClick={() => handleRemovePublicPlace(index)}
              color="error"
            >
              <RemoveCircleOutline />
            </IconButton>
            </Grid>
            </div>
        </Grid>
      ))}

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
