import { create } from "zustand";

interface OptionStore {
  option: boolean;
  setOption: (option: boolean) => void;
}

export const useOptionStore = create<OptionStore>((set) => ({
  option: false,
  setOption: (option: boolean) => set({ option }),
}));
