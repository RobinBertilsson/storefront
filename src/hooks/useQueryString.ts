import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useQueryString() {
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string | string[]) => {
      if (!value || (Array.isArray(value) && !value.length)) {
        return ''
      }

      const params = new URLSearchParams(searchParams)
      params.set(name, `${value}`)
      return params.toString()
    },
    [searchParams],
  )

  return {
    createQueryString,
  }
}
