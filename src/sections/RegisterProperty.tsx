import {
  AccessTimeOutlined,
  BusinessCenterOutlined,
  LanguageOutlined,
  LightbulbOutlined,
  LockOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export function RegisterProperty() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 4, md: 8 },
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <CardMedia
        component="img"
        image="/assets/register-property.png"
        alt="This is a property image"
        sx={{
          maxWidth: { xs: "100%", md: "40%" },
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 4 },
          pt: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Unlocking a New Era in Real Estate with SlasProp's Registry Features!
        </Typography>

        <List sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
          <ListItem disablePadding>
            <ListItemIcon>
              <LockOutlined />
            </ListItemIcon>
            <ListItemText>Secure Transactions</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LanguageOutlined />
            </ListItemIcon>
            <ListItemText>Digital Ownership</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <AccessTimeOutlined />
            </ListItemIcon>
            <ListItemText>Swift Timing</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ShowChartOutlined sx={{ border: "1px solid black" }} />
            </ListItemIcon>
            <ListItemText>Transparent Records</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <BusinessCenterOutlined />
            </ListItemIcon>
            <ListItemText>Commercial Excellence</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LightbulbOutlined />
            </ListItemIcon>
            <ListItemText>Global Reach</ListItemText>
          </ListItem>
        </List>
        <Button
          size="large"
          sx={{
            backgroundColor: "#26a69a",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            maxWidth: "100%",
            width: { xs: "100%", md: "50%" },
            "&:hover": { backgroundColor: "#1e8b7e" },
            padding: 2,
            mt: 3,
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Register Now
        </Button>
      </Box>
    </Container>
  );
}
