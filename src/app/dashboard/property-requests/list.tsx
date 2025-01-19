"use client";

import Link from "next/link";

import { useGetPropertyRequests } from "@/api/properties/queries";
import { Chat } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

import { Loader } from "./loader";

export function List() {
  const { data, status } = useGetPropertyRequests();

  if (status !== "success") return <Loader />;

  return (
    <div className="flex flex-col gap-4 pt-14">
      {data.data.data.map((el) => (
        <RequestCard request={el} key={el.id} />
      ))}
    </div>
  );
}

function RequestCard({ request }: { request: PropertyRequest }) {
  return (
    <div className="border border-gray-400 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:*:border-r md:last:*:border-r-0 *:border-gray-300 *:px-6">
      <div>
        <Typography variant="caption">Request User</Typography>
        <Typography variant="body2" fontWeight={600}>
          {request.createdBy.firstName} {request.createdBy.lastName}
        </Typography>
      </div>
      <div>
        <Typography variant="caption">Property Name</Typography>
        <Typography variant="body2" fontWeight={600}>
          {request.property.name}
        </Typography>
      </div>
      <div>
        <Typography variant="caption">Property Location</Typography>
        <Typography variant="body2" fontWeight={600}>
          {request.property.address}
        </Typography>
      </div>
      <div className="flex items-center">
        <div>
          <Typography variant="caption">Request Status</Typography>
          <Box
            sx={{
              display: "inline-block",
              px: 2,
              py: 0.5,
              borderRadius: 1,
              color: "#8B8000",
              background: "#FFFFC5",
            }}
          >
            <Typography variant="body2">{request.status}</Typography>
          </Box>
        </div>
        <Link
          href={`/dashboard/messages?beginConversationWith=${request.createdById}`}
        >
          <Button type="button">
            <Chat />
          </Button>
        </Link>
      </div>
    </div>
  );
}
