"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/card/cardNew"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"

const categories = ["All", "Destination", "Culinary", "Lifestyle", "Tips & Hacks"]

const blogPosts = [
  {
    id: 1,
    title: "Hidden Gems of the Swiss Alps",
    excerpt: "Discover breathtaking mountain trails and charming villages tucked away in the heart of Switzerland.",
    category: "Destination",
    image: "/swiss-alps-landscape.png",
    readTime: "8 min read",
    date: "Jan 20, 2024",
  },
  {
    id: 2,
    title: "Essential Packing Tips for Digital Nomads",
    excerpt: "Master the art of minimalist packing while ensuring you have everything needed for remote work.",
    category: "Tips & Hacks",
    image: "/travel-packing-essentials-and-laptop.jpg",
    readTime: "6 min read",
    date: "Jan 18, 2024",
  },
  {
    id: 3,
    title: "Street Food Adventures in Bangkok",
    excerpt: "Navigate the vibrant street food scene and discover authentic flavors in Thailand's bustling capital.",
    category: "Culinary",
    image: "/bangkok-street-food-market-colorful.jpg",
    readTime: "12 min read",
    date: "Jan 15, 2024",
  },
  {
    id: 4,
    title: "Sustainable Travel: Leave Only Footprints",
    excerpt: "Learn how to minimize your environmental impact while exploring the world responsibly.",
    category: "Lifestyle",
    image: "/eco-friendly-travel-sustainable-tourism.jpg",
    readTime: "10 min read",
    date: "Jan 12, 2024",
  },
  {
    id: 5,
    title: "Photography Guide: Capturing Golden Hour",
    excerpt: "Master the techniques for stunning travel photography during the most magical time of day.",
    category: "Tips & Hacks",
    image: "/golden-hour-landscape-photography.jpg",
    readTime: "7 min read",
    date: "Jan 10, 2024",
  },
  {
    id: 6,
    title: "Island Hopping in the Maldives",
    excerpt: "Experience paradise as we guide you through the crystal-clear waters and pristine beaches.",
    category: "Destination",
    image: "/maldives-tropical-islands-crystal-clear-water.jpg",
    readTime: "9 min read",
    date: "Jan 8, 2024",
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Blog Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Here, we share travel tips, destination guides, and stories that inspire your next adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "filled" : "ghost"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span>Sort by:</span>
            <Button variant="ghost" size="sm" className="text-foreground">
              Newest
            </Button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge variant="filled" color="primary" className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
