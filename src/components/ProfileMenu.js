import React, { useContext, useState } from "react";
import sampleImage from '../assets/profile-picture.png'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { OptionContext } from "../App";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfileMenu = () => {

    const { logout } = useAuth();
    const [anchorElUser, setAnchorElUser] = useState(null);    
    const myOption = useContext(OptionContext);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorElUser(null);
    };
   
    const handleCloseUserMenu = () => {
        myOption.setOption(true);
          logout();
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Dashboard">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={sampleImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
            >
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/dashboard"
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

            </Menu>
          </Box>            
    );

}

export default ProfileMenu