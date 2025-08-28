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
  _id: string;
  title?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  robots?: string;
  h1?: string;
  subheader?: { text?: string; alignment?: "left" | "center" };
  cta?: { text?: string; url?: string };
  body?: any[];
  images?: {
    _key: string;
    alt?: string;
    asset: { url: string };
  }[];
};