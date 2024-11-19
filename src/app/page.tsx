"use client";

import { Footer } from "@/sections/Footer";
import { AdvertisementContainer } from "../sections/AdvertisementContainer";
import { Blogs } from "../sections/Blogs";
import { FeatureProperties } from "../sections/FeatureProperties";
import { HomeImageContainer } from "../sections/HomeImageContainer";
import { JoinUs } from "../sections/JoinUs";
import { KnowAboutSlasProp } from "../sections/KnowAboutSlasProp";
import { ListProperty } from "../sections/ListProperty";
import { ManageProperty } from "../sections/ManageProperty";
import { NavBarContainer } from "../sections/NavBarContainer";
import { RegisterProperty } from "../sections/RegisterProperty";
import { SubmitInquiry } from "../sections/SubmitInquiry";

export default function Homepage() {
  return (
    <>
      <NavBarContainer />
      <HomeImageContainer />
      <RegisterProperty />
      <ListProperty />
      <ManageProperty />
      <AdvertisementContainer />
      <FeatureProperties />
      <KnowAboutSlasProp />
      <JoinUs />
      <Blogs />
      <SubmitInquiry />
      <Footer />
    </>
  );
}
