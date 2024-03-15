import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sampleImage from '../assets/Logo.png'
import Modal from '@mui/material/Modal';
import { FormLabel, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  backgroundColor:'#e1f9fa',
  borderRadius:4,
  p: 4,
};

const SlasPayLogin = () =>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = ()=>{};


  return (
    <div>       
        <Button onClick={handleOpen} sx={{backgroundColor:'#DF593D', color: 'white', ml:2, width:'170px', '&:hover': {backgroundColor:'#DF593D'}}}>
            PAY NOW
        </Button>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box 
                    component="img"
                    sx={{
                        height: 40,
                        width: 100,
                        borderRadius:2,
                    }}
                    alt="Logo"
                    src={sampleImage}
                />
                <Typography id="modal-modal-title" sx={{ml:1,fontSize:'16px', fontWeight:'bold'}}>
                    Hi, Welcome Back!
                    <Typography paragraph sx={{fontSize:'14px', color:'gray'}}>
                        Enter Your Details to Login
                    </Typography>
                </Typography>
                <FormLabel sx={{fontSize:13, color:'#26a69a'}}>Email</FormLabel>
                <TextField
                    name="email"
                    fullWidth
                    inputProps={{style:{backgroundColor:'white', fontSize:12}}}
                    size='small'
                    label='Enter Your Email Address'
                    onChange={handleChange}
                    margin="normal"
                    sx={{color: "grey"}}
                    InputLabelProps={{ style: {fontSize:'12px'}}}

                />
                <FormLabel sx={{fontSize:13, color:'#26a69a'}}>Password</FormLabel>
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    size='small'
                    fullWidth
                    inputProps={{style:{backgroundColor:'white', fontSize:12}}}
                    InputLabelProps={{ style: {fontSize:'12px'}}}
                    onChange={handleChange}
                    label='Enter Your Password'
                    sx={{fontSize:'10px'}}
                    margin="normal"
                    InputProps={{
                        style: {backgroundColor:'white'},
                    endAdornment: (
                        <InputAdornment position="end"> 
                            <IconButton onClick={() => { setShowPassword(!showPassword) }} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton> 
                        </InputAdornment>
                    ),
                    }}
                />

                <Link href="#" variant="body2" 
                        style={{ textDecoration: "none",
                                color:"red",
                                fontWeight:"bold",
                                marginLeft:"auto"}} 
                                >
                    Forgot Password?
                    </Link>
                    <Button type="submit" variant="contained"
                            size="medium" 
                            sx={{ mt: 2,
                                backgroundColor: "#26a69a",
                                "&:hover": { backgroundColor: "#26a69a" },
                                borderRadius:1,
                                boxShadow: "10px 10px 5px #269d91 inset",
                                minWidth: "150px",
                                }}>
                    Login
                </Button>
            </Box>
        </Modal>
    </div>
  );
}

export default SlasPayLogin