<script setup lang="ts">
import Coin from '@/components/Coin.vue'
import ChooseCoinGroup from '@/components/ChooseCoinGroup.vue'
</script>
<template>
  <header class="flex justify-center my-20">
    <ChooseCoinGroup />
  </header>

  <main class="container mx-auto flex justify-center">
    <Coin />
  </main>
</template>
