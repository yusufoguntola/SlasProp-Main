import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

interface BlogCardProps {
  imageUrl: string;
  heading: string;
  views: string;
  shares: string;
  likes: number;
  desc: string;
}

export function BlogCard(blog: BlogCardProps) {
  return (
    <Card
      sx={{
        border: "1px solid #black",
        my: 4,
        px: 2,
        py: 2,
      }}
    >
      <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia component="img" image={blog.imageUrl} alt="blog-image" />
        <CardContent>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {blog.heading}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <span style={{ display: "flex" }}>
              <RemoveRedEyeOutlinedIcon sx={{ color: "orange" }} />
              &nbsp;{blog.views} views
            </span>
            <span style={{ display: "flex" }}>
              <TrendingUpOutlinedIcon sx={{ color: "blue" }} />
              &nbsp;{blog.shares} shares
            </span>
            <span style={{ display: "flex" }}>
              <ThumbUpOutlinedIcon sx={{ color: "#26a69a" }} />
              &nbsp;{blog.likes} likes
            </span>
          </Typography>
          <Typography sx={{ color: "black", mt: 2, fontSize: "13px" }}>
            {blog.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
