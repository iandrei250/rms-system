<template>
  <div class="relative overflow-x-auto shadow-md">
    <table class="w-full text-sm text-left text-black" data-testid="logs-table">
      <thead
        class="text-xs text-black uppercase bg-white border-b border-gray-200"
      >
        <tr>
          <th
            v-for="header in logsTableHeaders"
            scope="col"
            class="px-6 py-3 text-lg font-bold text-center"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b border-gray-200 text-center"
          v-for="log in logs"
          :key="log.timestamp"
        >
          <td class="px-6 py-4">{{ log.type }}</td>
          <td class="px-6 py-4">{{ log.message }}</td>
          <td class="px-6 py-4">{{ formatDate(log.timestamp) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { logsTableHeaders } from "../../helpers/constants/constants";
import type { DeviceLogs } from "../../helpers/types/types";
import { formatDate } from "../../helpers/utils";

defineProps<{
  logs: DeviceLogs[];
}>();
</script>
