export function ListingsOld() {
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
    <div className="text-sm text-gray-600">1 result</div>

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

  {/* Example listing */}
  <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2">
      <img
        src="https://plantingrootsrealty.com/wp-content/uploads/2025/01/2052973_b99273f3686026a1b6843f91e26a106b_674f0129b01ab-1024x771.jpg"
        alt="Listing"
        className="rounded w-full h-auto"
      />
    </div>
    <div className="md:w-1/2 space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">$55,000</span>
        <button className="text-sm text-red-500 hover:underline">Save</button>
      </div>
      <p className="text-sm text-gray-600">Wouldn’t it be nice to have a home for the...</p>
      <div className="flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15.3334 10.6667V5.33333C15.3334 4.59695 14.7364 4 14 4H2C1.26364 4 0.666687 4.59695 0.666687 5.33333V10.6667C0.666687 11.403 1.26364 12 2 12H14C14.7364 12 15.3334 11.403 15.3334 10.6667Z" />
        </svg>
        <span>960 sq ft</span>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
    </>
  )
}