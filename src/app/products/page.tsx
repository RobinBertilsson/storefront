import type { Metadata } from 'next'

interface Context {
  searchParams: {
    category?: string
  }
}

export const metadata: Metadata = {
  title: 'My Shop - Products',
  description: 'A list of products',
}

export default async function ProductListPage(ctx: Context) {
  return <main>Product page!</main>
}
