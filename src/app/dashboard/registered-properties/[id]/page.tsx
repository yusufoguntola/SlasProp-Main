"use client";

import { use } from "react";

import { useGetPublicSingleProperty } from "@/api/properties/queries";
import { Skeleton } from "@/components/Skeleton";
import { currencyFormatter } from "@/utils/currency-format";
import { getInitials } from "@/utils/getInitials";
import {
  Box,
  Container,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function RegisteredPropertyDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data, status } = useGetPublicSingleProperty(id);

  return (
    <div className="w-full">
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Property Details
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                flex: 1,
                border: "1px solid #3cb391",
                borderRadius: "8px",
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#26a69a",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  py: 1.5,
                  px: 2,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  textAlign: "center",
                }}
              >
                Tax Details
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Year</TableCell>
                      <TableCell>Property Taxes</TableCell>
                      <TableCell>Tax Assessment</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="p-3 text-center" colSpan={3}>
                        No Tax Details available
                      </TableCell>
                    </TableRow>
                    {/* {taxData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{row.tax}</TableCell>
                        <TableCell>{row.assessment}</TableCell>
                      </TableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Owners Details */}
            <Box
              sx={{
                flex: 1,
                border: "1px solid #3cb391",
                borderRadius: "8px",
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#26a69a",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  py: 1.5,
                  px: 2,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  textAlign: "center",
                }}
              >
                Owners Details
              </Typography>
              <Box sx={{ mt: 2, p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Skeleton
                    visible={status !== "success"}
                    width={200}
                    height={20}
                  >
                    <Typography>
                      <b>
                        {getInitials(
                          `${data?.data.data.owner.firstName}`,
                          data?.data.data.owner.lastName,
                        )}
                      </b>{" "}
                      {data?.data.data.owner.firstName}
                      {data?.data.data.owner.lastName}
                    </Typography>
                  </Skeleton>
                  <Skeleton
                    visible={status !== "success"}
                    width={100}
                    height={20}
                  >
                    <Typography>2024 - date</Typography>
                  </Skeleton>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                border: "1px solid #3cb391",
                borderRadius: "8px",
                padding: 2,
                flex: "none",
              }}
            >
              <Skeleton
                visible={status !== "success"}
                variant="text"
                width={200}
                height={24}
              >
                <Typography>
                  EMI:{" "}
                  <b>
                    {currencyFormatter(Number(data?.data.data.price) / 12)}/mo
                  </b>{" "}
                  <Link href="#">DETAILS</Link>
                </Typography>
              </Skeleton>
            </Box>

            <Box
              sx={{
                border: "1px solid #3cb391",
                borderRadius: "8px",
                padding: 2,
                flex: "none",
              }}
            >
              <Skeleton
                visible={status !== "success"}
                variant="text"
                width={200}
                height={24}
              >
                <Typography>
                  Current Valuation{" "}
                  <b style={{ color: "#3cb391" }}>
                    {currencyFormatter(data?.data.data.price)}{" "}
                  </b>
                </Typography>
              </Skeleton>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
