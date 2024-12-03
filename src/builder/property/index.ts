import { axiosInstance } from "@/axios";

const list = (page = 1) =>
  axiosInstance.get<ApiResponse<Property[]>>(`/properties?page=${page}`);

const single = (id: number) =>
  axiosInstance.get<ApiResponse<Property>>(`/properties/${id}`);

const create_listing = async (payload: CreateProperty) =>
  await axiosInstance.post("/properties", {
    ...payload,
    constructionDetails: {
      ...payload.constructionDetails,
      buildingMaterials:
        // @ts-ignore
        payload.constructionDetails.buildingMaterials.split(", "),
      structuralFeatures:
        // @ts-ignore
        payload.constructionDetails.structuralFeatures.split(
          ", structuralFeatures",
        ),
    },
    amenities: payload.amenities.split(", "),
  });

export const properties = {
  list,
  single,
  create_listing,
};