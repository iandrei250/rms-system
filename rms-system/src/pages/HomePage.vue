<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getDevices } from "../helpers/api/apiRequests";

onMounted(async () => {
  const devices = await getDevices();

  console.log("Devices:", devices);
});
</script>
