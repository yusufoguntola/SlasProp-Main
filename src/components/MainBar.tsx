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
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
