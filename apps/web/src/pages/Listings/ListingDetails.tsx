"use client"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { sanity } from "@/lib/sanityClient"
import { Badge } from "@/components/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs"
import { ScheduleTour } from "@/components/listings/ScheduleTour"
import { MortgageCalculator } from "@/components/listings/MortgageCalculator"
import { AgentCard } from "@/components/listings/AgentCard"
import { Link } from "react-router-dom"
import { Button } from "@/components/button"
import { ContactForm } from "@/components/listings/ContactForm"
import { Card, CardContent, CardImage } from "@/components/card/cardNew"
import {
  Bed,
  Bath,
  Car,
  Square,
  MapPin,
  Heart,
  Share2,
  Dumbbell,
  Trees,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Home,
  Building,
  Thermometer,
  Zap,
  Droplets,
  Shield,
} from "lucide-react"

const query = `*[_type == "property" && _id == $id][0]{
  _id,
  title,
  description,
  address,
  price,
  bedrooms,
  bathrooms,
  sqft,
  garage,
  dateAdded,
  type,
  features,
  images[] {
    asset-> {
      url
    }
  }
}`

export default function ListingDetails() {
  const { id } = useParams()
  const [property, setProperty] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)

  useEffect(() => {
  console.log("ListingDetails id param:", id)
  if (id && sanity) {
    sanity.fetch(query, { id })
      .then((result) => {
        console.log("Fetched property from Sanity:", result)
        setProperty(result)
      })
      .catch((error) => {
        console.error("Error fetching property:", error)
      })
  }
}, [id])

  if (property === null) return <div>Loading...</div>
  if (!property) return <div className="p-8 text-center text-red-600">Property not found.</div>

  // Use images from Sanity or fallback placeholders
  const images =
    property?.images?.length > 0
      ? property.images
        .map((img: any) => img.asset?.url)
        .filter((url: string | undefined): url is string => !!url)
      : []

  console.log("Parsed image URLs:", images)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen mt-50 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/listings">Listings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{property.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
              <div className="flex items-center gap-2">
                <Button variant="outlined" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outlined" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <CardImage
                      src={images[currentImageIndex] || "/placeholder.svg?height=600&width=800"}
                      alt={`Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <Button
                      variant="filled"
                      color="contrast"
                      icon={true}
                      size="lg"
                      className="absolute shadow-lg left-4 top-1/2 -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="filled"
                      color="contrast"
                      icon={true}
                      size="lg"
                      className="absolute shadow-lg right-4 top-1/2 -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="filled"
                      color="contrast"
                      size="lg"
                      className="absolute text-black bottom-4 right-4"
                      onClick={() => setShowAllImages(!showAllImages)}
                    >
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      {images.length} Photos
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {images.slice(0, 4).map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-md border-2 ${currentImageIndex === index ? "border-primary" : "border-transparent"
                        }`}
                    >
                      <CardImage
                        src={image || "/placeholder.svg?height=600&width=800"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Overview */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{property.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      ${property.price?.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {property.sqft
                        ? `$${Math.round(property.price / property.sqft).toLocaleString()}/sq ft`
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.bedrooms}</span>
                    <span className="text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.bathrooms}</span>
                    <span className="text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.sqft}</span>
                    <span className="text-muted-foreground">sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.garage ?? 2}</span>
                    <span className="text-muted-foreground">Garage</span>
                  </div>
                </div>

                {/* Features badges */}
                <div className="flex gap-2 flex-wrap">
                  {(property.features ?? []).map((feat: string, idx: number) => (
                    <Badge key={idx} variant="filled" color="neutral">
                      {feat}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Description</h2>
                <div className="prose max-w-none">
                  <p>{property.description}</p>
                </div>
              </div>

              {/* Features & Amenities */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Features & Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Interior Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-muted-foreground" />
                        Central Air Conditioning
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        Smart Home System
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        High Ceilings
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        Security System
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Exterior Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-muted-foreground" />
                        Swimming Pool
                      </li>
                      <li className="flex items-center gap-2">
                        <Trees className="h-4 w-4 text-muted-foreground" />
                        Landscaped Garden
                      </li>
                      <li className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        2-Car Garage
                      </li>
                      <li className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        Outdoor Patio
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Property Details</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">

                          <span className="text-muted-foreground">Property Type:</span>
                          <span className="font-medium">Single Family Home</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Year Built:</span>
                          <span className="font-medium">2019</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lot Size:</span>
                          <span className="font-medium">0.75 acres</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">HOA Fees:</span>
                          <span className="font-medium">$450/month</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">MLS ID:</span>
                          <span className="font-medium">BH2024001</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Property Tax:</span>
                          <span className="font-medium">$28,500/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Days on Market:</span>
                          <span className="font-medium">12 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <span className="font-medium text-green-600">Active</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Neighborhood */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Neighborhood</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <GraduationCap className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold">Schools</h3>
                      <p className="text-sm text-muted-foreground">Excellent rated schools nearby</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold">Shopping</h3>
                      <p className="text-sm text-muted-foreground">Rodeo Drive 5 min away</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Stethoscope className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold">Healthcare</h3>
                      <p className="text-sm text-muted-foreground">Top medical facilities</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Dumbbell className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold">Recreation</h3>
                      <p className="text-sm text-muted-foreground">Parks and fitness centers</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Similar Properties */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Similar Properties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <CardImage
                          src="/placeholder.svg?height=300&width=400"
                          alt={`Similar property ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">Luxury Modern Home</h3>
                          <span className="text-lg font-bold text-primary">$2,650,000</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">456 Oak Street, Beverly Hills, CA</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span>3 bed</span>
                          <span>2.5 bath</span>
                          <span>2,650 sq ft</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              < AgentCard />
              < ContactForm />
              {/* Schedule Tour */}
              <ScheduleTour />
              {/* Mortgage Calculator */}
              <MortgageCalculator />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
