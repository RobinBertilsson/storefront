import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'

interface Props extends PropsWithChildren {
  href: string
}

export const NavigationItem: FC<Props> = ({ children, href }) => {
  return (
    <Link
      className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center"
      href={href}>
      {children}
    </Link>
  )
}
