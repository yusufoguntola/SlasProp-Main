import sampleImage from "@/assets/land-view.png";
import { CardMedia } from "@mui/material";

export function ImageCardWelcome() {
	return (
		<CardMedia
			component="img"
			image={sampleImage.src}
			alt="This is a land image"
			sx={{
				objectFit: "cover",
				marginTop: "-90px",
				height: "450px",
			}}
		/>
	);
}
