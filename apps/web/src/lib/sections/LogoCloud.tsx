import imgLogo from "@/assets/Logo 1.png"
import imgLogo1 from "@/assets/Logo 2.png"
import imgLogo2 from "@/assets/Logo 3.png"
import imgLogo3 from "@/assets/Logo 4.png"
import imgLogo4 from "@/assets/Logo 5.png"
import imgLogo5 from "@/assets/Logo 6.png"

export function LogoCloud() {
  return (
    <div className="bg-linear-to-b from-[#ffffff] to-[#f8f9fa] relative shrink-0 w-full">
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-start max-w-inherit px-0 py-[60px] relative w-full">
          <div className="font-['Karla:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#6f6f6f] text-[16px] text-left text-nowrap tracking-[-0.075px] animate-fade-in">
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">Trusted by:</p>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="[flex-flow:wrap] box-border content-center flex gap-10 items-center justify-center p-0 relative w-full">
              {[imgLogo, imgLogo1, imgLogo2, imgLogo3, imgLogo4, imgLogo5].map((logo, index) => (
                <div key={index} className={`h-[84px] relative shrink-0 w-[154px] transform hover:scale-110 transition-transform duration-300 animate-fade-in`} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <div className="flex flex-col justify-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
                      <div
                        className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 hover:opacity-80 shrink-0 w-full transition-all duration-300"
                        style={{ backgroundImage: `url('${logo}')` }}
                      />
                    </div>
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