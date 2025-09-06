

export function MarketStats() {
  const stats = [
    { number: "150+", label: "Homes Sold", icon: "🏠" },
    { number: "$85M+", label: "Total Sales Volume", icon: "💰" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "6", label: "Years Experience", icon: "📈" }
  ]

  return (
    <div className="relative shrink-0 w-full bg-linear-to-r from-grape-800 to-[#7a5ba8]">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[60px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="font-['Merriweather:Bold',sans-serif] text-[48px] font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="font-['Karla:Regular',sans-serif] text-white/90 text-[16px] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}