"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import type { PaystackProps } from "react-paystack/dist/types";
import { number, object } from "yup";

import { useGetUserDetails, useIsAuthenticated } from "@/api/auth/queries";
import { useCreatePropertyRequest } from "@/api/properties/mutations";
import useDisclosure from "@/hooks/useDisclosure";
import { formatDate } from "@/utils/format-date";
import { calculatePayment } from "@/utils/paystack";
import { useForm, yupResolver } from "@mantine/form";
import { Chat } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

import { OwnerDetails } from "./OwnerDetails";

const PropertyMap = dynamic(() => import("./PropertyMap"), { ssr: false });

type DetailsBoxProps = {
  property: Property;
};

export function DetailsBox({ property }: DetailsBoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const isLoggedIn = useIsAuthenticated();

  const [opened, { open, close }] = useDisclosure();

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const currency = "₦";

  const formatAsPrice = (number: number | string) => {
    return Number.isNaN(number)
      ? "0.00"
      : Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
          Number(number),
        );
  };

  const formattedPrice = formatAsPrice(
    Number.parseFloat(property?.price || "0"),
  );
  // @ts-ignore
  const pricePerFootage = formatAsPrice(
    Number.parseFloat(property?.price || "0") /
      Number.parseInt(property?.squareFootage || "0"),
  );

  return (
    <>
      <Container sx={{ display: "flex", mt: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {isLoggedIn ? (
            <Button
              onClick={open}
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "16px",
                fontSize: "10px",
                px: 2.5,
                maxWidth: "max-content",
              }}
            >
              Request {property?.listingType}
            </Button>
          ) : null}
          <Typography
            sx={{
              mt: 0.5,
              color: "#26a69a",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {property?.name}
          </Typography>
          {isLoggedIn ? (
            <Typography
              sx={{ color: "#26a69a", fontWeight: "bold", fontSize: "20px" }}
            >
              {currency}
              {formattedPrice}
            </Typography>
          ) : null}
          {isLoggedIn ? (
            <Typography sx={{ color: "grey", mr: 6 }}>
              <LocationOnIcon sx={{ color: "#DF593D", fontSize: "14px" }} />
              {property?.address}
            </Typography>
          ) : null}
        </Box>

        <Box
          sx={{
            display: "flex",
            maxHeight: "80px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              px: 4,
              mr: 2,
              border: "1px solid lightgray",
            }}
          >
            <Typography
              sx={{
                color: "#26a69a",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {property?.noOfBedrooms}
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Bedrooms
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              px: 4,
              border: "1px solid lightgray",
            }}
          >
            <Typography
              sx={{
                color: "#26a69a",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {property?.squareFootage}
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Sqft
            </Typography>
          </Box>
        </Box>

        {isLoggedIn ? (
          <Box sx={{ width: "250px" }}>
            <OwnerDetails {...property?.owner} />
          </Box>
        ) : null}
      </Container>

      <Container>
        <Box
          sx={{
            border: "1px solid lightgray",
            maxWidth: "100%",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid lightgray" }}>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                borderRight: "1px solid lightgray",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>Type</Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {property?.propertyType}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                borderRight: "1px solid lightgray",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Property Sub Type
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {property?.propertySubType}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Built Year
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {property?.constructionDetails.buildYear}
              </Typography>
            </Box>
          </Box>

          {isLoggedIn ? (
            <Box sx={{ display: "flex", borderBottom: "1px solid lightgray" }}>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  borderRight: "1px solid lightgray",
                  px: 4,
                  py: 2,
                }}
              >
                <Typography sx={{ color: "gray", fontSize: 12 }}>
                  Price
                </Typography>
                <Typography sx={{ color: "black", fontWeight: "bold", mr: 13 }}>
                  {currency}
                  {pricePerFootage} per Sqft
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  borderRight: "1px solid lightgray",
                  px: 4,
                  py: 2,
                }}
              >
                <Typography sx={{ color: "gray", fontSize: 12 }}>
                  Total Area
                </Typography>
                <Typography
                  sx={{ color: "black", fontWeight: "bold", mr: 14.75 }}
                >
                  {property?.squareFootage} Sqft
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  px: 4,
                  py: 2,
                }}
              >
                <Typography sx={{ color: "gray", fontSize: 12 }}>
                  Other Price
                </Typography>
                <Typography sx={{ color: "black", fontWeight: "bold" }}>
                  {currency}55 quarterly HOA fee
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Container>

      <Container sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Description
          </Typography>
          <Typography sx={{ color: "grey", fontSize: 14, mt: 0.5 }}>
            {property?.description}
          </Typography>
        </Box>
      </Container>

      <Container sx={{ my: 6 }}>
        <PropertyMap
          latitude={property?.latitude}
          longitude={property?.longitude}
        />
      </Container>

      {isLoggedIn ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt: 2,
            mb: 4,
            gap: 4,
          }}
        >
          <Box width={"100%"}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Facts And Features
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#EFFCF7",
                  textTransform: "capitalize",
                  color: "#26a69a",
                  justifyContent: "flex-start",
                  flex: 1,
                }}
              >
                <Typography sx={{}}>Interior Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Bedrooms
                    </Typography>
                    <Typography>{property?.noOfBedrooms}</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Amenities
                    </Typography>
                    <Typography>{property?.amenities.join(", ")}</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Structural Features
                    </Typography>
                    <Typography>
                      {property?.constructionDetails.structuralFeatures.join(
                        ", ",
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Building Materials
                    </Typography>
                    <Typography>
                      {property?.constructionDetails.buildingMaterials.join(
                        ", ",
                      )}
                    </Typography>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#EFFCF7",
                  textTransform: "capitalize",
                  color: "#26a69a",
                  justifyContent: "flex-start",
                }}
              >
                <Typography sx={{}}>
                  Utilities and Green Energy Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property?.utilitiesDetails.isGreenEnergyPowered ? (
                    <>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Energy Provider
                        </Typography>
                        <Typography>
                          {property?.utilitiesDetails.greenEnergyProvider}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Sources
                        </Typography>
                        <Typography>
                          {property?.utilitiesDetails.greenEnergySources.join(
                            ", ",
                          )}
                        </Typography>
                      </div>
                    </>
                  ) : null}

                  {property?.utilitiesDetails.services.map((service) => (
                    <div key={service.type}>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {service.providerName} ({service.type})
                      </Typography>
                      <Typography>
                        {service.serviceCharge} / {service.frequency}
                      </Typography>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#EFFCF7",
                  textTransform: "capitalize",
                  color: "#26a69a",
                  justifyContent: "flex-start",
                }}
              >
                <Typography sx={{}}>
                  Community and Neighborhood Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* {property.} */}
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Neighborhood
                    </Typography>
                    <Typography>
                      {property?.neighbourhoodDetails.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Located in Gated Community
                    </Typography>
                    <Typography>
                      {property?.neighbourhoodDetails.locatedInGatedEstate
                        ? "Yes"
                        : "No"}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Population
                    </Typography>
                    <Typography>
                      {property?.neighbourhoodDetails.population}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Nearby Places
                    </Typography>
                    <ul className="list-decimal list-inside">
                      {property?.neighbourhoodDetails.proximityToPublicPlaces.map(
                        (place) => (
                          <li key={place.place}>
                            {place.place} - {place.distance} away
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#EFFCF7",
                  textTransform: "capitalize",
                  color: "#26a69a",
                  justifyContent: "flex-start",
                }}
              >
                <Typography sx={{}}>HOA and Financial Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Association
                    </Typography>
                    <Typography>
                      {property?.hoaAndFinancialDetails.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Property in Mortgage
                    </Typography>
                    <Typography>
                      {property?.hoaAndFinancialDetails.isPropertyInMortgage
                        ? "Yes"
                        : "No"}
                    </Typography>
                  </div>
                  {property?.hoaAndFinancialDetails.isPropertyInMortgage ? (
                    <>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Mortgage Provider
                        </Typography>
                        <Typography>
                          {property?.hoaAndFinancialDetails.mortgageProvider}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Property Size
                        </Typography>
                        <Typography>
                          {currency}
                          {formatAsPrice(
                            property?.hoaAndFinancialDetails.monthlyPayment,
                          )}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Property Size
                        </Typography>
                        <Typography>
                          {formatDate(
                            property?.hoaAndFinancialDetails.mortgageEndDate,
                          )}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Property Size
                        </Typography>
                        <Typography>
                          {currency}
                          {formatAsPrice(
                            property?.hoaAndFinancialDetails.outstandingBalance,
                          )}
                        </Typography>
                      </div>
                    </>
                  ) : null}
                  {property?.hoaAndFinancialDetails.hasDue ? (
                    <>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Dues Amount
                        </Typography>
                        <Typography>
                          {currency}
                          {formatAsPrice(
                            property?.hoaAndFinancialDetails.dueAmount,
                          )}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                          Dues Frequency
                        </Typography>
                        <Typography>
                          {property?.hoaAndFinancialDetails.dueFrequency}
                        </Typography>
                      </div>
                    </>
                  ) : null}
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 6,
              minWidth: 300,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid #26a69a",
                mt: 2,
                pb: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#26a69a",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  py: 1.5,
                  px: 1,
                }}
              >
                Listed By
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 2,
                  width: "100%",
                  gap: 6,
                }}
              >
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {property?.owner.firstName} {property?.owner.lastName}
                </Typography>
                <Link
                  href={`/dashboard/messages?beginConversationWith=${property?.ownerId}`}
                >
                  <Chat />
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : null}

      <RequestPayment onClose={close} opened={opened} property={property} />
    </>
  );
}

