// fetchProperties.ts
import { sanity } from './sanityClient'

export async function fetchProperties() {
  const query = `
    *[_type == "property"]{
      title,
      address,
      price,
      bedrooms,
      agent->{
        name,
        phone
      }
    }
  `
  try {
    if (!sanity) {
      throw new Error("Sanity client is not initialized.");
    }
    const properties = await sanity.fetch(query)
    return properties
  } catch (error) {
    console.error("Failed to fetch properties:", error)
    throw error
  }
}