import { Box, Button, CardMedia, Container, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import sampleImage from "../assets/list-property.png"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import React from "react";

const ListProperty =() =>{

    return(
        <Container sx={{display: "flex", padding:8, justifyContent:"center", backgroundColor:"#F8F8F8"}}>
            <Box sx={{display:"flex", flexDirection:"column", pt:2,pl:15}}>
                <Typography variant='h5'sx={{fontWeight:"bold"}}>
                    Discover a New Era with SlasProp!
                </Typography>

                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LanguageOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Seamless Listings:</span> Effortless Property Discovery.
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <HomeOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Smart Filters:</span> Tailored Searches, Made Easy.
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <SearchOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Advanced Search</span> Dive Deep Into Our Vast Database.
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CameraAltOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Stunning Visuals:</span> Captivating Property Showcases.
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <BusinessCenterOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Business Spaces:</span> Diverse Commercial Spots.
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LightbulbOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            <span style={{fontWeight:"bold"}}>Location Insights:</span> Informed Decisions, Every Time.
                        </ListItemText>
                    </ListItem>
                </List>
                <Button size="large"
                        sx={{backgroundColor:"#26a69a", 
                            color:"white",
                            textDecoration:"none",
                            borderRadius:"0px",
                            maxWidth:"50%",
                            "&:hover": { backgroundColor: "#26a69a" },
                            padding:2,
                            mt:2
                        }}>
                    List Property
                </Button>
            </Box>
            <CardMedia
                    component="img"
                    image={sampleImage}
                    onLoad={() => console.log("this is loading")}
                    onError={() => console.log("this is error")}
                    alt="This is a property image"
                    sx={{
                        maxWidth:"45%",
                        objectFit:'cover',
                        pl:10,
                    }}              
                />
        </Container>
    )

}

export default ListProperty