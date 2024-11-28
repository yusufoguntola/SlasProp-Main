import { Search, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Fab,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function Messages() {
  return (
    <Box sx={{ marginLeft: "28%", mt: 2, pb: 2, mb: 10 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component={Paper}
        sx={{ width: "100%", height: "80vh", mt: 1 }}>
        <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0" }}>
          <List>
            <ListItem key="RemySharp" component="button">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="John Wick" />
            </ListItem>
          </List>
          <Divider />
          <Grid
            item
            xs={12}
            sx={{ display: "flex" }}
            style={{ padding: "10px" }}>
            <InputBase
              sx={{
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
              }}
              aria-label="search">
              <Search />
            </Button>
          </Grid>
          <Divider />
          <List>
            <ListItem component="button" key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
              <ListItemText
                secondary="online"
                sx={{
                  textAlign: "right",
                }}
              />
            </ListItem>
            <ListItem component="button" key="Alice">
              <ListItemIcon>
                <Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alice">Alice</ListItemText>
            </ListItem>
            <ListItem component="button" key="CindyBaker">
              <ListItemIcon>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List sx={{ height: "60vh", overflowY: "auto" }}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "right",
                    }}
                    primary="Hey man, What's up ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "right",
                    }}
                    secondary="09:30"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "left",
                    }}
                    primary="Hey, I am Good! What about you ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "left",
                    }}
                    secondary="09:31"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "right",
                    }}
                    primary="Cool. I am good, let's catch up!"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={{
                      textAlign: "right",
                    }}
                    secondary="10:30"
                  />
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid item xs={1} alignItems="right" sx={{ ml: 1 }}>
              <Fab
                sx={{ backgroundColor: "#26a69a", color: "white" }}
                aria-label="add">
                <Send />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
