'use client'

import { useQueryString } from '@/hooks/useQueryString'
import { ProductFilter, Props as TFProps } from '../ProductFilter/ProductFilter'
import { FC, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { CurrencyInputField } from '../CurrencyInputField/CurrencyInputField'

interface Props extends TFProps {
  searchParam: string
  minValue: number
  maxValue: number
}

export const ProductRangeFilter: FC<Props> = props => {
  const {
    minValue: initialMinValue,
    maxValue: initialMaxValue,
    searchParam,
    isOpen,
    label,
  } = props

  const [minValue, setMinValue] = useState<number>(initialMinValue)
  const [maxValue, setMaxValue] = useState<number>(initialMaxValue)

  const { createQueryString } = useQueryString()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    router.push(
      `${pathname}?${createQueryString(
        searchParam,
        `${minValue}-${maxValue}`,
      )}`,
    )
  }, [createQueryString, maxValue, minValue, pathname, router, searchParam])

  return (
    <ProductFilter isOpen={isOpen} label={label}>
      <div className="flex items-center">
        <CurrencyInputField
          onChange={e => setMinValue(parseInt(e.target.value))}
          value={minValue}
        />

        <span className="px-4 text-gray-600 text-xs">-</span>

        <CurrencyInputField
          onChange={e => setMaxValue(parseInt(e.target.value))}
          value={maxValue}
        />
      </div>
    </ProductFilter>
  )
}
