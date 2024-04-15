<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useSelectedCoinStore } from '@/stores/selected-coin'
import { getHistoryData } from '@/data/api/get-history'

const date = ref('')
const store = useSelectedCoinStore()
const { coin } = storeToRefs(store)

const { mutate, isPending, data } = useMutation({
  mutationFn: (dateInput: string) => getHistoryData(coin.value, dateInput)
})

watchEffect(() => {
  mutate(date.value.split('-').reverse().join('-'))
})
</script>
<template>
  <section class="w-full my-2">
    <h2 class="text-center mt-8 mb-4 text-xl font-bold">History</h2>
    <form class="max-w-[20rem] mx-auto">
      <label for="time" class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select date:</label
      >
      <input
        v-model="date"
        type="date"
        id="time"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="09:00"
        max="18:00"
        value="00:00"
        required
      />
    </form>
    <div v-if="isPending" class="text-center mt-10">Carregando</div>
    <div v-else-if="date && data" class="text-center my-10">
      The price of {{ coin }} in {{ date }} was
      {{
        data?.market_data.current_price.usd.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency'
        })
      }}
    </div>
  </section>
</template>
