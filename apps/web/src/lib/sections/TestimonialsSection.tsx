import { Card, CardContent } from "@/components/card/card"
import { Image } from "@/components/image/image"

const img1 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsRochaIvan.webp`
const img2 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsBainterBaxter.webp`
const img3 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsFunkJessica.webp`
const img4 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsNielsenTrev.webp`
const img5 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsRigbyTiffany.webp`
const img6 = `${import.meta.env.VITE_API_URL}/assets/images/imgReviewsHerbertDerren.webp`

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ivan De Souza Rocha",
      location: "Salt Lake City, UT",
      text: "I couldn't be happier with how Brittany and her team treated me and my property when it came time to sell. She made me as much as a priority as she would anyone. And it saved me so much time having her taking care of the whole selling process. I would definitely recommend her!",
      rating: 5,
      image: img1
    },
    {
      name: "Baxter Bainter",
      location: "Spanish Fork, UT",
      text: "It was phenomenal working with Brittany as our agent. She was definitely on our side and was looking out for our best interests. Brittany walked us through the process as an expert and had the answer to all our questions. Whenever we are ready for our next move, Brittany will be our definite choice!!",
      rating: 5,
      image: img2
    },
    {
      name: "Jessica Funk",
      location: "Clawson, UT",
      text: "We bought a house and had fun throughout the whole process! BrittanyH is the coolest and knows her stuff! Thanks Brittany",
      rating: 5,
      image: img3
    },
    {
      name: "Trev Nielsen",
      location: "Salt Lake City, UT",
      text: "Brittany did all in her power to get us into a place and make everything perfect. Cannot recommend her enough!",
      rating: 5,
      image: img4
    },
    {
      name: "Tiffany Rigby",
      location: "Payson, UT",
      text: "Brittany is the best! She listens to you, she respects decisions, if you give her a list of things you like or dislike she will do her absolute best to make sure you are happy! I would 1000% recommend!!",
      rating: 5,
      image: img5
    },
    {
      name: "Derren Herbert",
      location: "Provo, UT",
      text: "Brittany is one of a kind. She really care about her clients. She puts her heart and soul into making buying and seeking your home a great experience.",
      rating: 5,
      image: img6
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
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full object-cover overflow-hidden"
                        width={64}
                        height={64}
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