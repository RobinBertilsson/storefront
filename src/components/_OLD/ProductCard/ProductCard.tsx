import { ProductCardProps } from './ProductCardProps'
import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard: FC<ProductCardProps> = props => {
  const { id, image, title, price } = props

  return (
    <Link href={`/products/${id}`} key={id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          src={image}
          alt={title}
          fill={true}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </Link>
  )
}
