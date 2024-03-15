import React from "react";
import NavBarContainer from "../sections/NavBarContainer";
import HomeImageContainer from "../sections/HomeImageContainer";
import RegisterProperty from "../sections/RegisterProperty";
import ListProperty from "../sections/ListProperty";
import ManageProperty from "../sections/ManageProperty";
import AdvertisementContainer from "../sections/AdvertisementContainer";
import FeatureProperties from "../sections/FeatureProperties";
import KnowAboutSlasProp from "../sections/KnowAboutSlasProp";
import JoinUs from "../sections/JoinUs";
import Blogs from "../sections/Blogs";
import SubmitInquiry from "../sections/SubmitInquiry";

const Homepage = () =>{

   return(
            <>
                <NavBarContainer/>
                <HomeImageContainer />
                <RegisterProperty/>
                <ListProperty/>
                <ManageProperty/>
                <AdvertisementContainer/> 
                <FeatureProperties/>
                <KnowAboutSlasProp/>  
                <JoinUs/>
                <Blogs/>
                <SubmitInquiry/>      
            </>
        );
}

export default Homepage