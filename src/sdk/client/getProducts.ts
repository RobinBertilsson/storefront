export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}
