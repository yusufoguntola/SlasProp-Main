export interface CreateProperty {
  propertyType: string;
  propertySubType: string;
  images: string[];
  name: string;
  price: string;
  description: string;
  city: string;
  state: string;
  country: string;
  noOfBedrooms: string;
  address: string;
  squareFootage: string;
  amenities: string[];
  buildingMaterials: string[];
  architecturalStyle: string;
  condition: string;
  structuralFeatures: string[];
  buildYear: string;
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
