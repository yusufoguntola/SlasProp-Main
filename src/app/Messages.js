import React from 'react';

import { Box,Paper, Grid, Divider, TextField, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Fab, InputBase, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';

const Messages = () => {

  return (
      <Box sx={{marginLeft:"28%", mt:2, pb:2, mb:10}}>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h6'sx={{fontWeight:"bold"}} className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} sx={{width: '100%',height: '80vh', mt:1}}>
            <Grid item xs={3} sx={{borderRight: '1px solid #e0e0e0'}}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="John Wick"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} sx={{display:'flex'}} style={{padding: '10px'}}>
                    <InputBase
                        sx={{
                                border: "1px solid grey;",
                                py:0.25
                            }}                    
                        placeholder="  Search Here"
                        inputProps={{ 'aria-label': 'search-bar' }}
                    />
                    <Button type="button"
                            className='SearchButton'
                            size="small"
                            sx={{   bgcolor: "#26a69a", 
                                    color:"white", 
                                    borderRadius:"0px",
                                    "&:hover": { backgroundColor: "#52d6cf" },
                                }}
                            aria-label="search"
                        >
                        <SearchIcon />
                    </Button>
                </Grid>
                <Divider />
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <ListItem button key="Alice">
                        <ListItemIcon>
                            <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Alice">Alice</ListItemText>
                    </ListItem>
                    <ListItem button key="CindyBaker">
                        <ListItemIcon>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <List sx={{height: '60vh', overflowY: 'auto'}}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, I am Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Cool. I am good, let's catch up!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={10}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid item xs={1} align="right" sx={{ml:1}}>
                        <Fab sx={{backgroundColor:'#26a69a', color:'white'}} aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
  );
}

export default Messages
