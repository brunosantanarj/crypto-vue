import { defineStore } from 'pinia'
import type { SupportedCoins } from '@/base/types/coins'

export const useSelectedCoinStore = defineStore('selectedCoin', {
  state: () => ({
    coin: 'bitcoin' as SupportedCoins,
    supported: ['bitcoin', 'cosmos', 'dacxi', 'ethereum'] as SupportedCoins[]
  }),
  actions: {
    updateCoin(coin: SupportedCoins) {
      this.coin = coin
    }
  }
})
