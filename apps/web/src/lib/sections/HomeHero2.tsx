import type { PageType } from "@/components/navigation/types"
import {Hero} from '@/lib/layout/Hero2'
import { WaveSeparator } from "@/components/separator/waveSeparator"

const imageSM = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-sm.webp`
const imageMD = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-md.webp`
const imageLG = `${import.meta.env.VITE_API_URL}/assets/images/bgHomeHero-lg.webp`


export function HomeHero2({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <Hero
      variant="fullscreen"
      fullHeight="screen"
      alignment="center"
      layout="default"
      parallax
      bg={{
        fixed: true,
        images: {
          sm: imageSM,
          md: imageMD,
          lg: imageLG,
        },
        alt: "Modern home with large windows",
      }}
      overlays={["home", "dark"]}
      content={{
        title: "Deep Roots, Lasting Homes",
        subheader: "Your trusted Utah County real estate expert with nearly 6 years of experience helping families find their perfect home.",
        buttons: [
          {
            text: "Find Your Home",
            onClick: () => onNavigate("listings"),
          },
          {
            text: "Contact Me",
            onClick: () => onNavigate("contact"),
          },
        ],
       
      }}
    >
      <WaveSeparator />
    </Hero>
  )
}