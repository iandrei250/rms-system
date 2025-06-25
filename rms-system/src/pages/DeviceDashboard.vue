<template>
  <div class="flex justify-between p-2">
    <div class="p-4 text-lg bold">
      {{ store.activeTab === "telemetry" ? currentMetadata?.type : "" }}
    </div>
    <button
      class="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[50px]"
      @click="
        () => {
          store.setActiveTab(
            store.activeTab === 'telemetry' ? 'logs' : 'telemetry'
          );
        }
      "
    >
      {{ store.activeTab === "telemetry" ? seeLogsButton : seeTelemetryButton }}
    </button>
  </div>
  <div
    class="p-4"
    v-for="(telemetryData, id) in telemetryDataEntries"
    v-if="store.activeTab === 'telemetry'"
  >
    <Card
      :id="String(id)"
      :unit="currentMetadata?.unit ?? ''"
      :entry="telemetryData"
    />
  </div>
  <div v-else><TableLogs :logs="currentLogs" /></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "../helpers/store/store";
import type {
  DeviceLogs,
  TelemetryData,
  TelemetryMetadata,
} from "../helpers/types/types";
import Card from "../components/Dashboard/Card.vue";
import {
  getDeviceLogs,
  getDeviceMetadata,
  getDeviceTelemetry,
} from "../helpers/api/apiRequests";
import {
  seeLogsButton,
  seeTelemetryButton,
} from "../helpers/constants/constants";
import TableLogs from "../components/Dashboard/TableLogs.vue";
const store = useStore();

const telemetryDataEntries = ref<TelemetryData>({});

const telemetryMetadata = ref<TelemetryMetadata[]>([]);

const currentMetadata = ref<TelemetryMetadata | null>(null);

const currentLogs = ref<DeviceLogs[]>([]);

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

  getDeviceLogs(store.selectedDevice?.id || "").then((logs) => {
    currentLogs.value = logs;
  });

  onUnmounted(() => clearInterval(interval));
});
</script>
