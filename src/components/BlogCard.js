import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { CardActionArea } from '@mui/material';

const BlogCard = (props) => {
     
    return (
            <Card sx={{ 
                        border:'1px solid #black',
                        my:4,
                        px:2,
                        py:2
                    }}
                >
            <CardActionArea sx={{display:"flex", flexDirection:"column"}}>
                <CardMedia
                    component="img"
                    image={props.blog.imageUrl.default}          
                    alt="blog-image"
                />
                <CardContent>
                <Typography sx={{fontWeight:"bold", fontSize:'16px'}}>
                    {props.blog.heading}
                </Typography>
                <Typography sx={{display:'flex', justifyContent:"space-between",  fontSize:"14px"}}>
                    <span style={{display:"flex"}}><RemoveRedEyeOutlinedIcon sx={{color:"orange"}}/>&nbsp;{props.blog.views} views</span>
                    <span style={{display:"flex" }}><TrendingUpOutlinedIcon sx={{color:"blue"}}/>&nbsp;{props.blog.shares} shares</span>
                    <span style={{display:"flex" }}><ThumbUpOutlinedIcon sx={{color:"#26a69a"}}/>&nbsp;{props.blog.likes} likes</span>
                </Typography>
                <Typography sx={{color:"black", mt:2,fontSize:"13px"}}>
                    {props.blog.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        );
}

export default BlogCard