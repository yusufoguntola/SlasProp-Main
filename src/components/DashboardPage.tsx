"use client";

import { AddCircleOutline } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

import landImage from "@/assets/land-image.jpg";

const properties = [
	{
		id: 1,
		imageUrl: landImage,
		heading: "Lore Epsom Property",
		desc: "Rare Opportunity in highly desirable SpringBrook. Popular Scott Felder built floorplan. Showcasing easy living",
		area: 2345,
		beds: 4,
		baths: 3,
		price: "$319,000",
		location: "17917 Holderness Ln, Pflugerville, TX 78660",
		status: "active",
	},
	{
		id: 2,
		imageUrl: landImage,
		heading: "Lore Epsom Property",
		desc: "Rare Opportunity in highly desirable SpringBrook. Popular Scott Felder built floorplan. Showcasing easy living",
		area: 2345,
		beds: 4,
		baths: 3,
		price: "$319,000",
		location: "17917 Holderness Ln, Pflugerville, TX 78660",
		status: "active",
	},
];

export function DashboardPage() {
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					marginLeft: "30%",
					mt: 4,
					borderBottom: "1px solid lightgray",
					pb: 2,
				}}
			>
				<Typography
					variant="h6"
					sx={{ fontWeight: "bold", flexGrow: 1 }}
				>
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

			{/* <Box sx={{ display: "flex", marginLeft: "30%", flexDirection: "column" }}>
				{properties.map((property) => (
					<MyPropertyCard
						key={property.id}
						{...property}
					/>
				))}
			</Box> */}
		</Container>
	);
}

