import { Button } from "@/components/button/button";
import { BackgroundImages } from "@/lib/layout/BG";
import { Overlay } from "@/lib/layout/Overlay"; // Adjust path as needed

export type HeroSectionProps = {
  title: string;
  subheader: string;
  buttonText: string;
  onButtonClick: () => void;
  gradientOverlay?: string;
  images: {
    imageSM: string;
    imageMD: string;
    imageLG: string;
  };
};

export function HeroSection({
  title,
  subheader,
  buttonText,
  onButtonClick,
  images,
}: HeroSectionProps) {
  return (
    <div className="h-200 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-60 h-220 items-start justify-start max-w-inherit overflow-clip p-0 relative w-full">
        {/* Background with Gradient */}
        <div className="h-200 relative shrink-0 w-full">
          <div className="absolute inset-0">
            <BackgroundImages
              imageSM={images.imageSM}
              imageMD={images.imageMD}
              imageLG={images.imageLG}
            />
            {/* Gradient Overlay */}
            <Overlay />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content Center */}
            <div
              className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px] max-w-[90vw]"
              style={{ top: "calc(50% + 0.47998px)" }}
            >
              <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center p-0 relative w-full">
                <div className="max-w-[1140px] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-center max-w-inherit p-0 relative w-full">
                    <div className="flex flex-col font-['Merriweather'] text-6xl md:text-5xl sm:text-4xl justify-center not-italic relative shrink-0 text-white text-center w-full animate-fade-in">
                      <h1 className="block leading-tight drop-shadow-2xl">{title}</h1>
                    </div>
                  </div>
                </div>
                <div className="max-w-[600px] text-center mb-8">
                  <p className="font-['Karla:Regular',_sans-serif] text-white/90 text-[20px] leading-relaxed animate-fade-in">
                    {subheader}              </p>
                </div>
                <div className="max-w-[1140px] relative shrink-0 w-full animate-fade-in-up">
                  <div className="box-border content-stretch flex flex-col items-center justify-center max-w-inherit p-0 relative w-full">
                    <Button
                      size="lg"
                      onClick={onButtonClick}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}