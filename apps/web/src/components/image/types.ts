import React from "react"

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
  loading?: "lazy" | "eager"
  skeletonClassName?: string
}
