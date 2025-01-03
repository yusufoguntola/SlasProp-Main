import Link from "next/link";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface BlogCardProps {
  imageUrl: string;
  heading: string;
  views: string;
  shares: string;
  likes: number;
  desc: string;
  slug: string;
}

export function BlogCard({
  imageUrl,
  heading,
  views,
  shares,
  likes,
  desc,
  slug,
}: BlogCardProps) {
  return (
    <Card
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        px: 2,
        py: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column" }}
        LinkComponent={Link}
        href={`/blog/${slug}`}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt="blog-image"
          sx={{ borderRadius: 1, objectFit: "cover", height: 180 }}
        />
        <CardContent>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", mb: 1 }}>
            {heading}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "text.secondary",
              mb: 2,
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeOutlinedIcon
                sx={{ color: "orange", fontSize: 18 }}
              />
              &nbsp;{views} views
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <TrendingUpOutlinedIcon sx={{ color: "blue", fontSize: 18 }} />
              &nbsp;{shares} shares
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <ThumbUpOutlinedIcon sx={{ color: "#26a69a", fontSize: 18 }} />
              &nbsp;{likes} likes
            </span>
          </Typography>

          <Typography
            sx={{ color: "text.primary", fontSize: "13px", lineHeight: 1.6 }}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
