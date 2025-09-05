export type OverlayVariant = "gradient" | "dark" | "light" | "pattern" | "home" | "none"

export const BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
}

export const HERO_VARIANTS = {
  fullscreen: "h-screen relative w-full overflow-hidden",
  section: "relative w-full overflow-hidden",
}