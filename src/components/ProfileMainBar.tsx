import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useLogout } from "@/api/auth/mutations";
import { useGetMessageList } from "@/api/messages/queries";
import { useGetNotifications } from "@/api/notifications/queries";
import { useOptionStore } from "@/stores/useOptionStore";
import {
  ArrowCircleRightOutlined,
  ChatBubbleOutlineOutlined,
  Menu as MenuIcon,
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

interface ProfileMainBarProps {
  toggle: () => void;
}

const ProfileMainBar = ({ toggle }: ProfileMainBarProps) => {
  const setOption = useOptionStore((state) => state.setOption);
  const [search, setSearch] = useState("");
  const { push } = useRouter();

  const logout = useLogout();

  const handleLogOut = () => {
    setOption(true);
    logout();
  };

  const handleSearch = () => {
    push(`/dashboard/available-properties?filter=${search}`);

    setSearch("");
  };

  const notifications = useGetNotifications();
  const messages = useGetMessageList();

  return (
    <Box
      sx={{
        marginLeft: "270px",
        marginTop: "30px",
        padding: "16px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <AppBar
        position="fixed"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 4px 2px -2px gray",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" }, p: 2 }}>
            <IconButton onClick={toggle}>
              <MenuIcon sx={{ color: "#26a69a" }} />
            </IconButton>
          </Box>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src={"/assets/Logo.png"}
              sx={{
                height: 50,
              }}
            />
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            id="searchForm"
          >
            <InputBase
              sx={{
                fontSize: { lg: 12, sm: 12, xs: 7 },
                border: "1px solid grey;",
                py: 0.25,
                px: 2,
              }}
              name="filter"
              placeholder="Search Here"
              inputProps={{ "aria-label": "search-bar" }}
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <Button
              type="submit"
              form="searchForm"
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
          </form>

          <Divider sx={{ color: "#26a69a" }} orientation="vertical" flexItem />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              component={Link}
              href="/dashboard/messages"
            >
              <Badge
                badgeContent={messages.data ? messages.data.data.total : null}
                color="error"
              >
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
              href="/dashboard/notifications"
            >
              <Badge
                badgeContent={
                  notifications.data ? notifications.data.data.length : null
                }
                color="error"
              >
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
