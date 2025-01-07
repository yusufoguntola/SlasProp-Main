import { ManagePropertyCard } from "@/components/ManagePropertyCard";
import { useCatchRedirect } from "@/hooks/use-catch-redirect";
import { Container, Typography } from "@mui/material";

export function ManageProperty() {
  const catchRedirect = useCatchRedirect("/dashboard/add-property");

  const properties = [
    {
      id: 1,
      imageUrl: "/assets/buy-property.png",
      heading: "Buy A Property",
      desc: "Discover your dream property with SlasProp. Explore curated listings, get insights into property values and enjoy seamless transactions. Your journey to property ownership egins here!",
      href: "/properties?listingType=Buy",
      type: "link",
    },
    {
      id: 2,
      imageUrl: "/assets/sell-property.png",
      heading: "Sell A Property",
      desc: "Maximize your property value effortlessly with SlasProp. List with ease, showcase unique features and connect with buyers seamlessly for a smooth selling journey!",
      onClick: catchRedirect,
      type: "button",
    },
    {
      id: 3,
      imageUrl: "/assets/rent-property.png",
      heading: "Rent A Property",
      desc: "Explore hassle-free renting with SlasProp. Find your dream space effortlessly with stunning visuals and tailored listings. Welcome to a new era of renting convenience!",
      href: "/properties?listingType=Rent",
      type: "link",
    },
  ] as const;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        py: 8,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
        SlasProp caters to all- first time buyers, seasoned investors and
        property enthusiasts. Dive into our platform for an exhilirating
        property journey!
      </Typography>

      <Container
        className="grid gap-6 py-8"
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {properties.map((property) => (
          <ManagePropertyCard key={property.id} {...property} />
        ))}
      </Container>
    </Container>
  );
}
