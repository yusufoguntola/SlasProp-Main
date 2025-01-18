"use client";

import { useState } from "react";

import { builder } from "@/builder";
import { DATE_FORMAT } from "@/constants/time";
import { formatDate } from "@/utils/format-date";
import { MoreVert, Notifications } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function NotificationsComponent() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<NotificationData | null>(null);

  const handleOpenDialog = (notification: NotificationData) => {
    setSelected(notification);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelected(null);
  };

  const { data, isPending, isError } = useQuery({
    queryKey: builder.notification.get.$get(),
    queryFn: builder.$use.notification.get,
    select: ({ data }) => data,
  });

  if (isPending || isError) {
    return (
      <>
        {Array.from({ length: 15 }).map((_, index) => (
          <Box
            key={`key-${index}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              mb: 1,
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Skeleton
              variant="circular"
              width={30}
              height={30}
              sx={{ backgroundColor: "#dcdcdc" }}
            />
            <Box sx={{ flex: 1 }}>
              <Skeleton
                variant="text"
                width="50%"
                height={20}
                sx={{ backgroundColor: "#e0e0e0", mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="70%"
                height={15}
                sx={{ backgroundColor: "#e0e0e0", mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="30%"
                height={12}
                sx={{ backgroundColor: "#e0e0e0" }}
              />
            </Box>
            <Skeleton
              variant="rectangular"
              width={20}
              height={20}
              sx={{ backgroundColor: "#e0e0e0" }}
            />
          </Box>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="w-full">
        <Container>
          <Box
            sx={{
              minHeight: 500,
              p: 2,
            }}
          >
            <Box
              sx={{
                pb: 2,
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid lightgray",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Notifications
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                mt: 4,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  border: "1px solid lightgray",
                  borderRadius: 2,
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  padding: 2,
                  backgroundColor: "white",
                  height: 700,
                  overflow: "auto",
                }}
              >
                <div className="hidden last:block">
                  <Typography
                    variant="h6"
                    sx={{ color: "gray", textAlign: "center" }}
                  >
                    No notifications available
                  </Typography>
                </div>
                {data?.map((notification) => (
                  <Box
                    key={notification.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      mb: 1,
                      borderRadius: 2,
                      backgroundColor: "#f9f9f9",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Notifications
                      sx={{
                        color: "darkgreen",
                        fontSize: "30px",
                        backgroundColor: "lightgreen",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "black",
                          mb: 0.5,
                        }}
                      >
                        From Field Tasks
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "gray",
                          mb: 0.5,
                        }}
                      >
                        {notification.message}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "10px", color: "orange" }}
                        variant="caption"
                      >
                        {formatDate(notification.updatedAt, DATE_FORMAT)}
                      </Typography>
                    </Box>
                    <MoreVert
                      sx={{ color: "lightgrey", cursor: "pointer" }}
                      onClick={() => handleOpenDialog(notification)}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </div>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selected?.message}
          </Typography>

          <Typography variant="caption" sx={{ color: "gray" }}>
            Date: {formatDate(selected?.updatedAt, DATE_FORMAT)}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
