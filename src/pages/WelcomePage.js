import React, { useState, createContext } from "react";
import NavBarContainer from "../sections/NavBarContainer";
import WelcomeImageContiner from "../sections/WelcomeImageContainer";
import ImageCardWelcome from "../components/ImageCardWelcome";
import ImageCardWelcomeSearched from "../components/ImageCardWelcomeSearched";

export const SearchedContext = createContext();

const WelcomePage = () =>{

   const [isSearched, setIsSearched] = useState(false);
   
   return(
            <>
            <SearchedContext.Provider value={{isSearched, setIsSearched}}>
                <NavBarContainer/>
                <WelcomeImageContiner/>
                {isSearched? <ImageCardWelcomeSearched/>: <ImageCardWelcome/>}
            </SearchedContext.Provider>
            </>
        );
}

export default WelcomePage