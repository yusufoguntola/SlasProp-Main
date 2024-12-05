import "react-image-gallery/styles/css/image-gallery.css";

import ReactImageGallery from "react-image-gallery";

import { Container } from "@mui/material";

export function ImageGallery(property: Property) {
  const images = property.images.map((i) => {
    return {
      original: i,
      thumbnail: i,
      thumbnailWidth: 200,
      thumbnailHeight: 100,
    };
  });
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
