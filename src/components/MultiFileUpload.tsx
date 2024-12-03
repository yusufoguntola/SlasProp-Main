import { uploadFiles } from "@/builder/upload"; // Assuming this handles the upload logic
import { Delete } from "@mui/icons-material"; // You can import any icon to delete images
import { Box, Button, Grid2 as Grid, IconButton } from "@mui/material";
import { type ChangeEvent, useState } from "react";

interface MultipleFileUploadProps {
  setImages: (images: string[]) => void; // To pass image URLs to the parent form component
}

export function MultipleFileUpload({ setImages }: MultipleFileUploadProps) {
  const [loading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]); // To store URLs of uploaded images

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const files = event?.target?.files;
    if (files && files.length > 0) {
      try {
        // Upload files and capture the response
        const data = await uploadFiles(files);

        setIsLoading(false);

        // Ensure the response is an array of objects with a `url` field for each file
        if (Array.isArray(data.data)) {
          const imageUrls = data.data.map((file: { url: string }) => file.url);

          // Add the new images to the existing uploaded images
          setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
          setImages([...uploadedImages, ...imageUrls]); // Directly update the parent component with the new images
        } else if (data.data.url) {
          // If there's only one file, handle it as a single image
          const imageUrls = [data.data.url];
          setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
          setImages([...uploadedImages, ...imageUrls]); // Directly update the parent component with the new image
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Upload failed:", error);
        setIsLoading(false);
      }
    } else {
      console.error("No files selected");
      setIsLoading(false);
    }
  };

  const handleRemoveImage = (url: string) => {
    const updatedImages = uploadedImages.filter((imageUrl) => imageUrl !== url);
    setUploadedImages(updatedImages);
    setImages(updatedImages); // Update the parent component as well
  };

  return (
    <Box
      p={3}
      border="1px dashed #ccc"
      borderRadius={2}
      textAlign="center"
      sx={{
        ml: 2,
        minWidth: "300px",
        maxHeight: "100px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto",
      }}
    >
      {/* Display the uploaded images as thumbnails */}
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        {uploadedImages.map((url, index) => (
          <Grid key={url}>
            <Box
              sx={{ position: "relative", borderRadius: 1, overflow: "hidden" }}
            >
              <img
                src={url}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "100%",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <IconButton
                onClick={() => handleRemoveImage(url)}
                sx={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  fontSize: "10px",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Upload input */}
      <Box mt={2} display="flex" justifyContent="center">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          style={{ display: "none" }}
          id="upload-input"
        />
        <label htmlFor="upload-input">
          <Button
            component="span"
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              textTransform: "capitalize",
              fontSize: "14px",
              "&:hover": { backgroundColor: "#125aa1" },
            }}
          >
            {loading ? "Uploading..." : "Upload Images"}
          </Button>
        </label>
      </Box>
    </Box>
  );
}
