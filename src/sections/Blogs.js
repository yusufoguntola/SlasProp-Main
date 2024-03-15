import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs =() =>{

    const blogs=[
        {
            id: 1,
            imageUrl: require("../assets/blog-building.png"),
            heading:"Tips for Finding the Perfect Rental Property",
            desc: "Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
            likes:121,
            views:"5k",
            shares:"1K"

        },
        {
            id: 2,
            imageUrl: require("../assets/blog-building.png"),
            heading:"Tips for Finding the Perfect Rental Property",
            desc:"Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
            likes:121,
            views:"5k",
            shares:"1K"

        },
        {
            id: 3,
            imageUrl: require("../assets/blog-building.png"),
            heading:"Tips for Finding the Perfect Rental Property",
            desc:"Get all your ducks in a row good optics close the loop and zeitgeist so manage expectations quarterly sales are at an all-time low future-proof",
            likes:121,
            views:"5k",
            shares:"1K"

        }
    ];

    return(
        <Container sx={{display:"flex", 
                        flexDirection:"column",
                        justifyContent:"center",
                        backgroundColor:"#F8F8F8",
                        
                    }}>
            <Box sx={{  margin:"auto",
                        width: "20%", 
                        mt:6,
                        borderLeft:"1px solid lightgrey",
                        borderRight:"1px solid lightgrey"
                    }}>
                <Typography variant='h6' sx={{textAlign:"center"}}>
                    Blogs
                </Typography>
                <Typography variant="h5" sx={{textAlign:"center", fontWeight:"bold", textTransform:"uppercase"}}>
                    Our Blogs
                </Typography>
            </Box>
            <Typography sx={{textAlign:"center", margin:"auto", width:"50%", fontSize:"14px",mt:2}}>
                Explore Prime Listings On SlasProp - Where Luxury Meets Functionality, Your Dream Property Is Just A Click Away
            </Typography>
            <Container sx={{display:"flex", 
                                justifyContent:'center',                                
                                flexDirection:"row",
                                gap:"40px",
                                pt:2
                                }}>
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} >
                        </BlogCard>
                        ))
                }
            </Container>
            <Button variant="outlined" sx={{
                color:"#26a69a",
                px:4,
                py:1,
                maxWidth:"150px",
                margin:"auto",
                borderRadius:"0px",
                "&:hover": { backgroundColor: "white" },
                textTransform:"uppercase"
            }}>
                View All
            </Button>
            <br/>
            <br/>
            <br/>
        </Container>
    )

}

export default Blogs