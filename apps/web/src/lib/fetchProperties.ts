// fetchProperties.ts
import { sanity } from './sanityClient'

export async function fetchProperties() {
  const query = `*[_type == "property"]{ title, address, price, bedrooms, agent->{name, phone} }`
  return await sanity.fetch(query)
}
