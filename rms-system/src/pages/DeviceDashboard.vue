<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../helpers/store/store";

onMounted(() => {
  const store = useStore();

  console.log(store.selectedDevice);
});
</script>
