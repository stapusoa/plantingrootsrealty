"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination"
import { Search, SlidersHorizontal, Grid, List } from "lucide-react"
import { Card } from "@/components/card"
import { FiltersSidebar } from "./FiltersSidebar"

import { sanity } from "@/lib/sanityClient"

const PROPERTY_QUERY = `*[_type == "property"]{
  _id,
  title,
  description,
  address,
  price,
  bedrooms,
  bathrooms,
  sqft,
  dateAdded,
  type,
  features,
  "imageUrl": images[0].asset->url
}`

type Property = {
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

const ITEMS_PER_PAGE = 6

export default function RealEstateGallery() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState({
    priceRange: [200000, 2000000] as [number, number],
    propertyTypes: [] as string[],
    bedrooms: "any",
    bathrooms: "any",
  })

  const [properties, setProperties] = useState<Property[]>([])
  
  useEffect(() => {
    sanity.fetch<Property[]>(PROPERTY_QUERY)
        .then(setProperties)
        .catch(e => {
          // You may want error UI here too
          console.error("Failed to fetch properties from Sanity:", e)
        })
    }, [])
  

  // Filter and search logic
  const filteredListings = useMemo(() => {
    const filtered = properties.filter((listing) => {
      const matchesSearch =
        searchQuery === "" ||
        listing.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPrice =
        typeof listing.price === "number" &&
        listing.price >= filters.priceRange[0] &&
        listing.price <= filters.priceRange[1];

      const matchesType =
        filters.propertyTypes.length === 0 ||
        (Array.isArray(listing.type) &&
          listing.type.some((t) => filters.propertyTypes.includes(t)));

      const matchesBedrooms =
        filters.bedrooms === "any" ||
        (listing.bedrooms ?? 0) >= Number(filters.bedrooms);

      const matchesBathrooms =
        filters.bathrooms === "any" ||
        (listing.bathrooms ?? 0) >= Number(filters.bathrooms);

      return (
        matchesSearch &&
        matchesPrice &&
        matchesType &&
        matchesBedrooms &&
        matchesBathrooms
      );
    });

    // Sort logic
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
        break
      case "price-high":
        filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
        break
      case "newest":
        filtered.sort((a, b) => new Date(b.dateAdded ?? "").getTime() - new Date(a.dateAdded ?? "").getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.dateAdded ?? "").getTime() - new Date(b.dateAdded ?? "").getTime())
        break
      case "sqft-high":
        filtered.sort((a, b) => (b.sqft ?? 0) - (a.sqft ?? 0))
        break
      case "sqft-low":
        filtered.sort((a, b) => (a.sqft ?? 0) - (b.sqft ?? 0))
        break
      default:
        break
    }

    return filtered
  }, [searchQuery, filters, sortBy, properties])

  // Pagination logic
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedListings = filteredListings.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handleClearFilters = () => {
    setFilters({
      priceRange: [200000, 2000000],
      propertyTypes: [],
      bedrooms: "any",
      bathrooms: "any",
    })
    setCurrentPage(1)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page when searching
  }

  return (
    <div className="min-h-screen mt-50 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Real Estate Listings</h1>
          <p className="text-gray-600">Find your perfect home from our curated selection of properties</p>
        </div>

        {/* Search and Controls */}
        <div className="mb-6 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by title, location, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>

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
                  color={viewMode === "grid" ? "primary" : "neutral"}
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "filled" : "outlined"}
                  size="sm"
                  color={viewMode === "list" ? "primary" : "neutral"}
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{filteredListings.length} properties found</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="sqft-high">Largest First</SelectItem>
                  <SelectItem value="sqft-low">Smallest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <FiltersSidebar
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          )}

          {/* Listings Grid */}
          <div className="flex-1">
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
                    viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {paginatedListings.map((listing) => (
                    <Card
                      key={listing._id}
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
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              if (currentPage > 1) setCurrentPage(currentPage - 1)
                            }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage(page)
                              }}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                            }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
