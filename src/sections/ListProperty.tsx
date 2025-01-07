import { useCatchRedirect } from "@/hooks/use-catch-redirect";
import {
  BusinessCenterOutlined,
  CameraAltOutlined,
  HomeOutlined,
  LanguageOutlined,
  LightbulbOutlined,
  SearchOutlined,
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

export function ListProperty() {
  const catchRedirect = useCatchRedirect("/dashboard/add-property");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 4 },
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
        gap: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 4 },
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
          Discover a New Era with SlasProp!
        </Typography>

        <List sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
          <ListItem disablePadding>
            <ListItemIcon>
              <LanguageOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Seamless Listings:</span>{" "}
              Effortless Property Discovery.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Smart Filters:</span>{" "}
              Tailored Searches, Made Easy.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Advanced Search:</span> Dive
              Deep Into Our Vast Database.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CameraAltOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Stunning Visuals:</span>{" "}
              Captivating Property Showcases.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <BusinessCenterOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Business Spaces:</span>{" "}
              Diverse Commercial Spots.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LightbulbOutlined />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: "bold" }}>Location Insights:</span>{" "}
              Informed Decisions, Every Time.
            </ListItemText>
          </ListItem>
        </List>
        <Button
          size="large"
          onClick={catchRedirect}
          sx={{
            backgroundColor: "#26a69a",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#1e8b7e" },
            padding: 2,
            mt: 3,
          }}
        >
          List Property
        </Button>
      </Box>
      <CardMedia
        component="img"
        image="/assets/list-property.png"
        alt="This is a property image"
        sx={{
          maxWidth: {
            xs: "100%",
            md: "45%",
          },
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Container>
  );
}
