export interface PropertiesData {
  id: number;
  name: string;
  taxID: string;
  landType: string;
  area: number;
  regNumber: number;
  location: string;
  address: string;
  zip: string;
  taxDetails: {
    year: number[];
    propertyTax: string[];
    taxAssessment: string[];
    status: string[];
  };
  OwnerDetail: {
    owner: string[];
    totalYears: string[];
    initials: string[];
  };
}

import { StaticImageData } from "next/image";

export interface PropertyData {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  desc: string;
  area: number;
  beds: number;
  baths: number;
  price: string;
  location: string;
  status: string;
}