function RequestPayment({
  property,
  opened,
  onClose,
}: {
  property: Property;
  opened: boolean;
  onClose: () => void;
}) {
  const user = useGetUserDetails();
  const schema = object({
    amountOffered: number().required("Please enter an amount"),
  });

  const form = useForm({
    initialValues: {
      amountOffered: Number(property.price),
      message: "I am interested in this property",
    },
    validate: yupResolver(schema),
  });

  const mutation = useCreatePropertyRequest();

  const [paystack, setPaystack] = useState({
    amount: 0,
    reference: "",
    opened: false,
  });

  const handleSubmit = (values: typeof form.values) =>
    mutation.mutate(
      { ...values, propertyId: property.id },
      {
        onSuccess(data) {
          onClose();
          setPaystack({
            opened: true,
            amount: calculatePayment(data.data.data.amount),
            reference: data.data.data.refId,
          });
        },
      },
    );

  return (
    <>
      <Dialog open={opened} onClose={onClose} fullWidth>
        <DialogContent>
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormControl fullWidth>
              <FormLabel>Amount</FormLabel>
              <TextField
                disabled
                fullWidth
                {...form.getInputProps("amountOffered")}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Message</FormLabel>
              <TextField
                fullWidth
                multiline
                minRows={3}
                {...form.getInputProps("message")}
              />
            </FormControl>

            <Button
              type="submit"
              disabled={mutation.isPending}
              variant="contained"
              fullWidth
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <PaystackPay
        open={paystack.opened}
        close={() => setPaystack({ amount: 0, opened: false, reference: "" })}
        amount={paystack.amount}
        email={`${user?.email}`}
        publicKey="pk_test_c844526b24eec6fe53a6851ad0283e18c9adbc22"
      />
    </>
  );
}

function PaystackPay({
  open,
  close,
  ...props
}: PaystackProps & {
  open: boolean;
  close: () => void;
}) {
  const initializePaystack = usePaystackPayment(props);

  const makePayment = () =>
    initializePaystack({
      onSuccess: () => {
        close();
      },
    });

  return (
    <Dialog open={open} maxWidth="sm" onClose={() => {}}>
      <DialogContent sx={{ p: 4 }}>
        <Button variant="contained" onClick={() => makePayment()}>
          Click to Make Payment
        </Button>
      </DialogContent>
    </Dialog>
  );
}
