import { uploadFiles } from "@/builder/upload"; // Assuming this handles the upload logic
import { Delete } from "@mui/icons-material"; // You can import any icon to delete images
import { Box, Button, Grid, IconButton } from "@mui/material";
import { ChangeEvent, useState } from "react";

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
      borderRadius={8}
      textAlign="center"
      sx={{ maxHeight: "230px", ml: 2, backgroundColor: "lightgrey" }}
    >
      {/* Display the uploaded images as thumbnails */}
      <Grid container spacing={2} justifyContent="center">
        {uploadedImages.map((url, index) => (
          <Grid item key={index}>
            <Box sx={{ position: "relative" }}>
              <img
                src={url}
                alt={`Uploaded thumbnail ${index}`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <IconButton
                onClick={() => handleRemoveImage(url)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                }}
              >
                <Delete />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Upload input */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        style={{ display: "none" }}
        id="multiple-file-input"
      />
      <label htmlFor="multiple-file-input">
        <Button
          component="span"
          sx={{
            fontSize: "12px",
            color: "#5B5B5B",
            textTransform: "capitalize",
            border: "1px solid black",
            mt: 2,
          }}
        >
          <span>{loading ? "Loading..." : "Upload Files"}</span>
        </Button>
      </label>
    </Box>
  );
}
