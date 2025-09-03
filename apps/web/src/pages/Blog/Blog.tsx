import { BlogHero } from "@/lib/sections/BlogHero"
import { BlogGrid } from "@/pages/Blog/BlogGrid"

export function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
