import { useRef, useState } from "react";

import { uploadFiles } from "@/builder/upload";
import type { UseFormReturnType } from "@mantine/form";
import { Avatar, Button, CircularProgress } from "@mui/material";

interface ProfilePhotoProps {
  // biome-ignore lint/suspicious/noExplicitAny: TODO: will be removed
  form: UseFormReturnType<any>;
  fieldName: string; // Accept the field name for the image
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ form, fieldName }) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUploading(true);
    const file = event.target.files;

    try {
      if (file) {
        form.setFieldValue(fieldName, URL.createObjectURL(file?.[0]));
        const res = await uploadFiles(file);
        // Set the image URL for preview
        if (res.data) {
          // form.setFieldValue(fieldName, res?.data?.url);
        }
        setUploading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset the input value
        }
      }
    } catch (error) {
      setUploading(false);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "20px",
      }}
    >
      <Avatar
        src={form.values[fieldName]}
        alt='Profile'
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px solid #26a69a",
        }}
      />
      <input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        style={{ display: "none" }}
        id={`${fieldName}-input`}
        ref={fileInputRef}
      />
      <Button
        variant='contained'
        onClick={handleButtonClick}
        disabled={uploading}
        sx={{
          backgroundColor: "#26a69a",
          "&:hover": { backgroundColor: uploading ? "#26a69a" : "#1e8b81" },
          borderRadius: "16px",
          boxShadow: "10px 10px 5px #269d91 inset",
        }}
      >
        {uploading ? (
          <>
            <CircularProgress
              size={16}
              sx={{ color: "white", marginRight: "8px" }}
            />
            Uploading...
          </>
        ) : (
          "Edit"
        )}
      </Button>
    </div>
  );
};

export default ProfilePhoto;
