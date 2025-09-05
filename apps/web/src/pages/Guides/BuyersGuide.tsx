import { Card, CardContent } from "@/components/card/card"
import { Button } from "@/components/button"
import type { PageType } from "@/components/navigation/types"

export function BuyersGuide({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const steps = [
    {
      step: "01",
      title: "Get Pre-Approved",
      description: "Understand your budget and get pre-approved for a mortgage to strengthen your offers.",
      icon: "💳"
    },
    {
      step: "02", 
      title: "Find Your Agent",
      description: "Partner with an experienced agent who understands the local market and your needs.",
      icon: "🤝"
    },
    {
      step: "03",
      title: "Search & Tour Homes",
      description: "Explore properties that match your criteria and visit homes to find the perfect fit.",
      icon: "🏠"
    },
    {
      step: "04",
      title: "Make an Offer",
      description: "Submit a competitive offer with your agent's guidance to secure your dream home.",
      icon: "📋"
    },
    {
      step: "05",
      title: "Home Inspection",
      description: "Conduct a thorough inspection to ensure the property is in good condition.",
      icon: "🔍"
    },
    {
      step: "06",
      title: "Close on Your Home",
      description: "Complete the final paperwork and get the keys to your new home!",
      icon: "🔑"
    }
  ]

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16">
              <h2 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[42px] font-bold mb-6">
                Home Buying Guide
              </h2>
              <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[18px] max-w-2xl mx-auto leading-relaxed">
                Your step-by-step guide to purchasing your dream home in Utah County
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((stepItem, index) => (
                <Card
                  key={index}
                  className={`border border-gray-200 hover:shadow-xl transition-all duration-500 rounded-2xl animate-fade-in-up hover:-translate-y-2 group`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="text-5xl">{stepItem.icon}</div>
                      <div className="text-[#45a9a7] text-[32px] font-bold font-['Merriweather:Bold',_sans-serif]">
                        {stepItem.step}
                      </div>
                      <h3 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[22px] font-semibold">
                        {stepItem.title}
                      </h3>
                      <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[16px] leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] hover:from-[#4a3570] hover:to-[#65487c] text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Start Your Home Buying Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}