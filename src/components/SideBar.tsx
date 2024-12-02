import Link from "next/link";

import { useForm } from "@mantine/form";
import { EditOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import sampleImage from "../assets/profile-picture.png";

const ListOptions = [
  {
    name: "My Properties",
    address: "my-properties",
  },
  {
    name: "Add Property",
    address: "add-property",
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

export function SideBar() {
  const form = useForm({
    initialValues: {
      slider: true,
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: 270,
          position: "fixed",
          boxSizing: "border-box",
          // left: "4%",
          height: "100vh", // Full viewport height
          overflowY: "auto", // Enable scrolling within the sidebar if content overflows
          boxShadow: "10px 0px 10px rgba(108, 122, 137, 0.5)",
        }}
      >
        <Container sx={{ borderBottom: "1px solid lightgrey" }}>
          <Box
            sx={{
              backgroundColor: "#26a69a",
              minHeight: "60px",
              ml: -3,
              mr: -3,
            }}
          />
          <Avatar
            src={sampleImage.src}
            sx={{ width: 80, height: 80, marginTop: -6 }}
          />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
              >
                Indraniel Sen
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                User ID :#269d91
              </Typography>
            </Box>
            <Button
              size="small"
              component={Link}
              href="/dashboard/settings"
              sx={{
                color: "#26a69a",
                fontSize: "12px",
                border: "1px solid #26a69a",
                width: 70,
                my: 1,
                ml: 2,
                borderRadius: 4,
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

          {form.values.slider
            ? RegisterOptions.map((option) => (
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
              ))
            : ListOptions.map((option) => (
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
              ))}

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
    </Box>
  );
}
