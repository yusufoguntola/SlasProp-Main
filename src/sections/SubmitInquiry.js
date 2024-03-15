import { Box, Container, CardMedia, Typography, FormControl, TextField, Button, Stack } from "@mui/material";
import sampleImage from '../assets/inquiry-image.png'
import React, { useState } from "react";

const SubmitInquiry = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState();
    const [optionalNo, setOptionalNo] = useState('');
    const [message, setMessage] = useState('');

    return(
        <Container sx={{display:"flex"}}>
            <CardMedia
                component="img"
                image={sampleImage}
                onLoad={() => console.log("this is loading")}
                onError={() => console.log("this is error")}
                alt="This is a land image"
                sx={{
                    maxWidth:"40%",
                    objectFit: "fit",
                }}
            />

            <Container sx={{py:4}}>
                <Typography variant='h6' sx={{color:"grey", textTransform:"uppercase", fontSize:"14px", fontFamily:'Arial'}}>
                    Submit Enquiry
                </Typography>
                <Typography variant='h5' sx={{fontWeight:'bold', mt:1}}>
                    How can we be of help?
                </Typography>
                <form>
                    <Stack spacing={2} direction="row" sx={{my:4}}>
                        <TextField
                            type="text"
                            variant='standard'
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='standard'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                        />
                    </Stack>

                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='standard'
                            label="Mobile Number"
                            onChange={e => setMobileNo(e.target.value)}
                            value={mobileNo}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='standard'
                            label="Optional Number"
                            onChange={e => setOptionalNo(e.target.value)}
                            value={optionalNo}
                            fullWidth
                        />
                    </Stack>
                    <TextField
                        fullWidth
                        variant='standard'
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        margin="normal"
                        required
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" type="submit" 
                                                    sx={{
                                                        bgcolor: "#26a69a", 
                                                        color:"white", 
                                                        px:4,
                                                        py:2,
                                                        mt:4,
                                                        borderRadius:"0px",
                                                        "&:hover": { backgroundColor: "#26a69a" }
                                                        }}>
                        Submit Enquiry
                    </Button>
                </form>
            </Container>

        </Container>

    );
}

export default SubmitInquiry