import { useGetPublicProperties } from "@/api/properties/queries";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Skeleton,
  Typography,
} from "@mui/material";

import { PropertyCard } from "./PropertyCard";

const ITEMS_PER_PAGE = 10;

const generateKey = (pre: unknown) => {
  return `${pre}_${new Date().getTime()}`;
};

export function ImageCardWelcomeSearched() {
  const { data, isLoading, isError } = useGetPublicProperties();
  const [{ page }, setFilter] = useFilterProperties();

  const properties = data?.data.data ?? [];
  const lastPage = data?.data.lastPage ?? 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setFilter({ page }).catch(console.log);
    }
  };

  if (isError || isLoading) {
    return (
      <Container
        className="grid gap-6 py-8"
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
          <Skeleton
            key={generateKey(index)}
            variant="rectangular"
            height={150}
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Container>
    );
  }

  return (
    <Container
      sx={{
        mt: 4,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 2 }}>
        <div className="hidden last:flex items-center justify-center py-4 text-center w-full">
          <Typography textAlign="center" color="text.secondary">
            No properties found. Please adjust your search criteria.
          </Typography>
        </div>
        {properties.map((property: Property) => (
          <Grid size={{ xs: 12, sm: 6 }} key={property?.id}>
            <PropertyCard key={property?.id} {...property} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      {!isLoading && properties.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            my: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          {[...Array(lastPage)].map((_, index) => (
            <Button
              key={generateKey(index)}
              variant={page === index + 1 ? "contained" : "outlined"}
              color="primary"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === lastPage}
          >
            Next
          </Button>
        </Box>
      )}
    </Container>
  );
}
