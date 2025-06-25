<script setup lang="ts">
import { RouterLink } from "vue-router";
import { appName } from "../../helpers/constants/constants";
import router from "../../router";
</script>

<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="absolute inset-y-0 left-0 flex items-center sm:hidden"
        ></div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center ps-10">
            <img
              class="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div class="ps-5">
              <p class="px-3 py-2 text-lg font-medium text-white">
                {{ appName }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
