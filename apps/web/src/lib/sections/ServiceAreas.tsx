import { Card, CardContent } from "@/components/card/card"

export function ServiceAreas() {
  const areas = [
    { city: "Provo", description: "Historic downtown and university area" },
    { city: "Orem", description: "Family-friendly communities and schools" },
    { city: "Lehi", description: "Tech hub with modern developments" },
    { city: "Spanish Fork", description: "Small-town charm with growth potential" },
    { city: "American Fork", description: "Established neighborhoods and parks" },
    { city: "Alpine", description: "Luxury homes with mountain views" },
    { city: "Springville", description: "Art community with historic charm" },
    { city: "Payson", description: "Growing family communities" }
  ]

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16">
              <h2 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[42px] font-bold mb-6">
                Service Areas
              </h2>
              <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[18px] max-w-2xl mx-auto leading-relaxed">
                Proudly serving Utah County and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <Card
                  key={index}
                  className={`text-center border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-1`}
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-['Merriweather:Bold',_sans-serif] text-[#45a9a7] text-[20px] font-semibold mb-2">
                      {area.city}
                    </h3>
                    <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[14px] leading-relaxed">
                      {area.description}
                    </p>
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