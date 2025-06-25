<template>
  <div class="grid grid-cols-3">
    <div class="p-4" v-for="device in devices">
      <DeviceCard :key="device.id" :device="device" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getDevices } from "../helpers/api/apiRequests";
import type { Device } from "../helpers/types/types";
import DeviceCard from "../components/Home/DeviceCard.vue";

const devices = ref<Device[]>([]);

onMounted(async () => {
  devices.value = await getDevices();
});
</script>
