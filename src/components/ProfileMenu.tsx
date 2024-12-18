"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { useLogout } from "@/api/auth/mutations";
import { useOptionStore } from "@/stores/useOptionStore";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

export function ProfileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = useRef<HTMLButtonElement>(null);
  const setOption = useOptionStore((state) => state.setOption);

  const logout = useLogout();

  const handleCloseUserMenu = () => {
    setOption(true);
    logout();
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Dashboard">
        <IconButton
          ref={anchor}
          sx={{ p: 0 }}
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          <Avatar alt="Remy Sharp" src="/assets/profile-picture.png" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchor.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={menuOpen}
      >
        <MenuItem onClick={handleClose} component={Link} href="/dashboard">
          <Typography textAlign="center">Dashboard</Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
