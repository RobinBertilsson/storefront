import type { FC, PropsWithChildren } from 'react'

export const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="mb-8 text-4xl font-bold text-gray-900">{children}</h2>
}
