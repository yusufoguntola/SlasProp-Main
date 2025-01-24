"use client";

import { useQueryState } from "nuqs";
import { useState } from "react";

import { useGetConversations, useGetMessages } from "@/api/messages/queries";
import { useGetProfile } from "@/api/profile/queries";
import { useMessagingWS } from "@/hooks/use-m-ws";
import { Search, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Fab,
  Grid2 as Grid,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function isSameUser(user1: User, user2: Profile): boolean {
  return (
    user1.firstName === user2.firstName && user1.lastName === user2.lastName
  );
}

export default function Messages() {
  const { data: user, isPending } = useGetProfile();
  const [init] = useQueryState("beginConversationWith");

  const conversations = useGetConversations();

  const [conversationId, setConversationId] = useState<PermId>("");
  const [receiverId, setReceiverId] = useState<PermId>(init ?? "");

  const messages = useGetMessages(conversationId);

  const { text, updateText } = useMessagingWS(receiverId);

  return (
    <div className="w-full">
      <Container>
        <Box
          sx={{
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
            <Grid size={{ xs: 3 }} sx={{ borderRight: "1px solid #e0e0e0" }}>
              <List>
                {isPending ? (
                  <ListItem component="button">
                    <ListItemIcon>
                      <Avatar
                        alt="John Wick"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Loading..." />
                  </ListItem>
                ) : (
                  <ListItem component="button">
                    <ListItemIcon>
                      <Avatar alt={user?.username} src={user?.imageUrl} />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${user?.firstName} ${user?.lastName}`}
                    />
                  </ListItem>
                )}
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
                {conversations.data?.data.data?.map((conv, index) => (
                  <ListItem
                    component="button"
                    key={`key-${index}`}
                    onClick={() => {
                      setConversationId(conv.lastMessage.conversationId);
                      setReceiverId(conv.user.id);
                    }}
                  >
                    <ListItemIcon>
                      <Avatar
                        alt={`${conv.user.firstName} ${conv.user.lastName}`}
                        src={conv.user.imageUrl}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${conv.user.firstName} ${conv.user.lastName}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid size={{ xs: 9 }} display="flex" flexDirection="column">
              <List
                sx={{
                  height: "60vh",
                  overflowY: "auto",
                  padding: 2,
                  flexGrow: 1,
                }}
              >
                {messages.data?.data.data?.map((message, index) => (
                  <ListItem key={`key-${index}`} sx={{ width: "100%" }}>
                    <Grid container width={"100%"}>
                      <Grid
                        size={{ xs: 12 }}
                        textAlign={
                          // biome-ignore lint/style/noNonNullAssertion: <explanation>
                          isSameUser(message.sender, user!) ? "right" : "left"
                        }
                        sx={{
                          // biome-ignore lint/style/noNonNullAssertion: <explanation>
                          backgroundColor: isSameUser(message.sender, user!)
                            ? "#A5D6A7"
                            : "#BBDEFB",
                          padding: 1,
                          borderRadius: 2,
                        }}
                        width={"100%"}
                      >
                        <ListItemText
                          sx={{
                            width: "100%",
                          }}
                          primary={message.text}
                        />

                        <ListItemText secondary="9:09" />
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
              <Divider />

              {/* Message Input */}
              {conversationId ? (
                <Grid container sx={{ padding: 2 }}>
                  <Grid size={{ xs: 10 }}>
                    <TextField
                      id="message-input"
                      label="Type Something"
                      fullWidth
                      variant="outlined"
                      value={text}
                      onChange={(ev) => updateText(ev.currentTarget.value)}
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 2 }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Fab
                      sx={{ bgcolor: "#26a69a", color: "white" }}
                      aria-label="send"
                    >
                      <Send />
                    </Fab>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
