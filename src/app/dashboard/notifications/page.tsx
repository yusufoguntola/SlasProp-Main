import { Looks3, MoreVert, Notifications } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";

const notifications = [
  "Please view the following notification from Registrar",
  "Please view the following notification from Registrar",
  "Please view the following notification from Registrar",
  "Please view the following notification from Registrar",
  "Please view the following notification from Registrar",
];

export default function Notifcations() {
  return (
    <>
      <Box sx={{ minHeight: 500 }}>
        <Box
          sx={{
            marginLeft: "30%",
            mt: 4,
            borderBottom: "1px solid lightgray",
            pb: 2,
            display: "flex",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Notifcations
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", marginLeft: "30%", mt: 2 }}>
            <Box
              sx={{ maxWidth: 300, minHeight: 400, backgroundColor: "#F4F4F4" }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid lightgrey",
                  p: 1,
                  display: " flex",
                }}
              >
                <FormGroup sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="For Tasks"
                  />
                </FormGroup>
                <Looks3 sx={{ color: "orange" }} />
              </Box>

              <Box
                sx={{
                  borderBottom: "1px solid lightgrey",
                  p: 1,
                  display: " flex",
                }}
              >
                <FormGroup sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Surveyor General"
                  />
                </FormGroup>
                <Looks3 sx={{ color: "orange" }} />
              </Box>

              <Box
                sx={{
                  borderBottom: "1px solid lightgrey",
                  p: 1,
                  display: " flex",
                }}
              >
                <FormGroup sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Assistant Cheif Registrar of Deeds"
                  />
                </FormGroup>
              </Box>

              <Box
                sx={{
                  borderBottom: "1px solid lightgrey",
                  p: 1,
                  display: " flex",
                }}
              >
                <FormGroup sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Chat Messages"
                  />
                </FormGroup>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            {notifications.map((note) => (
              <Box sx={{ display: "flex", p: 2, ml: 2 }} key={note}>
                <Notifications
                  sx={{
                    color: "darkgreen",
                    fontSize: "30px",
                    backgroundColor: "lightgreen",
                    mr: 1,
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        ml: 2,
                        fontSize: "12px",
                        fontWeight: "bold",
                        flexGrow: 1,
                      }}
                    >
                      From Field Tasks
                    </Typography>
                    <Typography sx={{ fontSize: "9px", color: "orange" }}>
                      23-10-2024
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      paragraph
                      sx={{
                        ml: 2,
                        color: "gray",
                        flexGrow: 1,
                        fontSize: "12px",
                      }}
                    >
                      {note}
                    </Typography>
                    <MoreVert sx={{ color: "lightgrey" }} />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
