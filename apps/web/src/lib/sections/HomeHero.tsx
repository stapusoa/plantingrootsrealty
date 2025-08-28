import type { PageType } from "@/components/navigation/types";
import { Button } from "@/components/button/button";
import { BackgroundImages } from "@/lib/layout/BG";
import imageSM from '@/assets/bgHomeHero-sm.webp';
import imageMD from '@/assets/bgHomeHero-md.webp';
import imageLG from '@/assets/bgHomeHero-lg.webp';
import { WaveSeparator } from "@/components/separator/waveSeparator";

const images = { imageSM, imageMD, imageLG };

function Overlay() {
  return (
    <div className="overflow-clip relative w-full">
      <WaveSeparator />
    </div>
  );
}


export function HeroSection({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="h-210 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-60 h-220 items-start justify-start max-w-inherit overflow-clip p-0 relative w-full">
        {/* Background with Gradient */}
        <div className="h-[800px] relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            {/* Background Image */}
            <BackgroundImages imageSM={images.imageSM}
              imageMD={images.imageMD}
              imageLG={images.imageLG} />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5e4684]/80 via-[#7a5ba8]/70 to-[#45a9a7]/60" />
            {/* Additional Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                <div className="flex flex-col justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center px-0 py-2.5 relative size-full">
                    {/* Wave Separator */}
                    <div className="absolute bottom-[-1px] flex items-center justify-center left-[-40px] right-[-40px] top-[772px]">
                      <div className="flex-none h-[128.13px] w-full">
                        <Overlay />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div
          className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px] max-w-[90vw]"
          style={{ top: "calc(50% + 0.47998px)" }}
        >
          <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center p-0 relative w-full">
            <div className="max-w-[1140px] relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-center max-w-inherit p-0 relative w-full">
                <div className="flex flex-col font-['Merriweather'] text-6xl md:text-5xl sm:text-4xl justify-center not-italic relative shrink-0 text-white text-center w-full animate-fade-in">
                  <h1 className="block leading-tight drop-shadow-2xl">Deep Roots, Lasting Homes</h1>
                </div>
              </div>
            </div>
            <div className="max-w-[600px] text-center mb-8">
              <p className="font-['Karla:Regular',_sans-serif] text-white/90 text-[20px] leading-relaxed animate-fade-in">
                Your trusted Utah County real estate expert with nearly 6 years of experience helping families find their perfect home.
              </p>
            </div>
            <div className="max-w-[1140px] relative shrink-0 w-full animate-fade-in-up">
              <div className="box-border content-stretch flex flex-col items-center justify-center max-w-inherit p-0 relative w-full">
                <Button
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  FIND YOUR HOME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}