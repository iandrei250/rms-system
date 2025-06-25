<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ header }}
      </div>
      <p class="text-gray-700 text-base">
        {{ subheader }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ status }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  header: string;
  subheader: string;
  status: string;
}>();
</script>
