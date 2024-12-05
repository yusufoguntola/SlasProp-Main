import { BlogCard } from "@/components/BlogCard";
import { Box, Button, Container, Typography } from "@mui/material";

const blogs = [
  {
    id: 1,
    imageUrl: "/assets/blog-building.png",
    heading: "Tips for Finding the Perfect Rental Property",
    desc: "Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
    likes: 121,
    views: "5k",
    shares: "1K",
  },
  {
    id: 2,
    imageUrl: "/assets/blog-building.png",
    heading: "Tips for Finding the Perfect Rental Property",
    desc: "Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
    likes: 121,
    views: "5k",
    shares: "1K",
  },
  {
    id: 3,
    imageUrl: "/assets/blog-building.png",
    heading: "Tips for Finding the Perfect Rental Property",
    desc: "Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
    likes: 121,
    views: "5k",
    shares: "1K",
  },
];

export function Blogs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
        py: 10,
      }}
    >
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Box
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "30%" },
            borderLeft: "3px solid #DF593D",
            borderRight: "3px solid #DF593D",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#555" }}
          >
            Blogs
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: { xs: "22px", md: "26px" },
              color: "#DF593D",
            }}
          >
            Our Blogs
          </Typography>
        </Box>
        <Typography
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "60%" },
            fontSize: { xs: "12px", md: "14px" },
            mt: 3,
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Explore Prime Listings On SlasProp - Where Luxury Meets Functionality.
          Your Dream Property Is Just A Click Away.
        </Typography>
      </Box>

      <Container
        className="grid gap-6 py-8"
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </Container>

      <Button
        variant="outlined"
        sx={{
          color: "#26a69a",
          px: 4,
          py: 1,
          maxWidth: "150px",
          margin: "auto",
          borderRadius: "20px",
          border: "2px solid #26a69a",
          fontWeight: "bold",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#26a69a",
            color: "white",
            borderColor: "#26a69a",
          },
          transition: "all 0.3s ease",
        }}
      >
        View All
      </Button>
    </Box>
  );
}
