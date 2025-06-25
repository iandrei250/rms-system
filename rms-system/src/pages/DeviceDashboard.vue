<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../helpers/store/store";
const store = useStore();

onMounted(() => {
  store.loadSelectedDeviceFromStorage();
});
</script>
