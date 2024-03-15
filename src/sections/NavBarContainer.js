import React from "react";
import NavigationBar from "../components/NavigationBar";
import MainBar from "../components/MainBar";
import { Container } from "@mui/material";


const NavBarContainer = (props) =>{

    return (
        <Container >
            <MainBar/>
            <NavigationBar/>
        </Container>
    )
}

export default NavBarContainer