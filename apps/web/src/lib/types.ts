import type { OVERLAY_VARIANTS } from "@/lib/constants"

export interface BGProps {
  imageSM: string
  imageMD: string
  imageLG: string
  alt?: string
  className?: string
}

export interface HeroSectionProps {
  title: string
  subheader: string
  buttonText: string
  onButtonClick: () => void
  images: {
    imageSM: string
    imageMD: string
    imageLG: string
  }
  overlays?: OverlayVariant[];
  children?: React.ReactNode
}

export type OverlayVariant = keyof typeof OVERLAY_VARIANTS

export interface OverlayProps {
  variant?: OverlayVariant
  className?: string
}