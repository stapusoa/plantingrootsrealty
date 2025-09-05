import { Card, CardContent } from "@/components/card/card"
import { ImageWithFallback } from "@/assets/ImageWithFallback"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      location: "Provo, UT",
      text: "Brittni made our first home buying experience smooth and stress-free. Her knowledge of the Utah County market and dedication to finding us the perfect home was outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c5d0c4e0?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      location: "Lehi, UT", 
      text: "As an investor, I needed an agent who understood market trends. Brittni's insights helped me make profitable decisions and her network of contractors saved me time and money.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Orem, UT",
      text: "Selling our home with Brittni was effortless. Her marketing strategy and staging advice helped us sell above asking price in just two weeks!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "The Thompson Family",
      location: "Spanish Fork, UT",
      text: "Brittni went above and beyond to help us find a home that fit our growing family. Her patience and expertise made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ]

  return (
    <div className="relative shrink-0 w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16">
              <h2 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[42px] font-bold mb-6">
                What My Clients Say
              </h2>
              <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[18px] max-w-2xl mx-auto leading-relaxed">
                Real experiences from families I've helped achieve their real estate goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex gap-4 mb-6">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[18px] font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[14px]">
                          {testimonial.location}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400">⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[16px] leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}