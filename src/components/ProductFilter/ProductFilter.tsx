'use client'

import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { FC, PropsWithChildren, useMemo, useState } from 'react'

export interface Props {
  isOpen?: boolean
  label: string
}

export const ProductFilter: FC<PropsWithChildren<Props>> = props => {
  const { isOpen: initialIsOpen = false, label, children } = props

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
      {isOpen && <div className="pt-6">{children}</div>}
    </div>
  )
}
