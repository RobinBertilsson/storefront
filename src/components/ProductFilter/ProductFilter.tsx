'use client'

import { useQueryString } from '@/hooks/useQueryString'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { FC, FormEvent, useCallback, useMemo, useState } from 'react'

interface Props {
  searchParam: string
  options: string[]
  isOpen: boolean
  label: string
}

export const ProductFilter: FC<Props> = props => {
  const { isOpen: initialIsOpen, searchParam, options, label } = props
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  const ToggleIcon = useMemo(() => {
    if (isOpen) {
      return MinusIcon
    }

    return PlusIcon
  }, [isOpen])

  return (
    <div className="py-6 border-b border-slate-300">
      <h3 className="flow-root -my-3">
        <button
          className="text-sm py-3 flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen(p => !p)}>
          <span className="font-medium">{label}</span>
          <span className="flex items-center ml-4">
            <ToggleIcon className="w-5 h-5" />
          </span>
        </button>
      </h3>
      {isOpen && (
        <form className="pt-6 space-y-4">
          {options.map((option, index) => (
            <label
              className="flex items-center"
              key={`${searchParam}-${index}`}>
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                type="checkbox"
              />
              <span className="text-sm ml-2">
                {capitalizeFirstLetter(option)}
              </span>
            </label>
          ))}
        </form>
      )}
    </div>
  )
}
