"use client";

import { useGetRegisteredProperties } from "@/api/properties/queries";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { TaxOwnerDetailsCard } from "./TaxOwnerDetailsCards";

const useStyles: Record<string, SxProps<Theme>> = {
  container: {
    padding: "24px",
    ml: { xs: 0, md: "30%" },
    maxWidth: 950,
  },
  cardContainer: {
    border: "1px solid lightgray",
    marginBottom: "16px",
  },
  section: {
    display: "flex",
    padding: "16px 24px",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
  },
  sectionItem: {
    flex: 1,
    textAlign: "center",
  },
  label: {
    fontSize: "12px",
    color: "grey",
  },
  value: {
    fontWeight: "bold",
    color: "black",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "1px solid lightgray",
  },
  registerButton: {
    backgroundColor: "#DF593D",
    color: "white",
    fontSize: "12px",
    padding: "8px 16px",
    borderRadius: "16px",
    textTransform: "capitalize",
    "&:disabled": {
      backgroundColor: "lightgray",
    },
    "&:hover": {
      backgroundColor: "#DF593D",
    },
  },
};

export default function RegisteredProperties() {
  const { data, isFetching } = useGetRegisteredProperties();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] =
    useState<RegisterProperty | null>(null);

  const handleClick = (property: RegisterProperty) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <Container maxWidth="md" sx={useStyles.container}>
      <Box sx={useStyles.header}>
        <Typography variant="h6" fontWeight="bold">
          Registered Properties
        </Typography>
        <Button
          component={Link}
          href="/dashboard/register-the-property"
          sx={useStyles.registerButton}
          disabled={isFetching}
        >
          New Property
        </Button>
      </Box>

      {isFetching
        ? Array.from({ length: 3 }).map((_, index) => (
            <Loader
              key={`key-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
            />
          ))
        : data?.map((property) => (
            <Box key={property.id} sx={useStyles.cardContainer}>
              <Box sx={useStyles.section}>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>
                    Property Owner Name
                  </Typography>
                  <Typography sx={useStyles.value}>
                    {property.ownerName}
                  </Typography>
                </Box>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>Type Of Property</Typography>
                  <Typography sx={useStyles.value}>
                    {property.propertyType}
                  </Typography>
                </Box>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>
                    Registration Number
                  </Typography>
                  <Typography sx={useStyles.value}>
                    {property.registrationNumber}
                  </Typography>
                </Box>
                <IconButton onClick={() => handleClick(property)}>
                  <MoreVert />
                </IconButton>
              </Box>

              <Box sx={useStyles.section}>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>Property Tax ID</Typography>
                  <Typography sx={useStyles.value}>
                    {property.propertyTaxId}
                  </Typography>
                </Box>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>Area Of Land</Typography>
                  <Typography sx={useStyles.value}>
                    {property.areaOfLand}
                  </Typography>
                </Box>
                <Box sx={useStyles.sectionItem}>
                  <Typography sx={useStyles.label}>Location</Typography>
                  <Typography sx={useStyles.value}>
                    {property.registrantName}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}

      <Dialog open={isModalOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Property Details</DialogTitle>
        <DialogContent>
          {selectedProperty && (
            <TaxOwnerDetailsCard
              taxDetails={{
                year: [2020, 2021, 2022],
                propertyTax: ["$1000", "$2000", "$3000"],
                taxAssessment: ["$5000", "$6000", "$7000"],
                status: ["Paid", "Due", "Due"],
              }}
              ownerDetails={{
                firstName: "Lorem Ipsum",
                lastName: "Dolor Sit",
                imageUrl: "",
                id: 2,
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

function Loader() {
  return (
    <Box sx={useStyles.cardContainer}>
      <Box sx={useStyles.section}>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
      <Box sx={useStyles.section}>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box sx={useStyles.sectionItem}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Box>
      </Box>
    </Box>
  );
}
