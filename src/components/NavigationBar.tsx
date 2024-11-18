"use client";

import { useMaterialMenu } from "@/hooks/use-material-menu";
import { Adb, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = [
  "Home",
  "Properties",
  "Buy",
  "Rent",
  "Know About SlasProp",
  "Blogs",
  "FAQ",
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
        }}>
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
              color="inherit">
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
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={navClose}>
                  <Typography textAlign="center">{page}</Typography>
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navClose}
                sx={{
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  mr: 9,
                }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
