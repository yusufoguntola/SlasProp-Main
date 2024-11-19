import { useOptionStore } from "@/stores/useOptionStore";
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

import { ProfileMenu } from "./ProfileMenu";

import { LoginModal } from "@/forms/login-modal";
import Logo from "../assets/Logo.png";

export function MainBar() {
  const option = useOptionStore((state) => state.option);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          color: "black",
          maxHeight: "80px",
          minHeight: "80px",
          boxShadow: "none",
        }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/">
              <Box
                component="img"
                sx={{
                  height: 64,
                }}
                alt="Your logo."
                src={Logo.src}
              />
            </Button>
          </Box>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}>
            <Facebook style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}>
            <Instagram style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}>
            <YouTube style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 3,
            }}>
            <X style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5, mr: 2 }} orientation="vertical" />
          {!option ? <LoginModal /> : <ProfileMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
