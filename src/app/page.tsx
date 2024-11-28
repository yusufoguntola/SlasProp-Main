<<<<<<< HEAD
"use client";

import { Footer } from "@/sections/Footer";
import { Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
=======
"use client";

import { Footer } from "@/sections/Footer";
import { Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
