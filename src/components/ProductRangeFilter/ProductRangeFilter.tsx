'use client'

import { ProductFilter, Props as TFProps } from '../ProductFilter/ProductFilter'
import { FC, useState } from 'react'

interface Props extends TFProps {
  fromSearchParam: string
  toSearchParam: string
  minValue: number
  maxValue: number
}

export const ProductRangeFilter: FC<Props> = props => {
  const {
    minValue: initialMinValue,
    maxValue: initialMaxValue,
    isOpen,
    label,
  } = props

  const [minValue, setMinValue] = useState<number>(initialMinValue)
  const [maxValue, setMaxValue] = useState<number>(initialMaxValue)

  return (
    <ProductFilter isOpen={isOpen} label={label}>
      <div className="flex items-center">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={e => setMinValue(parseInt(e.target.value))}
            value={minValue}
            type="number"
          />
        </div>

        <span className="px-4 text-gray-600 text-xs">-</span>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={e => setMaxValue(parseInt(e.target.value))}
            value={maxValue}
            type="number"
          />
        </div>
      </div>
    </ProductFilter>
  )
}
