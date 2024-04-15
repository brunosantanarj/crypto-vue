<script setup lang="ts">
import { useSelectedCoinStore } from '@/stores/selected-coin'

const store = useSelectedCoinStore()
</script>
<template>
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button
      v-for="(coin, index) in store.supported"
      :key="coin"
      @click="store.updateCoin(coin)"
      type="button"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2"
      :class="{
        'rounded-s-lg': index === 0,
        'rounded-e-lg': index === store.supported.length - 1,
        'text-blue-700': coin === store.coin
      }"
    >
      {{ coin }}
    </button>
  </div>
</template>
