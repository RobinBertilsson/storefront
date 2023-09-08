import type { Metadata } from 'next'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getCategories } from '@/sdk/client/getCategories'
import { ProductCheckboxFilter } from '@/components/ProductCheckboxFilter/ProductCheckboxFilter'
import { ProductRangeFilter } from '@/components/ProductRangeFilter/ProductRangeFilter'
import { getProducts } from '@/sdk/client/getProducts'
import { PageCtx } from '../types/PageCtx'
import { ProductCard } from '@/components/ProductCard/ProductCard'

export const metadata: Metadata = {
  title: 'My Shop - Products',
  description: 'A list of products',
}

interface Context {
  category?: string
}

export default async function ProductListPage(ctx: PageCtx<{}, Context>) {
  const allCategories = await getCategories()
  const allProducts = await getProducts()

  const selectedCategories = ctx.searchParams.category?.split(',') ?? []

  const products = allProducts.filter(p => {
    if (!selectedCategories.length) {
      return true
    }

    return selectedCategories.includes(p.category)
  })

  return (
    <>
      <section className="pt-24 pb-6 border-b border-slate-300 flex items-baseline justify-between">
        <h1 className="font-bold text-4xl">Products</h1>
        <div>
          <button className="font-medium text-sm flex items-center text-gray-600 hover:text-gray-800">
            <span>Sort</span>
            <ChevronDownIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </section>

      <section className="pb-24 pt-6">
        <div className="grid grid-cols-4 gap-y-10 gap-x-8">
          <div className="col-span-1">
            <ProductCheckboxFilter
              initialValues={selectedCategories}
              searchParam="category"
              options={allCategories}
              label="Category"
              isOpen
            />

            <ProductRangeFilter
              fromSearchParam="fromPrice"
              toSearchParam="toPrice"
              maxValue={1000}
              label="Price"
              minValue={0}
            />
          </div>

          <div className="col-span-3">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
