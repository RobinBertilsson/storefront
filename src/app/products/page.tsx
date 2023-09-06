import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Shop - Products',
  description: 'A list of products',
}

export default async function ProductListPage() {
  return <main>Products...</main>
}
