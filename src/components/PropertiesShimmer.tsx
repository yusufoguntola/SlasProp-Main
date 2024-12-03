import { Box, Skeleton } from "@mui/material";

export function PropertiesShimmer() {
  return (
    <Box
      sx={{
        borderBottom: "1px solid lightgray",
        pb: 4,
        mt: 4,
        display: "flex",
      }}
    >
      <Skeleton variant="rectangular" width={200} height={150} />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4, gap: 2 }}>
        <Skeleton variant="rounded" width={80} height={40} />

        <Skeleton variant="text" height={16} width={100} />
        <Skeleton variant="text" height={14} width={60} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="text" height={14} width={60} />

          <Skeleton variant="text" height={14} width={60} />

          <Skeleton variant="text" height={14} width={60} />
        </Box>
      </Box>
    </Box>
  );
}
