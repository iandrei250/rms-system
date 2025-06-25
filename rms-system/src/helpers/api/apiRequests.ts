import axios from "axios";
import type { Device, TelemetryData, TelemetryMetadata } from "../types/types";
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

export const getDeviceMetadata: () => Promise<
  TelemetryMetadata[]
> = async () => {
  try {
    const response = await axios.get(API_BASE_URL + Paths.metadata);
    return response.data;
  } catch (err) {
    throw "Failed to fetch metadata: " + (err as Error).message;
  }
};

export const getDeviceTelemetry: (
  deviceId: string
) => Promise<TelemetryData[]> = async (deviceId) => {
  try {
    const response = await axios.get(API_BASE_URL + Paths.telemetry(deviceId));
    return response.data;
  } catch (err) {
    throw "Failed to fetch telemetry: " + (err as Error).message;
  }
};

export const getDeviceLogs: (deviceId: string) => Promise<any> = async (
  deviceId
) => {
  try {
    const response = await axios.get(API_BASE_URL + Paths.logs(deviceId));
    return response.data;
  } catch (err) {
    throw "Failed to fetch logs: " + (err as Error).message;
  }
};
