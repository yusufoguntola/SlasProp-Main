import { axiosInstance } from "@/axios";

export const uploadFiles = async (files: FileList, multiple = false) => {
	const formData = new FormData();

	if (multiple) {
		for (let i = 0; i < files.length; i++) {
			formData.append(`file${i + 1}`, files[i]); // Append each file for multiple uploads
		}
	} else {
		const file = files[0]; // Select the first file only
		formData.append("file", file); // Append the single file to the FormData
	}

	const response = await axiosInstance.post("/uploads", formData, {
		headers: {
			"Content-Type": "multipart/form-data", // Set the correct content type
		},
	});

	return response.data; // Return the response data
};
