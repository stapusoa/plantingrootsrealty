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

export type Page = {
  _id: string
  title: string
  subheader?: string
  heroButtonText?: string
  heroButtonLink?: string
  "heroImageSM"?: string
  "heroImageMD"?: string
  "heroImageLG"?: string
  body?: any[]
  slug?: { current: string }
}