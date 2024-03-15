import React from "react";

import { useLocation } from "react-router";
import NavBarContainer from "../sections/NavBarContainer";
import ImageGallery from "../components/ImageGallery";
import DetailsBox from "../components/DetailsBox";



const PropertyDetails = () =>{

    const { state } = useLocation();


    return (
       <>
            <NavBarContainer/>
            <ImageGallery/>
            <DetailsBox property= {state.property}/>
            
       </>

    )

}

export default PropertyDetails