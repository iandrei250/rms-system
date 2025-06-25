<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 hover:cursor-pointer">
    <div
      class="hover:bg-gray-100"
      v-for="device in devices"
      @click="goToDevicePage(device)"
    >
      <DeviceCard
        :header="device.name"
        :subheader="device.serialNumber"
        :status="device.iotState"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getDevices } from "../helpers/api/apiRequests";
import type { Device } from "../helpers/types/types";
import DeviceCard from "../components/shared/Card.vue";
import { useRouter } from "vue-router";
import { useStore } from "../helpers/store/store";

const devices = ref<Device[]>([]);

const router = useRouter();
const store = useStore();

onMounted(async () => {
  devices.value = await getDevices();
});

const goToDevicePage = (device: Device) => {
  store.setSelectedDevice(device);
  router.push("/device");
};
</script>
