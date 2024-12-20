import {
  Box,
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

export default function RegisteredPropertyDetail() {
  const taxData = [
    { year: 2022, tax: "$9246", assessment: "$481,824 +62.5%" },
    { year: 2021, tax: "$9246", assessment: "$481,824 +62.5%" },
    { year: 2020, tax: "$9246", assessment: "$481,824 +62.5%" },
    { year: 2019, tax: "$9246", assessment: "$481,824 +62.5%" },
  ];

  const ownerData = [
    { initials: "IS", name: "Indrani Sen", years: "2015-2017" },
    { initials: "AD", name: "Arindam Dutta", years: "2017-2019" },
    { initials: "CD", name: "Chijrant Debnath", years: "2019-Till Date" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 3,
        ml: { xs: 0, md: "30%" },
        maxWidth: 950,
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
                {taxData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.tax}</TableCell>
                    <TableCell>{row.assessment}</TableCell>
                  </TableRow>
                ))}
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
            {ownerData.map((owner, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography>
                  <b>{owner.initials}</b> {owner.name}
                </Typography>
                <Typography>{owner.years}</Typography>
              </Box>
            ))}
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
          <Typography>
            EMI: <b>$2,109/mo</b> <Link href="#">DETAILS</Link>
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #3cb391",
            borderRadius: "8px",
            padding: 2,
            flex: "none",
          }}
        >
          <Typography>
            Current Valuation <b style={{ color: "#3cb391" }}>$565758</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
