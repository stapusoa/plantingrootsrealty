import type { PageType } from "@/components/navigation/types"
import { HeroSection } from "@/lib/layout/Hero"
import { WaveSeparator } from "@/components/separator/waveSeparator"

const imageSM = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-sm.webp`
const imageMD = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-md.webp`
const imageLG = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-lg.webp`

const images = { imageSM, imageMD, imageLG }

export function HomeHero({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <HeroSection
      title="Deep Roots, Lasting Homes"
      subheader="Your trusted Utah County real estate expert with nearly 6 years of experience helping families find their perfect home."
      buttonText="FIND YOUR HOME"
      onButtonClick={() => onNavigate("contact")}
      images={images}
      overlays={["home", "dark"]}  // ✅ pass overlays here
    >
        <WaveSeparator />
    </HeroSection>
  )
}