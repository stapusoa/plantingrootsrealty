import React from "react"
import type { CardImagePosition } from "@/components/card/constants"
import type { ImgHTMLAttributes } from "react"

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | { url?: string; imagePosition?: CardImagePosition }
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
  loading?: "lazy" | "eager"
  skeletonClassName?: string
}

export interface BackgroundImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string
  alt?: string
  className?: string
  breakpoint?: "sm" | "md" | "lg"
}
