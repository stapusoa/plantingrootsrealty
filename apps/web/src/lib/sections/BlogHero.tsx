import { Badge } from "@/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"

export function BlogHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dramatic-desert-landscape-with-rock-formations-at-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-4xl">
          <Badge variant="filled" color="primary" className="mb-4 bg-slate-700/80 text-white border-0">
            Destination
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
            Exploring the Wonders of Hiking
          </h1>

          <p className="text-lg text-white/90 mb-6 max-w-2xl text-pretty">
            An iconic landmarks, this post unveils the secrets that make this destination a traveler's paradise.
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/professional-headshot.png" />
                <AvatarFallback>TR</AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">Theodore Reginald</span>
            </div>

            <div className="text-white/80 text-sm">24 Jan 2024 • 10 mins read</div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
