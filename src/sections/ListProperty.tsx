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

import sampleImage from "../assets/list-property.png";

export function ListProperty() {
  return (
    <Container
      sx={{
        display: "flex",
        padding: 8,
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", pt: 2, pl: 15 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Discover a New Era with SlasProp!
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <LanguageOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Seamless Listings:</span>{" "}
              Effortless Property Discovery.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Smart Filters:</span>{" "}
              Tailored Searches, Made Easy.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Advanced Search</span> Dive
              Deep Into Our Vast Database.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CameraAltOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Stunning Visuals:</span>{" "}
              Captivating Property Showcases.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <BusinessCenterOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Business Spaces:</span>{" "}
              Diverse Commercial Spots.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LightbulbOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>
              <span style={{ fontWeight: "bold" }}>Location Insights:</span>{" "}
              Informed Decisions, Every Time.
            </ListItemText>
          </ListItem>
        </List>
        <Button
          size="large"
          sx={{
            backgroundColor: "#26a69a",
            color: "white",
            textDecoration: "none",
            borderRadius: "0px",
            maxWidth: "50%",
            "&:hover": { backgroundColor: "#26a69a" },
            padding: 2,
            mt: 2,
          }}
        >
          List Property
        </Button>
      </Box>
      <CardMedia
        component="img"
        image={sampleImage.src}
        alt="This is a property image"
        sx={{
          maxWidth: "45%",
          objectFit: "cover",
          pl: 10,
        }}
      />
    </Container>
  );
}
