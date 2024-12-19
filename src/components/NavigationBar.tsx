"use client";

import Link from "next/link";

import { useMaterialMenu } from "@/hooks/use-material-menu";
import { Adb, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Buy",
    link: "/properties?type=buy",
  },
  { name: "Rent", link: "/properties?type=rent" },
  { name: "Know About SlasProp", link: "/about-us" },
  { name: "Blog", link: "/blog" },
  { name: "FAQ", link: "/faq" },
];

export function NavigationBar() {
  const { navAnchor, navAnchorEl, navIsOpen, navToggle, navClose } =
    useMaterialMenu("nav");

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#26a69a" }}>
      <Container
        maxWidth="xl"
        sx={{
          textTransform: "capitalize",
          boxShadow: "2.5px 2.5px 2.5px #33d6c7",
          maxHeight: "60px",
          minHeight: "60px",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            noWrap
            variant="body1"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              color: "inherit",
            }}
          />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              ref={navAnchor}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={navToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={navIsOpen}
              onClose={navClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={navClose}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                gap: 24,
                alignItems: "center",
              },
              width: "100%",
            }}
          >
            {pages.map((page) => (
              <Link
                href={page.link}
                key={page.name}
                className="text-white flex capitalize font-sans text-sm p-3"
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
