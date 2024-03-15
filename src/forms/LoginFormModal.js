import React from 'react';
import { useState } from 'react';

import { TextField, Button,  IconButton, Link, InputAdornment, Container, Dialog, FormLabel } from '@mui/material';
import { DialogContent, DialogActions,  } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import SignUpFormModal from './SignUpModal';
import { useAuth } from '../hooks/useAuth';
import { OptionContext } from '../App';



const LoginFormModal = () => {

  const myOption = React.useContext(OptionContext);

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    userID: '',
    password: '',
    
  }); 

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    userID: '',
    password: '',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Login successful');
        myOption.setOption(false);
        await login(formData.userID);
    } else {
        console.log('Login failed');
    }
};

  const validateForm = () => {
    let valid = true;
    const newErrors = { userID: '', password: '' };

    if (!formData.userID) {
      newErrors.userID = 'User ID is required';
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
      [name]: value,
    });
  };

  return (
    <>
      <Button color="inherit" 
                    style={{textTransform :"capitalize"}}
                    onClick={handleOpen}
      >
          Sign In / Login
          <ArrowCircleRightOutlinedIcon style={{ color: "#26a69a", paddingLeft:4}}/>
      </Button>
      <Dialog
        open={open}
        sx={{
          maxWidth: "500px",
          left:"28%"
        }}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit
        }}
      >
        <Container  sx={{borderBottom:1}}>
              <DialogActions>
                <p style={{display:"inline-block",
                            width:"250px",
                            fontFamily:"monospace",
                            fontSize:17,
                            fontWeight:"bold",
                            marginRight:"auto"
                            }}>
                          Login
                </p> 
                <Button onClick={handleClose} sx={{marginRight:-4}}>
                  <ClearIcon sx={{color:"red", fontSize: 20, fontWeight:"bold"}}></ClearIcon>
                </Button>
              </DialogActions>
          </Container>
        <DialogContent sx={{display:"flex", flexDirection:"column"}}>             
              <p style={{color:"#26a69a", fontSize:15}}>Enter your login details to sign in.</p>
              <FormLabel sx={{fontSize:13}}>User ID</FormLabel>
              <TextField
                name="userID"
                size='small'
                onChange={handleChange}
                error={Boolean(errors.userID)}
                helperText={errors.userID}
                margin="normal"
                sx={{color: "grey", mb:1.5}}
              />
              <FormLabel sx={{fontSize:13}}>Password</FormLabel>
              <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                size='small'
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                margin="normal"
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

              <Link href="#" variant="body2" 
                    style={{ textDecoration: "none",
                              color:"red",
                              fontWeight:"bold",
                              marginLeft:"auto"}} 
                            >
                  Forgot Password?
                </Link>
            <Container sx={{display:"flex", justifyContent:"center"}}>
              <DialogActions>
                <Button type="submit" variant="contained"
                        size="medium" 
                        sx={{ mt: 2,
                              backgroundColor: "#26a69a",
                              "&:hover": { backgroundColor: "#26a69a" },
                              borderRadius:"16px",
                              boxShadow: "10px 10px 5px #269d91 inset",
                              width: "150px",
                            }}>
                  Login
                </Button>
              </DialogActions>
              </Container>
                <SignUpFormModal/>
        </DialogContent>
      </Dialog>
    </>

  );
};

export default LoginFormModal;