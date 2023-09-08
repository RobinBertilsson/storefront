import Link from 'next/link'
import { FC } from 'react'

interface Props {
  id: number
  title: string
  image: string
  price: number
}

export const ProductCard: FC<Props> = ({ id, title, image, price }) => {
  return (
    <div className="group block relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          alt={title}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  )
}
