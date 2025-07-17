import React from "react"
import type { CardImagePosition } from "@/components/card/constants"

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
