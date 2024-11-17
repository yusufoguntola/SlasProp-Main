import Logo from "../assets/Logo.png";

import {
  ArrowCircleRightOutlined,
  ChatBubbleOutlineOutlined,
  NotificationsNoneOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useAuth } from "@/hooks/use-auth";
import { useOptionStore } from "@/stores/useOptionStore";

const ProfileMainBar = () => {
  const setOption = useOptionStore((state) => state.setOption);

  const { logout } = useAuth();

  const handleLogOut = () => {
    setOption(true);
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1, boxShadow: "0 4px 2px -2px gray" }}>
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
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <Box
              src={Logo.src}
              component="img"
              sx={{
                height: 50,
              }}
            />
          </Typography>
          <InputBase
            sx={{
              fontSize: { lg: 12, sm: 12, xs: 7 },
              border: "1px solid grey;",
              py: 0.25,
            }}
            placeholder="  Search Here"
            inputProps={{ "aria-label": "search-bar" }}
          />
          <Button
            type="button"
            className="SearchButton"
            size="small"
            sx={{
              bgcolor: "#26a69a",
              color: "white",
              borderRadius: "0px",
              "&:hover": { backgroundColor: "#52d6cf" },
              marginRight: 3,
            }}
            aria-label="search"
          >
            <Search />
          </Button>

          <Divider sx={{ color: "#26a69a" }} orientation="vertical" flexItem />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/dashboard/messages"
            >
              <Badge badgeContent={1} color="error">
                <ChatBubbleOutlineOutlined
                  fontSize="medium"
                  sx={{ color: "#26a69a" }}
                />
              </Badge>
            </IconButton>

            <Divider
              sx={{ color: "#26a69a" }}
              orientation="vertical"
              flexItem
            />

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/dashboard/notifications"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsNoneOutlined
                  fontSize="large"
                  sx={{ color: "#26a69a" }}
                />
              </Badge>
            </IconButton>

            <Divider
              sx={{ color: "#26a69a" }}
              orientation="vertical"
              flexItem
            />

            <IconButton
              sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
              onClick={handleLogOut}
            >
              Log out
              <ArrowCircleRightOutlined
                fontSize="large"
                sx={{ ml: 1, color: "#26a69a" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ProfileMainBar;
