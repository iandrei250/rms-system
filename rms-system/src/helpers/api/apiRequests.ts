import axios from "axios";
import type { Device } from "../types/types";
import { Paths } from "./paths";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getDevices: () => Promise<Device[]> = async () => {
  try {
    const response = await axios.get(API_BASE_URL + Paths.all);
    return response.data;
  } catch (err) {
    throw "Failed to fetch heroes: " + (err as Error).message;
  }
};
