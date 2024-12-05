import { useRef } from "react";

import { useUploadImage } from "@/api/profile/mutations";
import type { UseFormReturnType } from "@mantine/form";
import { Avatar, Button, CircularProgress } from "@mui/material";

interface ProfilePhotoProps {
  // biome-ignore lint/suspicious/noExplicitAny: TODO: will be removed
  form: UseFormReturnType<any>;
  fieldName: string; // Accept the field name for the image
}

const ProfilePhoto = ({ form, fieldName }: ProfilePhotoProps) => {
  const { mutate, isPending } = useUploadImage();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;

    if (files) {
      form.setFieldValue(fieldName, URL.createObjectURL(files?.[0]));

      mutate(files, {
        onSuccess: (resp) => {
          const { data } = resp.data;

          form.setFieldValue(fieldName, data?.url);
        },
      });
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
        alt="Profile"
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px solid #26a69a",
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id={`${fieldName}-input`}
        ref={fileInputRef}
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        disabled={isPending}
        sx={{
          backgroundColor: "#26a69a",
          "&:hover": { backgroundColor: isPending ? "#26a69a" : "#1e8b81" },
          borderRadius: "16px",
          boxShadow: "10px 10px 5px #269d91 inset",
        }}
      >
        {isPending ? (
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
