<template></template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "../helpers/store/store";
import type { TelemetryData, TelemetryMetadata } from "../helpers/types/types";
import { getDeviceTelemetry } from "../helpers/api/apiRequests";
const store = useStore();

const telemetryData = ref<TelemetryData[]>([]);

onMounted(async () => {
  store.loadSelectedDeviceFromStorage();

  if (store.selectedDevice) {
    telemetryData.value = await getDeviceTelemetry(store.selectedDevice.id);
  }
});
</script>
