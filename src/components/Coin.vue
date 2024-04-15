<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSelectedCoinStore } from '@/stores/selected-coin'
import { getPrice } from '@/data/api/get-price'
import MarketChart from './MarketChart.vue'
import HistoryRangePicker from './HistoryRangePicker.vue'

const store = useSelectedCoinStore()
const { coin } = storeToRefs(store)

const { data, isLoading, isError } = useQuery({
  queryKey: ['GET_CURRENCY_PRICE', coin],
  queryFn: () => getPrice(coin.value),
  refetchInterval: 10 * 1000
})

const symbols = ref({
  bitcoin: 'BTC',
  cosmos: 'ATOM',
  dacxi: 'DACXI',
  ethereum: 'ETH'
})

const changePercentage = computed(() => data?.value?.[coin.value]?.usd_24h_change)

const uiConfigByPercentageValues = computed(() => {
  const isDown = (changePercentage?.value || 0) < 0
  return {
    color: isDown ? 'text-red-500' : 'text-green-500',
    rotate: isDown ? '180' : '0'
  }
})
</script>
<template>
  <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <Loading v-if="isLoading" />
    <p v-else-if="isError" class="text-red-500">
      Oops! We had a problem loading the data. Please try again.
    </p>
    <div v-else>
      <div class="flex justify-between">
        <div>
          <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            {{
              data?.[coin]?.usd.toLocaleString('en-US', {
                currency: 'USD',
                style: 'currency'
              })
            }}
          </h5>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ coin }} ({{ symbols[coin] }})
          </p>
        </div>
        <div
          class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center"
          :class="`${uiConfigByPercentageValues.color}`"
        >
          {{ changePercentage?.toFixed(4) }}%(1D)
          <svg
            class="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
            :transform="`rotate(${uiConfigByPercentageValues.rotate})`"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <MarketChart />
      <div class="flex justify-between items-center pt-5">
        <HistoryRangePicker />
      </div>
    </div>
  </div>
</template>
