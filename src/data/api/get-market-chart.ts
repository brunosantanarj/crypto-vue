import type { SupportedCoins } from '@/base/types/coins'
import { httpRequestBase } from './base'
import type { MarketChart } from '@/base/types/market-chart'

type PricingResponse = Promise<MarketChart>

export async function getMarketChart(coin: SupportedCoins): PricingResponse {
  const searchParams = new URLSearchParams({
    id: coin,
    vs_currency: 'usd',
    days: '1'
  })

  const request = await httpRequestBase(`coins/${coin}/market_chart?${searchParams}`)
  const response = await request.json()
  return response
}
