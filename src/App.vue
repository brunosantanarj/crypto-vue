<script setup lang="ts">
import CoinCard from '@/components/CoinCard.vue'
import ChooseCoinGroup from '@/components/ChooseCoinGroup.vue'
import CoinHistory from '@/components/CoinHistory.vue'
</script>
<template>
  <header class="flex justify-center my-20">
    <ChooseCoinGroup />
  </header>

  <main class="container mx-auto flex justify-center flex-wrap">
    <CoinCard />
    <CoinHistory />
  </main>
</template>
