"use client"

import { Card } from "@/components/card"
import { Checkbox } from "@/components/checkbox"
import { Label } from "@/components/label"
import { Slider } from "@/components/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { Button } from "@/components/button"

export interface FiltersSidebarProps {
  filters: {
    priceRange: [number, number]
    propertyTypes: string[]
    bedrooms: string
    bathrooms: string
  }
  onFiltersChange: (filters: any) => void
  onClearFilters: () => void
}

export function FiltersSidebar({
  filters,
  onFiltersChange,
  onClearFilters,
}: FiltersSidebarProps) {
  const propertyTypes = ["house", "apartment", "condo", "townhouse"]

  const handlePriceRangeChange = (value: [number, number]) => {
    onFiltersChange({ ...filters, priceRange: value })
  }

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...filters.propertyTypes, type]
      : filters.propertyTypes.filter((t) => t !== type)
    onFiltersChange({ ...filters, propertyTypes: updatedTypes })
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)

  return (
    <div className="space-y-6">
      <Card size="sm" color="contrast" className="w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold">Filters</h2>

          {/* Price Range */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Price Range</Label>
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                max={2000000}
                min={200000}
                step={50000}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Property Type</Label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.propertyTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handlePropertyTypeChange(type, checked as boolean)
                    }
                  />
                  <Label htmlFor={type} className="text-sm capitalize">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Bedrooms</Label>
            <Select
              value={filters.bedrooms}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, bedrooms: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bathrooms */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Bathrooms</Label>
            <Select
              value={filters.bathrooms}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, bathrooms: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outlined"
            onClick={onClearFilters}
            className="w-full bg-transparent"
          >
            Clear Filters
          </Button>
        </div>
      </Card>
    </div>
  )
}