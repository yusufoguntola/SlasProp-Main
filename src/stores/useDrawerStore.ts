import { create } from "zustand";

interface DrawerStore {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  opened: false,
  setOpened: (opened: boolean) => set({ opened }),
}));
