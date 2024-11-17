import { create } from "zustand";

const useLoginStore = create((set) => ({
  formData: {
    userID: "",
    password: "",
  },
  errors: {
    userID: "",
    password: "",
  },
  setFormData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),
  setErrors: (newErrors) =>
    set((state) => ({ errors: { ...state.errors, ...newErrors } })),
  resetForm: () =>
    set(() => ({
      formData: { userID: "", password: "" },
      errors: { userID: "", password: "" },
    })),
}));

export default useLoginStore;
