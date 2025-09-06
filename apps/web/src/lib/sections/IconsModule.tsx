import { Card, CardContent } from "@/components/card/card"

export function IconsModule() {
  const features = [
    {
      title: "Market Analysis",
      description: "Get detailed insights into local market trends and property values to make informed decisions."
    },
    {
      title: "Professional Network", 
      description: "Access our trusted network of lenders, inspectors, and contractors to streamline your process."
    },
    {
      title: "Personalized Service",
      description: "Receive tailored guidance and support throughout your entire real estate journey."
    },
    {
      title: "Transaction Management",
      description: "Expert handling of all paperwork and processes to ensure smooth transactions."
    }
  ]

  return (
    <div className="relative shrink-0 w-full bg-linear-to-br from-white to-gray-50">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-20 relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16">
              <h2 className="font-['Merriweather:Bold',sans-serif] text-[#1a1a1a] text-[42px] font-bold mb-6">
                Why Choose Planting Roots Realty
              </h2>
              <p className="font-['Karla:Regular',sans-serif] text-[#606060] text-[18px] max-w-2xl mx-auto leading-relaxed">
                Experience the difference of working with a dedicated professional
              </p>
            </div>
            <div className="max-w-inherit relative size-full">
              <div className="[flex-flow:wrap] box-border content-start flex gap-8 items-start justify-start max-w-inherit pb-0 pt-10 px-0 relative w-full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className={`basis-0 grow min-h-px min-w-[265px] relative shrink-0 group hover:shadow-xl transition-all duration-500 rounded-2xl border-l-4 border-l-grape-800 bg-white/70 backdrop-blur-sm animate-fade-in-up hover:-translate-y-2`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">
                        <div className="relative shrink-0 size-8 transform group-hover:scale-125 transition-all duration-500">
                          
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-['Merriweather:Regular',sans-serif] text-teal-400 text-[20px] group-hover:text-[#3a8e8c] transition-colors duration-300 font-semibold">
                            {feature.title}
                          </h3>
                          <p className="font-['Karla:Regular',sans-serif] text-[#606060] text-[16px] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}