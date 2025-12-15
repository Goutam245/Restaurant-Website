import { create } from "zustand";
import { Location } from "@/types";
import { locations } from "@/data";

interface LocationStore {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocation: null,
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  clearLocation: () => set({ selectedLocation: null }),
}));
