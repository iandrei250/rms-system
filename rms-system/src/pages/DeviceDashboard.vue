<template>
  <div class="p-4">{{ currentMetadata?.type }}</div>
  <div class="p-4" v-for="(telemetryData, id) in telemetryDataEntries">
    <Card
      :id="String(id)"
      :unit="currentMetadata?.unit ?? ''"
      :entry="telemetryData"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "../helpers/store/store";
import type { TelemetryData, TelemetryMetadata } from "../helpers/types/types";
import Card from "../components/Shared/Card.vue";
import {
  getDeviceMetadata,
  getDeviceTelemetry,
} from "../helpers/api/apiRequests";
const store = useStore();

const telemetryDataEntries = ref<TelemetryData>({});

const telemetryMetadata = ref<TelemetryMetadata[]>([]);

const currentMetadata = ref<TelemetryMetadata | null>(null);

onMounted(async () => {
  store.loadSelectedDeviceFromStorage();

  if (store.selectedDevice) {
    telemetryDataEntries.value = await getDeviceTelemetry(
      store.selectedDevice.id
    );
  }

  const interval = setInterval(async () => {
    if (store.selectedDevice) {
      telemetryDataEntries.value = await getDeviceTelemetry(
        store.selectedDevice.id
      );
    }
  }, 2000);

  telemetryMetadata.value = await getDeviceMetadata();

  currentMetadata.value =
    telemetryMetadata.value.find(
      (meta) => meta.id === store.selectedDevice?.id
    ) || null;

  onUnmounted(() => clearInterval(interval));
});
</script>
