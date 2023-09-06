import type { Metadata } from 'next'
import { ChevronDownIcon, MinusIcon } from '@heroicons/react/20/solid'
import { getCategories } from '@/sdk/client/getCategories'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { ProductFilter } from '@/components/ProductFilter/ProductFilter'

export const metadata: Metadata = {
  title: 'My Shop - Products',
  description: 'A list of products',
}

export default async function ProductListPage() {
  const categories = await getCategories()

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
            <ProductFilter
              searchParam="category"
              options={categories}
              label="Category"
              isOpen
            />
          </div>

          <div className="col-span-3">bb</div>
        </div>
      </section>
    </>
  )
}
