import { createFormContext } from "@mantine/form";

interface FormValues {
  name: string;
  price: string;
  description: string;
  squareFootage: string;
  // city: string;
  // state: string;
  // country: string;
  // noOfBedrooms: string;
  // address: string;
  // amenities: string[];
  // buildingMaterials: string[];
  // architecturalStyle: string;
  // condition: string;
  // structuralFeatures: string[];
  // buildYear: string;
}

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();
export { FormProvider, useForm, useFormContext };
