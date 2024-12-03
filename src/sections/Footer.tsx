import {
  AlternateEmail,
  Copyright,
  Facebook,
  Instagram,
  LocationOn,
  PhoneInTalk,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#18784E",
          color: "white",
          display: "flex",
          borderBottom: "1px solid #1C8C5B",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", py: 4, px: 10 }}>
          <Box
            component="img"
            sx={{
              height: 60,
              width: 150,
              borderRadius: 2,
            }}
            alt="Logo"
            src="/assets/Logo.png"
          />
          <Box
            sx={{
              display: "flex",
              py: 2,
              justifyContent: "space-between",
              maxWidth: 120,
            }}
          >
            <IconButton
              sx={{ backgroundColor: "white", maxHeight: 25, maxWidth: 25 }}
            >
              <Facebook sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "white", maxHeight: 25, maxWidth: 25 }}
            >
              <X sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "white", maxHeight: 25, maxWidth: 25 }}
            >
              <Instagram sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "white", maxHeight: 25, maxWidth: 25 }}
            >
              <YouTube sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ py: 4, px: 10 }}>
          <Typography sx={{ fontWeight: "bold" }}>Useful Links</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Home
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Register Property
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                List Property
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Buy
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Sell
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Rent
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ py: 4, px: 8 }}>
          <Typography sx={{ fontWeight: "bold" }}>Quick Links</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Blogs
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Terms & Conditions
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Privacy Policy
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                FAQ
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", mt: -0.5 }}
              >
                Sitemap
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ py: 4, px: 10 }}>
          <Typography sx={{ fontWeight: "bold" }}>Useful Links</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon sx={{ mr: -3 }}>
                <LocationOn sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "10px" }}>
                5 Canvavans Rd, Leongatha North VIC 3953, Australia
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ mr: -3 }}>
                <PhoneInTalk sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "10px" }}>
                +61 417 841 278
              </ListItemText>
            </ListItem>
            <ListItem disablePadding sx={{ mt: 1 }}>
              <ListItemIcon sx={{ mr: -3 }}>
                <AlternateEmail sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "10px" }}>
                kppsmash@gmail.com
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#18784E", color: "white", height: "50px" }}>
        <Box sx={{ pt: 2, px: 10, display: "flex" }}>
          <Typography sx={{ fontSize: "12px", flexGrow: 1 }}>
            2023 <Copyright sx={{ maxHeight: 10, maxWidth: 10 }} />{" "}
            <span style={{ color: "#DF593D" }}>SlasProp </span> All Rights
            Reserved
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            SlasProp by Slas Technologies
          </Typography>
        </Box>
      </Box>
    </>
  );
}
