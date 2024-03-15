import React from 'react';
import { useState } from 'react';

import { TextField, Button, IconButton, Link, InputAdornment, Container, Dialog, Box, Grid, FormControlLabel, FormLabel } from '@mui/material';
import { DialogContent, DialogActions, Checkbox, checkboxClasses } from '@mui/material';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';


const SignUpFormModal = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'acceptTermsConditions' ? checked : value,
    });
  };

  return (
    <>
      <Button color="inherit" 
              sx={{textTransform :"capitalize",
                    textDecoration: "none",
                    mt: 1,
                    textAlign: 'center',
                    color:"#26a69a",
                    "&:hover": { backgroundColor: "white" },
                }}
              onClick={handleOpen}
      >
        Don't have an account? Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
            if (validateForm()) {
              // Add your login logic here
              console.log('Login successful');
              handleClose();
            } else {
              console.log('Login failed');
            }
            
          },
        }}
      >
        <Container  sx={{borderBottom:1}}>
            <DialogActions>
              <p style={{display:"inline-block",
                            fontFamily:"monospace",
                            fontSize:17,
                            fontWeight:"bold",
                            marginRight:"auto"
                            }}>
                          Create New Account
                </p> 
                <Button onClick={handleClose} sx={{marginRight:-4}}>
                  <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                </Button>
              </DialogActions>
          </Container>
        <DialogContent>                       
              <p style={{color:"#26a69a", 
                         fontSize:15
                         }}>
                            Provide the following information to create an account.
              </p>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox name="acceptTermsConditions" 
                    sx={{
                        [`&, &.${checkboxClasses.checked}`]: {
                          color: '#26a69a',
                        },
                      }}
                    />
                  }
                  label="I accept all terms and conditions"
                />
              </Grid>
            </Grid>
            <Container sx={{display:"flex", justifyContent:"center"}}>
              <DialogActions>
                <Button type="submit" variant="contained"
                        size="medium" 
                        sx={{ 
                              backgroundColor: "#26a69a",
                              "&:hover": { backgroundColor: "#26a69a" },
                              borderRadius:"16px",
                              boxShadow: "10px 10px 5px #269d91 inset",
                            }}>
                  Create Account
                </Button>
              </DialogActions>
              </Container>
        </DialogContent>
      </Dialog>
    </>

  );
};

export default SignUpFormModal;