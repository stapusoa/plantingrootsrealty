export interface DataListing {
  id: string
  title: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  type: "house" | "apartment" | "condo" | "townhouse"
  location: string
  image: string
  description: string
  features: string[]
  dateAdded: string
}

export const mockListings: DataListing[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "apartment",
    location: "Downtown, Seattle",
    image: "/placeholder.svg?height=300&width=400",
    description: "Beautiful modern apartment in the heart of downtown with city views.",
    features: ["City View", "Parking", "Gym", "Pool"],
    dateAdded: "2024-01-15",
  },
  {
    id: "2",
    title: "Spacious Family Home",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    type: "house",
    location: "Suburbs, Bellevue",
    image: "/placeholder.svg?height=300&width=400",
    description: "Perfect family home with large backyard and modern amenities.",
    features: ["Garden", "Garage", "Fireplace", "Updated Kitchen"],
    dateAdded: "2024-01-10",
  },
  {
    id: "3",
    title: "Luxury Waterfront Condo",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "condo",
    location: "Waterfront, Seattle",
    image: "/placeholder.svg?height=300&width=400",
    description: "Stunning waterfront condo with panoramic views and premium finishes.",
    features: ["Water View", "Balcony", "Concierge", "Spa"],
    dateAdded: "2024-01-20",
  },
  {
    id: "4",
    title: "Cozy Studio Apartment",
    price: 280000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    type: "apartment",
    location: "Capitol Hill, Seattle",
    image: "/placeholder.svg?height=300&width=400",
    description: "Charming studio in trendy neighborhood with great walkability.",
    features: ["Walk Score 95", "Pet Friendly", "Laundry"],
    dateAdded: "2024-01-12",
  },
  {
    id: "5",
    title: "Executive Townhouse",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2000,
    type: "townhouse",
    location: "Redmond, WA",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern townhouse with attached garage and private patio.",
    features: ["Garage", "Patio", "Storage", "HOA"],
    dateAdded: "2024-01-08",
  },
  {
    id: "6",
    title: "Historic Brick House",
    price: 850000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3200,
    type: "house",
    location: "Queen Anne, Seattle",
    image: "/placeholder.svg?height=300&width=400",
    description: "Beautiful historic home with original details and modern updates.",
    features: ["Historic", "Hardwood Floors", "Crown Molding", "Garden"],
    dateAdded: "2024-01-05",
  },
  {
    id: "7",
    title: "New Construction Condo",
    price: 520000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: "condo",
    location: "Bothell, WA",
    image: "/placeholder.svg?height=300&width=400",
    description: "Brand new condo with modern amenities and energy-efficient features.",
    features: ["New Construction", "Energy Efficient", "Parking", "Storage"],
    dateAdded: "2024-01-18",
  },
  {
    id: "8",
    title: "Penthouse Suite",
    price: 1800000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "apartment",
    location: "Belltown, Seattle",
    image: "/placeholder.svg?height=300&width=400",
    description: "Luxury penthouse with 360-degree city and water views.",
    features: ["Penthouse", "360 Views", "Private Elevator", "Rooftop Access"],
    dateAdded: "2024-01-22",
  },
]
