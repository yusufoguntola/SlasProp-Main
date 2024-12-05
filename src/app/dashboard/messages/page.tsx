"use client";

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
import { useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([
    { text: "Hey man, What's up?", time: "09:30", align: "right" },
    { text: "Hey, I am Good! What about you?", time: "09:31", align: "left" },
    { text: "Cool. I am good, let's catch up!", time: "10:30", align: "right" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => [
        ...prev,
        { text: newMessage, time: currentTime, align: "right" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <Box
      sx={{
        marginLeft: { xs: 0, md: "23%" },
        marginRight: { xs: 0, md: "10%" },
        mt: 2,
        pb: 2,
        mb: 10,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Chat
      </Typography>

      <Grid
        container
        component={Paper}
        sx={{ width: "100%", height: "80vh", mt: 1 }}
      >
        <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0" }}>
          <List>
            <ListItem component="button">
              <ListItemIcon>
                <Avatar
                  alt="John Wick"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="John Wick" />
            </ListItem>
          </List>
          <Divider />

          <Box sx={{ display: "flex", padding: "10px" }}>
            <InputBase
              sx={{
                flex: 1,
                border: "1px solid grey",
                borderRadius: "4px",
                paddingLeft: 1,
              }}
              placeholder="Search Here"
              inputProps={{ "aria-label": "search-bar" }}
            />
            <Button
              size="small"
              sx={{
                backgroundColor: "#26a69a",
                color: "white",
                ml: 1,
                "&:hover": { backgroundColor: "#52d6cf" },
              }}
              aria-label="search"
            >
              <Search />
            </Button>
          </Box>
          <Divider />

          <List>
            {[
              { name: "Remy Sharp", status: "online", avatar: "1.jpg" },
              { name: "Alice", avatar: "3.jpg" },
              { name: "Cindy Baker", avatar: "2.jpg" },
            ].map((contact, index) => (
              <ListItem
                component="button"
                key={`key-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
              >
                <ListItemIcon>
                  <Avatar
                    alt={contact.name}
                    src={`https://material-ui.com/static/images/avatar/${contact.avatar}`}
                  />
                </ListItemIcon>
                <ListItemText primary={contact.name} />
                {contact.status && (
                  <ListItemText
                    secondary={contact.status}
                    sx={{ textAlign: "right" }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={9} display="flex" flexDirection="column">
          <List
            sx={{ height: "60vh", overflowY: "auto", padding: 2, flexGrow: 1 }}
          >
            {messages.map((message, index) => (
              <ListItem
                key={`key-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      sx={{ textAlign: message.align }}
                      primary={message.text}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      sx={{ textAlign: message.align }}
                      secondary={message.time}
                    />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />

          {/* Message Input */}
          <Grid container sx={{ padding: 2 }}>
            <Grid item xs={10}>
              <TextField
                id="message-input"
                label="Type Something"
                fullWidth
                variant="outlined"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fab
                sx={{ bgcolor: "#26a69a", color: "white" }}
                aria-label="send"
                onClick={handleSendMessage}
              >
                <Send />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
