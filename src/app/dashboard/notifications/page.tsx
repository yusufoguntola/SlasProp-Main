"use client";

import { builder } from "@/builder";
import { DATE_FORMAT } from "@/constants/time";
import { formatDate } from "@/utils/format-date";
import { Looks3, MoreVert, Notifications } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Skeleton,
  Switch,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";

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

  const { data, isFetching } = useQuery({
    queryKey: builder.notification.get.$get(),
    queryFn: builder.$use.notification.get,
    select: ({ data }) => data,
  });

  const availableData = data?.map((notification) => (
    <Box
      key={notification.message}
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
  ));

  return (
    <Fragment>
      <Box
        sx={{
          minHeight: 500,
          maxWidth: 950,
          p: 2,
          mx: "auto",
          ml: { xs: 0, md: "30%" },
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

        <Box sx={{ display: "flex", gap: 4, mt: 4, justifyContent: "center" }}>
          <Box
            sx={{
              maxWidth: 300,
              minHeight: 400,
              backgroundColor: "#F4F4F4",
              borderRadius: 2,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            {[
              { label: "For Tasks", icon: <Looks3 sx={{ color: "orange" }} /> },
              {
                label: "Surveyor General",
                icon: <Looks3 sx={{ color: "orange" }} />,
              },
              { label: "Assistant Chief Registrar of Deeds" },
              { label: "Chat Messages" },
            ].map((filter) => (
              <Box
                key={filter.label}
                sx={{
                  p: 2,
                  borderBottom: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormGroup sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label={filter.label}
                  />
                </FormGroup>
                {filter.icon || null}
              </Box>
            ))}
          </Box>

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
            {isFetching
              ? pendingData
              : !isFetching && data?.length
                ? availableData
                : noData}
          </Box>
        </Box>
      </Box>

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
    </Fragment>
  );
}

const pendingData = Array.from({ length: 15 }).map((_, index) => (
  <Box
    key={`key-${
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      index
    }`}
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
));

const noData = (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>
      No notifications available
    </Typography>
  </Box>
);
