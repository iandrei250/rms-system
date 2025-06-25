import { defineStore } from "pinia";
import type { Device } from "../types/types";

export const useStore = defineStore("store", {
  state: () => ({
    selectedDevice: localStorage.getItem("device"),
  }),

  actions: {
    setSelectedDevice(device: Device | null) {
      this.selectedDevice = device ? JSON.stringify(device) : null;
    },
  },
});
