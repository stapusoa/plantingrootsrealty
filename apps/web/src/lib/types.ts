export type Property = {
  _id: string
  title: string
  description?: string
  address?: string
  price?: number
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  dateAdded?: string
  type?: string[]
  features?: string[]
  imageUrl?: string
}