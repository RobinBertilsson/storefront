'use client'

import { ProductFilter, Props as PFProps } from '../ProductFilter/ProductFilter'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { usePathname, useRouter } from 'next/navigation'
import { useQueryString } from '@/hooks/useQueryString'
import { useStack } from '@/hooks/useStack'
import { FC, useEffect } from 'react'

interface Props extends PFProps {
  initialValues: string[]
  searchParam: string
  options: string[]
}

export const ProductCheckboxFilter: FC<Props> = props => {
  const { isOpen, searchParam, options, label, initialValues } = props
  const { values, add, remove } = useStack<string>(initialValues)

  const { createQueryString } = useQueryString()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    router.push(`${pathname}?${createQueryString(searchParam, values)}`)
  }, [values, createQueryString, router, pathname, searchParam])

  return (
    <ProductFilter label={label} isOpen={isOpen}>
      <div className="space-y-4">
        {options.map((option, index) => (
          <label className="flex items-center" key={`${searchParam}-${index}`}>
            <input
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              checked={values.includes(option)}
              value={option}
              type="checkbox"
              onChange={({ target }) =>
                target.checked ? add(option) : remove(option)
              }
            />
            <span className="text-sm ml-2">
              {capitalizeFirstLetter(option)}
            </span>
          </label>
        ))}
      </div>
    </ProductFilter>
  )
}
