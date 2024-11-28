import { Container } from "@mui/material";

import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import landImage1 from "@/assets/land-image-1.jpg";
import landImage2 from "@/assets/land-image-2.jpg";
import landImage3 from "@/assets/land-image-3.jpg";
import landImage from "@/assets/land-image.jpg";

const images = [
  {
    original: landImage.src,
    thumbnail: landImage.src,
    bnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: landImage1.src,
    thumbnail: landImage1.src,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: landImage2.src,
    thumbnail: landImage2.src,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  },
  {
    original: landImage3.src,
    thumbnail: landImage3.src,
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
