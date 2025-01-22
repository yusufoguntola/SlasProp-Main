import Link from "next/link";

import { useGetProfile } from "@/api/profile/queries";
import { useForm } from "@mantine/form";
import { EditOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

const ListOptions = [
  {
    name: "Available Properties",
    address: "available-properties",
  },
  {
    name: "Add Property",
    address: "add-property",
  },
  {
    name: "My Properties",
    address: "my-properties",
  },
  {
    name: "Property Requests",
    address: "property-requests",
  },
];

const RegisterOptions = [
  {
    name: "Registered Properties",
    address: "registered-properties",
  },
  {
    name: "Register Property",
    address: "register-the-property",
  },
];

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function SideBar({ isOpen, toggle }: SideBarProps) {
  const form = useForm({
    initialValues: {
      slider: false,
    },
  });

  const { data: user, isPending } = useGetProfile();
  const SidebarContent = () => (
    <aside className="w-[270px] sticky top-16 overflow-hidden shadow-[10px_0_10px_rgba(108,122,137,0.5)] bg-white h-[calc(100dvh-64px)]">
      <Box sx={{ overflowY: "auto" }}>
        <Container
          sx={{
            borderBottom: "1px solid lightgrey",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#26a69a",
              minHeight: "60px",
              ml: -3,
              mr: -3,
            }}
          />
          {isPending ? (
            <Avatar
              sx={{
                width: 80,
                height: 80,
                marginTop: -6,
                backgroundColor: "white",
                border: "2px solid #26a69a",
                ml: 2,
              }}
            />
          ) : (
            <Avatar
              src={user?.imageUrl}
              sx={{ width: 80, height: 80, marginTop: -6 }}
            />
          )}
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              {isPending ? (
                <>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "black",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "4px",
                      width: "100px",
                      height: "20px",
                      mb: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "4px",
                      width: "150px",
                      height: "16px",
                    }}
                  />
                </>
              ) : (
                <>
                  <Typography
                    className="truncate"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    {user?.firstName} {user?.lastName}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    User ID : {user?.username}
                  </Typography>
                </>
              )}
            </Box>
            <Button
              size="small"
              component={Link}
              href="/dashboard/settings"
              sx={{
                color: "#26a69a",
                fontSize: "12px",
                border: "1px solid #26a69a",
                my: 1,
                ml: 2,
                borderRadius: 4,
                flexShrink: 0,
              }}
            >
              <EditOutlined
                sx={{ mr: 1, color: "#26a69a", fontSize: "large" }}
              />
              Edit
            </Button>
          </Box>
        </Container>

        <List>
          <ListItem sx={{ borderBottom: "1px solid lightgrey" }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ ml: 2 }}
            >
              <Typography sx={{ fontSize: "12px", color: "#26a69a" }}>
                List Property
              </Typography>
              <Switch {...form.getInputProps("slider", { type: "checkbox" })} />
              <Typography sx={{ fontSize: "12px", color: "#26a69a" }}>
                Register Property
              </Typography>
            </Stack>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ borderBottom: "1px solid lightgrey" }}
              component={Link}
              href="/dashboard"
            >
              <ListItemText
                primary={"Dashboard"}
                primaryTypographyProps={{ fontSize: "12px" }}
                sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              />
            </ListItemButton>
          </ListItem>

          {(form.values.slider ? RegisterOptions : ListOptions).map(
            (option) => (
              <ListItem disablePadding key={option.name}>
                <ListItemButton
                  sx={{ borderBottom: "1px solid lightgrey" }}
                  component={Link}
                  href={`/dashboard/${option.address}`}
                >
                  <ListItemText
                    sx={{
                      color: "#26a69a",
                      textTransform: "uppercase",
                      ml: 2,
                    }}
                    primaryTypographyProps={{ fontSize: "12px" }}
                    primary={option.name}
                  />
                </ListItemButton>
              </ListItem>
            ),
          )}

          <ListItem disablePadding>
            <ListItemButton
              sx={{ borderBottom: "1px solid lightgrey" }}
              component={Link}
              href="/dashboard/messages"
            >
              <ListItemText
                sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
                primaryTypographyProps={{ fontSize: "12px" }}
                primary={"Messages"}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ borderBottom: "1px solid lightgrey" }}
              component={Link}
              href="/dashboard/settings"
            >
              <ListItemText
                sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
                primaryTypographyProps={{ fontSize: "12px" }}
                primary={"Settings"}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard/notifications">
              <ListItemText
                sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
                primaryTypographyProps={{ fontSize: "12px" }}
                primary={"Notifications"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </aside>
  );

  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={toggle}>
        <SidebarContent />
      </Drawer>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <SidebarContent />
      </Box>
    </>
  );
}
