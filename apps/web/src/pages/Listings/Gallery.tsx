"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Grid, List, SlidersHorizontal } from "lucide-react"

import {
  Button,
  Card,
  FiltersSidebar,
  SearchBar,
  PaginationControls,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/index"

import type { FiltersSidebarProps } from "@/components/listings/FiltersSidebar"
import type { Property } from "../../../../api/src/lib/cms/types"

type Filters = FiltersSidebarProps["filters"]

const DEFAULT_FILTERS: Filters = {
  priceRange: [200000, 2000000],
  propertyTypes: [],
  bedrooms: "any",
  bathrooms: "any",
}

export default function RealEstateGallery() {
  const [properties, setProperties] = useState<Property[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<string>("price-low") // <-- widened to string
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)

  const ITEMS_PER_PAGE = 9 // frontend pagination

  // Fetch properties from backend API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const queryParams = new URLSearchParams({
          searchQuery,
          sortBy,
          filters: JSON.stringify(filters),
        })

        const res = await fetch(`http://localhost:3000/listings?${queryParams.toString()}`)
        const data: Property[] = await res.json()
        setProperties(data)
      } catch (err) {
        console.error("Failed to fetch properties:", err)
      }
    }

    fetchProperties()
  }, [filters, searchQuery, sortBy])

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE)
  const paginatedListings = properties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen mt-50 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Real Estate Listings</h1>
          <p className="text-gray-600">Find your perfect home from our curated selection of properties</p>
        </header>

        {/* Search, View Controls, Sort */}
        <section className="mb-6 space-y-4">
          <SearchBar query={searchQuery} onChange={setSearchQuery} onSubmit={handleSearch} />

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outlined" size="sm" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "filled" : "outlined"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "filled" : "outlined"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{properties.length} properties found</span>
              <Select
                value={sortBy}
                onValueChange={(value) =>
                  setSortBy(value as "price-low" | "price-high" | "newest" | "oldest")
                }
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    { label: "Price: Low to High", value: "price-low" },
                    { label: "Price: High to Low", value: "price-high" },
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                  ].map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Content */}
        <main className="flex gap-8">
          {showFilters && (
            <aside className="w-80 shrink-0">
              <FiltersSidebar
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </aside>
          )}

          <section className="flex-1">
            {paginatedListings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
                <Button variant="outlined" onClick={handleClearFilters} className="mt-4 bg-transparent">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {paginatedListings.map((listing) => (
                    <Link key={listing._id} to={`/listings/${listing._id}`}>
                      <Card
                        title={listing.title}
                        description={listing.description}
                        image={{ url: listing.imageUrl, imagePosition: "inline" }}
                        price={listing.price}
                        amenities={[
                          { icon: "bed", label: `${listing.bedrooms} bedrooms` },
                          { icon: "bath", label: `${listing.bathrooms} bathrooms` },
                        ]}
                        size="md"
                      />
                    </Link>
                  ))}
                </div>

                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
