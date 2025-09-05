import { Card, CardContent } from "@/components/card/card"
import { Button } from "@/components/button"
import type { PageType } from "@/components/navigation/types"

export function ResourcesSection({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const resources = [
    {
      title: "Mortgage Calculator",
      description: "Calculate your monthly payments and see what you can afford.",
      icon: "🧮",
      link: "#"
    },
    {
      title: "Market Reports",
      description: "Stay informed with the latest Utah County market data.",
      icon: "📊",
      link: "#"
    },
    {
      title: "School District Info",
      description: "Find information about local schools and districts.",
      icon: "🏫",
      link: "#"
    },
    {
      title: "Moving Checklist",
      description: "Complete checklist to make your move stress-free.",
      icon: "✅",
      link: "#"
    },
    {
      title: "Home Maintenance Tips",
      description: "Keep your home in top condition with expert advice.",
      icon: "🔧",
      link: "#"
    },
    {
      title: "Investment Analysis",
      description: "Tools to evaluate real estate investment opportunities.",
      icon: "💹",
      link: "#"
    }
  ]

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16">
              <h2 className="font-['Merriweather:Bold',_sans-serif] text-[#1a1a1a] text-[42px] font-bold mb-6">
                Helpful Resources
              </h2>
              <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[18px] max-w-2xl mx-auto leading-relaxed">
                Tools and information to help you make informed real estate decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className={`border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-1 cursor-pointer group`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  onClick={() => onNavigate('contact')}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      <h3 className="font-['Merriweather:Bold',_sans-serif] text-[#45a9a7] text-[18px] font-semibold group-hover:text-[#3a8e8c] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="font-['Karla:Regular',_sans-serif] text-[#606060] text-[14px] leading-relaxed">
                        {resource.description}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outlined"
                        className="border-[#5e4684] text-[#5e4684] hover:bg-[#5e4684] hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
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