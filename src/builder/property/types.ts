interface Property {
  id: number;
  propertyId: string;
  // Property information
  name: string;
  propertyType: string;
  propertySubType: string;
  squareFootage: string;
  price: string;
  description: string;
  images: string[];
  // Property details
  address: string;
  city: string;
  state: string;
  country: string;
  noOfBedrooms: string;
  amenities: string[];
  longitude: string | null;
  latitude: string | null;
  // Construction Details
  constructionDetails: ConstructionDetails;
  listingStatus: ListingStatus | null;
  listingType: string;
  listingDate: Date;
  ownershipStatus: OwnershipStatus | null;
  // Utility Details
  utilitiesDetails: {
    services: UtilityService[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };
  // Neighborhood Details
  neighbourhoodDetails: Neighborhood;
  // HOA Information
  hoaAndFinancialDetails: FinancialDetails;

  createdAt: Date;
  updatedAt: Date;
  createdById: number | null;
  updatedById: number | null;
  ownerId: number;
  owner: User;
}

type CreateProperty = Omit<
  Property,
  | "id"
  | "propertyId"
  | "createdAt"
  | "updatedAt"
  | "owner"
  | "ownerId"
  | "createdById"
  | "updatedById"
  | "listingStatus"
  | "listingDate"
  | "amenities"
> & { amenities: string };

type ListingStatus = "public" | "private" | "draft";

type OwnershipStatus = "owned";

type RegisterProperty = Omit<
  RegisteredProperty,
  "id" | "address" | "state" | "country" | "propertyDescription" | "location"
> & {
  paymentRefId: string;
};
interface RegisteredProperty {
  id: number;
  ownerName: string;
  requestType: string;
  registrantName: string;
  propertyType: string;
  registrationNumber: string;
  propertyTaxId: string;
  areaOfLand: string;
  locationId: string;
  zipCode: string;
  registeredAddress: string;
  address: string;
  state: string;
  country: string;
  propertyDescription?: string;
  location: Location;
}

interface Location {
  id: string;
  name: string;
}

interface ConstructionDetails {
  buildingMaterials: string[];
  architecturalStyle: string;
  condition: string;
  structuralFeatures: string[];
  buildYear: string;
}

interface UtilityService {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: number;
  frequency: string;
}

interface User {
  firstName: string;
  lastName: string;
  imageUrl: string;
  id: number;
}

interface FinancialDetails {
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
}

interface Neighborhood {
  name: string;
  description: string;
  population: string;
  locatedInGatedEstate: boolean;
  proximityToPublicPlaces: Proximity[];
}

interface Proximity {
  place: string;
  type: string;
  distance: string;
}

interface Payment {
  id: PermId;
  refId: string;
  type: string;
  amount: string;
  description: string;
  amountPaid: string | null;
  status: "Pending" | "Completed" | "Declined" | (string & {});
  createdById: PermId;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: null;
  splitCode: string;
}

interface PropertyRequestPayload {
  propertyId: PermId;
  amountOffered: number;
  message: string;
}

interface PropertyRequest {
  id: PermId;
  requestId: string;
  amountOffered: number;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: PermId;
  propertyId: PermId;
  createdBy: User;
  property: {
    name: string;
    id: 1;
    propertyId: string;
    status: string;
    listingType: string;
    propertyType: string;
    propertySubType: string;
    address: string;
    city: string;
    state: string;
    country: string;
    price: number;
    description: string;
  };
}
