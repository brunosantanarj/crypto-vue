export type FetchParams = Parameters<(input: RequestInfo, init?: RequestInit | undefined) => void>
export function httpRequestBase(...[input, init]: FetchParams): Promise<Response> {
  const request = fetch(`${import.meta.env.VITE_GECKO_API_URL}${input}`, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      'Content-Type': 'application/json',
      'x-cg-demo-api-key': import.meta.env.VITE_GECKO_API_KEY
    }
  })

  request.then(({ status }) => {
    if (status === 401) {
      window.alert('Não autorizado')
    }
  })
  return request
}
