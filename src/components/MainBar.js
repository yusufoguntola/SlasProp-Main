import * as React from 'react';
import Logo from '../assets/Logo.png';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, Divider } from '@mui/material';
import LoginForm from '../forms/LoginFormModal';
import { OptionContext } from '../App';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

const MainBar = ()=> {

  const myOption = React.useContext(OptionContext);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" 
              style={{
                backgroundColor: "white",
                color : "black",
                maxHeight:"80px",
                minHeight:"80px",
                boxShadow: "none"
                }}>
        <Toolbar>
          <Box sx={{flexGrow:1}}>
            <Button component={Link} to='/' >
              <Box
                component="img"
                sx={{
                height: 64,
                }}
                alt="Your logo."
                src={Logo}
              />
            </Button>
          </Box>

          <IconButton sx={{border: "1px solid #26a69a", maxHeight:30, maxWidth: 30, mr:1.5}}>
            <FacebookIcon style={{color: "#26a69a", fontSize: 20}}></FacebookIcon>
          </IconButton>

          <IconButton sx={{border: "1px solid #26a69a", maxHeight:30, maxWidth: 30, mr:1.5}}>
            <InstagramIcon style={{color: "#26a69a", fontSize: 20}}></InstagramIcon>
          </IconButton>

          <IconButton sx={{border: "1px solid #26a69a", maxHeight:30, maxWidth: 30, mr:1.5}}>
            <YouTubeIcon style={{color: "#26a69a", fontSize: 20}}></YouTubeIcon>
          </IconButton>

          <IconButton sx={{border: "1px solid #26a69a", maxHeight:30, maxWidth: 30, mr:3}}>
            <XIcon style={{color: "#26a69a", fontSize: 20}}></XIcon>
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5, mr: 2}} orientation="vertical" />
          {myOption.option ? <LoginForm/> :<ProfileMenu/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainBar