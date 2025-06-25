import { defineStore } from "pinia";
import type { Device } from "../types/types";

const STORAGE_KEY = "selectedDevice";

export const useStore = defineStore("store", {
  state: () => ({
    selectedDevice: null as Device | null,
  }),

  actions: {
    setSelectedDevice(device: Device | null) {
      this.selectedDevice = device;

      if (device) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(device));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    },

    loadSelectedDeviceFromStorage() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.selectedDevice = JSON.parse(saved);
      }
    },
  },
});
