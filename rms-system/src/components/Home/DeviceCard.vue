<template>
  <div
    class="rounded overflow-hidden shadow-lg hover:bg-gray-200 hover:cursor-pointer"
  >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ device.name }}</div>
      <p class="text-gray-700 text-base">{{ device.serialNumber }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ device.connectionStatus }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Device } from "../../helpers/types/types";

defineProps<{
  device: Device;
}>();
</script>
