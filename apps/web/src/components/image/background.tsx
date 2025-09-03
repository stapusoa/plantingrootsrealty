import React from "react"
import clsx from "clsx"
import { bgStyles } from "./styles"
import type { BackgroundImageProps } from "./types"

export const BGImage: React.FC<BackgroundImageProps> = ({
  src,
  alt = "",
  className,
  breakpoint = "sm",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(bgStyles[breakpoint], className)}
      {...props}
    />
  )
}