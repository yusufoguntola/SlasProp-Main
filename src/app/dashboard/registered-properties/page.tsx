<<<<<<<< HEAD:src/app/RegisteredProperties.tsx
import RegisteredProperties from "@/app/RegisteredProperties";
import app from "next/app";
import src from "node_modules/@emotion/styled/dist/declarations/src";
========
import { MoreVert } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import { TaxOwnerDetailsCard } from "@/components/TaxOwnerDetailsCards";
import { SlasPayLogin } from "@/forms/SlasPayLogin";
>>>>>>>> 59e41c6430932db2727e58a424fead25cb150238:src/app/dashboard/registered-properties/page.tsx

// Define the types for properties
const properties: PropertiesData[] = [
  {
    id: 1,
    name: "John Doe",
    taxID: "HGFFT23T821",``
    landType: "Sample Data",
    area: 478,
    regNumber: 3246745335,
    location: "Sample Data",
    address: "17917 Holderness Ln, Pflugerville, TX 78660",
    zip: "78660",
    taxDetails: {
      year: [2022, 2021, 2020, 2019],
      propertyTax: ["$9246", "$9426", "$9246", "$9246"],
      taxAssessment: ["$481,824", "$481,824", "$481,824", "$481,824"],
      status: ["pending"],
    },
    ownerDetails: {
      owner: ["Indrani Sen", "Arindam Dutta", "Chijrant Debnath"],
      totalYears: ["2015-2017", "2017-2019", "2019-Till Date"],
      initials: ["IS", "AD", "CD"],
    },
  },
  // Add other properties if needed
];

<<<<<<<< HEAD:src/app/RegisteredProperties.tsx
const RegisteredProperties: React.FC = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
========
export default function RegisteredProperties() {
  const [isPressed, setIsPressed] = useState(false);
>>>>>>>> 59e41c6430932db2727e58a424fead25cb150238:src/app/dashboard/registered-properties/page.tsx
  const [checkHeading, setCheckHeading] = useState("Registered Properties");

  const [isHeading, setIsHeading] = useState<boolean>(false);
  const handleClick = () => {
    setIsPressed(!isPressed);
    setIsHeading(!isHeading);

    if (!isHeading) {
      setCheckHeading("Details");
    } else {
      setCheckHeading("Registered Properties");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          {checkHeading}
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
          Register New Property
        </IconButton>
      </Box>

      <Box
        sx={{
          marginLeft: "30%",
          mt: 4,
          pb: 2,
          display: "flex",
          flexDirection: "column",
        }}>
        {properties.map((property) => (
          <Box sx={{ border: "1px solid lightgray", mb: 4 }} key={property.id}>
            <Box sx={{ display: "flex", pl: 6 }}>
              <Typography
                sx={{
                  borderRight: "1px solid lightgray",
                  px: 4,
                  py: 2,
                  fontSize: "12px",
                  color: "grey",
                }}>
                Property Owner Name
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.name}
                </Typography>
              </Typography>
              <Typography
                sx={{
                  borderRight: "1px solid lightgray",
                  py: 2,
                  px: 4,
                  fontSize: "12px",
                  color: "grey",
                }}>
                Type Of Land
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.landType}
                </Typography>
              </Typography>
              <Typography sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "12px",
                    color: "grey",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}>
                  Registration Number
                  <Typography
                    sx={{ color: "black", fontWeight: "bold", margin: "auto" }}>
                    {property.regNumber}
                  </Typography>
                </Typography>
                <Button sx={{ color: "grey", ml: 15 }} onClick={handleClick}>
                  <MoreVert />
                </Button>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", border: "1px solid lightgray", pl: 6 }}>
              <Typography
                sx={{
                  borderRight: "1px solid lightgray",
                  py: 2,
                  pl: 4,
                  pr: 5.5,
                  fontSize: "12px",
                  color: "grey",
                }}>
                Property Tax ID
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.taxID}
                </Typography>
              </Typography>
              <Typography
                sx={{
                  borderRight: "1px solid lightgray",
                  py: 2,
                  pl: 4,
                  pr: 7.25,
                  fontSize: "12px",
                  color: "grey",
                }}>
                Area Of Land
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.area}
                </Typography>
              </Typography>
              <Typography
                sx={{ py: 2, px: 4, fontSize: "12px", color: "grey" }}>
                Location
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.location}
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", pl: 6 }}>
              <Typography
                sx={{
                  borderRight: "1px solid lightgray",
                  py: 2,
                  pr: 13.5,
                  fontSize: "12px",
                  color: "grey",
                }}>
                ZIP/ PIN Code
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.zip}
                </Typography>
              </Typography>
              <Typography
                sx={{ px: 4, py: 2, fontSize: "12px", color: "grey" }}>
                Registration Address
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {property.address}
                </Typography>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginLeft: "30%", pb: 2, display: "flex" }}>
        {isPressed ? (
          properties.map((property) => (
<<<<<<<< HEAD:src/app/RegisteredProperties.tsx
            <TaxOwnerDetailsCard property={property} key={property.id} />
========
            <TaxOwnerDetailsCard
              taxDetails={property.taxDetails}
              ownerDetails={property.ownerDetails}
            />
>>>>>>>> 59e41c6430932db2727e58a424fead25cb150238:src/app/dashboard/registered-properties/page.tsx
          ))
        ) : (
          <Box minHeight={140}></Box>
        )}
        {isPressed && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                border: "1px solid #26a69a",
                fontWeight: "bold",
                fontSize: "12px",
                borderBottom: "3px solid #26a69a",
                mb: 2,
                ml: 2,
                p: 1,
              }}>
              EMI: $2,109/mo
              <Typography
                component="span"
                sx={{
                  ml: 1,
                  fontSize: 11,
                  color: "blue",
                  textDecoration: "underline",
                }}>
                DETAILS
              </Typography>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #26a69a",
                fontWeight: "bold",
                fontSize: "12px",
                borderBottom: "3px solid #26a69a",
                mb: 2,
                ml: 2,
                p: 1,
              }}>
              Current Valuation
              <Typography
                component="span"
                sx={{ ml: 1, fontSize: 11, color: "#26a69a" }}>
                $565758
              </Typography>
            </Typography>

            <SlasPayLogin />
          </Box>
        )}
      </Box>
    </Container>
  );
}