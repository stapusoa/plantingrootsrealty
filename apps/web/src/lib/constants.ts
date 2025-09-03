import { overlayBaseClass, overlayHomeClass, overlayDarkClass } from "./styles"

export const DEFAULT_BACKGROUND_ALT = "Background image"

export const DEFAULT_OVERLAY_ALT = "Background overlay"

export const OVERLAY_VARIANTS = {
  base: overlayBaseClass,
  home: overlayHomeClass,
  dark: overlayDarkClass,
} as const
