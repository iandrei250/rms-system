export const Paths = {
  all: "/api/devices",
  metadata: "/api/telemetry/metadata",
  telemetry: (deviceId: string) => `/api/telemetry/${deviceId}`,
  logs: (deviceId: string) => `/api/logs/${deviceId}?page=1&pagesize=10`,
};
