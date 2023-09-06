import Link from 'next/link'
import { FC } from 'react'

interface Props {
  href: string
  alt: string
  src: string
}

export const NavigationLogo: FC<Props> = ({ href, src, alt }) => {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-8 h-8" src={src} alt={alt} />
    </Link>
  )
}
