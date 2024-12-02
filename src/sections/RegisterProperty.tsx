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

import sampleImage from "../assets/register-property.png";

export function RegisterProperty() {
  return (
    <Container sx={{ display: "flex", padding: 8, justifyContent: "center" }}>
      <CardMedia
        component="img"
        image={sampleImage.src}
        alt="This is a property image"
        sx={{
          maxWidth: "40%",
          objectFit: "fill",
          pl: 15,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", px: 4, pt: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Unlocking a New Era in Real Estate with SlasProp's Registry Features!
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <LockOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Secure Transactions</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LanguageOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Digital Ownership</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <AccessTimeOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Swift Timing</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ShowChartOutlined sx={{ border: "1px solid black" }} />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Transparent Records</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <BusinessCenterOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Commercial Excellence</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LightbulbOutlined />
            </ListItemIcon>
            <ListItemText sx={{ ml: -3 }}>Global Reach</ListItemText>
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
          }}>
          Register Now
        </Button>
      </Box>
    </Container>
  );
}
