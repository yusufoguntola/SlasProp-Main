import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ 
            p: '10px 10px', 
            display: 'flex',
            alignItems: 'center',
            boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
            borderRadius:"0px",
            maxWidth: "45%",
            minWidth: "25%",
            ml:"28%"
        }}
    >
        <Container sx={{boxShadow: "0px 2px 2px grey;", py:1}} >
            <LocationOnIcon sx={{color: "#DF593D"}}></LocationOnIcon>
            <InputBase
                    sx={{fontSize:{ lg:12, sm:12, xs:7}}}                    
                    placeholder="  Search Property"
                    inputProps={{ 'aria-label': 'search-property' }}
            />
        </Container>
        <Button type="button"
                component={Link}
                to='/property-details'
                className='SearchButton'
                sx={{   bgcolor: "#26a69a", 
                        color:"white", 
                        px:5,
                        py:1,
                        ml:2,
                        borderRadius:"0px",
                        "&:hover": { backgroundColor: "#52d6cf" }
                    }}
                aria-label="search"
        >
            <SearchIcon />
            Search
        </Button>
    </Paper>
  );
}

export default SearchBar