import { FC, PropsWithChildren } from 'react'

export const Banner: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="px-6 sm:px-8 bg-indigo-600 font-medium text-white flex items-center justify-center h-10">
      {children}
    </p>
  )
}
