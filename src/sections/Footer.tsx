import Link from "next/link";

import { useCatchRedirect } from "@/hooks/use-catch-redirect";
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
  const catchRedirect = useCatchRedirect("/dashboard/add-property");
  const registerRedirect = useCatchRedirect("/dashboard/register-the-property");

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#18784E",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "1px solid #1C8C5B",
          padding: "2rem",
        }}
      >
        <Box sx={{ flex: "1", minWidth: "250px", marginBottom: "1.5rem" }}>
          <Box
            component="img"
            sx={{ height: 60, width: 150, borderRadius: 2, mb: 2 }}
            alt="Logo"
            src="/assets/Logo.png"
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://www.facebook.com/share/15raW2dFyb"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ backgroundColor: "white", height: 30, width: 30 }}
            >
              <Facebook sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              href="https://x.com/SlasProp"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ backgroundColor: "white", height: 30, width: 30 }}
            >
              <X sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/slasprop/"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ backgroundColor: "white", height: 30, width: 30 }}
            >
              <Instagram sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@slasprop"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ backgroundColor: "white", height: 30, width: 30 }}
            >
              <YouTube sx={{ fontSize: "16px", color: "black" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flex: "1", minWidth: "200px", marginBottom: "1.5rem" }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>
            Useful Links
          </Typography>
          <List>
            {[
              { name: "Home", href: "/" },
              {
                name: "Register Property",
                href: "#",
                onClick: registerRedirect,
              },
              { name: "List Property", href: "#", onClick: catchRedirect },
              { name: "Buy ", href: "/properties?listingType=Buy" },
              { name: "Sell", href: "#", onClick: catchRedirect },
              { name: "Rent", href: "/properties?listingType=Rent" },
            ].map(({ href, name, onClick }) => (
              <ListItem key={href + name} disablePadding onClick={onClick}>
                <Link href={href}>
                  <ListItemText
                    slotProps={{
                      primary: {
                        fontSize: "14px",
                      },
                    }}
                  >
                    {name}
                  </ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ flex: "1", minWidth: "200px", marginBottom: "1.5rem" }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <List>
            {[
              { name: "Blogs", href: "/blog" },
              { name: "Terms & Conditions", href: "/terms-and-conditions" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "FAQs", href: "/faq" },
              { name: "Sitemap", href: "/sitemap" },
            ].map(({ name, href }) => (
              <ListItem key={href} disablePadding>
                <Link href={href}>
                  <ListItemText
                    slotProps={{
                      primary: {
                        fontSize: "14px",
                      },
                    }}
                  >
                    {name}
                  </ListItemText>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ flex: "1", minWidth: "250px", marginBottom: "1.5rem" }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>Contact Us</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocationOn sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    fontSize: "14px",
                  },
                }}
              >
                15b Parkway, ocean Bay Estate, Lekki
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PhoneInTalk sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "14px" }}>
                +2348060500134
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <AlternateEmail sx={{ color: "#DF593D" }} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "14px" }}>
                info@slastech.com.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#18784E",
          color: "white",
          textAlign: "center",
          py: 2,
          borderTop: "1px solid #1C8C5B",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>
          {new Date().getUTCFullYear()}{" "}
          <Copyright sx={{ fontSize: "14px", verticalAlign: "middle" }} />
          <span style={{ color: "#DF593D" }}> SlasProp </span> All Rights
          Reserved
        </Typography>
        <Typography sx={{ fontSize: "14px", mt: 0.5 }}>
          SlasProp by Slas Technologies
        </Typography>
      </Box>
    </>
  );
}
