export async function getCategories(): Promise<string[]> {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return res.json()
}
