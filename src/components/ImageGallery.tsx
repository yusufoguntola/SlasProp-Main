import "react-image-gallery/styles/css/image-gallery.css";

import ReactImageGallery from "react-image-gallery";

import { Container } from "@mui/material";

const images = [
  {
    original: "/assets/land-image.jpg",
    thumbnail: "/assets/land-image.jpg",
    bnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: "/assets/land-image-1.jpg",
    thumbnail: "/assets/land-image-1.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: "/assets/land-image-2.jpg",
    thumbnail: "/assets/land-image-2.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: "/assets/land-image-3.jpg",
    thumbnail: "/assets/land-image-3.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  },
];

export function ImageGallery() {
  return (
    <Container sx={{ mt: 1, mb: 1 }}>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        thumbnailPosition="right"
        lazyLoad={true}
      />
    </Container>
  );
}
