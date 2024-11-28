import { uploadFiles } from "@/builder/upload";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import sampleImage from "../../../assets/profile-picture.png";

interface ProfilePhotoProps {
	form: any;
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

					console.log(res?.data?.url);
				}
				setUploading(false);
				if (fileInputRef.current) {
					fileInputRef.current.value = ""; // Reset the input value
				}
			}
		} catch (error) {
			console.log(error);
			setUploading(false);
		}
	};

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click(); // Trigger the file input click
		}
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Image
				src={form.values[fieldName] || sampleImage.src} // Default image if none is selected
				alt="Profile"
				width={100} // Set the width of the image
				height={100} // Set the height of the image
				style={{
					borderRadius: "50%",
					marginRight: "10px",
					border: "2px",
					borderStyle: "solid",
				}} // Circular shape
			/>
			<input
				type="file"
				accept="image/*"
				onChange={handleImageChange}
				style={{ display: "none" }} // Hide the default file input
				id={`${fieldName}-input`}
				ref={fileInputRef} // Attach the ref to the input
			/>
			<Button
				variant="contained"
				onClick={handleButtonClick} // Use the button click handler
				sx={{
					backgroundColor: "#26a69a",
					"&:hover": { backgroundColor: "#26a69a" },
					borderRadius: "16px",
					boxShadow: "10px 10px 5px #269d91 inset",
				}}
			>
				{uploading ? "uploading..." : "Edit"}
			</Button>
		</div>
	);
};

export default ProfilePhoto;
