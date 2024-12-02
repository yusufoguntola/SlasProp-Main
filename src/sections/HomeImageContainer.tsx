import { ImageCard } from "@/components/ImageCard";
import { SearchBar } from "@/components/SearchBar";
import { Container, Typography } from "@mui/material";

export function HomeImageContainer() {
	return (
		<div className="image-container">
			<ImageCard />
			<Typography
				sx={{
					position: "absolute",
					top: {
						xl: "80%",
						lg: "75%",
						md: "50%",
						sm: "30%",
						xs: "20%",
					},
					fontFamily: "monospace",
					fontSize: "13px",
					left: "28%",
					color: "white",
				}}
			>
				You can search your property here
			</Typography>
			<Container
				sx={{
					position: "absolute",
					top: {
						xl: "85%",
						lg: "80%",
						md: "55%",
						sm: "35%",
						xs: "25%",
					},
				}}
			>
				<SearchBar />
			</Container>
		</div>
	);
}
