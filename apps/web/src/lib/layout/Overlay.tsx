import React from "react"
import clsx from "clsx"
import { overlayBaseClass, overlayHomeClass, overlayDarkClass } from "@/lib/styles"
import type { OverlayProps } from "@/lib/types"

export const Overlay: React.FC<OverlayProps> = ({ variant = "base", className }) => {
  const overlayClass = clsx(
    variant === "base" && overlayBaseClass,
    variant === "home" && overlayHomeClass,
    variant === "dark" && overlayDarkClass,
    className
  )

  return <div className={overlayClass} />
}