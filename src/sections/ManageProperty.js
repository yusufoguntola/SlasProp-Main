import { Container, Typography } from "@mui/material";
import React from "react";
import ManagePropertyCard from "../components/ManagePropertyCard";


const ManageProperty =() =>{

    const properties=[
        {
            id: 1,
            imageUrl: require("../assets/buy-property.png"),
            heading:"Buy A Property",
            desc: "Discover your dream property with SlasProp. Explore curated listings, get insights into property values and enjoy seamless transactions. Your journey to property ownership egins here!"

        },
        {
            id: 2,
            imageUrl: require("../assets/sell-property.png"),
            heading:"Sell A Property",
            desc:"Maximize your property value effortlessly with SlasProp. List with ease, showcase unique features and connect with buyers seamlessly for a smooth selling journey!"
        },
        {
            id: 3,
            imageUrl: require("../assets/rent-property.png"),
            heading:"Rent A Property",
            desc:"Explore hassle-free renting with SlasProp. Find your dream space effortlessly with stunning visuals and tailored listings. Welcome to a new era of renting convenience!"
        }
    ];


    return(
        <Container sx={{display:"flex",
                        justifyContent:"center",
                        flexDirection:"column",
                        py:8,
                        }}>
            <Typography variant="h6" sx={{textAlign:"center", fontWeight:"bold"}}>
                SlasProp caters to all- first time buyers, seasoned investors and property enthusiasts. Dive into our platform for an exhilirating property journey!
            </Typography>

            <Container sx={{display:"flex", 
                                alignItems:'center',                                
                                flexDirection:"row",
                                gap:"40px"
                                }}>
                {
                    properties.map((property) => (
                        <ManagePropertyCard key={property.id} property={property} >
                        </ManagePropertyCard>
                        ))
                }
                </Container>

        </Container>

    );
}

export default ManageProperty