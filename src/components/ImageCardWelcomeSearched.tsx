import { axiosInstance } from "@/axios";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import { Box, Button, Container, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PropertyCard } from "./PropertyCard";

const ITEMS_PER_PAGE = 10;

export function ImageCardWelcomeSearched() {
  const [currentPage, setCurrentPage] = useState(1);
  const [{ filter }] = useFilterProperties();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", currentPage],
    queryFn: () =>
      axiosInstance.get(
        `/search/?filter=${filter}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`
      ),
  });

  const properties = data?.data.data || [];
  const lastPage = data?.data.last_page || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= lastPage) {
      setCurrentPage(newPage);
    }
  };

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
      <Container
        className='grid gap-6'
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(min(380px, 100%), 1fr))`,
          gridAutoRows: "1fr",
        }}
      >
        {isLoading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <Skeleton
              key={index}
              variant='rectangular'
              height={150}
              sx={{ borderRadius: 2 }}
            />
          ))}

        {isError && (
          <Typography color='error' textAlign='center'>
            Error loading properties. Please try again later.
          </Typography>
        )}

        {!isLoading && !isError && properties.length === 0 && (
          <Typography textAlign='center' color='text.secondary'>
            No properties found. Please adjust your search criteria.
          </Typography>
        )}

        {!isLoading &&
          properties.map((property: Property) => (
            <PropertyCard key={property?.id} {...property} />
          ))}
      </Container>

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
            variant='contained'
            color='primary'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {[...Array(lastPage)].map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "contained" : "outlined"}
              color='primary'
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant='contained'
            color='primary'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === lastPage}
          >
            Next
          </Button>
        </Box>
      )}
    </Container>
  );
}
