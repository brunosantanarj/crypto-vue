import type { SupportedCoins } from "@/base/types/coins";
import { httpRequestBase } from "./base";
import type { Price } from "@/base/types/price";

type PricingResponse = Promise<{ [key in SupportedCoins]: Price }>

export async function getPrice(coin: SupportedCoins): PricingResponse {
  const searchParams = new URLSearchParams({
    ids: coin,
    vs_currencies: 'usd',
    include_market_cap: 'true',
    include_24_vol: 'true',
    include_24hr_change: 'true',
  })

  const request = await httpRequestBase(`simple/price?${searchParams}`)
  const response = await request.json()
  return response
}
