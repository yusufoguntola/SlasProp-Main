import { createFormContext } from "@mantine/form";

interface FormValues {
  name: string;
  price: string;
  description: string;
  squareFootage: string;
  propertySubType: string;
  propertyType: string;
  city: string;
  state: string;
  country: string;
  noOfBedrooms: string;
  address: string;
  amenities: string[];
  buildingMaterials: string[];
  architecturalStyle: string;
  condition: string;
  structuralFeatures: string[];
  buildYear: string;
  images: string[];
  utilitiesDetails: {
    services: {
      type: string;
      provided: boolean;
      providerName: string;
      serviceCharge: string;
      frequency: string;
    }[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };
  neighbourhoodDetails: {
    name: string;
    description: string;
    population: string;
    locatedInGatedEstate: boolean;
    proximityToPublicPlaces: {
      place: string;
      type: string;
      distance: string;
    }[];
  };
  hoaAndFinancialDetails: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: string;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: string;
    monthlyPayment: string;
    mortgageEndDate: string;
    otherFinancialDetails: string;
  };
}

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();
export { FormProvider, useForm, useFormContext };
export type { FormValues };
