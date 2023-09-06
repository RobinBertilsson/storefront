import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { NavigationItem } from './NavigationItem'
import Link from 'next/link'
import { FC } from 'react'
import { NavigationLogo } from './NavigationLogo'

export const Navigation: FC = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="border-b border-slate-300 flex items-center justify-between">
        <div className="flex space-x-8 items-center h-16">
          <NavigationLogo
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Storefront"
            href="/products"
          />

          <NavigationItem href="/products?categories=women's+clothing">
            Women
          </NavigationItem>

          <NavigationItem href="/products?categories=men's+clothing">
            Men
          </NavigationItem>
        </div>

        <div>
          <NavigationItem href="/cart">
            <ShoppingBagIcon className="w-6 h-6" />
            <span className="ml-1">0</span>
          </NavigationItem>
        </div>
      </div>
    </nav>
  )
}
