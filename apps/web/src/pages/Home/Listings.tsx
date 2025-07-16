import { useEffect, useState } from "react"
import { sanity } from "@/lib/sanityClient"

const PROPERTY_QUERY = `*[_type == "property"]{
  _id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  "imageUrl": images[0].asset->url // adjust this field to match your schema
}`

type Property = {
  _id: string
  title: string
  address?: string
  price?: number
  bedrooms?: number
  bathrooms?: number
  imageUrl?: string
}

export function Listings() {
const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
  sanity.fetch<Property[]>(PROPERTY_QUERY)
      .then(setProperties)
      .catch(e => {
        // You may want error UI here too
        console.error("Failed to fetch properties from Sanity:", e)
      })
  }, [])

  return (
    <>
      <div className="w-full">
        <div
          className="flex flex-col h-[700px] max-w-full bg-cover bg-center text-gray-800 relative"
          style={{
            backgroundImage:
              'url("https://plantingrootsrealty.com/wp-content/uploads/2024/12/pexels-asphotograpy-101808-1.jpg")',
          }}
        >
          <div className="flex flex-col justify-center items-center h-full w-full bg-black/30">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-merriweather">Listings</h1>
              <hr className="mt-4 w-16 border-t-4 border-gray-300 mx-auto" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            className="px-6 py-2 rounded-md bg-primary text-white font-medium shadow hover:bg-primary-dark transition"
            href="https://www.utahrealestate.com/index/public.index"
          >
            Check out Utah listings
          </a>
          <a
            className="px-6 py-2 rounded-md bg-secondary text-white font-medium shadow hover:bg-secondary-dark transition"
            href="https://ngi.126.myftpupload.com/contact-us/"
          >
            Ask us about a listing
          </a>
        </div>
        <div className="mt-12">
          <div className="max-w-screen-xl mx-auto text-gray-800 px-4 py-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="text-lg font-semibold">Listings</div>
              <div className="text-sm text-gray-600">{properties.length} result{properties.length === 1 ? "" : "s"}</div>

              <div className="flex items-center gap-4 flex-wrap">
                <label htmlFor="sort" className="text-sm font-medium">
                  Sort by:
                  <select
                    id="sort"
                    name="sort"
                    className="ml-2 border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option value="newest">Newest</option>
                    <option value="lowest_price">Lowest price</option>
                    <option value="highest_price">Highest price</option>
                    <option value="largest_sq_ft">Largest sq ft</option>
                    <option value="bedrooms">Bedrooms</option>
                    <option value="bathrooms">Bathrooms</option>
                  </select>
                </label>

                <div className="flex gap-2">
                  <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" title="Grid View">
                    <span className="es-icon es-icon_grid" />
                  </button>
                  <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" title="List View">
                    <span className="es-icon es-icon_grid-row" />
                  </button>
                  <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" title="Map View">
                    <span className="es-icon es-icon_marker" />
                  </button>
                </div>
              </div>
              </div>

              {properties.length < 1 && <p>No properties found.</p>}

              {properties.map((property) => (
                <div key={property._id} className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-6 mb-4">
                  <div className="md:w-1/2">
                    <img
                      src={property.imageUrl || "/placeholder.jpg"}
                      alt={property.title}
                      className="rounded w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${property.price?.toLocaleString()}</span>
                      <button className="text-sm text-red-500 hover:underline">Save</button>
                    </div>
                    <h2 className="font-bold">{property.title}</h2>
                    <p className="text-sm text-gray-600">{property.address}</p>
                    {/* bedrooms, bathrooms, etc. */}
                    <div className="flex items-center gap-2 text-sm">
                      <span>{property.bedrooms} bd</span>
                      <span>{property.bathrooms} ba</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}
