import { axiosInstance } from "@/axios";

interface FormData {
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
  propertyType?: string;
  propertySubType?: string;
  images?: string[];
}

export const createProperty = async (payload: FormData) => {
  try {
    const response = await axiosInstance.post("/properties", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};
// for  Registering a property

export const RegisterProperty = async (payload: any) => {
  try {
    const response = await axiosInstance.post("/property-queries", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};
// for profile update

export const UpdateProfile = async (payload: any) => {
  try {
    const response = await axiosInstance.put("/account/profile", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};

// for profile update

export const UserResetPassword = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      "/account/change-password",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};
