import type { SupportedCoins } from '@/base/types/coins'
import { httpRequestBase } from './base'
import type { History } from '@/base/types/history'

type HistoryResponse = Promise<History>

export async function getHistoryData(coin: SupportedCoins, date: string): HistoryResponse {
  const searchParams = new URLSearchParams({
    date
  })

  const request = await httpRequestBase(`coins/${coin}/history?${searchParams}`)
  const response = await request.json()
  return response
}
