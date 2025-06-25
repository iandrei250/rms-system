<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ telemetryEntryId }} {{ id }}</div>
      <p class="text-gray-700 text-base">
        {{ telemetryEntryValue }} {{ entry.value }} {{ unit }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ formatDate(entry.timestamp) }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from "../../helpers/utils";
import type { DataEntry } from "../../helpers/types/types";
import {
  telemetryEntryId,
  telemetryEntryValue,
} from "../../helpers/constants/constants";

defineProps<{
  id: string;
  entry: DataEntry;
  unit: string;
}>();
</script>
