import type { PageType } from "@/components/navigation/types";
import {
  HeroSection,
  MarketStats,
  LogoCloud,
  ServiceAreas,
  OurStorySection,
  IconsModule,
  BuyersGuide,
  TestimonialsSection,
  ResourcesSection,
  QuickContactSection,
  FAQSection,
  Footer
} from "./index";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function Home({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
          {/* DO NOT render <Navigation /> here */}
          <HeroSection onNavigate={onNavigate} />
          <LogoCloud />
          <ServiceAreas />
          <OurStorySection onNavigate={onNavigate} />
          <IconsModule />
          <BuyersGuide onNavigate={onNavigate} />
          <TestimonialsSection />
          <ResourcesSection onNavigate={onNavigate} />
          <QuickContactSection onNavigate={onNavigate} />
          <FAQSection />
          <Footer onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
