export interface Device {
  id: string;
  serialNumber: string;
  name: string;
  type: string;
  connectionStatus: string;
  iotState: string;
}

export interface TelemetryMetadata {
  id: string;
  type: string;
  unit: string;
}

export interface TelemetryData {
  [key: string]: DataEntry;
}

export interface DataEntry {
  value: number;
  timestamp: string;
}
