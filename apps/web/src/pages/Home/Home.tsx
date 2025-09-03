import { useState } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import type { PageType } from "@/components/navigation/types";
import {
  HomeHero,
  LogoCloud,
  ServiceAreas,
  OurStorySection,
  IconsModule,
  TestimonialsSection,
  ResourcesSection,
  QuickContactSection,
} from "@/lib/sections/index";
import {
  BuyersGuide,
  FAQSection,
} from "@/pages/index";
import { Footer } from "@/components/navigation/footer";
import { OurStoryOld } from "@/pages/About/OurStoryOld";
import { ContactFormOld } from "@/pages/Contact/ContactFormOld"
import { TestimonialsOld } from "@/pages/Testimonials/TestimonialsOld";
interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function Home({ onNavigate }: HomePageProps) {
  const { enableHome001 = false } = useFlags();
  const [override, setOverride] = useState(false);

  const showNewHome = override || enableHome001;

  return (
    <div className="bg-white relative size-full">
      {/* Dev-only toggle button */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => setOverride(!override)}
          className="fixed top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded z-50"
          aria-label="Toggle home layout"
        >
          {override ? 'Showing: New Home' : 'Showing: Old Home'}
        </button>
      )}

      {showNewHome ? (
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
            {/* DO NOT render <Navigation /> here */}
            <HomeHero onNavigate={onNavigate} />
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
      ) : (
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
            <HomeHero onNavigate={onNavigate} />
            <OurStoryOld onNavigate={onNavigate} />
            <ContactFormOld />
            <TestimonialsOld />
          </div>
        </div>
      )}
    </div>
  );
}
