import { axiosInstance } from "@/axios";
import { CardMedia, Container } from "@mui/material";
import { useEffect, useState } from "react";
import sampleImage from "../assets/land-view.png";
import { PropertyCard, PropertyCardProps } from "./PropertyCard";







export function ImageCardWelcomeSearched() {

  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
   const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [lastPage, setLastPage] = useState(1);


  
  const fetchRegisteredData = async (page: number) => {
    try {
      const response = await axiosInstance.get(`/search?page=${page}&limit=3`); // Pass page number
      setProperties(response.data.data || []);
      setCurrentPage(response.data.currentPage || 1); // Update current page
      setLastPage(response.data.lastPage || 1); // Update last page
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };



   useEffect(() => {
    fetchRegisteredData(currentPage);
  }, [currentPage]);

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page); // Set the new page
    }
  };


  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={sampleImage.src}
        onLoad={() => console.log("this is loading")}
        onError={() => console.log("this is error")}
        alt="This is a land image"
        sx={{
          marginTop: "-80px",
          maxWidth: "63%",
          marginLeft: "-45px",
          objectFit: "fill",
          boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
        }}
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          overflow: "auto",
          marginTop: "100px",
          mb: 3,
          
        }}
      >
        {properties.map((property) => (
          <PropertyCard key={property?.id} {...property} />
        ))}
    
  {/* Pagination Controls */}
  <Container
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2, // Adds space between buttons and page numbers
      mt: 3, // Adds margin-top for separation from the content
    }}
  >
    <button
      type="button"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      style={{
        padding: "8px 16px",
        marginRight: "10px",
        backgroundColor: "#26a69a",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: currentPage === 1 ? "default" : "pointer",
      }}
    >
      Previous
    </button>

    {/* Page Numbers */}
    <div style={{ display: "flex", gap: "8px" }}>
      {[...Array(lastPage)].map((_, index) => (
        <p
          key={index}
          onClick={() => handlePageChange(index + 1)}
          style={{
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "4px",
            backgroundColor: currentPage === index + 1 ? "#26a69a" : "#f0f0f0",
            color: currentPage === index + 1 ? "#fff" : "#000",
            fontWeight: currentPage === index + 1 ? "bold" : "normal",
          }}
        >
          {index + 1}
        </p>
      ))}
    </div>

    <button
      type="button"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === lastPage}
      style={{
        padding: "8px 16px",
        marginLeft: "10px",
        backgroundColor: "#26a69a",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: currentPage === lastPage ? "default" : "pointer",
      }}
    >
      Next
    </button>
  </Container>
  </Container>
    </Container>
  );
}
