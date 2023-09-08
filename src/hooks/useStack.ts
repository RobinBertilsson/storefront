import { useCallback, useState } from 'react'

export function useStack<T>(initialValue: T[] = []) {
  const [values, setValues] = useState<T[]>(initialValue)

  const add = useCallback((v: T) => {
    setValues(prev => [...prev, v])
  }, [])

  const remove = useCallback((v: T) => {
    setValues(prev => prev.filter(i => i !== v))
  }, [])

  return {
    values,
    remove,
    add,
  }
}
