import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export function SearchResults({
  opened,
  onClose,
  results,
}: {
  opened: boolean;
  onClose: () => void;
  results: RTask[];
}) {
  return (
    <Dialog open={opened} onClose={onClose} fullWidth>
      <DialogTitle>Search Results</DialogTitle>
      <DialogContent sx={{ maxHeight: 500, overflow: "auto" }}>
        <div className="flex flex-col gap-2">
          {results.map((result) => (
            <PropertyRequestCard key={result.id} request={result} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const statusStyles: Record<string, { color: string; background: string }> = {
  Pending: { color: "#8B8000", background: "#FFFFC5" },
  Submitted: { color: "#388e3c", background: "#e8f5e9" },
  "Update Requested": { color: "#388e3c", background: "#e8f5e9" },
  Rejected: { color: "#fff", background: "#fb0e12" },
  Approved: { color: "#fff", background: "#008c00" },
  Completed: { color: "#fff", background: "#008c00" },
};

function PropertyRequestCard({ request }: { request: RTask }) {
  return (
    <Box
      sx={{
        border: "1px solid #dcdcdc",
        padding: 2,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <div>
        <Typography variant="caption">Request Type: {request.type}</Typography>
        <Typography variant="subtitle1">
          Request Stage: {request.stage}
        </Typography>
      </div>
      <div>
        <Typography variant="caption">
          Request Status:{" "}
          <span
            style={{
              padding: "4px",
              borderRadius: "4px",
              ...statusStyles[request.status],
            }}
          >
            {request.status}
          </span>
        </Typography>
        <Typography variant="subtitle1">
          Registrant: {request.propertyQuery?.registrantName}
        </Typography>
      </div>
    </Box>
  );
}
