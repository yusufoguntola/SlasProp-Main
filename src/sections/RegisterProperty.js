import { Box, Button, CardMedia, Container, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import sampleImage from "../assets/register-property.png"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import React from "react";

const RegisterProperty =() =>{

    return(
        <Container sx={{display: "flex", padding:8, justifyContent:"center"}}>
            <CardMedia
                    component="img"
                    image={sampleImage}
                    onLoad={() => console.log("this is loading")}
                    onError={() => console.log("this is error")}
                    alt="This is a property image"
                    sx={{
                        maxWidth:"40%",
                        objectFit:'fill',
                        pl:15
                    }}              
                />
            <Box sx={{display:"flex", flexDirection:"column", px:4, pt:2}}>
                <Typography variant='h5'sx={{fontWeight:"bold"}}>
                    Unlocking a New Era in Real Estate with SlasProp's Registry Features!
                </Typography>

                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LockOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Secure Transactions
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LanguageOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Digital Ownership
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <AccessTimeOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Swift Timing
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <ShowChartOutlinedIcon sx={{border: "1px solid black"}}/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Transparent Records
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <BusinessCenterOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Commercial Excellence
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <LightbulbOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{ml:-3}}>
                            Global Reach
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
                    Register Now
                </Button>
            </Box>
        </Container>
    )

}

export default RegisterProperty