import Link from "next/link";

import { LoginModal } from "@/forms/login-modal";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

export function MainBar() {
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
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} href="/">
              <Box
                component="img"
                sx={{
                  height: 64,
                }}
                alt="Your logo."
                src={"/assets/Logo.png"}
              />
            </Button>
          </Box>

          {/* <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}
          >
            <Facebook style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}
          >
            <Instagram style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 1.5,
            }}
          >
            <YouTube style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid #26a69a",
              maxHeight: 30,
              maxWidth: 30,
              mr: 3,
            }}
          >
            <X style={{ color: "#26a69a", fontSize: 20 }} />
          </IconButton> */}

          {/* <Divider sx={{ height: 28, m: 0.5, mr: 2 }} orientation='vertical' /> */}
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
