import { CardMedia, Container } from "@mui/material";
import { PropertyCard } from "./PropertyCard";

import sampleImage from "../assets/land-view.png";

const properties = [
  {
    type: "Flat",
    regNo: "7654890321",
    taxID: "HFK8679011",
    desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
    area: 2345,
    beds: 4,
    baths: 3,
    price: "$319,000",
    location: "17917 Holderness Ln, Pflugerville, TX 78660",
    status: "active",
    taxDetails: {
      year: [2022, 2021, 2020, 2019],
      propertyTax: ["$9246", "$9426", "$9246", "$9246"],
      taxAssessment: ["$481,824", "$481,824", "$481,824", "$481,824"],
      status: ["pending"],
    },
    ownerDetails: {
      owner: ["Indrani Sen", "Arindam Dutta", "Chijrant Debnath"],
      totalYears: ["2015-2017", "2017-2019", "2019-Till Date"],
      initials: ["IS", "AD", "CD"],
    },
  },
  {
    type: "Villa",
    regNo: "7654822321",
    taxID: "JFK4679011",
    desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
    area: 2345,
    beds: 4,
    baths: 3,
    price: "$319,000",
    location: "17917 Holderness Ln, Pflugerville, TX 78660",
    status: "active",
    taxDetails: {
      year: [2022, 2021, 2020, 2019],
      propertyTax: ["$9246", "$9426", "$9246", "$9246"],
      taxAssessment: ["$481,824", "$481,824", "$481,824", "$481,824"],
      status: ["pending"],
    },
    ownerDetails: {
      owner: ["Indrani Sen", "Arindam Dutta", "Chijrant Debnath"],
      totalYears: ["2015-2017", "2017-2019", "2019-Till Date"],
      initials: ["IS", "AD", "CD"],
    },
  },
  {
    type: "Bungalow",
    regNo: "7651890311",
    taxID: "2FK8679011",
    desc: "Rare opportunity in highly desirable Springbrook. Popular Scott Felder built floorplan. Showcasing easy living, 4 spacious bedrooms, 3 FULL baths, bright open multiple living spaces, expansive back patio and surrounded by a tree covered paradise. Super convenient location. Easy walk to community park that has a sports field, playground, picnic area, BBQ grills, and a running/walking track. Numerous nearby parks, hike/bike trails and great access to IH35, 130 and 45. All this plus outstanding schools, shopping, dining and major employment including Tech Ridge, Dell, Samsung, Tesla, Apple, Amazon and The Domain. Truly a rare gem.",
    area: 2345,
    beds: 4,
    baths: 3,
    price: "$319,000",
    location: "17917 Holderness Ln, Pflugerville, TX 78660",
    status: "active",
    taxDetails: {
      year: [2022, 2021, 2020, 2019],
      propertyTax: ["$9246", "$9426", "$9246", "$9246"],
      taxAssessment: ["$481,824", "$481,824", "$481,824", "$481,824"],
      status: ["pending"],
    },
    ownerDetails: {
      owner: ["Indrani Sen", "Arindam Dutta", "Chijrant Debnath"],
      totalYears: ["2015-2017", "2017-2019", "2019-Till Date"],
      initials: ["IS", "AD", "CD"],
    },
  },
];

export function ImageCardWelcomeSearched() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={sampleImage.src}
        onLoad={() => console.log("this is loading")}
        onError={() => console.log("this is error")}
        alt="This is a land image"
        sx={{
          marginTop: "-80px",
          maxWidth: "63%",
          marginLeft: "-45px",
          objectFit: "fill",
          boxShadow: "0px 0px 10px 10px rgba(108, 122, 137, 0.5)",
        }}
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          overflow: "auto",
          marginTop: "100px",
          mb: 3,
        }}
      >
        {properties.map((property) => (
          <PropertyCard key={property.taxID} {...property} />
        ))}
      </Container>
    </Container>
  );
}
