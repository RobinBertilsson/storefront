import { Navigation } from '../Navigation/Navigation'
import { Banner } from '../Banner/Banner'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header>
      <Banner>Get free delivery on orders over $100</Banner>
      <Navigation />
    </header>
  )
}
