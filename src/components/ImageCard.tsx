import sampleImage from "@/assets/land-image.jpg";
import { CardMedia } from "@mui/material";

export function ImageCard() {
	return (
		<CardMedia
			component="img"
			image={sampleImage.src}
			alt="This is a land image"
			sx={{
				marginTop: "-50px",
				objectFit: "cover",
				filter: "brightness(80%)",
			}}
		/>
	);
}
