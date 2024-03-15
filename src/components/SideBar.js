import React, { useContext, useState } from "react";
import sampleImage from '../assets/profile-picture.png'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, Container, Stack, Switch } from "@mui/material";
import { drawerOptionContext } from "../pages/ClaimantPage";
import { Link } from "react-router-dom";


const drawerWidth = 270;

const SideBar = () =>{

  const [slider,setSlider] = useState(true);

  const myDrawerOption = useContext(drawerOptionContext);

  let ListOptions = [
    {
      name: 'My Properties',
      address:'my-properties'
    },
    {
      name: 'Add Property',
      address:'add-property'
    },
  ];

  let RegisterOptions = [
    {
      name: 'Registered Properties',
      address:'registered-properties'
    },
    {
      name: 'Register Property',
      address:'register-property'
    },

  ];

  const handleChange = (event)=>{

    if (event.target.checked)
    {
      setSlider(false);
    }

    else{
      setSlider(true);
    }

  }

  const handleClick = (event) =>{
    myDrawerOption.setDrawerOption(event.target.innerText);
  }

    return(
        <Box sx={{ display: 'flex' }}>       
          <Box
            sx={{
              width: drawerWidth,
              position:'absolute',
                width: drawerWidth,
                boxSizing: 'border-box',
                left:"4%",
                boxShadow: "10px 0px 10px rgba(108, 122, 137, 0.5)",
                
            }}          
          >
              <Container sx={{borderBottom:"1px solid lightgrey"}}>
                  <Box sx={{backgroundColor:"#26a69a", minHeight:"80px", ml:-3, mr:-3}}>
                  </Box>
                  <Avatar src={sampleImage} sx={{ width: 80, height:80, marginTop:-6}}></Avatar>
                  <Box sx={{display:"flex", my:2}}>      
                      <Box>                        
                          <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black"}}>Indraniel Sen</Typography>
                          <Typography sx={{ fontSize:"12px"}}>User ID :#269d91</Typography>
                      </Box> 
                      <Button size='small' component={Link}
                              to='/dashboard/settings'
                              sx={{   color:"#26a69a", 
                                          fontSize:"12px",
                                          border:"1px solid #26a69a",
                                          width:70,
                                          my:1,
                                          ml:2,
                                          borderRadius:4,
                                      }} >
                          <EditOutlinedIcon sx={{mr:1,color:"#26a69a", fontSize:'large'}}  />
                          Edit
                      </Button>                
                  </Box>
              </Container>

              <List>
                <ListItem sx={{ borderBottom:"1px solid lightgrey"}} >
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ml:2}}>
                    <Typography sx={{fontSize:"12px", color:"#26a69a"}}>List Property</Typography>
                    <Switch onChange={handleChange}/>
                    <Typography sx={{fontSize:"12px", color:"#26a69a"}}>Register Property</Typography>
                  </Stack>
                </ListItem>
                <ListItem disablePadding>
                      <ListItemButton sx={{borderBottom:"1px solid lightgrey"}}  component={Link}  to='/dashboard' >
                          <ListItemText primary={'Dashboard'} primaryTypographyProps={{fontSize:"12px"}} sx={{color:"#26a69a", textTransform:"uppercase", ml:2}}/>
                      </ListItemButton>
                  </ListItem>                      

                  { slider ? ListOptions.map((option) => (
                    <ListItem disablePadding>
                      <ListItemButton
                          sx={{ borderBottom: '1px solid lightgrey' }}
                          component={Link}
                          to={`/dashboard/${option.address}`}
                      >
                          <ListItemText
                              sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              primary={option.name}
                          />
                      </ListItemButton>                      
                    </ListItem>
             
                  )): RegisterOptions.map((option) => (
                    <ListItem disablePadding>
                      <ListItemButton
                          sx={{ borderBottom: '1px solid lightgrey' }}
                          component={Link}
                          to={`/dashboard/${option.address}`}
                      >
                          <ListItemText
                              sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              primary={option.name}
                          />
                      </ListItemButton>                      
                    </ListItem>
                    ))
                  }
                  <ListItem disablePadding>
                      <ListItemButton
                          sx={{ borderBottom: '1px solid lightgrey' }}
                          component={Link}
                          to='/dashboard/messages'
                      >
                          <ListItemText
                              sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              primary={'Messages'}
                          />
                      </ListItemButton>                      
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                          sx={{ borderBottom: '1px solid lightgrey' }}
                          component={Link}
                          to='/dashboard/settings'
                      >
                          <ListItemText
                              sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              primary={'Settings'}
                          />
                      </ListItemButton>                      
                    </ListItem>

                  <ListItem disablePadding>
                      <ListItemButton
                          component={Link}
                          to='/dashboard/notifications'
                      >
                          <ListItemText
                              sx={{ color: '#26a69a', textTransform: 'uppercase', ml: 2 }}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              primary={'Notifications'}
                          />
                      </ListItemButton>                      
                    </ListItem>
              </List>
          </Box>
      </Box>
  
    );

}

export default SideBar