"use client";

import type { StaticImageData } from "next/image";

import { axiosInstance } from "@/axios";
import { MyPropertyCard } from "@/components/MyPropertyCard";
import type { PropertyCardProps } from "@/components/PropertyCard";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

// import Empty from "../assets/Empty.jpg";

export interface PropertyData {
	id: number;
	imageUrl: StaticImageData;
	heading: string;
	desc: string;
	area: number;
	beds: number;
	baths: number;
	price: string;
	location: string;
	status: string;
}

const fetchProperties = async () => {
	const response = await axiosInstance.get("/properties"); // Await the response

	return response.data; // Return the data from the response
};

export default function MyProperties() {
	const { data } = useQuery({
		queryKey: ["properties"],
		queryFn: fetchProperties,
	});

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	// if (error) {
	// 	return <div>Error loading properties</div>;
	// }
	return (
		<Container>
			{data?.total === 0 ? (
				<div>
					{/* <img src ={Empty.src} alt=" empty-space" /> */}
					<h1 className="flex items-center justify-center h-screen text-lg font-semibold">
						Sorry you have not created a property
					</h1>
				</div>
			) : (
				<>
					<Box
						sx={{
							display: "flex",
							marginLeft: "30%",
							mt: 4,
							borderBottom: "1px solid lightgray",
							pb: 2,
						}}
					>
						<Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
							List Of Properties
						</Typography>
						<IconButton
							sx={{
								backgroundColor: "#DF593D",
								"&:hover": { backgroundColor: "#DF593D" },
								borderRadius: "16px",
								color: "white",
								fontSize: "12px",
								p: 1,
							}}
						>
							<AddCircleOutline /> &nbsp;Add New Property
						</IconButton>
					</Box>

					<Box
						sx={{
							display: "flex",
							marginLeft: "30%",
							flexDirection: "column",
						}}
					>
						{data?.data?.map((property: PropertyCardProps) => (
							<MyPropertyCard key={property.id} {...property} />
						))}
					</Box>
				</>
			)}
		</Container>
	);
}
