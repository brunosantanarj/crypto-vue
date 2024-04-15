<script setup lang="ts">
import ApexCharts from 'apexcharts'
import { useQuery } from '@tanstack/vue-query'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useSelectedCoinStore } from '@/stores/selected-coin'
import { chartAreaConfig } from '@/base/chart/area-config'
import { getMarketChart } from '@/data/api/get-market-chart'

const store = useSelectedCoinStore()
const { coin } = storeToRefs(store)

const { data } = useQuery({
  queryKey: ['GET_MARKET_CHART', coin],
  queryFn: () => getMarketChart(coin.value),
  refetchInterval: 10 * 1000
})

const chart = ref(null)

watchEffect(() => {
  new ApexCharts(chart.value, {
    ...chartAreaConfig,
    series: [
      {
        name: 'Prices',
        data: data.value?.prices.map((price) => (price.length > 1 ? price[1] : price[0])),
        color: '#1A56DB'
      }
    ]
  }).render()
})
</script>
<template>
  <div ref="chart"></div>
</template>
