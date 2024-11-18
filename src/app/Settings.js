import React from 'react';
import { useState } from 'react';

import { TextField, IconButton, InputAdornment, Container, Box, Grid, FormLabel, Typography, Button } from '@mui/material';
import { Visibility,VisibilityOff } from '@mui/icons-material';

const Settings = () => {

    const [formData, setFormData] = useState({
        userID: '',
        username:'',
        password: '',
        phoneNumber: '',
        email:''
      }); 
      
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [showPassword, setShowPassword] = useState(false);
      const [confirmPassword, setConfirmPassword] = useState(false);
      const [errors, setErrors] = useState({
        userID: '',
        username:'',
        password: '',
        phoneNumber: '',
        email:''
      });
    
      const validateForm = () => {
        let valid = true;
        const newErrors = { userID: '', password: '',  };
    
        if (!formData.userID) {
          newErrors.userID = 'userID is required';
          valid = false;
        }
    
        // Password strength check
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!formData.password || !passwordRegex.test(formData.password)) {
          newErrors.password = 'Password must be at least 6 characters with at least one uppercase and one lowercase letter';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        if (validateForm()) {
          // Add your login logic here
          console.log('Login successful');
          handleClose();
        } else {
          console.log('Login failed');
        }

      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    

    return (
        <Container sx={{minHeight:500}}>
            <Box sx={{display:'flex', marginLeft:"30%", mt:4, borderBottom:"1px solid lightgray", pb:2}}>
                <Typography variant='h6'sx={{fontWeight:"bold", flexGrow:1}}>
                    Edit Profile
                </Typography>
            </Box>

            <Box sx={{ml:'30%', mt:4}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormLabel>Your Name</FormLabel>
                        <TextField
                        autoComplete="given-name"
                        name="userName"
                        required
                        fullWidth
                        id="userName"
                        size='small'
                        onChange={handleChange}
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormLabel>User ID</FormLabel>
                        <TextField
                        required
                        fullWidth
                        id="user ID"
                        name="UserID"
                        size='small'
                        onChange={handleChange}
                        autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormLabel>Email Address</FormLabel>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        size='small'
                        type='email'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormLabel>Phone Number</FormLabel>
                        <TextField
                        required
                        fullWidth
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="email"
                        onChange={handleChange}
                        size='small'
                        type='number'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormLabel>Password</FormLabel>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        size='small'
                        autoComplete="new-password"
                        margin="normal"
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end"> 
                                <IconButton onClick={() => { setShowPassword(!showPassword) }}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton> 
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormLabel>Confirm Password</FormLabel>
                        <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        type={confirmPassword ? 'text' : 'password'}
                        id="password"
                        size='small'
                        autoComplete="confirmPassword"
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end"> 
                                <IconButton onClick={() => { setConfirmPassword(!confirmPassword) }}>
                                {confirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton> 
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>
                </Grid>

                <Container sx={{display:"flex", justifyContent:"right", mt:4}}>
                        <Button type="submit" variant="contained"
                                size="medium"
                                onSubmit={handleSubmit}
                                sx={{ 
                                    backgroundColor: "#26a69a",
                                    "&:hover": { backgroundColor: "#26a69a" },
                                    borderRadius:"16px",
                                    boxShadow: "10px 10px 5px #269d91 inset",
                                    }}>
                        Update Profile
                        </Button>
                    </Container>
            </Box>

        </Container>

    )
}

export default Settings