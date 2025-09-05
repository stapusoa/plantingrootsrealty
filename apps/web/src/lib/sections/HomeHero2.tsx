import type { PageType } from "@/components/navigation/types"
import {Hero} from '@/lib/layout/Hero2'
import { WaveSeparator } from "@/components/separator/waveSeparator"

import imageSM from "@/assets/bgHomeHero-sm.webp"
import imageMD from "@/assets/bgHomeHero-md.webp"
import imageLG from "@/assets/bgHomeHero-lg.webp"

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